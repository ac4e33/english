// Lesson library, levels B2 to C2, speaking lessons, and goal-specific word packs.
(function (root) {
  var S = root.SchwaLessons;
  var M = S.M, F = S.F, O = S.O, E = S.E, W = S.W, SAY = S.SAY, add = S.add;

  // ======================= B2 =======================
  add({ id: 'b2-passive', level: 4, skill: 'grammar', topics: ['passive'], title: 'It was built in 1932',
    teach: ['Use the **passive** (be + past participle) when the action matters more than who did it, or when we do not know who did it.',
      '> The bridge was built in 1932.', '> Thousands of cars are made here every year.', '> The results will be announced on Friday.',
      'Add **by** only when the doer is useful information.', '> The novel was written by a teenager.'],
    ex: [M('The letter ___ yesterday.', ['was sent', 'sent', 'has sent', 'was sending'], 'The letter did not send itself. Use be + past participle.'),
      M('English ___ all over the world.', ['is spoken', 'speaks', 'is speaking', 'spoke'], 'A general fact in the passive.'),
      F('The meeting has been ___ until Monday. (postpone)', ['postponed'], 'has been + past participle.'),
      E('The new hospital will [opened] next year.', 'be opened', 'Future passive: will be + past participle.')] });

  add({ id: 'b2-cond2', level: 4, skill: 'grammar', topics: ['second-conditional'], title: 'If I had more time',
    teach: ['The **second conditional** is for unreal or unlikely situations: **if + past, would + verb**. The past form here does not mean past time.',
      '> If I had more time, I would learn the piano.', "> What would you do if you lost your job?",
      'Compare a real possibility with an unreal one.',
      "> If I see him, I'll tell him. (it may happen)", "> If I saw a lion, I'd run. (very unlikely)"],
    ex: [M('If she ___ closer, she would visit more often.', ['lived', 'lives', 'would live', 'has lived'], 'Unreal now: if + past.'),
      M('I ___ that car if I were you.', ["wouldn't buy", "won't buy", "don't buy", "didn't buy"], 'If I were you is unreal, so use would.'),
      F('If I ___ the answer, I would tell you. (know)', ['knew'], 'if + past form.'),
      E('If I [would] have a garden, I would grow tomatoes.', 'had', 'Do not use "would" in the if part: "If I had a garden".')] });

  add({ id: 'b2-relative', level: 4, skill: 'grammar', topics: ['relative-clauses'], title: 'Who, which, whose',
    teach: ['**Relative clauses** add information about a noun. Use **who** for people, **which** for things, **whose** for possession and **where** for places.',
      '> The man who called is my uncle.', '> The phone which I bought has broken.', '> The woman whose car was stolen called the police.',
      'If the extra information is not essential, put commas around it and do not use "that".',
      '> My sister, who lives in Oman, is a pilot.'],
    ex: [M('That is the hotel ___ we stayed.', ['where', 'who', 'whose', 'which'], 'A place, and "stayed" needs no object.'),
      M('The student ___ essay won is from Iraq.', ['whose', 'who', 'which', 'where'], 'The essay belongs to the student.'),
      M('My father, ___ is 70, still works.', ['who', 'that', 'which', 'whose'], 'With commas, use "who" for a person, not "that".'),
      E('The book [who] you lent me was excellent.', 'that / which', 'A book is a thing.')] });

  add({ id: 'b2-accuracy', level: 4, skill: 'writing', topics: ['uncountables', 'linkers'], title: 'Errors that even good speakers make',
    teach: ['Some nouns have **no plural** in English: advice, information, news, furniture, equipment, research, luggage. Say **a piece of advice**.',
      '> She gave me some useful advice.',
      '**Despite** and **in spite of** take a noun or -ing. **Although** takes a full sentence.',
      '> Despite the rain, we went out.', '> Although it was raining, we went out.'],
    ex: [E('We need more [informations] about the course.', 'information', 'Information has no plural.'),
      M('___ being tired, she finished the report.', ['Despite', 'Although', 'However', 'Even'], 'Despite + -ing.'),
      M('___ the traffic was heavy, we arrived on time.', ['Although', 'Despite', 'In spite of', 'However'], 'Although + full sentence.'),
      E('All my [luggages] arrived safely.', 'luggage', 'Luggage has no plural.')] });

  add({ id: 'b2-words', level: 4, skill: 'vocabulary', topics: ['collocation', 'phrasal'], title: 'Phrasal verbs and strong pairs',
    intro: 'At this level, natural English depends on phrasal verbs and fixed word pairs.',
    words: [['turn down', 'phrasal verb', '/tɜːn daʊn/', 'to refuse an offer', 'She had to turn down the job.'],
      ['put off', 'phrasal verb', '/pʊt ɒf/', 'to delay doing something', "Don't put off going to the dentist."],
      ['run out of', 'phrasal verb', '/rʌn aʊt əv/', 'to have no more of something', 'We will run out of time.'],
      ['impact', 'noun', '/ˈɪmpækt/', 'a strong effect', 'The law had a huge impact on farmers.'],
      ['reliable', 'adjective', '/rɪˈlaɪəbl/', 'that you can trust or depend on', 'He is a very reliable colleague.'],
      ['significant', 'adjective', '/sɪɡˈnɪfɪkənt/', 'large or important', 'There was a significant rise in prices.'],
      ['require', 'verb', '/rɪˈkwaɪə/', 'to need', 'This job will require patience.'],
      ['whereas', 'conjunction', '/weərˈæz/', 'used to contrast two facts', 'I like tea, whereas my wife prefers coffee.']] });

  add({ id: 'b2-read', level: 4, skill: 'reading', topics: ['inference', 'tone', 'main-idea'], title: 'Reading between the lines',
    teach: ['Writers do not always say what they think directly. Look at their **word choices**: "claims", "so-called" and "surprisingly" all show an attitude.'],
    passage: "The company claims that its new four-day week has been a complete success. Productivity, it says, is up, and staff have never been happier. Yet the survey behind these figures was answered by only a fifth of employees, all of them volunteers. Those who were struggling may simply have had better things to do than fill in a form. Before other firms rush to copy the idea, they might want to ask for better evidence.",
    ex: [M('How does the writer feel about the company\'s claim?', ['Doubtful', 'Delighted', 'Angry', 'Uninterested'], '"Claims", "yet" and "ask for better evidence" all show doubt.'),
      M('What is the problem with the survey?', ['Too few staff answered it, and they chose to', 'It asked the wrong questions', 'It was carried out by the company\'s rivals', 'It was too long'], '"Only a fifth of employees, all of them volunteers."'),
      M('What is the writer\'s advice to other firms?', ['Look for stronger evidence first', 'Copy the idea quickly', 'Survey all customers', 'Never reduce the working week'], 'See the last sentence.')] });

  add({ id: 'b2-listen', level: 4, skill: 'listening', topics: ['listen-gist', 'listen-inference'], title: 'Following a real discussion',
    teach: ['Listen for **how** people disagree. Phrases such as **"I see your point, but"** and **"to be honest"** signal what the speaker truly thinks.'],
    script: "A: I think we should move the conference online this year. It would save us a fortune. B: I see your point, but half the value is the conversations people have over coffee. You can't really get that on a screen. A: True, but last year's feedback said the venue was too far away. B: Then let's find a better venue, rather than cancel the whole thing. A: Fine. Could you get me some prices by Friday?",
    ex: [M('Why does A want to go online?', ['To save money', 'To get better feedback', 'To avoid the coffee', 'To finish by Friday'], '"It would save us a fortune."'),
      M('What does B value about meeting in person?', ['Informal conversations', 'The low cost', 'The screens', 'The location'], '"The conversations people have over coffee."'),
      M('What do they agree in the end?', ['B will find prices for a better venue', 'The conference will be online', 'The conference will be cancelled', 'A will visit the old venue'], '"Could you get me some prices by Friday?"')] });

  add({ id: 'b2-write', level: 4, skill: 'writing', topics: ['register'], title: 'Formal or informal?',
    teach: ['**Register** means matching your language to the reader. Formal writing avoids short forms and casual words.',
      [['Informal', 'Formal'], ['I want to ask about', 'I am writing to enquire about'], ['Sorry about', 'I apologise for'], ['get', 'receive / obtain'], ['Thanks a lot', 'Thank you for your assistance'], ['Bye', 'Kind regards']]],
    ex: [M('Which is the best opening for a formal complaint?', ['I am writing to complain about the service I received.', 'Hi guys, your service was rubbish.', 'I want to tell you off about the service.', 'Service bad. Please to fix.'], 'Polite, direct and in full forms.'),
      M('Formal version of "I got your email":', ['I have received your email.', 'I got your mail okay.', 'Your email came.', 'Yeah, got it.'], '"Received" is the formal choice.'),
      F('Formal: "I ___ for the delay."', ['apologise', 'apologize'], '"Apologise" is more formal than "sorry about".'),
      W('Write a short formal email (about 80 words) to a company, asking about a job you saw advertised.',
        ['I opened with "Dear ..."', 'I gave my reason for writing in the first sentence', 'I avoided short forms like "I\'m" and "don\'t"', 'I closed with "Kind regards"'],
        'Dear Ms Hassan,\n\nI am writing to enquire about the sales position advertised on your website. I have three years of experience in customer service and I am keen to develop my career in this field. Could you please let me know the closing date and how to apply? I have attached my CV for your consideration.\n\nThank you for your assistance.\n\nKind regards,\nHuda Salim')] });

  // ======================= C1 =======================
  add({ id: 'c1-cond3', level: 5, skill: 'grammar', topics: ['third-conditional'], title: 'If she had left earlier',
    teach: ['The **third conditional** imagines a different past: **if + past perfect, would have + participle**.',
      '> If she had left earlier, she would have caught the train.',
      '**Mixed conditionals** connect a past condition to a present result.',
      "> If I had studied medicine, I would be a doctor now."],
    ex: [M('If I ___ about the party, I would have come.', ['had known', 'knew', 'have known', 'would know'], 'Unreal past: if + past perfect.'),
      M('If he had taken the job, he ___ rich now.', ['would be', 'would have been', 'will be', 'is'], 'Mixed: past condition, present result ("now").'),
      F('We would have won if you ___ played. (had / have)', ['had'], 'if + past perfect: "had played".'),
      M('Which sentence is correct?', ['I would have helped if you had asked me.', 'I would help if you had asked me yesterday.', 'I had helped if you would have asked me.', 'I would have helped if you would have asked me.'], 'would have + participle, with if + past perfect.')] });

  add({ id: 'c1-inversion', level: 5, skill: 'grammar', topics: ['inversion'], title: 'Not only did he arrive late',
    teach: ['After certain negative openings, the verb goes **before** the subject, as in a question. This adds emphasis and is common in formal English.',
      '> Not only did he arrive late, but he also forgot the documents.', '> Rarely have I seen such a mess.', '> Not until the next day did we realise what had happened.', '> Hardly had we sat down when the phone rang.'],
    ex: [M('Never ___ such a beautiful view.', ['have I seen', 'I have seen', 'I saw', 'seen I have'], 'Invert after "Never".'),
      M('Only later ___ the truth.', ['did she learn', 'she learned', 'she did learn', 'learned she'], 'Invert after "Only later".'),
      F('Not until Friday ___ we hear the news. (auxiliary)', ['did'], '"Not until" + did + subject + base verb.'),
      M('Rarely ___ so surprised.', ['have I been', 'I have been', 'I been have', 'been I have'], 'After "rarely", the auxiliary comes first.')] });

  add({ id: 'c1-modalpast', level: 5, skill: 'grammar', topics: ['modals-past'], title: 'You should have told me',
    teach: ['**Modal + have + participle** talks about the past.',
      [['Form', 'Meaning', 'Example'], ['should have', 'it was right, but it did not happen', 'You should have told me.'], ['must have', 'I am sure this happened', 'He must have left early.'], ["can't have", 'I am sure this did not happen', "She can't have seen us."], ['might have', 'perhaps this happened', 'They might have got lost.']]],
    ex: [M('The lights are off. They ___ gone out.', ['must have', 'should have', "can't have", 'would'], 'A confident conclusion about the past.'),
      M('She was in Paris that day, so you ___ seen her in Rome.', ["can't have", 'must have', 'should have', 'might'], 'This is impossible.'),
      M('I feel terrible. I ___ said that to him.', ["shouldn't have", "mustn't have", "can't have", "might not"], 'A regret: it was wrong.'),
      F('He is not answering. He might ___ forgotten his phone. (auxiliary)', ['have'], 'might have + participle.')] });

  add({ id: 'c1-words', level: 5, skill: 'vocabulary', topics: ['academic', 'collocation'], title: 'Precise academic words',
    intro: 'These words let you argue with more accuracy than "good", "big" or "show".',
    words: [['compelling', 'adjective', '/kəmˈpelɪŋ/', 'so strong that you must accept it', 'She made a compelling case for reform.'],
      ['downplay', 'verb', '/ˌdaʊnˈpleɪ/', 'to make something seem less important', 'Officials tried to downplay the risk.'],
      ['ample', 'adjective', '/ˈæmpl/', 'more than enough', 'There is ample evidence for this view.'],
      ['underlying', 'adjective', '/ˌʌndəˈlaɪɪŋ/', 'real but not obvious', 'We must address the underlying cause.'],
      ['undermine', 'verb', '/ˌʌndəˈmaɪn/', 'to weaken gradually', 'Such scandals undermine public trust.'],
      ['notably', 'adverb', '/ˈnəʊtəbli/', 'especially, in a way worth mentioning', 'Some countries, notably Japan, have done well.'],
      ['contend', 'verb', '/kənˈtend/', 'to argue that something is true', 'Critics contend that the plan is too costly.'],
      ['negligible', 'adjective', '/ˈneɡlɪdʒəbl/', 'too small to matter', 'The cost was negligible.']] });

  add({ id: 'c1-read', level: 5, skill: 'reading', topics: ['tone', 'detail', 'main-idea'], title: 'Following an argument',
    teach: ['In advanced texts, look for who holds each view. Words like **contend**, **counter** and **concede** tell you whose position is being described, and it may not be the author\'s.'],
    passage: "Advocates of congestion charging contend that drivers respond to price as they respond to anything else, and the experience of several cities bears them out: traffic falls, and air quality improves. Opponents counter that the charge weighs most heavily on those with the fewest alternatives, a concern that supporters too often wave away. Yet this is an argument for spending the revenue on better buses, not for abandoning the scheme. Fairness and efficiency, in this case, need not be enemies.",
    ex: [M('What is the writer\'s own position?', ['The charge can work if the money improves public transport', 'The charge should be abandoned', 'The charge is unfair and cannot be fixed', 'Buses should be replaced by cars'], '"An argument for spending the revenue on better buses, not for abandoning the scheme."'),
      M('The phrase "wave away" suggests that supporters:', ['Do not take the concern seriously enough', 'Have solved the problem', 'Strongly agree with opponents', 'Are not aware of the charge'], 'To wave something away is to dismiss it.'),
      M('Who is most affected, according to opponents?', ['People with few other transport options', 'Wealthy drivers', 'Bus companies', 'City councils'], '"Those with the fewest alternatives."')] });

  add({ id: 'c1-listen', level: 5, skill: 'listening', topics: ['listen-inference', 'listen-gist'], title: 'Hearing what is not said',
    teach: ['Native speakers often **imply** instead of stating. "I wouldn\'t hold your breath" means "do not expect it". Understatement is especially common in British English.'],
    script: "A: So how was the new manager's first week? B: Well, she's certainly got a lot of ideas. A: That sounds positive. B: Mm. We've had three new reporting systems since Monday, and it's only Thursday. A: Ah. And how's the team taking it? B: Let's just say that people have started updating their CVs.",
    ex: [M('What does B really think of the new manager?', ['She is changing too much, too quickly', 'She is doing an excellent job', 'She has no ideas', 'She is rarely in the office'], 'The positive-sounding comment is followed by a sign of too much change.'),
      M('"People have started updating their CVs" means staff are:', ['Thinking of leaving', 'Being promoted', 'Doing extra training', 'Writing new reports'], 'You update your CV when you plan to look for a new job.'),
      M('How would you describe B\'s tone?', ['Dry and understated', 'Openly furious', 'Warm and excited', 'Confused'], 'B never criticises directly.')] });

  add({ id: 'c1-write', level: 5, skill: 'writing', topics: ['register', 'agreement'], title: 'Writing like an expert',
    teach: ['Good formal writing is **concise**. Remove empty words, and use a precise verb in place of a long phrase. Check agreement: **the number of** takes a singular verb, whereas **a number of** takes a plural.',
      '> The number of applicants has risen.', '> A number of applicants have complained.'],
    ex: [E('The list of candidates [were] published on Monday.', 'was', 'The subject is "list", which is singular.'),
      M('Most concise version of "Due to the fact that it was raining":', ['Because of the rain', 'On account of the fact of the rain', 'Owing to the fact that rain was falling', 'Since rain was what was happening'], 'Two or three words can do the work of eight.'),
      M('Choose the best hedged claim for an academic essay.', ['The data suggest that the policy may have reduced costs.', 'The data prove the policy is totally great.', 'Obviously, everyone knows the policy worked.', 'I feel like the policy kind of worked.'], '"Suggest" and "may" show careful, academic thinking.'),
      W('Write about 100 words: should companies let all of their staff work from home? Argue your view and consider one opposing point.',
        ['I stated a clear position', 'I answered an opposing view', 'I used a hedge (may, tend to, appears to)', 'I removed any unnecessary words'],
        'Companies should offer remote work wherever the role permits it. Studies suggest that staff who choose where they work tend to be more satisfied and less likely to leave, which reduces costly turnover. Critics contend that remote work weakens collaboration, and there is some truth in this, particularly for new employees. However, this is an argument for regular time together, not for daily attendance. A flexible policy, reviewed by each team, appears to offer the benefits of both.')] });

  // ======================= C2 =======================
  add({ id: 'c2-subjunctive', level: 6, skill: 'grammar', topics: ['subjunctive'], title: 'I recommend that he be told',
    teach: ['After verbs such as **recommend, insist, demand, suggest** and adjectives such as **essential, vital, imperative**, formal English uses the **subjunctive**: the base verb, for every person.',
      '> The committee recommended that the proposal be withdrawn.', '> It is essential that she attend the meeting.', '> We insisted that he not leave.'],
    ex: [M('The doctor insisted that he ___ smoking.', ['stop', 'stops', 'stopped', 'will stop'], 'Subjunctive: the base verb, even with "he".'),
      M('It is imperative that every employee ___ informed.', ['be', 'is', 'was', 'being'], 'Subjunctive of "be" is "be".'),
      F('They demanded that she ___ immediately. (resign)', ['resign'], 'Base verb, with no -s or -ed.'),
      E('The board suggests that the director [reconsiders] her decision.', 'reconsider', 'Subjunctive: the base verb.')] });

  add({ id: 'c2-hypothetical', level: 6, skill: 'grammar', topics: ['advanced-hypothetical'], title: 'Had it not been for her',
    teach: ['Formal English can drop **if** and invert the verb. **Were it not for** and **had it not been for** mean "without".',
      '> Had I known, I would have called.', '> Were it not for her help, we would be lost.', '> Had it not been for the rain, we would have won.', '> Should you need help, please ask.'],
    ex: [M('___ it not been for the map, we would have got lost.', ['Had', 'Were', 'Should', 'If'], 'Past reference: had it not been for.'),
      M('___ you require assistance, call this number.', ['Should', 'Had', 'Were', 'Would'], '"Should you" is a formal "if you".'),
      M('Were it not for his salary, the family ___ .', ['would struggle', 'had struggled', 'will struggle', 'struggles'], 'Present unreal: would + base verb.'),
      F('___ I known about the delay, I would have left later.', ['Had', 'had'], 'Had + subject + participle.')] });

  add({ id: 'c2-participle', level: 6, skill: 'grammar', topics: ['participle-clauses', 'dangling'], title: 'Having read the report',
    teach: ['**Participle clauses** make writing tighter. The subject of the clause must be the same as the subject of the main sentence, or the sentence **dangles**.',
      '> Having read the report twice, she still found no error.', '> Built in 1890, the theatre remains in use.',
      'A dangling example: "Walking home, the rain started" suggests that the rain was walking.',
      '> Walking home, I got caught in the rain.'],
    ex: [M('Which sentence is correct?', ['Having finished the meal, we paid the bill.', 'Having finished the meal, the bill was paid.', 'Having finished the meal, the waiter was thanked by us.', 'Having finished the meal, it was time for the bill.'], '"We" did the finishing.'),
      M('___ in 1890, the theatre is still in use.', ['Built', 'Building', 'Having built', 'To build'], 'The theatre was built, so this is passive.'),
      M('___ all the evidence, the jury reached a verdict.', ['Having considered', 'Having been considered', 'Considered', 'To be considered'], 'The jury did the considering.'),
      M('Rewrite: "Because he did not know the answer, he stayed silent."', ['Not knowing the answer, he stayed silent.', 'Knowing not the answer, he stayed silent.', 'He not knowing the answer, silent he stayed.', 'Not known the answer, he stayed silent.'], 'Put "not" before the participle.')] });

  add({ id: 'c2-words', level: 6, skill: 'vocabulary', topics: ['academic', 'idiom'], title: 'The last ten percent of vocabulary',
    intro: 'Rare, exact words and idioms mark very high English. Use them sparingly and only where they fit.',
    words: [['equivocal', 'adjective', '/ɪˈkwɪvəkl/', 'deliberately unclear in meaning', 'His reply was deliberately equivocal.'],
      ['extraneous', 'adjective', '/ɪkˈstreɪniəs/', 'not relevant or essential', 'Remove any extraneous detail from the report.'],
      ['ubiquitous', 'adjective', '/juːˈbɪkwɪtəs/', 'found everywhere', 'Smartphones are now ubiquitous.'],
      ['tenable', 'adjective', '/ˈtenəbl/', 'able to be defended as an argument', 'That position is no longer tenable.'],
      ['belie', 'verb', '/bɪˈlaɪ/', 'to give a false impression of', 'Her calm manner may belie her anxiety.'],
      ['a bolt from the blue', 'idiom', '/ə bəʊlt frəm ðə bluː/', 'a complete surprise', 'The news came as a bolt from the blue.'],
      ['pay lip service to', 'idiom', '/peɪ lɪp ˈsɜːvɪs tə/', 'to support in words but not in actions', 'Many firms only pay lip service to diversity.'],
      ['burgeoning', 'adjective', '/ˈbɜːdʒənɪŋ/', 'growing quickly', 'The city has a burgeoning tech sector.']] });

  add({ id: 'c2-read', level: 6, skill: 'reading', topics: ['inference', 'tone'], title: 'Irony and implied claims',
    teach: ['At this level, the literal meaning and the true meaning can be opposites. Ask: **what would have to be true for the writer to say this?**'],
    passage: 'The minister\'s announcement was, we were assured, a triumph of consultation. Stakeholders had been engaged, voices had been heard, and a document of some four hundred pages had been produced to prove it. That its conclusions were identical to those circulated by his office six months before the consultation began was, one must suppose, a happy coincidence.',
    ex: [M('What does the writer imply?', ['The consultation did not actually affect the outcome', 'The consultation changed the minister\'s mind', 'The document is too short', 'The stakeholders were not invited'], 'The conclusions already existed before the consultation began.'),
      M('"A happy coincidence" is used:', ['Ironically', 'Sincerely', 'As a technical term', 'As a compliment'], 'The writer does not believe it was a coincidence.'),
      M('The phrase "we were assured" suggests that the writer:', ['Does not accept the claim', 'Trusts the minister fully', 'Took part in writing the document', 'Agrees with the conclusions'], 'It distances the writer from the claim.')] });

  add({ id: 'c2-listen', level: 6, skill: 'listening', topics: ['listen-inference'], title: 'Subtle meaning in speech',
    teach: ['Listen for **qualifiers** such as "exactly", "as such", "if only" and "I\'ll grant you". They often carry the speaker\'s true judgement.'],
    script: "It's not that the report is badly written, exactly. It's rather elegantly written, in fact. It's simply that, having read all ninety pages, I couldn't tell you what it recommends, and I suspect that's not an accident. When nobody wants to take responsibility for a decision, a beautifully worded document is a very comfortable place to hide.",
    ex: [M('What does the speaker criticise?', ['The report deliberately avoids a clear recommendation', 'The report is badly written', 'The report is too short', 'The report contains false data'], '"I couldn\'t tell you what it recommends, and I suspect that\'s not an accident."'),
      M('Why was the report written this way, in the speaker\'s view?', ['To avoid responsibility', 'To save time', 'To impress the public', 'To please the speaker'], '"A very comfortable place to hide."'),
      M('The word "elegantly" here is:', ['Praise with a critical purpose', 'Pure, simple praise', 'A mistake', 'A technical term'], 'The elegance is part of how the authors hide.')] });

  add({ id: 'c2-write', level: 6, skill: 'writing', topics: ['agreement', 'inversion', 'dangling'], title: 'Style and precision',
    teach: ['Fine points of accuracy matter at this level. With **neither ... nor**, the verb agrees with the nearer noun. **Scarcely** and **hardly** pair with **when**. **No sooner** pairs with **than**.',
      '> Neither the manager nor the employees were informed.', '> Scarcely had we begun when the lights went out.', '> No sooner had we begun than the lights went out.'],
    ex: [E('Hardly had she spoken [than] the room fell silent.', 'when', '"Hardly" pairs with "when".'),
      E('Neither the director nor her assistants [was] present.', 'were', 'The verb agrees with the nearer noun, "assistants".'),
      M('Which sentence has the best rhythm and clarity?', ['The proposal, though costly, is sound.', 'The proposal is sound even though it is the case that it is costly.', 'Though it is costly, and it is, the proposal, it is sound.', 'Sound the proposal is, although costly it is being.'], 'Short, balanced and clear.'),
      W('Write about 120 words: does technology bring people closer together or push them apart? Develop a nuanced argument, with a varied sentence structure.',
        ['I avoided a simple yes or no', 'I used at least one inversion or participle clause', 'Every word earns its place'],
        'To ask whether technology unites or divides us is to assume that it does only one or the other. Having spent the pandemic speaking to distant relatives more often than ever, many will attest to its power to sustain bonds. Rarely, however, does a video call replace the small, unplanned intimacies of shared physical space, and the same platforms that connect family members also reward outrage among strangers. Technology, in short, amplifies existing tendencies: it deepens the ties we choose to tend and weakens those we neglect. The question worth asking is therefore not what it does to us, but what we ask of it.')] });

  // ======================= Speaking (self-checked; the test does not measure speaking) =======================
  add({ id: 'sp-a', level: 1, skill: 'speaking', topics: [], title: 'Clear sounds, polite phrases',
    teach: ['Listen, then repeat each line **out loud** three times. Copy the rhythm as well as the words. Speaking along with audio like this is called **shadowing**.',
      'Most learners find these sounds hard: **th** (think, this), **v / w** (very, well) and final consonants (book, walked).'],
    ex: [SAY('Hello, nice to meet you.', 'Link the words: nice-to-meet-you.'),
      SAY('Could you say that again, please?', 'This is the most useful sentence for a learner.'),
      SAY('I think this is very good.', 'Tongue between your teeth for "th". Top teeth on your lip for "v".'),
      SAY('I walked to the bookshop.', '"Walked" ends in a /t/ sound: /wɔːkt/.')] });
  add({ id: 'sp-b', level: 3, skill: 'speaking', topics: [], title: 'Stress and linking',
    teach: ['English is a **stress-timed** language. Important words are long and loud, and small words shrink to a weak sound, the schwa /ə/. It is the most common sound in English.',
      '> I want to GO to the SHOP.', 'Here "to" sounds like /tə/, not /tuː/.'],
    ex: [SAY('I want to go to the shop.', 'Stress "go" and "shop". Keep "to" short and weak.'),
      SAY('What do you think about it?', 'Link "think about it" into one sound.'),
      SAY('I have been waiting for an hour.', '"For an hour" sounds like /fərənaʊə/.'),
      SAY('Actually, I would rather stay at home tonight.', 'Stress "rather" and "home".')] });
  add({ id: 'sp-c', level: 5, skill: 'speaking', topics: [], title: 'Intonation and tact',
    teach: ['At an advanced level, **tone** carries as much meaning as words. Falling tones sound sure. A fall-rise sounds polite, or suggests that there is more to say.',
      'Soften disagreement with phrases like **"I take your point, but"** and **"I wonder whether"**.'],
    ex: [SAY('I take your point, but I wonder whether we are asking the right question.', 'Fall-rise on "point". Fall at the very end.'),
      SAY('That is certainly one way of looking at it.', 'A polite way to disagree: let your voice fall slowly.'),
      SAY('With respect, I am not entirely convinced.', 'Stress "entirely".'),
      SAY('To be fair, the results were better than anyone had expected.', 'Pause lightly after "To be fair".')] });

  // ======================= Goal packs =======================
  add({ id: 'ev-1', level: 2, skill: 'vocabulary', goal: 'everyday', topics: ['core-words'], title: 'Shops, homes and health',
    intro: 'Words for the things that come up every week.',
    words: [['receipt', 'noun', '/rɪˈsiːt/', 'a paper showing what you paid', 'Please keep your receipt.'],
      ['change', 'noun', '/tʃeɪndʒ/', 'money you get back when you pay', 'Here is your change.'],
      ['appointment', 'noun', '/əˈpɔɪntmənt/', 'a fixed time to see someone', 'I have an appointment at ten.'],
      ['medicine', 'noun', '/ˈmedsn/', 'something you take when you are ill', 'Take this medicine twice a day.'],
      ['neighbour', 'noun', '/ˈneɪbə/', 'a person who lives near you', 'My neighbour is very kind.'],
      ['rent', 'noun', '/rent/', 'money you pay to live in a home', 'The rent is due on Friday.'],
      ['repair', 'verb', '/rɪˈpeə/', 'to fix something', 'They will repair the washing machine.'],
      ['borrow', 'verb', '/ˈbɒrəʊ/', 'to take something and give it back later', 'Can I borrow your pen?']] });
  add({ id: 'ev-2', level: 4, skill: 'vocabulary', goal: 'everyday', topics: ['phrasal'], title: 'Natural conversation',
    intro: 'These phrases make everyday English sound relaxed and natural.',
    words: [['catch up', 'phrasal verb', '/kætʃ ʌp/', 'to talk after not seeing someone for a while', "Let's meet and catch up soon."],
      ['get along', 'phrasal verb', '/ɡet əˈlɒŋ/', 'to have a friendly relationship', 'I get along well with my in-laws.'],
      ['figure out', 'phrasal verb', '/ˈfɪɡər aʊt/', 'to understand or solve', 'I cannot figure out this form.'],
      ['to be honest', 'phrase', '/tə bi ˈɒnɪst/', 'used before saying what you really think', 'To be honest, I did not enjoy it.'],
      ['no worries', 'phrase', '/nəʊ ˈwʌriz/', 'it is not a problem', 'No worries, I can wait.'],
      ['hassle', 'noun', '/ˈhæsl/', 'something annoying that takes effort', 'Parking here is such a hassle.'],
      ['awkward', 'adjective', '/ˈɔːkwəd/', 'embarrassing or uncomfortable', 'There was an awkward silence.'],
      ['fed up', 'adjective', '/fed ʌp/', 'annoyed after too much of something', 'I am fed up with this traffic.']] });
  add({ id: 'work-1', level: 3, skill: 'vocabulary', goal: 'work', topics: ['core-words'], title: 'Everyday office English',
    intro: 'The words you will meet in meetings, emails and job interviews.',
    words: [['colleague', 'noun', '/ˈkɒliːɡ/', 'a person you work with', 'My colleague helped me with the report.'],
      ['deadline', 'noun', '/ˈdedlaɪn/', 'the latest time to finish something', 'The deadline is next Friday.'],
      ['schedule', 'noun', '/ˈʃedjuːl/', 'a plan of times and tasks', 'My schedule is full this week.'],
      ['attach', 'verb', '/əˈtætʃ/', 'to add a file to an email', 'Please attach your CV.'],
      ['confirm', 'verb', '/kənˈfɜːm/', 'to say that something is definite', 'Please confirm the meeting time.'],
      ['salary', 'noun', '/ˈsæləri/', 'money you earn from a job', 'The salary is paid each month.'],
      ['experience', 'noun', '/ɪkˈspɪəriəns/', 'knowledge from doing something', 'She has five years of experience.'],
      ['manager', 'noun', '/ˈmænɪdʒə/', 'a person who leads a team', 'I will ask my manager.']] });
  add({ id: 'work-2', level: 5, skill: 'vocabulary', goal: 'work', topics: ['collocation', 'phrasal'], title: 'Meetings and negotiation',
    intro: 'Language for leading discussions and reaching agreement.',
    words: [['agenda', 'noun', '/əˈdʒendə/', 'a list of things to discuss', 'The first item on the agenda is the budget.'],
      ['follow up', 'phrasal verb', '/ˈfɒləʊ ʌp/', 'to take further action later', 'I will follow up with the client.'],
      ['push back', 'phrasal verb', '/pʊʃ bæk/', 'to delay, or to resist', 'We may push back the launch.'],
      ['stakeholder', 'noun', '/ˈsteɪkhəʊldə/', 'someone affected by a project', 'Every stakeholder was consulted.'],
      ['leverage', 'noun', '/ˈlevərɪdʒ/', 'power to influence a result', 'We have little leverage in this deal.'],
      ['compromise', 'noun', '/ˈkɒmprəmaɪz/', 'an agreement where each side gives up something', 'We finally reached a compromise.'],
      ['align', 'verb', '/əˈlaɪn/', 'to bring plans into agreement', 'We need to align our goals.'],
      ['feasible', 'adjective', '/ˈfiːzəbl/', 'possible to do', 'Is this timeline feasible?']] });
  add({ id: 'study-1', level: 3, skill: 'vocabulary', goal: 'study', topics: ['core-words'], title: 'Words for study',
    intro: 'Useful for courses, classrooms and exam instructions.',
    words: [['assignment', 'noun', '/əˈsaɪnmənt/', 'a piece of work given to a student', 'I must finish my assignment tonight.'],
      ['essay', 'noun', '/ˈeseɪ/', 'a short piece of writing on a subject', 'She wrote an essay about climate change.'],
      ['summary', 'noun', '/ˈsʌməri/', 'a short statement of the main points', 'Write a summary of the text.'],
      ['research', 'noun', '/rɪˈsɜːtʃ/', 'careful study to find new facts', 'New research shows the opposite.'],
      ['compare', 'verb', '/kəmˈpeə/', 'to look at how things are similar or different', 'Compare the two charts.'],
      ['describe', 'verb', '/dɪˈskraɪb/', 'to say what something is like', 'Describe the graph below.'],
      ['increase', 'verb', '/ɪnˈkriːs/', 'to become larger', 'Prices increase every year.'],
      ['example', 'noun', '/ɪɡˈzɑːmpl/', 'something that shows what you mean', 'Give an example from the text.']] });
  add({ id: 'study-2', level: 5, skill: 'vocabulary', goal: 'study', topics: ['academic'], title: 'Academic argument and exams',
    intro: 'Common in university writing and in exams such as IELTS.',
    words: [['hypothesis', 'noun', '/haɪˈpɒθəsɪs/', 'an idea that can be tested', 'The results support this hypothesis.'],
      ['significant', 'adjective', '/sɪɡˈnɪfɪkənt/', 'large or important', 'There was a significant fall in sales.'],
      ['approximately', 'adverb', '/əˈprɒksɪmətli/', 'close to, but not exactly', 'Approximately half of them agreed.'],
      ['fluctuate', 'verb', '/ˈflʌktʃueɪt/', 'to rise and fall often', 'Oil prices fluctuate from month to month.'],
      ['furthermore', 'adverb', '/ˌfɜːðəˈmɔː/', 'in addition, used in formal writing', 'Furthermore, the cost has doubled.'],
      ['evaluate', 'verb', '/ɪˈvæljueɪt/', 'to judge the value of', 'We must evaluate each source.'],
      ['correlation', 'noun', '/ˌkɒrəˈleɪʃn/', 'a connection between two things', 'There is a strong correlation between diet and health.'],
      ['cite', 'verb', '/saɪt/', 'to mention a source as evidence', 'Always cite your sources.']] });
  add({ id: 'travel-1', level: 2, skill: 'vocabulary', goal: 'travel', topics: ['core-words'], title: 'At the airport and hotel',
    intro: 'Words that will get you through a journey.',
    words: [['passport', 'noun', '/ˈpɑːspɔːt/', 'a document for travelling abroad', 'Please show your passport.'],
      ['luggage', 'noun', '/ˈlʌɡɪdʒ/', 'bags and cases for travelling', 'My luggage is very heavy.'],
      ['gate', 'noun', '/ɡeɪt/', 'where you get on a plane', 'Our flight leaves from gate twelve.'],
      ['delay', 'noun', '/dɪˈleɪ/', 'when something happens later than planned', 'There is a delay of one hour.'],
      ['book', 'verb', '/bʊk/', 'to arrange a room or seat in advance', 'I want to book a room for two nights.'],
      ['reception', 'noun', '/rɪˈsepʃn/', 'the desk at a hotel entrance', 'Please leave your key at reception.'],
      ['direction', 'noun', '/dəˈrekʃn/', 'the way to go', 'Which direction is the station?'],
      ['abroad', 'adverb', '/əˈbrɔːd/', 'in another country', 'We go abroad every summer.']] });
  add({ id: 'travel-2', level: 4, skill: 'vocabulary', goal: 'travel', topics: ['phrasal', 'collocation'], title: 'When travel goes wrong',
    intro: 'The language for sorting out problems politely.',
    words: [['check in', 'phrasal verb', '/tʃek ɪn/', 'to register at a hotel or airport', 'You can check in from two o\'clock.'],
      ['refund', 'noun', '/ˈriːfʌnd/', 'money given back to you', 'I would like a refund for this ticket.'],
      ['connection', 'noun', '/kəˈnekʃn/', 'a second flight or train you must catch', 'I missed my connection in Doha.'],
      ['cancel', 'verb', '/ˈkænsl/', 'to say something will not happen', 'They had to cancel the flight.'],
      ['complaint', 'noun', '/kəmˈpleɪnt/', 'a statement that something is wrong', 'I wish to make a complaint.'],
      ['insurance', 'noun', '/ɪnˈʃʊərəns/', 'a plan that pays if something goes wrong', 'Does your insurance cover this?'],
      ['itinerary', 'noun', '/aɪˈtɪnərəri/', 'a detailed plan for a trip', 'Here is a copy of your itinerary.'],
      ['set off', 'phrasal verb', '/set ɒf/', 'to begin a journey', 'We will set off before sunrise.']] });

  // ---------- Topic names shown to the learner ----------
  S.TOPICS = {
    'be': 'The verb "to be"', 'present-simple': 'Present simple', 'articles': 'A, an, the', 'past-simple': 'Past simple',
    'comparatives': 'Comparatives', 'present-continuous': 'Present continuous', 'present-perfect': 'Present perfect',
    'first-conditional': 'First conditional', 'modals': 'Modal verbs', 'passive': 'The passive',
    'second-conditional': 'Second conditional', 'relative-clauses': 'Relative clauses', 'third-conditional': 'Third conditional',
    'inversion': 'Inversion', 'modals-past': 'Past modals', 'subjunctive': 'The subjunctive',
    'advanced-hypothetical': 'Formal conditionals', 'participle-clauses': 'Participle clauses', 'gerunds': '-ing or to + verb',
    'word-order': 'Word order', 'uncountables': 'Uncountable nouns', 'linkers': 'Although and despite', 'register': 'Formal and informal style',
    'agreement': 'Subject-verb agreement', 'dangling': 'Opening phrases', 'everyday-words': 'Everyday words', 'core-words': 'Core vocabulary',
    'collocation': 'Word partnerships', 'phrasal': 'Phrasal verbs', 'academic': 'Academic words', 'idiom': 'Idioms',
    'detail': 'Finding details in a text', 'main-idea': 'Finding the main idea', 'inference': 'Reading between the lines', 'tone': 'The writer\'s attitude',
    'listen-detail': 'Catching details by ear', 'listen-gist': 'Following the main point', 'listen-inference': 'Hearing implied meaning'
  };
  S.GOALS = { everyday: 'Everyday life', work: 'Work', study: 'Study and exams', travel: 'Travel' };

  if (typeof module !== 'undefined' && module.exports) module.exports = S;
})(typeof globalThis !== 'undefined' ? globalThis : this);
