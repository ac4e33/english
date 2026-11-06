// A second reading and listening lesson at every level, so a learner who is weak in these skills has enough to practise.
(function (root) {
  var S = root.SchwaLessons, M = S.M, add = S.add;

  // ---------- Reading ----------
  add({ id: 'a1-read2', level: 1, skill: 'reading', topics: ['detail'], title: 'Reading a timetable',
    teach: ['Times and days are easy to find. Look for **numbers and capital letters**.'],
    passage: 'English class: Monday and Wednesday, 6:00 to 7:00. Room 4. Teacher: Mrs Khan. Please bring a pen and a notebook.',
    ex: [M('When is the class?', ['Monday and Wednesday', 'Tuesday and Thursday', 'Every day', 'Saturday'], '"Monday and Wednesday."'),
      M('Who is the teacher?', ['Mrs Khan', 'Mrs Ali', 'Mr Khan', 'Mrs Noor'], '"Teacher: Mrs Khan."'),
      M('What do you need to bring?', ['A pen and a notebook', 'A book and a bag', 'A phone', 'Food and water'], '"Please bring a pen and a notebook."')] });
  add({ id: 'a2-read2', level: 2, skill: 'reading', topics: ['detail', 'inference'], title: 'Reading an advert',
    teach: ['Adverts leave out small words. Read for the **facts**: what, where, how much, and who to contact.'],
    passage: 'FOR SALE: Blue sofa, 2 years old, very comfortable. Small mark on one side. 80 rials, or best offer. You must collect it from Ruwi. Moving abroad next month. Call Hana after 5 p.m.',
    ex: [M('How old is the sofa?', ['2 years old', '5 years old', 'New', '8 years old'], '"2 years old."'),
      M('Why is Hana selling it?', ['She is going to live in another country', 'It is broken', 'She does not like blue', 'It is too small'], '"Moving abroad next month."'),
      M('What can we understand from "or best offer"?', ['The price can be lower', 'The sofa is free', 'The price is fixed', 'The sofa is the best'], 'She may accept less than 80 rials.')] });
  add({ id: 'b1-read2', level: 3, skill: 'reading', topics: ['detail', 'main-idea'], title: 'Reading a personal story',
    teach: ['Stories change direction. Watch for words such as **but**, **then** and **in the end**, which show the most important moments.'],
    passage: 'I was terrified of speaking English on the phone. For years, I asked my husband to make all of my calls. Then, last spring, he went abroad for a month and the washing machine broke. I wrote down what to say, practised it five times and called the repair company. The man asked me to repeat my address, but he understood me. It was a small thing, but I walked around the house smiling for an hour.',
    ex: [M('Why did the writer have to make the call?', ['Her husband was away', 'Her husband asked her to', 'A teacher told her to', 'The company called first'], '"He went abroad for a month."'),
      M('How did she prepare?', ['She wrote it down and practised', 'She asked a neighbour', 'She took a phone class', 'She read a book'], '"I wrote down what to say, practised it five times."'),
      M('What is the main message?', ['A small success can build confidence', 'Washing machines often break', 'Phone calls are not important', 'Husbands should stay at home'], 'She is smiling because she overcame her fear.')] });
  add({ id: 'b2-read2', level: 4, skill: 'reading', topics: ['main-idea', 'inference'], title: 'Reading a news feature',
    teach: ['News features often open with one person, then widen to the general point. The **real topic** usually appears by the second or third sentence.'],
    passage: 'When Fatima Said opened her small bakery, she assumed that the hard part would be the baking. Instead, it was the paperwork. Across the region, thousands of small business owners report the same experience, spending more time on permits and tax forms than on their customers. A new online service now promises to cut that burden by half, but early users warn that it works well only for those who are already comfortable with technology.',
    ex: [M('What is the article mainly about?', ['Paperwork is a major burden for small businesses', 'How to bake successfully', 'Why Fatima Said closed her shop', 'New taxes on bakeries'], 'Fatima is one example of a wider problem.'),
      M('What is the limit of the new service?', ['It may not help people who are less confident with technology', 'It is too expensive', 'It is only for bakeries', 'It increases the paperwork'], '"Works well only for those who are already comfortable with technology."'),
      M('Why does the writer begin with Fatima?', ['To make a general problem feel real', 'Because she designed the service', 'To advertise her bakery', 'Because she is a tax expert'], 'One person\'s story introduces a wider issue.')] });
  add({ id: 'c1-read2', level: 5, skill: 'reading', topics: ['tone', 'inference'], title: 'Reading an opinion column',
    teach: ['Opinion writers **concede** a point before attacking it. "Admittedly" and "to be sure" often introduce an idea that the writer is about to knock down.'],
    passage: 'Admittedly, the case for banning phones in classrooms has an appealing simplicity. Attention is finite, phones consume it, and therefore phones must go. Yet schools that have tried it report mixed results at best, and for good reason: the distraction was never really about the device. A pupil who is bored will find something else to do. A ban treats the symptom, and leaves untouched the far harder question of why so many lessons fail to hold attention in the first place.',
    ex: [M('What is the writer\'s view of phone bans?', ['They avoid the real problem', 'They are the best solution', 'They should be extended', 'They have always succeeded'], '"A ban treats the symptom."'),
      M('"An appealing simplicity" suggests that the argument is:', ['Attractive but too simple', 'Completely correct', 'Too complicated', 'Rarely discussed'], '"Admittedly" signals that a criticism is coming.'),
      M('What deeper issue does the writer raise?', ['Why lessons often fail to hold attention', 'How expensive phones are', 'Whether teachers should use phones', 'How many pupils own phones'], 'See the last sentence.')] });
  add({ id: 'c2-read2', level: 6, skill: 'reading', topics: ['inference', 'tone'], title: 'Reading literary criticism',
    teach: ['Critical prose packs a judgement into its **grammar**. A phrase such as "for all its" or "if only" can quietly reverse what the rest of the sentence seems to praise.'],
    passage: 'It is the peculiar achievement of this biography to have rendered a tumultuous life entirely uneventful. Every scandal is scrupulously footnoted; every passion is weighed, dated and filed. One closes the book knowing where its subject dined on almost any evening of 1923, and with no idea at all why anyone should have wished to dine with her.',
    ex: [M('What is the critic\'s judgement of the biography?', ['It is thorough but lifeless', 'It is exciting and dramatic', 'It contains many errors', 'It is too short'], 'Plenty of facts, yet no sense of the person.'),
      M('"Peculiar achievement" is:', ['An ironic form of criticism', 'Sincere praise', 'A comment on the author\'s health', 'A neutral description'], 'Making an exciting life dull is no real achievement.'),
      M('The final sentence implies that the book fails to:', ['Show what made its subject compelling', 'Give accurate dates', 'Mention her friends', 'Cover the year 1923'], 'We never learn why anyone wanted her company.')] });

  // ---------- Listening ----------
  add({ id: 'a1-listen2', level: 1, skill: 'listening', topics: ['listen-detail'], title: 'In a shop',
    teach: ['Prices and colours are common in shops. Listen for **how much**, and for the number after it.'],
    script: 'A: Hello. How much is this bag? B: It is ten pounds. A: Do you have it in black? B: Yes, here you are. A: Thank you. Here is ten pounds. B: Thank you. Have a nice day!',
    ex: [M('How much is the bag?', ['10 pounds', '2 pounds', '12 pounds', '20 pounds'], '"It is ten pounds."'),
      M('What colour does the customer want?', ['Black', 'Blue', 'Red', 'Brown'], '"Do you have it in black?"'),
      M('Does the customer buy the bag?', ['Yes', 'No', 'Maybe tomorrow', 'The shop has none'], '"Here is ten pounds."')] });
  add({ id: 'a2-listen2', level: 2, skill: 'listening', topics: ['listen-detail', 'listen-gist'], title: 'Announcements',
    teach: ['Announcements are fast, but the key words are stressed. Listen for **places, times and numbers**.'],
    script: 'This is an announcement for passengers on flight two seven one to Dubai. The flight is now boarding at gate eighteen. Please have your passport and boarding pass ready. Passengers with small children may board first.',
    ex: [M('Where is the flight going?', ['Dubai', 'Doha', 'Delhi', 'Dublin'], '"Flight two seven one to Dubai."'),
      M('Which gate?', ['18', '80', '8', '27'], '"Gate eighteen."'),
      M('Who can board first?', ['Passengers with small children', 'Business passengers', 'Older passengers', 'People with no bags'], '"Passengers with small children may board first."')] });
  add({ id: 'b1-listen2', level: 3, skill: 'listening', topics: ['listen-gist', 'listen-detail'], title: 'Talking about a job',
    teach: ['People do not always answer directly. Listen for their **reasons**, which usually come after because or the thing is.'],
    script: "A: How's the new job going? B: It's good, thanks. The people are really friendly, and I'm learning a lot. A: What about the journey? It must be long. B: The thing is, it takes over an hour each way. But I read on the train, so I don't mind too much. A: And do you think you'll stay? B: For now, yes. I'd like to get some experience first, and then maybe look for something closer to home.",
    ex: [M('What does B like about the job?', ['The people and the learning', 'The short journey', 'The high pay', 'The long holidays'], '"The people are really friendly, and I\'m learning a lot."'),
      M('How does B feel about the journey?', ['It is long, but acceptable', 'It is very short', 'B hates it', 'B walks to work'], '"I don\'t mind too much."'),
      M('What might B do in the future?', ['Find a job nearer home', 'Move to the city centre', 'Stop working', 'Start a company'], '"Look for something closer to home."')] });
  add({ id: 'b2-listen2', level: 4, skill: 'listening', topics: ['listen-gist', 'listen-inference'], title: 'A short radio talk',
    teach: ['Radio speakers guide you with signposts such as **the first thing**, **what surprised me** and **in other words**. Use these to follow the structure.'],
    script: "What surprised me most about learning a language in my forties was how much I'd been told was wrong. People say that adults can't learn languages, and it's simply not true. What adults find hard is sounding like a native speaker, and most of us don't need that. In other words, the goal shouldn't be perfection. It should be communication. Once I accepted that, I stopped apologising for my accent and started enjoying the conversation.",
    ex: [M('What is the speaker\'s main message?', ['Adults can learn languages if the aim is communication', 'Adults cannot learn languages', 'Accents should be removed', 'Children learn too slowly'], '"The goal shouldn\'t be perfection. It should be communication."'),
      M('What does the speaker say adults find difficult?', ['Sounding like a native speaker', 'Remembering words', 'Finding time', 'Reading grammar books'], 'This is stated directly.'),
      M('What changed for the speaker?', ['They became more relaxed about their accent', 'They moved abroad', 'They found a new teacher', 'They lost interest'], '"I stopped apologising for my accent."')] });
  add({ id: 'c1-listen2', level: 5, skill: 'listening', topics: ['listen-gist', 'listen-inference'], title: 'Following an expert interview',
    teach: ['Experts qualify what they say. Phrases such as **up to a point** and **it depends what you mean by** show that they only partly agree.'],
    script: "A: So, would you say that remote work has made people more productive? B: Up to a point. It depends what you mean by productive. If you're counting tasks completed, then yes, the figures look encouraging. But the things that are harder to measure, like mentoring junior staff or the chance conversation that leads to a new idea, those seem to be suffering. A: So the gains may be overstated? B: I'd say that they're real, but they're borrowed. We may be spending the trust and relationships that we built up in the office, and those won't last forever.",
    ex: [M('What is the expert\'s overall position?', ['Productivity gains are real but may not last', 'Remote work has no benefits', 'Remote work is better in every way', 'The figures are invented'], '"They\'re real, but they\'re borrowed."'),
      M('What does "borrowed" imply here?', ['Today\'s gains rely on trust built up earlier', 'Staff borrow office equipment', 'Companies are in debt', 'Ideas are copied from others'], '"Spending the trust and relationships that we built up."'),
      M('What is suffering, according to the expert?', ['Things that are hard to measure, such as mentoring', 'Task completion', 'Salaries', 'Technology'], 'Mentoring and chance conversations.')] });
  add({ id: 'c2-listen2', level: 6, skill: 'listening', topics: ['listen-inference'], title: 'Understatement and irony',
    teach: ['Very high-level listening means catching **what is deliberately left unsaid**. Ask what the speaker has chosen to praise, and what they have chosen not to mention.'],
    script: "I've read the proposal with great interest, and I must say the formatting is exemplary. The executive summary is admirably brief, the charts are in a very pleasant shade of blue, and there's a most thorough list of everyone who attended the workshops. I did look for the part explaining how any of it would be paid for, but I dare say that's in a later draft.",
    ex: [M('What is the speaker\'s real opinion of the proposal?', ['It looks good, but has no substance on the key issue', 'It is excellent in every way', 'The formatting is poor', 'It is too expensive'], 'Only surface details get praise.'),
      M('Why does the speaker mention the charts\' colour?', ['To suggest that there is little else to praise', 'Because colour is vital in finance', 'To request a different colour', 'To compliment the designer sincerely'], 'Praising something so minor is a form of criticism.'),
      M('"I dare say that\'s in a later draft" is:', ['A sarcastic way to point out a serious omission', 'A genuine belief that it is coming', 'An offer to write it', 'A complaint about the number of drafts'], 'The missing funding plan is the real target.')] });
})(typeof globalThis !== 'undefined' ? globalThis : this);
