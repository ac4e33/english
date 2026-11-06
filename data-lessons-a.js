// Lesson library, levels A1 to B1.
// Teach syntax: "**x**" highlights x. A string starting with "> " is an example sentence with a listen button.
// An array of arrays is a table (first row is the header).
// In M(), the FIRST option is correct; options are shuffled when shown.
(function (root) {
  var S = root.SchwaLessons = root.SchwaLessons || { list: [] };
  S.M = function (q, options, why) { return { type: 'mcq', q: q, options: options, why: why }; };
  S.F = function (q, answers, why) { return { type: 'fill', q: q, answers: answers, why: why }; };
  S.O = function (sentence, why, alts) { return { type: 'order', q: 'Put the words in the correct order.', sentence: sentence, why: why, alts: alts || [] }; };
  S.E = function (marked, fix, why) { return { type: 'error', q: 'One word is wrong. Tap it.', marked: marked, fix: fix, why: why }; };
  S.SAY = function (text, tip) { return { type: 'say', q: 'Listen, then say it aloud.', text: text, why: tip }; };
  S.W = function (prompt, checks, model) { return { type: 'write', q: prompt, checks: checks, model: model }; };
  S.add = function (o) { S.list.push(o); };
  var M = S.M, F = S.F, O = S.O, E = S.E, W = S.W, add = S.add;

  // ======================= A1 =======================
  add({ id: 'a1-be', level: 1, skill: 'grammar', topics: ['be'], title: 'I am, you are, she is',
    teach: ['The verb **to be** tells us who or what someone is. It changes with the person.',
      [['Person', 'Full', 'Short'], ['I', 'I am', "I'm"], ['you / we / they', 'you are', "you're"], ['he / she / it', 'she is', "she's"]],
      '> I am a student.', "> She's from Oman.", '> They are at home.',
      'To make a negative, add **not**. To ask a question, put the verb first.',
      "> He is not tired.", '> Are you happy?'],
    ex: [M('We ___ friends.', ['are', 'is', 'am', 'be'], 'We takes "are".'),
      M('___ she your sister?', ['Is', 'Are', 'Am', 'Be'], 'She takes "is". In a question it comes first.'),
      F('I ___ a doctor.', ['am', "'m"], 'I always takes "am".'),
      E('My brother [are] twenty years old.', 'is', 'My brother = he, so we use "is".'),
      O('They are not at school', 'Subject, then verb, then "not".')] });

  add({ id: 'a1-present', level: 1, skill: 'grammar', topics: ['present-simple'], title: 'What you do every day',
    teach: ['Use the **present simple** for habits and facts. With he, she and it, add **-s** to the verb.',
      '> I work in a bank.', '> She works in a bank.',
      'For negatives and questions, use **do** or **does**. After does, the verb has no -s.',
      "> He doesn't drink coffee.", '> Do you speak English?'],
    ex: [M('My mother ___ in a hospital.', ['works', 'work', 'working', 'is work'], 'My mother = she, so add -s.'),
      M('___ you like tea?', ['Do', 'Does', 'Are', 'Is'], 'You takes "do".'),
      F("He doesn't ___ meat. (eat)", ['eat'], 'After does or doesn\'t, the verb has no -s.'),
      E('She [go] to school by bus.', 'goes', 'She takes -s. Go becomes "goes".'),
      O('We live in a big city', 'Subject, verb, then the rest.')] });

  add({ id: 'a1-articles', level: 1, skill: 'grammar', topics: ['articles'], title: 'A, an and the',
    teach: ['Use **a** before a consonant sound and **an** before a vowel sound.',
      '> a book', '> an apple', '> an hour',
      'Use **the** when we both know which one. To make most words plural, add **-s**.',
      '> I have a dog. The dog is big.', '> two cats, three books'],
    ex: [M('She is ___ engineer.', ['an', 'a', 'the', 'these'], 'Engineer starts with a vowel sound.'),
      M('Please close ___ door.', ['the', 'a', 'an', 'some'], 'We both know which door.'),
      F('I have two ___. (child)', ['children'], 'Child has an irregular plural: children.'),
      E('He has [a] orange in his bag.', 'an', 'Orange starts with a vowel sound.')] });

  add({ id: 'a1-words', level: 1, skill: 'vocabulary', topics: ['everyday-words'], title: 'People and places',
    intro: 'These words appear in almost every first conversation.',
    words: [['mother', 'noun', '/ˈmʌðə/', 'a woman who has a child', 'My mother is a nurse.'],
      ['friend', 'noun', '/frend/', 'a person you like and know well', 'Sara is my best friend.'],
      ['house', 'noun', '/haʊs/', 'a building where people live', 'We live in a small house.'],
      ['morning', 'noun', '/ˈmɔːnɪŋ/', 'the first part of the day', 'I drink tea every morning.'],
      ['eat', 'verb', '/iːt/', 'to put food in your mouth', 'We eat dinner at seven.'],
      ['buy', 'verb', '/baɪ/', 'to get something with money', 'I buy bread at the shop.'],
      ['big', 'adjective', '/bɪɡ/', 'large in size', 'They have a big family.'],
      ['today', 'adverb', '/təˈdeɪ/', 'on this day', 'I am at home today.']] });

  add({ id: 'a1-read', level: 1, skill: 'reading', topics: ['detail'], title: 'Reading a short note',
    teach: ['Read the **question first**. Then look for that one piece of information in the text. You do not need every word.'],
    passage: 'Hi Lina, I am at the market with Mum. We are buying fruit. Dinner is at six. Please come home at five. Love, Noor',
    ex: [M('Where is Noor?', ['At the market', 'At home', 'At school', 'At work'], '"I am at the market."'),
      M('What are they buying?', ['Fruit', 'Bread', 'Fish', 'Water'], '"We are buying fruit."'),
      M('When is dinner?', ['At six', 'At five', 'At seven', 'At eight'], '"Dinner is at six." Five is when Lina comes home.')] });

  add({ id: 'a1-listen', level: 1, skill: 'listening', topics: ['listen-detail'], title: 'Meeting someone new',
    teach: ['Listen for **names and numbers**. Press play as often as you need. Try the slow speed first.'],
    script: "A: Hello, my name is Maria. What is your name? B: Hi Maria. I'm Ahmed. A: Where are you from, Ahmed? B: I'm from Egypt. I am thirty years old. A: Nice to meet you!",
    ex: [M('What is the man\'s name?', ['Ahmed', 'Maria', 'Omar', 'Adam'], '"I\'m Ahmed."'),
      M('Where is he from?', ['Egypt', 'Spain', 'Oman', 'Italy'], '"I\'m from Egypt."'),
      M('How old is he?', ['30', '13', '20', '33'], '"I am thirty years old."')] });

  add({ id: 'a1-write', level: 1, skill: 'writing', topics: ['word-order'], title: 'Writing about yourself',
    teach: ['An English sentence usually goes: **subject, verb, then the rest**. Start with a capital letter and end with a full stop.',
      '> I live in Muscat.', '> My sister likes music.'],
    ex: [O('My name is Huda', 'Subject (my name), verb (is), then the rest.'),
      O('I like black coffee', 'The describing word (black) comes before the noun (coffee).'),
      O('Where do you work', 'Questions start with the question word, then do, then you.'),
      W('Write 3 sentences about yourself: your name, where you live, and something you like.',
        ['Every sentence starts with a capital letter', 'Every sentence ends with a full stop', 'Every sentence has a verb'],
        'My name is Huda. I live in Muscat. I like black coffee.')] });

  // ======================= A2 =======================
  add({ id: 'a2-past', level: 2, skill: 'grammar', topics: ['past-simple'], title: 'Talking about yesterday',
    teach: ['Use the **past simple** for finished actions. Regular verbs add **-ed**. Many common verbs are irregular.',
      [['Now', 'Past'], ['work', 'worked'], ['go', 'went'], ['have', 'had'], ['see', 'saw'], ['buy', 'bought']],
      '> We visited my aunt last week.', '> I went home at six.',
      'For negatives and questions, use **did**. After did, use the base verb.',
      "> She didn't call me.", '> Did you see the film?'],
    ex: [M('I ___ a new bag yesterday.', ['bought', 'buy', 'buys', 'buying'], 'Buy is irregular: bought.'),
      M('___ you go to work last Monday?', ['Did', 'Do', 'Were', 'Have'], 'Past questions use "did".'),
      F("They didn't ___ the train. (catch)", ['catch'], 'After didn\'t, use the base verb.'),
      E('We [goed] to the park on Friday.', 'went', 'Go is irregular: went.'),
      O('She did not call me yesterday', 'did + not + base verb.')] });

  add({ id: 'a2-compare', level: 2, skill: 'grammar', topics: ['comparatives'], title: 'Bigger, better, the best',
    teach: ['Short adjectives add **-er** and **-est**. Long adjectives use **more** and **most**. Use **than** to compare two things.',
      [['Adjective', 'Comparing two', 'The top of a group'], ['tall', 'taller', 'the tallest'], ['big', 'bigger', 'the biggest'], ['beautiful', 'more beautiful', 'the most beautiful'], ['good', 'better', 'the best'], ['bad', 'worse', 'the worst']],
      '> My car is older than yours.', '> This is the best restaurant in town.'],
    ex: [M('This phone is ___ than that one.', ['more expensive', 'expensiver', 'most expensive', 'expensive'], 'Long adjectives use "more".'),
      M('She is the ___ student in the class.', ['best', 'better', 'good', 'goodest'], 'Good, better, best.'),
      F('My house is ___ than yours. (small)', ['smaller'], 'Short adjective: add -er.'),
      E('Today is [more] hotter than yesterday.', 'hotter', 'Hotter already means "more hot". Do not use both.')] });

  add({ id: 'a2-continuous', level: 2, skill: 'grammar', topics: ['present-continuous'], title: 'What is happening now',
    teach: ['Use **am / is / are + verb-ing** for actions happening now, and for fixed plans.',
      "> I'm cooking dinner.", '> She is talking on the phone.', "> We're meeting Ali tomorrow.",
      'Compare it with the present simple, which is for habits.',
      '> He drives to work. (every day)', '> He is driving to work. (right now)'],
    ex: [M('Be quiet! The baby ___.', ['is sleeping', 'sleeps', 'sleep', 'slept'], 'It is happening now.'),
      M('I usually ___ tea, but today I am drinking coffee.', ['drink', 'am drinking', 'drinks', 'drank'], '"Usually" shows a habit.'),
      F('They are ___ football now. (play)', ['playing'], 'are + verb-ing.'),
      E('She [is] not listen to me.', 'does', 'Either "She is not listening" or "She does not listen". With the base verb, it must be "does".')] });

  add({ id: 'a2-words', level: 2, skill: 'vocabulary', topics: ['core-words', 'collocation'], title: 'Words for daily life',
    intro: 'Some of these words go in fixed pairs: we say "tell me" but "say something".',
    words: [['tired', 'adjective', '/ˈtaɪəd/', 'needing to rest or sleep', 'I am tired after work.'],
      ['cheap', 'adjective', '/tʃiːp/', 'costing little money', 'This shirt was very cheap.'],
      ['tell', 'verb', '/tel/', 'to give information to someone', 'Please tell me your name.'],
      ['arrive', 'verb', '/əˈraɪv/', 'to reach a place', 'We arrive at nine.'],
      ['ticket', 'noun', '/ˈtɪkɪt/', 'a paper or code that lets you travel or enter', 'I bought a ticket for the train.'],
      ['weather', 'noun', '/ˈweðə/', 'how hot, cold, rainy or sunny it is', 'The weather is lovely today.'],
      ['often', 'adverb', '/ˈɒfn/', 'many times', 'I often walk to work.'],
      ['enough', 'determiner', '/ɪˈnʌf/', 'as much as you need', 'We have enough food for everyone.']] });

  add({ id: 'a2-read', level: 2, skill: 'reading', topics: ['detail', 'inference'], title: 'Reading messages and notices',
    teach: ['Sometimes the answer is not written directly. Ask yourself: **why** did the writer say this?'],
    passage: 'Hi Sam, I am sorry but I cannot come to the gym tonight. My son has a high temperature, so I am staying at home with him. Are you free on Thursday? I can drive us there. Dana',
    ex: [M('Why can Dana not go to the gym?', ['Her son is ill', 'She has no car', 'She is working', 'The gym is closed'], 'A high temperature means he is ill.'),
      M('What does Dana want to do?', ['Go on Thursday instead', 'Stop going to the gym', 'Take her son to the gym', 'Meet Sam at home'], '"Are you free on Thursday?"'),
      M('How will they get to the gym on Thursday?', ['By car', 'By bus', 'On foot', 'By taxi'], '"I can drive us there."')] });

  add({ id: 'a2-listen', level: 2, skill: 'listening', topics: ['listen-detail', 'listen-gist'], title: 'Making plans',
    teach: ['People often change an idea while they speak. Listen for words like **but** and **sorry**: the important part comes next.'],
    script: "A: Do you want to have lunch on Tuesday? B: Sorry, I'm busy on Tuesday. What about Wednesday? A: Wednesday is fine. Shall we go to the Italian place? B: It's always full. Let's try the new café near the station. A: Good idea. See you at one.",
    ex: [M('When will they have lunch?', ['Wednesday', 'Tuesday', 'Thursday', 'Monday'], 'Tuesday is busy, so they choose Wednesday.'),
      M('Where will they eat?', ['A café near the station', 'The Italian place', 'At home', 'At the office'], '"Let\'s try the new café near the station."'),
      M('Why don\'t they go to the Italian place?', ['It is always full', 'It is expensive', 'It is closed', 'It is too far'], '"It\'s always full."')] });

  add({ id: 'a2-write', level: 2, skill: 'writing', topics: ['word-order', 'past-simple'], title: 'Writing a short message',
    teach: ['Join ideas with **and**, **but**, **because** and **so**. This makes your writing sound much more natural.',
      "> I was tired, so I went to bed.", "> I like tea, but I don't like coffee.", '> She called because she needed help.'],
    ex: [M('It was raining, ___ we stayed at home.', ['so', 'because', 'but', 'or'], '"So" gives the result.'),
      M('I went to the shop ___ I needed milk.', ['because', 'so', 'but', 'and then'], '"Because" gives the reason.'),
      O('I was late because I missed the bus', 'Reason comes after "because".'),
      W('Write a message to a friend (4 or 5 sentences) about what you did last weekend. Use "and", "but" or "because".',
        ['Past verbs are correct (went, saw, had)', 'I used at least two joining words', 'I started and finished politely'],
        'Hi Sara! Last weekend I visited my family. We had lunch and we walked by the sea. It was hot, but it was lovely. I came home early because I was tired. See you soon!')] });

  // ======================= B1 =======================
  add({ id: 'b1-perfect', level: 3, skill: 'grammar', topics: ['present-perfect'], title: 'Have you ever?',
    teach: ['Use the **present perfect** (have/has + past participle) for experiences and for situations that began in the past and continue now.',
      '> I have been to Turkey twice.', '> She has lived here since 2019.', '> We have known them for ten years.',
      'Use the **past simple** when you say when something finished. **Since** gives a start point. **For** gives a length of time.',
      '> I went to Turkey in 2022.'],
    ex: [M('I ___ her since we were children.', ['have known', 'know', 'knew', 'am knowing'], '"Since" with a situation still true now needs the present perfect.'),
      M('She ___ to Paris last year.', ['went', 'has gone', 'has been', 'goes'], '"Last year" is a finished time, so use the past simple.'),
      F('We have lived here ___ five years.', ['for'], '"For" + a length of time.'),
      E('My brother [have] finished his exams.', 'has', 'He takes "has".'),
      O('Have you ever eaten sushi', 'Have + you + ever + past participle.')] });

  add({ id: 'b1-cond1', level: 3, skill: 'grammar', topics: ['first-conditional'], title: 'If it rains, we will stay',
    teach: ['The **first conditional** talks about a real possibility in the future: **if + present, will + verb**.',
      "> If it rains, we'll stay at home.", "> I'll call you if I have time.",
      'Do not use "will" straight after if. The same rule applies after **when**, **as soon as** and **unless**.',
      "> I'll text you when I arrive."],
    ex: [M('If you ___ now, you will catch the bus.', ['leave', 'will leave', 'left', 'leaving'], 'After "if", use the present.'),
      M('We will miss the film ___ we hurry.', ['unless', 'if', 'when', 'because'], '"Unless" means "if not".'),
      F('I will tell him when I ___ him. (see)', ['see'], 'After "when" in a future sentence, use the present.'),
      E('If I [will] see her, I will give her the keys.', 'see', 'Remove "will" after "if".')] });

  add({ id: 'b1-modals', level: 3, skill: 'grammar', topics: ['modals'], title: 'Must, should, might',
    teach: ['Modal verbs change the strength of what you say. They are followed by the base verb, with no "to".',
      [['Word', 'Meaning', 'Example'], ['must', 'very strong need', 'You must wear a helmet.'], ["mustn't", 'it is not allowed', "You mustn't smoke here."], ["don't have to", 'it is not necessary', "You don't have to pay."], ['should', 'good advice', 'You should see a doctor.'], ['might', 'perhaps', 'It might rain later.']]],
    ex: [M('It is free. You ___ pay.', ["don't have to", "mustn't", 'should', 'must'], 'It is not necessary. "Mustn\'t" would mean it is forbidden.'),
      M('You look ill. You ___ go home.', ['should', 'might', "don't have to", 'would'], 'This is advice.'),
      M('Take an umbrella. It ___ rain.', ['might', 'must', 'should', 'has to'], 'This is a possibility.'),
      E('You should [to] drink more water.', '(remove)', 'Modal verbs are followed by the base verb with no "to".')] });

  add({ id: 'b1-gerunds', level: 3, skill: 'grammar', topics: ['gerunds'], title: 'Enjoy doing, want to do',
    teach: ['Some verbs are followed by **-ing**. Others are followed by **to + verb**. These must be learned in groups.',
      [['+ -ing', '+ to'], ['enjoy, finish, avoid, suggest', 'want, decide, hope, plan']],
      '> I enjoy cooking.', '> We decided to leave.',
      'After a preposition, always use **-ing**. That includes the "to" in **look forward to**.',
      '> She is good at swimming.', "> I'm looking forward to meeting you."],
    ex: [M('I want ___ a new job.', ['to find', 'finding', 'find', 'found'], '"Want" takes "to".'),
      M('She finished ___ the report.', ['writing', 'to write', 'write', 'wrote'], '"Finish" takes -ing.'),
      F('He is interested in ___ Arabic. (learn)', ['learning'], 'After a preposition, use -ing.'),
      E('I look forward to [hear] from you.', 'hearing', 'In "look forward to", "to" is a preposition.')] });

  add({ id: 'b1-words', level: 3, skill: 'vocabulary', topics: ['core-words', 'collocation'], title: 'Words that go together',
    intro: 'English speakers remember words in pairs. Learn "spend money", not just "spend".',
    words: [['spend', 'verb', '/spend/', 'to use money or time', 'I spend too much money on shoes.'],
      ['afford', 'verb', '/əˈfɔːd/', 'to have enough money for something', 'We cannot afford a new car.'],
      ['advice', 'noun', '/ədˈvaɪs/', 'an opinion about what someone should do', 'My teacher gave me good advice.'],
      ['improve', 'verb', '/ɪmˈpruːv/', 'to become or make better', 'I want to improve my English.'],
      ['decision', 'noun', '/dɪˈsɪʒn/', 'a choice you make after thinking', 'It was a difficult decision.'],
      ['forget', 'verb', '/fəˈɡet/', 'to not remember', "Don't forget to lock the door."],
      ['afraid', 'adjective', '/əˈfreɪd/', 'feeling fear', 'She is afraid of the dark.'],
      ['although', 'conjunction', '/ɔːlˈðəʊ/', 'despite the fact that', 'We went out, although it was cold.']] });

  add({ id: 'b1-read', level: 3, skill: 'reading', topics: ['main-idea', 'inference'], title: 'Finding the main idea',
    teach: ['The main idea is often in the **first or last sentence** of a paragraph. Watch for **however**, because the writer often turns to the real point after it.'],
    passage: 'Many parents worry that video games are bad for their children. It is true that playing for hours can affect sleep and schoolwork. However, some research shows that certain games improve problem-solving and help shy children make friends. The real question may be how long children play and what they play, not whether they play at all.',
    ex: [M('What is the main idea?', ['The effects of games depend on how they are used', 'Games are always bad for children', 'Children should play for longer', 'Parents should play with their children'], 'See the last sentence.'),
      M('What is one problem the text mentions?', ['Less sleep', 'Bad eyesight', 'Expensive games', 'Fewer friends'], '"Can affect sleep and schoolwork."'),
      M('What can we guess about the writer?', ['They try to see both sides', 'They hate video games', 'They make video games', 'They have no children'], 'The writer gives both positive and negative points.')] });

  add({ id: 'b1-listen', level: 3, skill: 'listening', topics: ['listen-gist', 'listen-detail'], title: 'Understanding a voicemail',
    teach: ['Before you listen, read the questions and guess what you might hear. On the first listen, get the general idea. On the second, get the details.'],
    script: "Hello, this is Karen from City Car Repairs, calling about your car. We've looked at the brakes and they need replacing, which will cost about two hundred pounds. Unfortunately, the part won't arrive until Wednesday, so the car won't be ready until Thursday morning. Could you call us today and let us know if you'd like us to go ahead? Thanks.",
    ex: [M('What is wrong with the car?', ['The brakes', 'The engine', 'The doors', 'The tyres'], '"They need replacing" refers to the brakes.'),
      M('When will the car be ready?', ['Thursday morning', 'Wednesday', 'Today', 'Friday'], 'The part arrives on Wednesday. The car is ready on Thursday morning.'),
      M('What must the listener do?', ['Call and say if they should do the repair', 'Pay two hundred pounds today', 'Collect the car on Wednesday', 'Buy a new part'], '"Let us know if you\'d like us to go ahead."')] });

  add({ id: 'b1-write', level: 3, skill: 'writing', topics: ['present-perfect', 'gerunds'], title: 'Writing a clear paragraph',
    teach: ['A good paragraph has **one main idea**. Start with it, give reasons or examples, then finish. Use linking words such as **first**, **also**, **for example** and **however**.'],
    ex: [M('Choose the best first sentence for a paragraph about a favourite city.', ['My favourite city is Istanbul because it has so much history.', 'Istanbul.', 'There are many things.', 'I went there and it was good and then I came back.'], 'It states the topic and the main reason.'),
      E('I have visited Istanbul [since] three times.', '(remove)', 'Say "three times" with no "since".'),
      M('It is expensive. ___, I love living there.', ['However', 'Because', 'For example', 'So'], '"However" shows contrast.'),
      W('Write about 60 words: describe a place you like and say why you like it.',
        ['My first sentence gives the main idea', 'I gave at least two reasons', 'I used a linking word (also, however, for example)'],
        'My favourite place is the old market in my city. First, it is full of colour and wonderful smells. Also, the sellers know me and always say hello. It can be crowded at weekends. However, I still go every month, because it makes me feel at home.')] });
})(typeof globalThis !== 'undefined' ? globalThis : this);
