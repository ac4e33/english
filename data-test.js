// Placement test question bank. 3 items per skill per CEFR level (90 total).
// In every multiple-choice list the FIRST option is correct; options are shuffled when shown.
(function (root) {
  var BANK = [];
  var n = 0;
  function add(o) { o.id = 'q' + (++n); BANK.push(o); }
  function mc(skill, level, topic, q, options, extra) {
    var o = { skill: skill, level: level, topic: topic, type: 'mcq', q: q, options: options };
    if (extra) for (var k in extra) o[k] = extra[k];
    add(o);
  }
  function g(l, t, q, o) { mc('grammar', l, t, q, o); }
  function v(l, t, q, o) { mc('vocabulary', l, t, q, o); }
  function r(l, t, passage, q, o) { mc('reading', l, t, q, o, { passage: passage }); }
  function h(l, t, script, q, o) { mc('listening', l, t, q, o, { script: script }); }
  function ord(l, t, sentence, alts) { add({ skill: 'writing', level: l, topic: t, type: 'order', q: 'Put the words in the correct order.', sentence: sentence, alts: alts || [] }); }
  function err(l, t, marked) { add({ skill: 'writing', level: l, topic: t, type: 'error', q: 'One word is wrong. Tap it.', marked: marked }); }
  function wmc(l, t, q, o) { mc('writing', l, t, q, o); }

  // ---------- GRAMMAR ----------
  g(1, 'be', 'She ___ a teacher.', ['is', 'are', 'am', 'be']);
  g(1, 'present-simple', 'I ___ in a small town.', ['live', 'lives', 'living', 'am live']);
  g(1, 'articles', 'I eat ___ apple every day.', ['an', 'a', 'many', 'these']);
  g(2, 'past-simple', 'We ___ to the beach last Sunday.', ['went', 'go', 'goes', 'have gone']);
  g(2, 'comparatives', 'My brother is ___ than me.', ['taller', 'more tall', 'tallest', 'tall']);
  g(2, 'present-continuous', 'Look! It ___ outside.', ['is raining', 'rains', 'rain', 'rained']);
  g(3, 'present-perfect', 'I ___ in this city since 2015.', ['have lived', 'live', 'am living', 'lived']);
  g(3, 'first-conditional', 'If it rains tomorrow, we ___ at home.', ['will stay', 'stayed', 'would stay', 'staying']);
  g(3, 'modals', 'You ___ wear a seatbelt. It is the law.', ['must', 'might', 'could', 'would']);
  g(4, 'passive', 'The bridge ___ in 1932.', ['was built', 'built', 'has built', 'was building']);
  g(4, 'second-conditional', 'If I ___ more time, I would learn to play the piano.', ['had', 'have', 'will have', 'would have']);
  g(4, 'relative-clauses', 'The woman ___ car was stolen called the police.', ['whose', 'who', 'which', 'that']);
  g(5, 'third-conditional', 'If she had left earlier, she ___ the train.', ['would have caught', 'would catch', 'had caught', 'caught']);
  g(5, 'inversion', 'Not only ___ late, but he also forgot the documents.', ['did he arrive', 'he arrived', 'he did arrive', 'arrived he']);
  g(5, 'modals-past', 'You ___ told me! I would have helped you.', ['should have', 'must have', 'may have', 'would']);
  g(6, 'subjunctive', 'The committee recommended that the proposal ___ withdrawn.', ['be', 'is', 'was', 'will be']);
  g(6, 'advanced-hypothetical', 'Had it not been for her intervention, the project ___.', ['would have collapsed', 'will collapse', 'has collapsed', 'collapsed']);
  g(6, 'participle-clauses', '___ the report twice, she still could not find the error.', ['Having read', 'Having been read', 'To have read', 'Read']);

  // ---------- VOCABULARY ----------
  v(1, 'everyday-words', 'Which word is a colour?', ['green', 'table', 'run', 'happy']);
  v(1, 'everyday-words', "My mother's mother is my ___.", ['grandmother', 'sister', 'aunt', 'daughter']);
  v(1, 'everyday-words', 'You use a ___ to write.', ['pen', 'plate', 'chair', 'door']);
  v(2, 'core-words', 'I was very ___, so I went to bed early.', ['tired', 'angry', 'cheap', 'empty']);
  v(2, 'collocation', 'Can you ___ me the way to the station?', ['tell', 'say', 'speak', 'talk']);
  v(2, 'core-words', 'The opposite of "expensive" is ___.', ['cheap', 'small', 'short', 'easy']);
  v(3, 'core-words', 'She is ___ of spiders.', ['afraid', 'nervous', 'worried', 'careful']);
  v(3, 'collocation', 'He ___ a lot of money on clothes.', ['spends', 'pays', 'buys', 'costs']);
  v(3, 'core-words', "Please don't ___ to call your mother.", ['forget', 'miss', 'lose', 'leave']);
  v(4, 'collocation', 'The new policy had a significant ___ on small businesses.', ['impact', 'result', 'reason', 'advantage']);
  v(4, 'phrasal', 'She ___ the offer because the salary was too low.', ['turned down', 'turned up', 'put off', 'took over']);
  v(4, 'collocation', 'He is very reliable. He always ___ his promises.', ['keeps', 'does', 'takes', 'puts']);
  v(5, 'academic', 'Her argument was so ___ that nobody could disagree.', ['compelling', 'tedious', 'reluctant', 'negligible']);
  v(5, 'academic', 'The minister tried to ___ the seriousness of the crisis.', ['downplay', 'overtake', 'undergo', 'outrun']);
  v(5, 'collocation', 'There is ___ evidence that the treatment works.', ['ample', 'wide', 'tall', 'heavy']);
  v(6, 'academic', 'The report was full of ___ detail, which only obscured the main point.', ['extraneous', 'ubiquitous', 'tenable', 'succinct']);
  v(6, 'idiom', 'Her resignation came as a bolt from the ___.', ['blue', 'sky', 'storm', 'clouds']);
  v(6, 'academic', "The politician's ___ answer avoided saying anything definite.", ['equivocal', 'succinct', 'candid', 'lucid']);

  // ---------- READING ----------
  r(1, 'detail', 'Hi, I am Sara. I am from Spain. I have one brother. His name is Luis.',
    'Who is Luis?', ["Sara's brother", "Sara's father", "Sara's friend", "Sara's son"]);
  r(1, 'detail', 'The shop opens at 9:00 and closes at 5:00. It is closed on Sunday.',
    'When can you NOT go to the shop?', ['On Sunday', 'On Monday morning', 'At 10:00 on Tuesday', 'At 4:00 on Friday']);
  r(1, 'detail', 'Tom gets up at seven. He has eggs for breakfast and he goes to work by bus.',
    'How does Tom go to work?', ['By bus', 'By car', 'By train', 'On foot']);
  r(2, 'detail', 'Dear Ana, I am on holiday in Italy with my family. The weather is hot and the food is great. Yesterday we visited Rome. Tomorrow we are going to the beach. See you next week! Mia',
    'What will Mia do tomorrow?', ['Go to the beach', 'Visit Rome', 'Go home', 'Write to Ana']);
  r(2, 'detail', 'NOTICE: The swimming pool will be closed next Monday for cleaning. It will open again on Tuesday at 8 a.m. We are sorry for any problems.',
    'Why is the pool closed on Monday?', ['It is being cleaned', 'There are no staff', 'It is a public holiday', 'The water is too cold']);
  r(2, 'inference', 'Ben wanted to buy a new phone, but it was too expensive. He decided to save money for three months first. Now he walks to work and does not buy coffee in cafes.',
    'Why does Ben walk to work now?', ['To save money', 'Because his phone broke', 'Because he likes walking', 'Because the cafe is closed']);
  r(3, 'main-idea', 'Many people think working from home is easier than going to an office. It saves time and money, and you can choose when to take a break. However, some workers feel lonely, and it can be hard to stop working in the evening.',
    "What is the writer's main point?", ['Working from home has good and bad sides', 'Working from home is always better', 'Offices are too expensive', 'People should work in the evening']);
  r(3, 'inference', "When Maya moved to Canada, she could barely order a coffee in English. Instead of studying only from books, she joined a local hiking club. Two years later, she leads the group's walks and jokes with the other members.",
    "What improved Maya's English the most?", ['Using English with people in a club', 'Studying from books', 'Working in a coffee shop', 'Taking a language class']);
  r(3, 'detail', 'The museum has changed its opening hours. Because of rising energy costs, it now closes at 4 p.m. rather than 6 p.m. in winter. Visitors who have bought evening tickets can exchange them online at no extra charge.',
    'What should someone with an evening ticket do?', ['Change it online for free', 'Pay some extra money', 'Throw it away', 'Use it at 6 p.m. as planned']);
  r(4, 'main-idea', 'Although electric cars produce no exhaust fumes, they are not entirely clean. Manufacturing their batteries requires large amounts of energy and rare metals, and the electricity that charges them may still come from burning coal. Their overall benefit therefore depends heavily on how and where they are made and powered.',
    'What does the writer suggest?', ['The environmental benefit depends on the circumstances', 'Electric cars have no environmental benefit', 'Coal is cleaner than most people think', 'Rare metals should not be used in batteries']);
  r(4, 'inference', 'For decades, open-plan offices were promoted as a way of encouraging collaboration. Yet studies tracking employees found that face-to-face conversation actually fell after the walls came down, as people put on headphones and retreated to email to gain some privacy.',
    'Why did conversation fall?', ['Workers wanted privacy, so they avoided interaction', 'Managers told staff to use email', 'Employees started working from home', 'The offices were too noisy to hear anyone']);
  r(4, 'tone', "Hotel review: \"The location is unbeatable and the staff couldn't have been friendlier. It's a pity, then, that the rooms are tired and the walls so thin that I could follow my neighbour's phone calls word for word.\"",
    "What is the writer's attitude?", ['Pleased with the location and staff, disappointed by the rooms', 'Completely satisfied with the stay', 'Angry about everything in the hotel', 'Annoyed mainly by the staff']);
  r(5, 'detail', 'Critics of the scheme contend that subsidising home insulation merely rewards those who would have carried out the work regardless. Proponents counter that even a modest share of additional installations justifies the cost, since the savings accumulate over decades.',
    "What is the critics' objection?", ['The money goes to people who would have done the work anyway', 'Insulation does not save much energy', 'The savings take too long to appear', 'Too few people apply for the scheme']);
  r(5, 'main-idea', 'Nostalgia was once classified as a disease, a diagnosis reserved for homesick soldiers. Today psychologists are more inclined to regard it as a resource: recalling the past, it seems, can bolster a sense of meaning when the present feels uncertain.',
    'How has the view of nostalgia changed?', ['From an illness to something that can help people', 'From something helpful to something dangerous', 'It is still mainly seen as a disease', 'It is now studied only in soldiers']);
  r(5, 'tone', "The author's debut, for all its verbal dazzle, never quite overcomes its thin plot; one admires the sentences while ceasing to care what happens in them.",
    'What does the reviewer think?', ['The writing is impressive but the story is weak', 'The plot is gripping but the style is poor', 'The sentences are too simple', 'The book deserves no attention at all']);
  r(6, 'inference', "To attribute the city's revival solely to its new museum is to mistake a symptom for a cause; the museum could be built only because investment, drawn by falling rents and a burgeoning port trade, had already begun to return.",
    "What is the writer's claim?", ['The museum resulted from a recovery already under way', 'The museum caused the recovery of the city', 'Rents fell because the museum was built', 'The port trade was declining at the time']);
  r(6, 'inference', 'That the treaty has endured owes less to any enthusiasm among its signatories than to the absence of an alternative any of them could stomach.',
    'Why has the treaty lasted?', ['No side could accept any other option', 'The signatories are very enthusiastic about it', 'It is strictly enforced by outside powers', 'Several alternatives were tried and failed']);
  r(6, 'tone', 'His memoir is candid in the way that only the truly vain can be: every confession of failure turns out, on inspection, to be a boast in disguise.',
    'What is the writer implying?', ['His honesty is really a way of praising himself', 'He is a genuinely humble person', 'He invented his failures to sell books', 'He has never admitted any failure']);

  // ---------- LISTENING ----------
  h(1, 'listen-detail', 'My name is David. I am twenty-five years old. I live in London.',
    'How old is David?', ['25', '35', '20', '52']);
  h(1, 'listen-detail', "A: What time is it? B: It's three o'clock.",
    'What time is it?', ['3:00', '2:00', '8:00', '10:00']);
  h(1, 'listen-detail', 'Can I have a coffee and a sandwich, please?',
    'What does the person want?', ['A coffee and a sandwich', 'A tea and a sandwich', 'A coffee and a cake', 'A water and a salad']);
  h(2, 'listen-detail', "A: Are you free on Saturday? B: Sorry, I'm working in the morning, but I can meet you in the afternoon. A: Great, let's go to the cinema at four.",
    'When will they meet?', ['Saturday afternoon', 'Saturday morning', 'Sunday at four', 'Friday evening']);
  h(2, 'listen-detail', 'The next train to Manchester leaves from platform six at ten fifteen.',
    'Which platform does the train leave from?', ['6', '16', '10', '5']);
  h(2, 'listen-gist', "I usually drive to work, but my car is at the garage this week, so I'm taking the bus.",
    'Why is the speaker taking the bus?', ['The car is being repaired', 'The bus is cheaper', 'The car was sold', 'The speaker likes the bus']);
  h(3, 'listen-gist', "Hi, it's Jenny from the dentist's. I'm calling about your appointment on Thursday. Unfortunately, Doctor Lee is ill that day, so we need to move it to Friday at the same time. Please call us back to confirm.",
    'What does the listener need to do?', ['Call back to confirm the new time', 'Go to the dentist on Thursday', 'Find a different dentist', 'Cancel the appointment']);
  h(3, 'listen-gist', "I thought the film would be boring because I don't usually like history, but actually I couldn't stop watching. The only problem was that it was nearly three hours long.",
    'What is the speaker\'s opinion of the film?', ['Enjoyable, although too long', 'Boring and too long', 'Good because it was short', 'Not as good as other history films']);
  h(3, 'listen-detail', "A: Did you finish the report? B: Nearly. I just need the sales figures from Mark. A: He's away until Monday, but I think Priya has them. B: Oh good, I'll ask her.",
    'Who will B ask for the figures?', ['Priya', 'Mark', 'The manager', 'Monday\'s team']);
  h(4, 'listen-gist', 'People often assume that remote islands have simple, unspoiled economies. In reality, many depend heavily on tourism and imports, which means a single bad season can have serious consequences for the whole community.',
    'What is the main point?', ['Island economies are vulnerable because they rely on outsiders', 'Island economies are simple and unspoiled', 'Tourism has stopped on most islands', 'Islands no longer need imports']);
  h(4, 'listen-inference', "A: So, are you taking the job? B: I'm torn, to be honest. The pay is better, but it would mean moving away from my family, and I'm not convinced it's worth it.",
    'How does B feel about the job?', ['Unsure whether to take it', 'Excited to start', 'Disappointed by the pay', 'Certain that it is a mistake']);
  h(4, 'listen-detail', "Thanks for coming, everyone. Before we look at the budget, I should mention that the launch has been pushed back by two weeks, because the supplier has run into difficulties. We'll come back to what that means for marketing later on.",
    'Why has the launch been delayed?', ['The supplier has problems', 'The budget was cut', 'The marketing is not ready', 'Too few people came']);
  h(5, 'listen-gist', 'What strikes me about the debate is how little of it concerns the evidence. Both camps quote the same figures and simply draw opposite conclusions, which suggests that the real disagreement lies elsewhere, in what each side thinks the city is for.',
    'What does the speaker say about the debate?', ['It is really about values, not data', 'The figures being quoted are wrong', 'One side is ignoring the evidence', 'There is not enough evidence yet']);
  h(5, 'listen-inference', "A: I gather the merger's off. B: Well, officially they're reviewing their options, but I wouldn't hold your breath.",
    'What does B mean?', ['B does not expect the merger to happen', 'B is sure the merger will go ahead', 'B has no opinion about the merger', 'B wants A to wait patiently']);
  h(5, 'listen-inference', 'Had the council acted on the first survey, the repairs would have cost a fraction of what they do now. Instead, it commissioned a second survey, which, unsurprisingly, told it the same thing, only two years later.',
    'What is the speaker\'s attitude to the council?', ['Critical of its delay', 'Grateful for its care', 'Surprised by the second survey', 'Unsure what it did']);
  h(6, 'listen-inference', 'One hesitates to call the policy a failure, if only because nobody ever troubled to say what success would look like.',
    'What is implied about the policy?', ['It had no clear goals, so it cannot be judged', 'It was a clear success', 'The speaker is afraid to criticise it', 'Its goals were met in the end']);
  h(6, 'listen-inference', "He has a gift, I'll grant him that, for making the obvious sound hard won.",
    'What does the speaker think of him?', ['He presents simple ideas as if they were great discoveries', 'He works harder than other people', 'He is generous with his talents', 'He explains difficult ideas clearly']);
  h(6, 'listen-inference', "It isn't that the data are wrong, exactly; it's that they answer a question nobody thought to ask, and we've been citing them ever since as though they answered ours.",
    'What is the problem with the data?', ['They are accurate but are being misapplied', 'They contain serious errors', 'Nobody has ever cited them', 'The question cannot be answered']);

  // ---------- WRITING ----------
  ord(1, 'word-order', 'I like green apples');
  ord(1, 'word-order', 'She is my sister');
  ord(1, 'word-order', 'Where do you live');
  ord(2, 'past-simple', 'We went to the park yesterday', ['Yesterday we went to the park']);
  ord(2, 'word-order', 'She does not like cold coffee');
  ord(2, 'word-order', 'Can you help me with this');
  ord(3, 'present-perfect', 'I have never been to Japan');
  err(3, 'present-perfect', 'My brother [have] lived in Dubai since 2019.');
  err(3, 'gerunds', 'I am looking forward to [see] you next week.');
  err(4, 'linkers', 'Despite [of] the rain, the match continued.');
  err(4, 'uncountables', 'She gave me some useful [advices] about the interview.');
  wmc(4, 'register', 'Which sentence is best for a formal email?', ['I am writing to ask about the position advertised on your website.', 'Hey, I wanna know about that job you got.', 'Tell me about the job you have on website.', 'I writing for ask about the job.']);
  err(5, 'agreement', 'The number of applicants [have] risen sharply this year.');
  err(5, 'inversion', 'Not until the next morning [we] realised what had happened.');
  wmc(5, 'register', 'Which sentence is the most concise and formal?', ['The results suggest that further research is needed.', 'It seems like the results are kind of saying we need to do more research.', 'The results, they say that more research is what is needed.', 'More research needed, the results say so, basically.']);
  err(6, 'agreement', 'Neither the manager nor the employees [was] informed of the change.');
  err(6, 'inversion', 'Scarcely had the ink dried [than] the treaty was broken.');
  wmc(6, 'dangling', 'In which sentence is the opening phrase used correctly?', ['Walking through the old town, I was struck by how quiet it had become.', 'Walking through the old town, the silence struck me.', 'Walking through the old town, it was very quiet for me.', 'Having walked through the old town, the quiet was striking to me.']);

  // ---------- Free writing prompts (AI-marked when available), one per level band ----------
  var WRITING_PROMPTS = {
    1: 'Write 3 or 4 sentences about yourself. What is your name? Where do you live? What do you like?',
    2: 'Write 4 or 5 sentences about what you did last weekend.',
    3: 'Write a short paragraph (about 60 words): describe a place you like and explain why you like it.',
    4: 'Write about 80 words: do you think it is better to live in a city or in the countryside? Give reasons.',
    5: 'Write about 100 words: should companies let all of their staff work from home? Argue your view.',
    6: 'Write about 120 words: does technology bring people closer together or push them apart? Develop a nuanced argument.'
  };

  var api = { BANK: BANK, WRITING_PROMPTS: WRITING_PROMPTS };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.SchwaTest = api;
})(typeof window !== 'undefined' ? window : this);
