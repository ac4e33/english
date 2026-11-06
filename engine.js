// Pure logic: adaptive scoring, level estimates, and study-plan decisions. No DOM here.
(function (root) {
  var LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  var SKILLS = ['grammar', 'vocabulary', 'reading', 'listening', 'writing'];
  var ITEMS_PER_SKILL = 5;

  // Ability grid. theta 1 means "secure at A1", 2 "secure at A2", and so on. Below 1 is pre-A1.
  var GRID = [];
  for (var t = 0; t <= 6.75; t += 0.25) GRID.push(t);

  function logistic(x) { return 1 / (1 + Math.exp(-x)); }

  // Chance of a correct answer for ability theta on an item of level d.
  // A learner at theta === d succeeds roughly 3 times out of 4.
  function pCorrect(theta, d, guess) {
    return guess + (1 - guess) * logistic(1.9 * (theta - d) + 1.1);
  }

  function normalise(p) {
    var s = p.reduce(function (a, b) { return a + b; }, 0);
    return p.map(function (x) { return x / s; });
  }

  function normalPrior(mean, sd) {
    return normalise(GRID.map(function (x) { return Math.exp(-0.5 * Math.pow((x - mean) / sd, 2)); }));
  }

  function guessRate(item) {
    if (item.type === 'mcq') return 1 / item.options.length;
    return 0.06; // ordering, error-spotting: hard to get right by luck
  }

  function update(p, level, correct, skipped, guess) {
    return normalise(p.map(function (v, i) {
      var pc = pCorrect(GRID[i], level, skipped ? 0.01 : guess);
      return v * (correct ? pc : 1 - pc);
    }));
  }

  function stats(p) {
    var mean = 0, v = 0;
    p.forEach(function (w, i) { mean += w * GRID[i]; });
    p.forEach(function (w, i) { v += w * Math.pow(GRID[i] - mean, 2); });
    return { mean: mean, sd: Math.sqrt(v) };
  }

  // responses: [{ level, skill, correct, skipped, guess }]; ratings: optional [{ skill, level }] from marked writing
  function estimate(responses, startLevel, ratings) {
    var prior = normalPrior(startLevel, 1.6);
    var overall = prior;
    responses.forEach(function (r) { overall = update(overall, r.level, r.correct, r.skipped, r.guess); });
    (ratings || []).forEach(function (r) {
      overall = normalise(overall.map(function (v, i) {
        return v * Math.exp(-0.5 * Math.pow((GRID[i] - r.level) / 1.2, 2));
      }));
    });
    var o = stats(overall);
    var skills = {};
    SKILLS.forEach(function (s) {
      var own = responses.filter(function (r) { return r.skill === s; });
      if (!own.length) { skills[s] = null; return; }
      var p = normalPrior(o.mean, 1.7);
      own.forEach(function (r) { p = update(p, r.level, r.correct, r.skipped, r.guess); });
      (ratings || []).forEach(function (r) {
        if (r.skill !== s) return;
        p = normalise(p.map(function (v, i) {
          return v * Math.exp(-0.5 * Math.pow((GRID[i] - r.level) / 0.8, 2));
        }));
      });
      skills[s] = stats(p);
    });
    return { overall: o, skills: skills };
  }

  function levelIndex(theta) { return Math.max(0, Math.min(6, Math.floor(theta + 0.25))); }
  function levelName(theta) {
    var i = levelIndex(theta);
    return i === 0 ? 'Pre-A1' : LEVELS[i - 1];
  }
  function levelRange(est) {
    var lo = levelName(est.mean - 0.8 * est.sd);
    var hi = levelName(est.mean + 0.8 * est.sd);
    return lo === hi ? lo : lo + ' to ' + hi;
  }

  // Next item: rotate through the skills, choosing an unseen item closest to the current estimate.
  // Items already used in an earlier test are avoided when possible, so a retest is a fresh test.
  function nextItem(bank, responses, startLevel, usedBefore, skipSkills, rng) {
    rng = rng || Math.random;
    var active = SKILLS.filter(function (s) { return !(skipSkills || []).includes(s); });
    var total = active.length * ITEMS_PER_SKILL;
    var asked = responses.filter(function (r) { return active.includes(r.skill); }).length;
    if (asked >= total) return null;
    var skill = active[asked % active.length];
    var est = estimate(responses, startLevel);
    var target = est.skills[skill] ? est.skills[skill].mean : est.overall.mean;
    var seen = {};
    responses.forEach(function (r) { seen[r.id] = true; });
    var pool = bank.filter(function (i) { return i.skill === skill && !seen[i.id]; });
    if (!pool.length) return null;
    var used = usedBefore || [];
    var best = null, bestScore = Infinity;
    pool.forEach(function (i) {
      var score = Math.abs(i.level - target) + (used.includes(i.id) ? 1.5 : 0) + rng() * 0.4;
      if (score < bestScore) { bestScore = score; best = i; }
    });
    return best;
  }

  // ---------- Diagnosis: what kind of teaching does this learner need? ----------
  function missedTopics(responses) {
    var m = {};
    responses.forEach(function (r) {
      if (r.correct) return;
      var e = m[r.topic] || (m[r.topic] = { n: 0, level: r.level });
      e.n++; e.level = Math.min(e.level, r.level); // the easiest question missed shows where the gap starts
    });
    return m;
  }

  function diagnose(result) {
    var overall = result.overall.mean;
    var sk = {};
    SKILLS.forEach(function (s) { sk[s] = result.skills[s] ? result.skills[s].mean : null; });
    var tested = SKILLS.filter(function (s) { return sk[s] !== null; });
    var ordered = tested.slice().sort(function (a, b) { return sk[a] - sk[b]; });
    var weakest = ordered[0], strongest = ordered[ordered.length - 1];
    var spread = sk[strongest] - sk[weakest];

    function avg(list) {
      var vals = list.filter(function (s) { return sk[s] !== null; }).map(function (s) { return sk[s]; });
      return vals.length ? vals.reduce(function (a, b) { return a + b; }, 0) / vals.length : null;
    }
    var understand = avg(['reading', 'listening']);
    var produce = avg(['grammar', 'writing']);
    var imbalance = understand !== null && produce !== null ? understand - produce : 0;

    var stage;
    var idx = levelIndex(overall);
    if (idx <= 1) stage = { id: 'foundations', name: 'Foundations', what: 'Basic sentences, the most common 500 words and simple listening. Short lessons with a lot of repetition.' };
    else if (idx === 2) stage = { id: 'core', name: 'Core English', what: 'The main verb tenses and the words needed for everyday situations, so that you can talk about the past, the present and your plans.' };
    else if (idx === 3) stage = { id: 'independence', name: 'Independent English', what: 'Longer conversations and real texts, with grammar for opinions, experiences and possibilities.' };
    else if (idx === 4) stage = { id: 'fluency', name: 'Fluency and Accuracy', what: 'Natural word combinations, complex sentences and following fast speech, with the frequent errors removed.' };
    else stage = { id: 'mastery', name: 'Advanced Polish', what: 'Nuance, style and implied meaning, so that English sounds precise in formal and informal settings.' };

    var pattern;
    if (imbalance >= 0.6) pattern = { id: 'understands-more', title: 'You understand more than you can produce', detail: 'Your reading and listening are ahead of your grammar and writing. Your plan adds more sentence-building and writing practice.' };
    else if (imbalance <= -0.6) pattern = { id: 'rules-over-real', title: 'You know the rules better than real English', detail: 'Your grammar and writing are ahead of your reading and listening. Your plan adds more real texts and audio.' };
    else if (spread >= 0.8) pattern = { id: 'one-weak', title: 'One skill is holding the others back', detail: capital(weakest) + ' is furthest behind, so it gets the most lessons.' };
    else pattern = { id: 'balanced', title: 'Your skills are well balanced', detail: 'No single skill is far behind, so your plan moves all of them forward together.' };

    return { stage: stage, pattern: pattern, weakest: weakest, strongest: strongest, spread: spread };
  }

  function capital(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

  // ---------- Plan builder ----------
  // Chooses lessons for the learner, spends more of them on weaker skills, and records why each was chosen.
  function buildPlan(opts) {
    var lessons = opts.lessons, result = opts.result, missed = opts.missed || {}, goal = opts.goal || 'everyday';
    var minutes = opts.minutes || 20, done = opts.done || [];
    var overall = result.overall.mean;
    var targetIdx = Math.min(6, Math.max(1, levelIndex(overall)) + 1);
    var diag = diagnose(result);

    var theta = {};
    SKILLS.forEach(function (s) { theta[s] = result.skills[s] ? result.skills[s].mean : overall; });
    theta.speaking = overall - 0.25; // not measured by the test

    var weights = {};
    SKILLS.forEach(function (s) {
      weights[s] = Math.pow(Math.max(0.35, targetIdx + 0.25 - theta[s]), 1.6);
    });
    if (diag.pattern.id === 'understands-more') { weights.grammar *= 1.35; weights.writing *= 1.35; }
    if (diag.pattern.id === 'rules-over-real') { weights.reading *= 1.35; weights.listening *= 1.35; }
    var sum = SKILLS.reduce(function (a, s) { return a + weights[s]; }, 0);
    SKILLS.forEach(function (s) { weights[s] /= sum; });
    weights.speaking = 0.1; // small, steady share

    // A miss only points to lessons at or above that question's level:
    // failing a B2 question on a topic is not a reason to go back to the A1 lesson.
    function missedOn(l) {
      return (l.topics || []).filter(function (t) { return missed[t] && l.level >= missed[t].level; });
    }

    function fits(l) {
      if (done.includes(l.id)) return false;
      if (l.goal && l.goal !== goal) return false;
      var base = Math.max(1, levelIndex(theta[l.skill] || overall));
      var missedHere = missedOn(l).length > 0;
      if (l.skill === 'speaking') return Math.abs(l.level - base) <= 1;
      if (l.level === base || l.level === base + 1) return true;
      if (l.skill === diag.weakest && l.level >= base && l.level <= targetIdx) return true; // a weak skill may climb all the way to the target
      if (missedHere && l.level < base && l.level >= base - 2) return true; // a gap below the current level
      if (l.goal && Math.abs(l.level - base) <= 1) return true;
      return false;
    }

    function reason(l) {
      var hit = missedOn(l);
      if (hit.length) return { code: 'missed', topics: hit };
      if (l.goal) return { code: 'goal' };
      if (l.skill === 'speaking') return { code: 'speaking' };
      if (l.skill === diag.weakest) return { code: 'weakest' };
      if (l.level > Math.max(1, levelIndex(theta[l.skill]))) return { code: 'stretch' };
      return { code: 'level' };
    }

    function priority(l) {
      var missedCount = missedOn(l).reduce(function (a, t) { return a + missed[t].n; }, 0);
      var score = l.level * 10;
      if (missedCount) score -= 30 + missedCount;
      if (l.goal) score -= 5;
      return score;
    }

    var bySkill = {};
    lessons.filter(fits).forEach(function (l) {
      (bySkill[l.skill] = bySkill[l.skill] || []).push(l);
    });
    Object.keys(bySkill).forEach(function (s) {
      bySkill[s].sort(function (a, b) { return priority(a) - priority(b); });
    });

    var goalCount = minutes <= 10 ? 15 : minutes <= 20 ? 20 : 30;
    var perDay = minutes >= 30 ? 2 : 1;
    var picked = [], counts = {};
    while (picked.length < goalCount) {
      var best = null, bestLoad = Infinity;
      Object.keys(bySkill).forEach(function (s) {
        if (!bySkill[s].length) return;
        var load = ((counts[s] || 0) + 0.5) / (weights[s] || 0.1);
        if (load < bestLoad) { bestLoad = load; best = s; }
      });
      if (!best) break;
      var l = bySkill[best].shift();
      counts[best] = (counts[best] || 0) + 1;
      picked.push({ id: l.id, reason: reason(l), status: 'todo' });
    }

    // A beginner needs a first sentence before anything else, so Foundations opens with grammar.
    if (diag.stage.id === 'foundations') {
      var firstGrammar = picked.findIndex(function (p) {
        var l = lessons.find(function (x) { return x.id === p.id; });
        return l && l.skill === 'grammar';
      });
      if (firstGrammar > 0) picked.unshift(picked.splice(firstGrammar, 1)[0]);
    }

    var shares = SKILLS.concat(['speaking']).map(function (s) {
      return { skill: s, count: counts[s] || 0 };
    }).filter(function (x) { return x.count; }).sort(function (a, b) { return b.count - a.count; });

    return {
      items: picked,
      perDay: perDay,
      weeks: Math.ceil(picked.length / (perDay * 5)),
      targetLevel: LEVELS[targetIdx - 1],
      shares: shares,
      diagnosis: diag
    };
  }

  // Spaced repetition: each correct recall moves a word up one box.
  var BOX_DAYS = [0, 1, 2, 4, 8, 16, 32];
  function reviewWord(card, knew, today) {
    var box = knew ? Math.min(6, (card.box || 0) + 1) : 1;
    return { word: card.word, box: box, due: today + (knew ? BOX_DAYS[box] : 1) };
  }

  var api = {
    LEVELS: LEVELS, SKILLS: SKILLS, ITEMS_PER_SKILL: ITEMS_PER_SKILL,
    pCorrect: pCorrect, guessRate: guessRate, estimate: estimate, nextItem: nextItem,
    levelIndex: levelIndex, levelName: levelName, levelRange: levelRange,
    missedTopics: missedTopics, diagnose: diagnose, buildPlan: buildPlan, reviewWord: reviewWord, capital: capital
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.SchwaEngine = api;
})(typeof window !== 'undefined' ? window : this);
