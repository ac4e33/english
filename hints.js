// Adds Arabic hints to whatever is on screen, after each render.
// English stays the main language. Test questions, answers and reading or listening texts are never touched.
(function (root) {
  var AR = root.SchwaArabic, LIB = root.SchwaLessons;

  function clean(s) { return String(s).replace(/\*\*/g, '').replace(/\s+/g, ' ').trim(); }

  var DICT = {}, NOTES = {}, EXTRAS = {};
  [AR.ui, AR.can, AR.topics, AR.skills, AR.levels].forEach(function (d) { Object.keys(d).forEach(function (k) { DICT[clean(k)] = d[k]; }); });
  LIB.list.forEach(function (l) {
    if (AR.titles[l.id]) DICT[clean(l.title)] = AR.titles[l.id];
    var prose = (l.teach || []).filter(function (t) { return typeof t === 'string' && t.indexOf('> ') !== 0; });
    if (l.intro) prose.push(l.intro);
    var tr = AR.teach[l.id] || [];
    prose.forEach(function (p, i) { if (tr[i]) NOTES[clean(p)] = tr[i]; });
    if (tr.length > prose.length) EXTRAS[l.id] = tr.slice(prose.length);
    var why = AR.why[l.id];
    if (why) (l.ex || []).forEach(function (x, i) { if (x.why && why[i]) NOTES[clean(x.why)] = why[i]; });
  });

  function skill(s) { return AR.skills[s] || AR.skills[s.charAt(0).toUpperCase() + s.slice(1)] || s; }
  function num(n) { return n; }

  // Strings with changing parts.
  var PATTERNS = [
    [/^(Foundations|Core English|Independent English|Fluency and Accuracy|Advanced Polish), aiming for (\w+)\. (.+)$/, function (m) { return DICT[m[1]] + '، والهدف ' + m[2] + '. ' + (lookup(m[3]) || ''); }],
    [/^Question (\d+) of (\d+)$/, function (m) { return 'السؤال ' + m[1] + ' من ' + m[2]; }],
    [/^Word (\d+) of (\d+)$/, function (m) { return 'الكلمة ' + m[1] + ' من ' + m[2]; }],
    [/^You can play this (\d+) more times?$/, function (m) { return 'يمكنك التشغيل ' + m[1] + ' مرة أخرى'; }],
    [/^(\d+) minutes$/, function (m) { return m[1] + ' دقيقة'; }],
    [/^(?:(.+), your|Your) English level$/, function () { return 'مستواك في الإنجليزية'; }],
    [/^Hello(?:, .+)?\.$/, function () { return 'مرحبًا'; }],
    [/^(Starting out|Beginner|Elementary|Intermediate|Upper intermediate|Advanced|Proficient), aiming for (\w+)$/, function (m) { return AR.levels[m[1]] + '، والهدف ' + m[2]; }],
    [/^(Pre-A1|A1|A2|B1|B2|C1|C2): (.+)$/, function (m) { return AR.levels[m[2]] || null; }],
    [/^Likely range: ([^.]+)\. (?:Last test: (\S+)\. )?This is an estimate from (\d+) questions/, function (m) { return 'المدى المرجّح: ' + m[1] + '. ' + (m[2] ? 'الاختبار السابق: ' + m[2] + '. ' : '') + 'هذا تقدير من ' + m[3] + ' سؤالًا وليس شهادة رسمية، ولا يقيس الاختبار التحدث.'; }],
    [/^Your plan: (\d+) lessons in about (\d+) weeks?, aiming for (\w+)$/, function (m) { return 'خطتك: ' + m[1] + ' درسًا في نحو ' + m[2] + ' أسابيع، والهدف ' + m[3]; }],
    [/^(\w+) is furthest behind, so it gets the most lessons\.$/, function (m) { return skill(m[1]) + ' هي الأكثر تأخرًا، لذلك تحصل على أكبر عدد من الدروس.'; }],
    [/^Practise (\w+): (.+)$/, function (m) { return 'تدرّبي على ' + skill(m[1]); }],
    [/^(\d+) words? (?:is|are) ready to review\.$/, function (m) { return m[1] + ' كلمة جاهزة للمراجعة.'; }],
    [/^After (\d+) lessons, take the test again to measure your progress\.$/, function (m) { return 'بعد ' + m[1] + ' دروس، أعيدي الاختبار لقياس تقدمك.'; }],
    [/^Week (\d+)$/, function (m) { return 'الأسبوع ' + m[1]; }],
    [/^(\d+) of (\d+) finished$/, function (m) { return 'أنهيتِ ' + m[1] + ' من ' + m[2]; }],
    [/^All (\d+)$/, function (m) { return 'الكل ' + m[1]; }],
    [/^(Grammar|Vocabulary|Reading|Listening|Writing|Speaking)(?: (\d+)|: (\d+))$/, function (m) { return skill(m[1]) + ' ' + (m[2] || m[3]); }],
    [/^About (\d+) minutes(?:\. Best score: (\d+)%)?\.$/, function (m) { return 'نحو ' + m[1] + ' دقيقة' + (m[2] ? '. أفضل نتيجة: ' + m[2] + '٪' : '') + '.'; }],
    [/^You missed test questions on (.+)\.$/, function (m) {
      var names = m[1].split(' and '), lower = {};
      Object.keys(AR.topics).forEach(function (k) { lower[k.toLowerCase()] = AR.topics[k]; });
      // Topic names can contain "and", so try the whole string first.
      if (lower[m[1]]) return 'أخطأتِ في أسئلة الاختبار عن: ' + lower[m[1]] + '.';
      return 'أخطأتِ في أسئلة الاختبار عن: ' + names.map(function (n) { return lower[n] || n; }).join(' و') + '.';
    }],
    [/^Chosen for your goal: (.+)\.$/, function (m) { return 'اختير لهدفك: ' + (AR.goals[m[1]] || m[1]) + '.'; }],
    [/^(\w+) is your weakest skill\.$/, function (m) { return skill(m[1]) + ' هي أضعف مهارة لديك.'; }],
    [/^A step up towards (\w+)\.$/, function (m) { return 'خطوة نحو ' + m[1] + '.'; }],
    [/^Practise this again\. Your last score was (\d+)%\.$/, function (m) { return 'تدرّبي عليه مرة أخرى. آخر نتيجة لك ' + m[1] + '٪.'; }],
    [/^You got (\d+) of (\d+) right\. Your plan moves on/, function (m) { return 'أجبتِ ' + m[1] + ' من ' + m[2] + ' بشكل صحيح. تنتقل خطتك إلى الدرس التالي.'; }],
    [/^You got (\d+) of (\d+) right\. Your plan will bring/, function (m) { return 'أجبتِ ' + m[1] + ' من ' + m[2] + ' بشكل صحيح. ستعيد خطتك هذا الدرس قريبًا، لأن الانتقال يحتاج إلى ٧٠٪.'; }],
    [/^\+(\d+) words in your word review$/, function (m) { return 'أُضيفت ' + m[1] + ' كلمات إلى المراجعة'; }],
    [/^(\d+) in a row$/, function (m) { return m[1] + ' على التوالي'; }],
    [/^You knew (\d+) of (\d+) words\.$/, function (m) { return 'عرفتِ ' + m[1] + ' من ' + m[2] + ' كلمات.'; }],
    [/^You made (\d+) mistakes\./, function (m) { return 'ارتكبتِ ' + m[1] + ' أخطاء. ستعود هذه الكلمات في المراجعة.'; }],
    [/^Rated about (\w+)$/, function (m) { return 'التقييم نحو ' + m[1]; }],
    [/^Choose a situation\. Claude will talk with you at (\S+) level/, function (m) { return 'اختاري موقفًا. سيتحدث معك Claude بمستوى ' + m[1] + ' ويصحح أخطاءك. إنه ليس شخصًا حقيقيًا.'; }]
  ];

  function lookup(text) {
    if (DICT[text]) return DICT[text];
    for (var i = 0; i < PATTERNS.length; i++) {
      var m = text.match(PATTERNS[i][0]);
      if (m) return PATTERNS[i][1](m);
    }
    return null;
  }

  // Never hint inside these: they are what she is learning from, or being tested on.
  var SKIP = '.ar, .ar-note, .opt[data-a="pick"], .tile, .tok, .mbtn, .passage, .speakable, .eg, .sentence, .bubble, .chat, .ipa, .pos, .bigcefr, .ticks, .lvl, .ring, .boxes, .brand, .stop .chip, .lesson-row .chip, .next .chip, .aibox, #word-count, .scale-row > b, table';

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    e.className = cls; e.setAttribute('dir', 'rtl'); e.setAttribute('lang', 'ar');
    // One digit style throughout, matching the English beside it.
    e.textContent = String(text).replace(/[٠-٩]/g, function (d) { return '٠١٢٣٤٥٦٧٨٩'.indexOf(d); });
    return e;
  }

  function ownText(n) {
    var t = '';
    n.childNodes.forEach(function (c) { if (c.nodeType === 3) t += c.nodeValue; });
    return clean(t);
  }

  function apply(rootEl, opts) {
    if (opts.gloss) {
      rootEl.querySelectorAll('.word h3, .face.back h2').forEach(function (h) {
        var g = AR.words[clean(h.textContent)];
        if (!g) return;
        var note = el('span', 'ar gloss', g);
        if (h.matches('.word h3')) h.parentElement.appendChild(note); else h.parentElement.insertBefore(note, h.nextSibling);
      });
    }

    // Lesson explanations: shown directly at lower levels, on request at higher ones.
    var teach = rootEl.querySelector('.teach');
    if (teach && opts.gloss) {
      var showNotes = opts.ui || opts.teachOpen;
      if (!opts.ui) {
        var b = el('button', 'ar-toggle', opts.teachOpen ? 'إخفاء الشرح بالعربية' : 'عرض الشرح بالعربية');
        b.setAttribute('data-a', 'ar-teach');
        b.setAttribute('aria-expanded', String(!!opts.teachOpen));
        teach.insertBefore(b, teach.firstChild);
      }
      if (showNotes) {
        teach.querySelectorAll(':scope > p:not(.eg)').forEach(function (p) {
          var n = NOTES[clean(p.textContent)];
          if (n) p.parentNode.insertBefore(el('p', 'ar-note', n), p.nextSibling);
        });
        (EXTRAS[opts.lessonId] || []).forEach(function (x) { teach.appendChild(el('p', 'ar-note', x)); });
      }
    }

    if (!opts.ui) return;

    rootEl.querySelectorAll('select option').forEach(function (o) {
      var a = DICT[clean(o.textContent)];
      if (a) o.textContent = o.textContent + '  /  ' + a;
    });

    rootEl.querySelectorAll('h1, h2, h3, p, label, span, b, button, li').forEach(function (n) {
      if (n.closest(SKIP) && !n.matches('.opt[data-a="chat-start"] span')) return;
      if (n.closest('.teach') && n.matches('p')) return;
      // Plain text only, apart from the keyboard note.
      for (var i = 0; i < n.children.length; i++) if (!n.children[i].matches('.kbd-hint, .chev')) return;
      var text = ownText(n);
      if (!text) return;
      var a = NOTES[text] || lookup(text);
      if (!a) return;
      if (NOTES[text] && n.closest('.feedback, .review, .sheet')) { n.appendChild(el('span', 'ar', a)); return; }
      n.appendChild(el('span', 'ar', a));
    });
  }

  // For checking coverage during development.
  function missing(rootEl) {
    var out = [];
    rootEl.querySelectorAll('h1, h2, h3, p, label, span, b, button, li').forEach(function (n) {
      if (n.closest(SKIP) && !n.matches('.opt[data-a="chat-start"] span')) return;
      if (n.closest('.teach') || n.querySelector('.ar') || n.children.length) return;
      var t = ownText(n);
      if (t && /[a-z]{3}/i.test(t) && !NOTES[t] && !lookup(t)) out.push(t);
    });
    return out;
  }

  var api = { apply: apply, missing: missing, lookup: lookup, NOTES: NOTES };
  root.SchwaHints = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
