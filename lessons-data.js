/* Italian lesson content. Loaded by lessons.html.
   Each week: objectives, dialogue, vocabItems (it/en), grammar,
   practice, speaking, writing, describing, exercises, culture, checklist. */

window.LESSON_TRACKS = (function () {
  "use strict";

  /* ============================================================
     BEGINNER — A1
     ============================================================ */
  var BEGINNER = [
    {
      id: "overview",
      tab: "Overview",
      title: "Beginner Course — A1",
      html: [
        "<p>A structured 8-week plan for a complete beginner, written in English. Each week builds on the previous one with vocabulary, grammar, dialogue, and lots of speaking, writing, and describing practice.</p>",
        "<div class='overview-grid'>",
        "<div class='section'><h3>Details</h3><ul>",
        "<li><b>Level:</b> CEFR A1 (absolute beginner)</li>",
        "<li><b>Duration:</b> 8 weeks, 3 sessions/week (30–45 min)</li>",
        "<li><b>Goal:</b> Hold a simple conversation, order food, ask directions, describe your life.</li>",
        "<li><b>Method:</b> Short, frequent sessions with lots of speaking out loud.</li>",
        "</ul></div>",
        "<div class='section'><h3>Each week you get</h3><ul>",
        "<li>A <b>dialogue</b> you can listen to line by line.</li>",
        "<li><b>Vocabulary</b> with English translations and audio.</li>",
        "<li><b>Grammar</b> explained simply.</li>",
        "<li><b>Speaking</b>, <b>writing</b>, and <b>describing</b> tasks.</li>",
        "<li><b>Exercises</b> you can answer by typing or speaking.</li>",
        "</ul></div>",
        "</div>",
        "<div class='section'><h3>Weekly rhythm</h3><table>",
        "<tr><th>Day</th><th>Focus</th></tr>",
        "<tr><td>Monday</td><td>Vocabulary + grammar</td></tr>",
        "<tr><td>Wednesday</td><td>Speaking and role-play</td></tr>",
        "<tr><td>Friday</td><td>Writing + review</td></tr>",
        "</table></div>"
      ].join("")
    },
    {
      id: "b1",
      tab: "Week 1",
      title: "Week 1 — Greetings and Introductions",
      objectives: [
        "Greet people formally and informally.",
        "Introduce yourself and ask others' names.",
        "Use the verb <b>essere</b> (to be) correctly.",
        "Ask and answer <i>Come stai?</i>"
      ],
      dialogue: [
        { it: "Ciao! Come ti chiami?", en: "Hi! What's your name?" },
        { it: "Ciao, mi chiamo Marco. E tu?", en: "Hi, my name is Marco. And you?" },
        { it: "Io sono Anna. Piacere!", en: "I'm Anna. Nice to meet you!" },
        { it: "Piacere mio. Di dove sei?", en: "Nice to meet you too. Where are you from?" },
        { it: "Sono di Milano. E tu?", en: "I'm from Milan. And you?" },
        { it: "Io sono di Napoli. Come stai?", en: "I'm from Naples. How are you?" },
        { it: "Bene, grazie. E tu?", en: "Well, thanks. And you?" },
        { it: "Così così, ma va bene.", en: "So-so, but it's fine." }
      ],
      vocabItems: [
        { it: "ciao", en: "hi / bye (informal)" },
        { it: "buongiorno", en: "good morning" },
        { it: "buonasera", en: "good evening" },
        { it: "arrivederci", en: "goodbye (formal)" },
        { it: "per favore", en: "please" },
        { it: "grazie", en: "thank you" },
        { it: "prego", en: "you're welcome" },
        { it: "piacere", en: "nice to meet you" },
        { it: "come stai?", en: "how are you?" },
        { it: "di dove sei?", en: "where are you from?" },
        { it: "bene", en: "well / good" },
        { it: "così così", en: "so-so" }
      ],
      grammar: [
        "Subject pronouns: <b>io, tu, lui/lei, noi, voi, loro</b> (often dropped, since the verb ending shows the subject).",
        "The verb <b>essere</b> (to be): io sono, tu sei, lui/lei è, noi siamo, voi siete, loro sono.",
        "The verb <b>chiamarsi</b> (to be called): mi chiamo, ti chiami, si chiama, ci chiamiamo, vi chiamate, si chiamano.",
        "Formal vs informal: use <b>tu</b> with friends, <b>Lei</b> with strangers and elders."
      ],
      practice: [
        "Read the dialogue aloud twice, then cover the English and translate.",
        "Introduce yourself: \u201cCiao, mi chiamo ___. Sono di ___.\u201d",
        "Ask and answer: \u201cCome ti chiami?\u201d / \u201cDi dove sei?\u201d / \u201cCome stai?\u201d"
      ],
      speaking: [
        "Record yourself saying hello, your name, your city, and how you are.",
        "Role-play meeting a new colleague: greet, introduce, ask two questions.",
        "Practice both registers: the same intro with a friend (tu) and a stranger (Lei)."
      ],
      writing: [
        "Write a 4-line self-introduction (name, city, how you are, goodbye).",
        "Write two versions of a greeting: one to a friend, one to a professor."
      ],
      describing: [
        "Describe yourself in 3 sentences using <i>sono</i>: name, origin, mood.",
        "Look at a photo of a person and invent a name, city, and greeting for them."
      ],
      exercises: [
        { q: "Complete: <i>Io ___ italiano.</i> (essere)", a: "sono" },
        { q: "Translate: <i>What's your name?</i> (informal)", a: "Come ti chiami?" },
        { q: "Translate: <i>I'm from Rome.</i>", a: "Sono di Roma." },
        { q: "Reply to: <i>Come stai?</i>", a: "Bene, grazie. E tu?" }
      ],
      culture: "Italians often use <i>ciao</i> for both hello and goodbye, but only with friends and family. Use <i>buongiorno</i> in formal settings.",
      checklist: ["I can say hello and goodbye.", "I can introduce myself by name and city.", "I can ask someone their name and how they are.", "I can use the verb essere."]
    },
    {
      id: "b2",
      tab: "Week 2",
      title: "Week 2 — Numbers, Dates, and the Alphabet",
      objectives: [
        "Count from 0 to 100.",
        "Say the days, months, and your birthday.",
        "Use the verb <b>avere</b> (to have).",
        "Ask and give your age."
      ],
      dialogue: [
        { it: "Quanti anni hai?", en: "How old are you?" },
        { it: "Ho venticinque anni. E tu?", en: "I'm 25. And you?" },
        { it: "Ne ho trenta. Quando è il tuo compleanno?", en: "I'm 30. When is your birthday?" },
        { it: "È il tre maggio. E il tuo?", en: "It's the 3rd of May. And yours?" },
        { it: "Il mio è il primo gennaio.", en: "Mine is the 1st of January." },
        { it: "Che bello! Quanti fratelli hai?", en: "How nice! How many brothers do you have?" },
        { it: "Ho un fratello e due sorelle.", en: "I have one brother and two sisters." }
      ],
      vocabItems: [
        { it: "zero", en: "0" },
        { it: "uno, due, tre", en: "1, 2, 3" },
        { it: "dieci", en: "10" },
        { it: "venti", en: "20" },
        { it: "cento", en: "100" },
        { it: "lunedì", en: "Monday" },
        { it: "sabato", en: "Saturday" },
        { it: "domenica", en: "Sunday" },
        { it: "gennaio", en: "January" },
        { it: "maggio", en: "May" },
        { it: "il compleanno", en: "the birthday" },
        { it: "quanti anni hai?", en: "how old are you?" }
      ],
      grammar: [
        "The verb <b>avere</b> (to have): ho, hai, ha, abbiamo, avete, hanno.",
        "Asking age: <i>Quanti anni hai?</i> — <i>Ho ___ anni.</i> (literally \u201cI have ___ years\u201d).",
        "Ordinal numbers for dates: il primo, il secondo, il terzo…",
        "Numbers are written as one word: ventuno, trentadue, quarantatré."
      ],
      practice: [
        "Count aloud from 1 to 100, then backward from 20.",
        "Say all seven days of the week and all twelve months.",
        "Say your full birth date: \u201cSono nato/a il ___ ___ ___.\u201d"
      ],
      speaking: [
        "Record yourself counting to 30 and saying your birthday.",
        "Role-play: ask a friend their age, birthday, and how many siblings they have.",
        "Practice phone numbers: read a friend's number aloud in Italian."
      ],
      writing: [
        "Write the numbers 1–20 in words.",
        "Write three sentences about your family using <i>avere</i>: \u201cHo ___.\u201d"
      ],
      describing: [
        "Describe your week: which days you work, rest, and study.",
        "Describe your birthday month and the weather in that month."
      ],
      exercises: [
        { q: "Complete: <i>Io ___ due sorelle.</i> (avere)", a: "ho" },
        { q: "Translate: <i>I am twenty years old.</i>", a: "Ho venti anni." },
        { q: "Write in words: 45", a: "quarantacinque" },
        { q: "Translate: <i>My birthday is on the 10th of March.</i>", a: "Il mio compleanno è il dieci marzo." }
      ],
      culture: "The Italian alphabet has 21 letters; foreign letters (j, k, w, x, y) appear only in loanwords.",
      checklist: ["I can count to 100.", "I can say my age and birthday.", "I know the days and months.", "I can use the verb avere."]
    },
    {
      id: "b3",
      tab: "Week 3",
      title: "Week 3 — People, Family, and Articles",
      objectives: [
        "Name family members.",
        "Use definite and indefinite articles.",
        "Recognize masculine and feminine nouns.",
        "Describe your family."
      ],
      dialogue: [
        { it: "Hai fratelli o sorelle?", en: "Do you have brothers or sisters?" },
        { it: "Sì, ho un fratello e una sorella.", en: "Yes, I have one brother and one sister." },
        { it: "Come si chiamano?", en: "What are their names?" },
        { it: "Mio fratello si chiama Luca, mia sorella Giulia.", en: "My brother is called Luca, my sister Giulia." },
        { it: "E i tuoi genitori?", en: "And your parents?" },
        { it: "Mia madre è insegnante, mio padre è medico.", en: "My mother is a teacher, my father is a doctor." },
        { it: "Che bella famiglia!", en: "What a lovely family!" }
      ],
      vocabItems: [
        { it: "la famiglia", en: "the family" },
        { it: "la madre", en: "the mother" },
        { it: "il padre", en: "the father" },
        { it: "il fratello", en: "the brother" },
        { it: "la sorella", en: "the sister" },
        { it: "il figlio", en: "the son" },
        { it: "la figlia", en: "the daughter" },
        { it: "il nonno / la nonna", en: "grandfather / grandmother" },
        { it: "lo zio / la zia", en: "uncle / aunt" },
        { it: "l'amico / l'amica", en: "friend (m / f)" },
        { it: "i genitori", en: "the parents" }
      ],
      grammar: [
        "Definite articles: <b>il, lo, la, l', i, gli, le</b> — il libro, lo studente, la casa, l'amico, i libri, gli studenti, le case.",
        "Indefinite articles: <b>un, uno, una, un'</b> — un libro, uno studente, una casa, un'amica.",
        "Noun gender: most nouns ending in <b>-o</b> are masculine, most in <b>-a</b> are feminine.",
        "Plurals: -o → -i (libro → libri), -a → -e (casa → case), -e → -i (chiave → chiavi)."
      ],
      practice: [
        "List ten family members with the correct article.",
        "Change ten nouns from singular to plural.",
        "Read the dialogue and identify every article."
      ],
      speaking: [
        "Describe your family: name, age, and job for each person.",
        "Role-play: a friend asks about your family and you answer in full sentences.",
        "Record yourself naming five relatives with the correct article."
      ],
      writing: [
        "Write a paragraph (5–6 sentences) describing your family.",
        "Write the plural form of: il libro, la casa, l'amico, lo studente, la chiave."
      ],
      describing: [
        "Bring a family photo and describe who is in it, using articles.",
        "Describe a friend: name, city, and two things they like."
      ],
      exercises: [
        { q: "Choose the article: ___ studente", a: "lo" },
        { q: "Choose the article: ___ amica", a: "un'" },
        { q: "Plural of <i>la casa</i>", a: "le case" },
        { q: "Translate: <i>I have one brother and two sisters.</i>", a: "Ho un fratello e due sorelle." }
      ],
      culture: "Family is central to Italian culture; <i>la mamma</i> and <i>il papà</i> are common even for adults.",
      checklist: ["I can name family members.", "I can use the correct article.", "I can form plurals.", "I can describe my family."]
    },
    {
      id: "b4",
      tab: "Week 4",
      title: "Week 4 — Everyday Objects and Regular Verbs",
      objectives: [
        "Name everyday objects around you.",
        "Conjugate regular <b>-are</b> verbs in the present.",
        "Make negative sentences with <b>non</b>.",
        "Talk about what you do every day."
      ],
      dialogue: [
        { it: "Che cosa fai la mattina?", en: "What do you do in the morning?" },
        { it: "Mi sveglio presto e bevo un caffè.", en: "I wake up early and drink a coffee." },
        { it: "Poi lavoro in ufficio. E tu?", en: "Then I work in an office. And you?" },
        { it: "Io studio italiano a casa.", en: "I study Italian at home." },
        { it: "Parli bene italiano?", en: "Do you speak Italian well?" },
        { it: "Non parlo bene, ma studio ogni giorno.", en: "I don't speak well, but I study every day." },
        { it: "Bravo! Anch'io imparo.", en: "Great! I'm learning too." }
      ],
      vocabItems: [
        { it: "la casa", en: "the house" },
        { it: "la cucina", en: "the kitchen" },
        { it: "il libro", en: "the book" },
        { it: "il telefono", en: "the phone" },
        { it: "la chiave", en: "the key" },
        { it: "la borsa", en: "the bag" },
        { it: "l'acqua", en: "the water" },
        { it: "il pane", en: "the bread" },
        { it: "il caffè", en: "the coffee" },
        { it: "parlare", en: "to speak" },
        { it: "lavorare", en: "to work" },
        { it: "studiare", en: "to study" }
      ],
      grammar: [
        "Present tense of <b>-are</b> verbs: parlare → parlo, parli, parla, parliamo, parlate, parlano.",
        "Same endings for lavorare, studiare, mangiare, abitare.",
        "Negation with <b>non</b> before the verb: <i>Non parlo italiano.</i>",
        "Questions by intonation: <i>Parli italiano?</i>"
      ],
      practice: [
        "Conjugate five -are verbs out loud.",
        "Describe what is in your bag using <i>c'è</i> / <i>ci sono</i>.",
        "Make five negative sentences about yourself."
      ],
      speaking: [
        "Describe your morning routine in five sentences.",
        "Role-play: someone asks what you do every day; answer in full sentences.",
        "Record yourself conjugating <i>mangiare</i> and <i>lavorare</i>."
      ],
      writing: [
        "Write 6 sentences about your daily routine using -are verbs.",
        "Write 5 negative sentences: things you don't do."
      ],
      describing: [
        "Describe your kitchen: list five objects with articles.",
        "Describe what is on your desk right now."
      ],
      exercises: [
        { q: "Conjugate: io ___ (parlare)", a: "parlo" },
        { q: "Conjugate: noi ___ (studiare)", a: "studiamo" },
        { q: "Make negative: <i>Parlo italiano.</i>", a: "Non parlo italiano." },
        { q: "Translate: <i>Do you work in an office?</i>", a: "Lavori in ufficio?" }
      ],
      culture: "Coffee culture — ordering \u201cun caffè\u201d gets you an espresso by default.",
      checklist: ["I can name everyday objects.", "I can conjugate a regular -are verb.", "I can make negative sentences.", "I can describe my routine."]
    },
    {
      id: "b5",
      tab: "Week 5",
      title: "Week 5 — Food and Ordering",
      objectives: [
        "Order food and drinks politely.",
        "Use <b>vorrei</b> for requests.",
        "Ask for the bill.",
        "Read a simple menu."
      ],
      dialogue: [
        { it: "Buonasera, un tavolo per due, per favore.", en: "Good evening, a table for two, please." },
        { it: "Certamente. Ecco il menù.", en: "Certainly. Here is the menu." },
        { it: "Grazie. Vorrei un antipasto e una pizza.", en: "Thank you. I would like a starter and a pizza." },
        { it: "E da bere?", en: "And to drink?" },
        { it: "Una bottiglia d'acqua e un bicchiere di vino.", en: "A bottle of water and a glass of wine." },
        { it: "Perfetto. E il dolce?", en: "Perfect. And dessert?" },
        { it: "Un gelato, grazie. E poi il conto, per favore.", en: "An ice cream, thanks. And then the bill, please." }
      ],
      vocabItems: [
        { it: "il ristorante", en: "the restaurant" },
        { it: "il menù", en: "the menu" },
        { it: "il conto", en: "the bill" },
        { it: "l'antipasto", en: "the starter" },
        { it: "il primo", en: "first course (pasta/rice)" },
        { it: "il secondo", en: "main course" },
        { it: "il dolce", en: "dessert" },
        { it: "il vino", en: "the wine" },
        { it: "la pizza", en: "the pizza" },
        { it: "il gelato", en: "the ice cream" },
        { it: "vorrei", en: "I would like" },
        { it: "da bere", en: "to drink" }
      ],
      grammar: [
        "Polite requests with <b>vorrei</b> (I would like) — softer than <i>voglio</i>.",
        "The verb <b>prendere</b> (to take/have): prendo, prendi, prende, prendiamo, prendete, prendono.",
        "<i>Un</i> vs <i>una</i> for ordering one item: un caffè, una pizza.",
        "Useful phrases: <i>Per me…</i> (for me…), <i>Il conto, per favore.</i>"
      ],
      practice: [
        "Role-play ordering a full meal for two.",
        "Read a menu and say what you'd order for each course.",
        "Practice asking for the bill and paying."
      ],
      speaking: [
        "Role-play a waiter and a customer, swapping roles.",
        "Order three things politely using <i>vorrei</i>.",
        "Describe your favourite meal and when you eat it."
      ],
      writing: [
        "Write a restaurant dialogue of 8 lines.",
        "Write your ideal menu: one antipasto, one primo, one secondo, one dolce."
      ],
      describing: [
        "Describe a typical Italian meal course by course.",
        "Describe your favourite dish: ingredients and when you eat it."
      ],
      exercises: [
        { q: "Translate politely: <i>I would like a coffee.</i>", a: "Vorrei un caffè." },
        { q: "Conjugate: loro ___ (prendere)", a: "prendono" },
        { q: "How do you ask for the bill?", a: "Il conto, per favore." },
        { q: "Translate: <i>A glass of wine, please.</i>", a: "Un bicchiere di vino, per favore." }
      ],
      culture: "A full Italian meal has multiple courses; it is normal to linger over coffee after eating.",
      checklist: ["I can order food and drinks.", "I can ask for the bill.", "I know the course names.", "I can use vorrei."]
    },
    {
      id: "b6",
      tab: "Week 6",
      title: "Week 6 — Directions and the City",
      objectives: [
        "Ask for and understand directions.",
        "Use the verb <b>andare</b> (to go).",
        "Name places in a city.",
        "Use prepositions of place."
      ],
      dialogue: [
        { it: "Scusi, dov'è la stazione?", en: "Excuse me, where is the station?" },
        { it: "Vada dritto e poi giri a destra.", en: "Go straight and then turn right." },
        { it: "È lontana?", en: "Is it far?" },
        { it: "No, è vicina. Cinque minuti a piedi.", en: "No, it's close. Five minutes on foot." },
        { it: "C'è una banca qui vicino?", en: "Is there a bank near here?" },
        { it: "Sì, accanto al bar.", en: "Yes, next to the café." },
        { it: "Grazie mille!", en: "Thanks a lot!" }
      ],
      vocabItems: [
        { it: "la strada", en: "the street" },
        { it: "la piazza", en: "the square" },
        { it: "la stazione", en: "the station" },
        { it: "a destra", en: "to the right" },
        { it: "a sinistra", en: "to the left" },
        { it: "dritto", en: "straight ahead" },
        { it: "vicino / lontano", en: "near / far" },
        { it: "dove?", en: "where?" },
        { it: "girare", en: "to turn" },
        { it: "andare", en: "to go" },
        { it: "accanto a", en: "next to" }
      ],
      grammar: [
        "The verb <b>andare</b> (to go): vado, vai, va, andiamo, andate, vanno.",
        "Prepositions of place: a, in, su, sotto, accanto a, davanti a, dietro.",
        "<i>C'è</i> (there is) / <i>ci sono</i> (there are).",
        "Formal imperative for directions: <i>Vada…</i>, <i>Giri…</i>"
      ],
      practice: [
        "Give directions from your home to the nearest shop.",
        "Ask for five different places using <i>Dov'è…?</i>",
        "Use <i>c'è</i> / <i>ci sono</i> to describe your neighbourhood."
      ],
      speaking: [
        "Role-play a tourist asking for directions and a local answering.",
        "Describe your route from home to work in five steps.",
        "Record yourself giving directions to the station."
      ],
      writing: [
        "Write directions from your home to the nearest park.",
        "Write a list of six places in a city with articles."
      ],
      describing: [
        "Describe your neighbourhood: what is near, far, and next to what.",
        "Describe your city centre in five sentences."
      ],
      exercises: [
        { q: "Conjugate: io ___ (andare)", a: "vado" },
        { q: "Translate: <i>Turn left.</i>", a: "Gira a sinistra." },
        { q: "Translate: <i>Is there a bank near here?</i>", a: "C'è una banca qui vicino?" },
        { q: "Complete: <i>La stazione è ___ al bar.</i>", a: "accanto" }
      ],
      culture: "Italian cities often have a central <i>piazza</i> that serves as a meeting point.",
      checklist: ["I can ask for directions.", "I can understand left, right, straight.", "I can name city places.", "I can use andare."]
    },
    {
      id: "b7",
      tab: "Week 7",
      title: "Week 7 — Daily Routine and Time",
      objectives: [
        "Tell the time.",
        "Use reflexive verbs for routine.",
        "Describe a full day.",
        "Ask and answer <i>A che ora…?</i>"
      ],
      dialogue: [
        { it: "A che ora ti svegli?", en: "What time do you wake up?" },
        { it: "Mi sveglio alle sette.", en: "I wake up at seven." },
        { it: "E a che ora fai colazione?", en: "And what time do you have breakfast?" },
        { it: "Alle sette e mezza. Poi vado al lavoro.", en: "At half past seven. Then I go to work." },
        { it: "A che ora torni a casa?", en: "What time do you come home?" },
        { it: "Torno alle sei di sera.", en: "I come home at six in the evening." },
        { it: "E quando dormi?", en: "And when do you sleep?" },
        { it: "Dormo verso le undici.", en: "I sleep around eleven." }
      ],
      vocabItems: [
        { it: "la mattina", en: "the morning" },
        { it: "il pomeriggio", en: "the afternoon" },
        { it: "la sera", en: "the evening" },
        { it: "la notte", en: "the night" },
        { it: "svegliarsi", en: "to wake up" },
        { it: "alzarsi", en: "to get up" },
        { it: "mangiare", en: "to eat" },
        { it: "lavorare", en: "to work" },
        { it: "dormire", en: "to sleep" },
        { it: "a che ora?", en: "at what time?" },
        { it: "mezza", en: "half (past)" },
        { it: "verso", en: "around (time)" }
      ],
      grammar: [
        "Reflexive verbs: mi sveglio, ti svegli, si sveglia, ci svegliamo, vi svegliate, si svegliano.",
        "Telling time: <i>È l'una</i> (1:00), <i>Sono le tre</i> (3:00), <i>le tre e mezza</i> (3:30), <i>le tre e un quarto</i> (3:15).",
        "<i>A che ora…?</i> — <i>Alle ___</i> for times other than one; <i>all'una</i> for one o'clock.",
        "Parts of the day: di mattina, di pomeriggio, di sera, di notte."
      ],
      practice: [
        "Describe your day from morning to night in six sentences.",
        "Say five times on a clock: 7:00, 8:15, 12:30, 6:00, 11:45.",
        "Conjugate svegliarsi and alzarsi."
      ],
      speaking: [
        "Record a 1-minute description of your daily routine.",
        "Role-play: ask a friend about their schedule and answer theirs.",
        "Practice telling the time for six different clocks."
      ],
      writing: [
        "Write your daily routine in 8 sentences with times.",
        "Write what you do on a typical weekend day."
      ],
      describing: [
        "Describe your ideal day, hour by hour.",
        "Compare your weekday and weekend routines."
      ],
      exercises: [
        { q: "Translate: <i>I wake up at seven.</i>", a: "Mi sveglio alle sette." },
        { q: "How do you say 3:30?", a: "Sono le tre e mezza." },
        { q: "Conjugate: noi ___ (alzarsi)", a: "ci alziamo" },
        { q: "Translate: <i>What time do you have breakfast?</i>", a: "A che ora fai colazione?" }
      ],
      culture: "Many shops close in the early afternoon for <i>la pausa</i> (riposo).",
      checklist: ["I can describe my daily routine.", "I can tell the time.", "I can use reflexive verbs.", "I can ask A che ora."]
    },
    {
      id: "b8",
      tab: "Week 8",
      title: "Week 8 — Review and Conversation",
      objectives: [
        "Combine everything into real conversation.",
        "Introduce the past tense (passato prossimo).",
        "Connect ideas with e, ma, perché, quindi.",
        "Hold a short conversation."
      ],
      dialogue: [
        { it: "Ciao! Come è andato il weekend?", en: "Hi! How was your weekend?" },
        { it: "Bene! Sono andato al mare con amici.", en: "Good! I went to the sea with friends." },
        { it: "Che bello! Avete mangiato bene?", en: "How nice! Did you eat well?" },
        { it: "Sì, ho mangiato pesce fresco, quindi era buonissimo.", en: "Yes, I ate fresh fish, so it was delicious." },
        { it: "E oggi che fai?", en: "And today what are you doing?" },
        { it: "Oggi studio italiano, ma domani riposo.", en: "Today I study Italian, but tomorrow I rest." },
        { it: "Perfetto. In bocca al lupo!", en: "Perfect. Good luck!" }
      ],
      vocabItems: [
        { it: "e", en: "and" },
        { it: "ma", en: "but" },
        { it: "perché", en: "because / why" },
        { it: "quindi", en: "so / therefore" },
        { it: "ho mangiato", en: "I ate / I have eaten" },
        { it: "sono andato/a", en: "I went" },
        { it: "ieri", en: "yesterday" },
        { it: "oggi", en: "today" },
        { it: "domani", en: "tomorrow" },
        { it: "in bocca al lupo", en: "good luck" }
      ],
      grammar: [
        "Passato prossimo (intro): <i>ho mangiato</i> (avere + participle), <i>sono andato/a</i> (essere + participle).",
        "Regular participles: -are → -ato (mangiato), -ere → -uto (venduto), -ire → -ito (dormito).",
        "Connecting ideas: e, ma, perché, quindi.",
        "Time words: ieri, oggi, domani, la settimana scorsa."
      ],
      practice: [
        "Tell what you did last weekend using the past tense.",
        "Combine sentences with e, ma, perché, quindi.",
        "Hold a 3-minute conversation combining all topics."
      ],
      speaking: [
        "Record a 2-minute self-introduction covering name, family, routine, and last weekend.",
        "Role-play a first meeting and a weekend chat.",
        "Describe your last holiday in the past tense."
      ],
      writing: [
        "Write a short paragraph about yourself in Italian (8–10 sentences).",
        "Write about what you did yesterday using five past-tense verbs."
      ],
      describing: [
        "Describe your ideal weekend and compare it to your real one.",
        "Describe a recent day from morning to night, in the past."
      ],
      exercises: [
        { q: "Translate: <i>I ate a pizza yesterday.</i>", a: "Ieri ho mangiato una pizza." },
        { q: "Translate: <i>I went to Rome.</i>", a: "Sono andato/a a Roma." },
        { q: "Connect: <i>Studio italiano ___ è difficile.</i>", a: "ma" },
        { q: "Translate: <i>Good luck!</i>", a: "In bocca al lupo!" }
      ],
      culture: "Regional differences are strong; greetings and food names change from north to south.",
      checklist: ["I can talk about the past.", "I can connect ideas.", "I can hold a short conversation.", "I can describe my weekend."]
    }
  ];

  /* ============================================================
     INTERMEDIATE — B1
     ============================================================ */
  var INTERMEDIATE = [
    {
      id: "int-overview",
      tab: "Overview",
      title: "Intermediate Course — B1",
      html: [
        "<p>An 8-week B1 course for learners who can already handle everyday conversation. The focus shifts to expressing opinions, telling stories in the past, and handling real-life situations with confidence.</p>",
        "<div class='overview-grid'>",
        "<div class='section'><h3>Details</h3><ul>",
        "<li><b>Level:</b> CEFR B1 (intermediate)</li>",
        "<li><b>Duration:</b> 8 weeks, 3 sessions/week (45–60 min)</li>",
        "<li><b>Goal:</b> Discuss news, tell stories in the past, express opinions and plans.</li>",
        "<li><b>Method:</b> Immersion: read and listen to authentic Italian, then produce your own.</li>",
        "</ul></div>",
        "<div class='section'><h3>Each week you get</h3><ul>",
        "<li>An authentic-style <b>dialogue</b>.</li>",
        "<li>Rich <b>vocabulary</b> with translations.</li>",
        "<li><b>Grammar</b> with contrasts and nuance.</li>",
        "<li><b>Speaking</b>, <b>writing</b>, and <b>describing</b> tasks.</li>",
        "<li><b>Exercises</b> with answers.</li>",
        "</ul></div>",
        "</div>",
        "<div class='section'><h3>Weekly rhythm</h3><table>",
        "<tr><th>Day</th><th>Focus</th></tr>",
        "<tr><td>Monday</td><td>Grammar + reading</td></tr>",
        "<tr><td>Wednesday</td><td>Listening + speaking</td></tr>",
        "<tr><td>Friday</td><td>Writing + review</td></tr>",
        "</table></div>"
      ].join("")
    },
    {
      id: "int1",
      tab: "Week 1",
      title: "Week 1 — The Passato Prossimo in Depth",
      objectives: [
        "Choose correctly between <b>avere</b> and <b>essere</b>.",
        "Make the participle agree with the subject.",
        "Use time markers: già, appena, mai, ancora.",
        "Tell what you did recently."
      ],
      dialogue: [
        { it: "Sei mai stato in Italia?", en: "Have you ever been to Italy?" },
        { it: "Sì, ci sono andato due anni fa.", en: "Yes, I went two years ago." },
        { it: "Dove sei andato esattamente?", en: "Where exactly did you go?" },
        { it: "Sono andato in Toscana e ho visitato Firenze.", en: "I went to Tuscany and visited Florence." },
        { it: "Hai già visto il Duomo?", en: "Have you already seen the Duomo?" },
        { it: "Sì, l'ho appena visto. È bellissimo!", en: "Yes, I've just seen it. It's beautiful!" },
        { it: "Non sono mai salito sulla cupola, però.", en: "I've never climbed the dome, though." }
      ],
      vocabItems: [
        { it: "ieri", en: "yesterday" },
        { it: "l'altro giorno", en: "the other day" },
        { it: "la settimana scorsa", en: "last week" },
        { it: "già", en: "already" },
        { it: "appena", en: "just (now)" },
        { it: "mai", en: "ever / never" },
        { it: "ancora", en: "yet / still" },
        { it: "finalmente", en: "finally" },
        { it: "visitare", en: "to visit" },
        { it: "salire", en: "to climb / go up" }
      ],
      grammar: [
        "Choosing the auxiliary: most transitive verbs take <b>avere</b>; movement and reflexive verbs take <b>essere</b> (andare, venire, partire, arrivare, nascere, morire, restare).",
        "Agreement with <b>essere</b>: <i>sono andato / andata / andati / andate</i>.",
        "Agreement with a preceding direct object pronoun: <i>L'ho vista</i> (I saw her).",
        "Time markers: <i>Non ho mai visto Venezia</i>, <i>Ho appena mangiato</i>, <i>Non sono ancora arrivato</i>."
      ],
      practice: [
        "Tell what you did last weekend using six different verbs.",
        "Transform ten present sentences into the passato prossimo.",
        "Decide the correct auxiliary for a list of verbs."
      ],
      speaking: [
        "Record a 2-minute account of your last trip.",
        "Role-play: interview a friend about their holidays.",
        "Retell a recent news story you read, in the past tense."
      ],
      writing: [
        "Write a 120-word diary entry about yesterday.",
        "Write 8 sentences using già, appena, mai, ancora."
      ],
      describing: [
        "Describe a place you visited, using both past tenses.",
        "Describe a memorable meal and how it was prepared."
      ],
      exercises: [
        { q: "Translate: <i>I went to Rome yesterday.</i>", a: "Sono andato/a a Roma ieri." },
        { q: "Translate: <i>We have already eaten.</i>", a: "Abbiamo già mangiato." },
        { q: "Translate: <i>I have never been to Sicily.</i>", a: "Non sono mai stato/a in Sicilia." },
        { q: "Choose the auxiliary: <i>partire</i>", a: "essere (sono partito/a)" }
      ],
      culture: "In the south, the passato prossimo often replaces the passato remoto even for distant events — regional usage varies.",
      checklist: ["I can choose the right auxiliary.", "I can make the participle agree.", "I can use time markers.", "I can tell what I did recently."]
    },
    {
      id: "int2",
      tab: "Week 2",
      title: "Week 2 — The Imperfetto and Storytelling",
      objectives: [
        "Form the imperfetto of regular and irregular verbs.",
        "Contrast passato prossimo and imperfetto.",
        "Describe past habits and backgrounds.",
        "Tell a story with a beginning and an event."
      ],
      dialogue: [
        { it: "Com'era la tua infanzia?", en: "What was your childhood like?" },
        { it: "Era semplice. Giocavo sempre fuori.", en: "It was simple. I always played outside." },
        { it: "E andavi a scuola a piedi?", en: "And did you walk to school?" },
        { it: "Sì, di solito andavo a piedi con mia sorella.", en: "Yes, I usually walked with my sister." },
        { it: "Cosa è successo un giorno memorabile?", en: "What happened on a memorable day?" },
        { it: "Mentre tornavamo, è iniziato un temporale.", en: "While we were returning, a storm began." },
        { it: "Eravamo spaventati, ma poi è uscito il sole.", en: "We were scared, but then the sun came out." }
      ],
      vocabItems: [
        { it: "mentre", en: "while" },
        { it: "quando", en: "when" },
        { it: "all'improvviso", en: "suddenly" },
        { it: "di solito", en: "usually" },
        { it: "da bambino/a", en: "as a child" },
        { it: "ogni giorno", en: "every day" },
        { it: "una volta", en: "once / one time" },
        { it: "il temporale", en: "the storm" },
        { it: "spaventato", en: "scared" },
        { it: "succedere", en: "to happen" }
      ],
      grammar: [
        "The <b>imperfetto</b>: parlavo, parlavi, parlava, parlavamo, parlavate, parlavano.",
        "Irregular imperfetto: essere → ero, fare → facevo, dire → dicevo, bere → bevevo, dire → dicevo.",
        "Passato prossimo vs imperfetto: completed action vs ongoing background — <i>Mentre leggevo, è squillato il telefono.</i>",
        "Imperfetto for habits and descriptions; passato prossimo for single events."
      ],
      practice: [
        "Describe your childhood habits with <i>di solito</i> and <i>da bambino</i>.",
        "Write a story mixing both tenses.",
        "Identify the tense used in ten sentences."
      ],
      speaking: [
        "Record a 2-minute story about a memorable day.",
        "Describe your hometown as it was ten years ago.",
        "Tell a story that begins <i>C'era una volta…</i>"
      ],
      writing: [
        "Write a 150-word story about a memorable day, mixing both past tenses.",
        "Write a paragraph describing your childhood home."
      ],
      describing: [
        "Describe a place from your past in detail.",
        "Describe how a tradition was celebrated when you were young."
      ],
      exercises: [
        { q: "Fill in: <i>Mentre ___ (io/leggere), ___ (lui/telefonare).</i>", a: "leggevo … ha telefonato" },
        { q: "Translate: <i>When I was a child, I played football every day.</i>", a: "Da bambino giocavo a calcio ogni giorno." },
        { q: "Imperfetto of <i>essere</i> (io)", a: "ero" },
        { q: "Which tense for a habit? prossimo or imperfetto?", a: "imperfetto" }
      ],
      culture: "Italian storytelling often opens with <i>C'era una volta…</i> (once upon a time).",
      checklist: ["I can form the imperfetto.", "I can contrast the two past tenses.", "I can tell a story.", "I can describe past habits."]
    },
    {
      id: "int3",
      tab: "Week 3",
      title: "Week 3 — Future, Conditional, and Hypotheses",
      objectives: [
        "Form the simple future.",
        "Use the conditional for politeness.",
        "Build first and second conditional sentences.",
        "Talk about plans and wishes."
      ],
      dialogue: [
        { it: "Cosa farai l'anno prossimo?", en: "What will you do next year?" },
        { it: "Studierò all'estero, forse in Italia.", en: "I will study abroad, maybe in Italy." },
        { it: "Che bello! E dove vivrai?", en: "How nice! And where will you live?" },
        { it: "Vivrò a Bologna. Mi piacerebbe imparare bene l'italiano.", en: "I'll live in Bologna. I'd like to learn Italian well." },
        { it: "Se avessi più tempo, verrei con te!", en: "If I had more time, I'd come with you!" },
        { it: "Magari! Potresti visitarmi in primavera.", en: "I wish! You could visit me in spring." },
        { it: "Volentieri! Ti scriverò presto.", en: "Gladly! I'll write to you soon." }
      ],
      vocabItems: [
        { it: "forse", en: "maybe" },
        { it: "probabilmente", en: "probably" },
        { it: "volentieri", en: "gladly / willingly" },
        { it: "se fossi", en: "if I were" },
        { it: "piuttosto", en: "rather" },
        { it: "in ogni caso", en: "in any case" },
        { it: "all'estero", en: "abroad" },
        { it: "vivere", en: "to live" },
        { it: "magari", en: "I wish / maybe" },
        { it: "presto", en: "soon" }
      ],
      grammar: [
        "Simple future: parlerò, sarai, avrà… Irregulars: sarò, avrò, andrò, farò, verrò, potrò.",
        "Conditional for politeness and desire: vorrei, potresti, dovrei, mi piacerebbe.",
        "First conditional: <i>Se piove, resto a casa.</i>",
        "Second conditional: <i>Se avessi tempo, viaggerei.</i>"
      ],
      practice: [
        "Make five polite requests using the conditional.",
        "Describe your plans for next year with the future.",
        "Build three conditional sentences about hypothetical situations."
      ],
      speaking: [
        "Record a 1-minute talk about your goals for next year.",
        "Role-play: make polite requests in a shop and a restaurant.",
        "Debate: what would you do with a free year?"
      ],
      writing: [
        "Write a 100-word letter about your plans for the future.",
        "Write five conditional sentences (first and second)."
      ],
      describing: [
        "Describe your ideal future life in ten years.",
        "Describe what you would change about your city if you could."
      ],
      exercises: [
        { q: "Translate: <i>I would like a coffee, please.</i>", a: "Vorrei un caffè, per favore." },
        { q: "Translate: <i>If I had money, I would travel.</i>", a: "Se avessi soldi, viaggerei." },
        { q: "Future of <i>fare</i> (io)", a: "farò" },
        { q: "Translate: <i>You could visit me.</i>", a: "Potresti visitarmi." }
      ],
      culture: "Italians often soften requests with the conditional — <i>Potresti…?</i> is far more natural than the imperative.",
      checklist: ["I can form the future.", "I can use the conditional for politeness.", "I can build conditionals.", "I can talk about plans."]
    },
    {
      id: "int4",
      tab: "Week 4",
      title: "Week 4 — Pronouns and Combined Pronouns",
      objectives: [
        "Use direct and indirect object pronouns.",
        "Combine two pronouns.",
        "Use the partitive <b>ne</b>.",
        "Sound more natural by avoiding repetition."
      ],
      dialogue: [
        { it: "Hai comprato il pane?", en: "Did you buy the bread?" },
        { it: "Sì, l'ho comprato stamattina.", en: "Yes, I bought it this morning." },
        { it: "E hai dato i soldi a Marco?", en: "And did you give the money to Marco?" },
        { it: "Sì, glieli ho dati ieri.", en: "Yes, I gave them to him yesterday." },
        { it: "Vuoi dell'acqua?", en: "Do you want some water?" },
        { it: "Sì, ne voglio un po'.", en: "Yes, I want some." },
        { it: "Quanti biscotti vuoi? Ne prendo tre.", en: "How many biscuits do you want? I'll take three." }
      ],
      vocabItems: [
        { it: "me lo", en: "it to me" },
        { it: "te la", en: "it to you" },
        { it: "glielo", en: "it to him/her" },
        { it: "ce ne", en: "there is/are some of it" },
        { it: "ci", en: "there / us / to us" },
        { it: "ne", en: "of it / of them / some" },
        { it: "vi", en: "you (plural) / to you" },
        { it: "lo / la", en: "him / her / it" },
        { it: "gli / le", en: "to him / to her" },
        { it: "un po'", en: "a little / some" }
      ],
      grammar: [
        "Direct object pronouns: lo, la, li, le — <i>Il libro? Lo leggo.</i>",
        "Indirect object pronouns: mi, ti, gli, le, ci, vi — <i>Gli parlo.</i>",
        "Combined pronouns: mi + lo → me lo; ti + la → te la; gli + lo → glielo; ci + ne → ce ne.",
        "The partitive <b>ne</b>: <i>Ne vuoi un po'? — Ne prendo due.</i>"
      ],
      practice: [
        "Rewrite eight sentences replacing objects with pronouns.",
        "Combine pronouns in ten short answers.",
        "Answer quantity questions using <i>ne</i>."
      ],
      speaking: [
        "Role-play a shopping exchange using combined pronouns.",
        "Answer ten rapid-fire questions using <i>ne</i>.",
        "Record yourself replacing nouns with pronouns in a paragraph."
      ],
      writing: [
        "Rewrite a short dialogue using only pronouns in the answers.",
        "Write ten sentences with combined pronouns."
      ],
      describing: [
        "Describe what you bought and to whom you gave it, using pronouns.",
        "Describe your shopping list and how much of each item you need (with ne)."
      ],
      exercises: [
        { q: "Replace: <i>Do the book to Marco.</i>", a: "Glielo do." },
        { q: "Replace: <i>Do you want some water? → Yes, I want some.</i>", a: "Ne vuoi? — Sì, ne voglio." },
        { q: "Combine: <i>mi + lo</i>", a: "me lo" },
        { q: "Replace: <i>I see her.</i>", a: "La vedo." }
      ],
      culture: "Mastering combined pronouns is the single biggest leap from B1 to B2.",
      checklist: ["I can use direct and indirect pronouns.", "I can combine two pronouns.", "I can use the partitive ne.", "I avoid repetition naturally."]
    },
    {
      id: "int5",
      tab: "Week 5",
      title: "Week 5 — Subjunctive (Congiuntivo) Introduction",
      objectives: [
        "Form the present subjunctive.",
        "Use it after opinion and emotion verbs.",
        "Express hopes, doubts, and opinions.",
        "Recognize common triggers."
      ],
      dialogue: [
        { it: "Cosa pensi di questa città?", en: "What do you think of this city?" },
        { it: "Penso che sia bellissima, ma che costi troppo.", en: "I think it's beautiful, but that it costs too much." },
        { it: "Credi che sia facile trovare lavoro?", en: "Do you believe it's easy to find work?" },
        { it: "Spero che tu abbia ragione.", en: "I hope you're right." },
        { it: "È importante che impariamo la lingua.", en: "It's important that we learn the language." },
        { it: "Sono d'accordo, benché sia difficile.", en: "I agree, although it's difficult." },
        { it: "Prima che parta, voglio visitare tutto.", en: "Before I leave, I want to visit everything." }
      ],
      vocabItems: [
        { it: "penso che", en: "I think that" },
        { it: "credo che", en: "I believe that" },
        { it: "spero che", en: "I hope that" },
        { it: "benchè", en: "although" },
        { it: "affinché", en: "so that" },
        { it: "prima che", en: "before" },
        { it: "sia", en: "(that) it is" },
        { it: "abbia", en: "(that) I have" },
        { it: "difficile", en: "difficult" },
        { it: "avere ragione", en: "to be right" }
      ],
      grammar: [
        "Present subjunctive after opinion, doubt, emotion: <i>Penso che sia giusto.</i>",
        "Forms: parlare → che io parli; essere → che io sia; avere → che io abbia.",
        "Triggers: penso/credo/spero che, è importante che, benché, prima che, affinché.",
        "The subjunctive is required even when the subject is the same in the two clauses (unlike English)."
      ],
      practice: [
        "Give six opinions using <i>penso che</i> + subjunctive.",
        "Express hopes and doubts about the future.",
        "Complete ten sentences with the correct subjunctive form."
      ],
      speaking: [
        "Record six opinions on everyday topics using the subjunctive.",
        "Role-play a debate where you disagree politely.",
        "Express what you hope will happen this year."
      ],
      writing: [
        "Write a 100-word opinion paragraph using five subjunctives.",
        "Write five sentences with <i>benché</i> and <i>prima che</i>."
      ],
      describing: [
        "Describe what you think your city needs and why.",
        "Describe your hopes for the coming year."
      ],
      exercises: [
        { q: "Complete: <i>Penso che tu ___ (avere) ragione.</i>", a: "abbia" },
        { q: "Complete: <i>Spero che loro ___ (arrivare) presto.</i>", a: "arrivino" },
        { q: "Subjunctive of <i>essere</i> (che io)", a: "che io sia" },
        { q: "Translate: <i>It's important that we learn.</i>", a: "È importante che impariamo." }
      ],
      culture: "The congiuntivo is a marker of educated speech; using it well noticeably raises perceived fluency.",
      checklist: ["I can form the present subjunctive.", "I know common triggers.", "I can express opinions correctly.", "I can express hopes and doubts."]
    },
    {
      id: "int6",
      tab: "Week 6",
      title: "Week 6 — Work, Opinions, and Debate",
      objectives: [
        "Express agreement and disagreement politely.",
        "Use contrast connectors.",
        "Use the impersonal <b>si</b>.",
        "Write and defend an opinion."
      ],
      dialogue: [
        { it: "Secondo me, gli smartphone a scuola sono un problema.", en: "In my opinion, smartphones at school are a problem." },
        { it: "Non sono d'accordo, però capisco il tuo punto.", en: "I don't agree, but I understand your point." },
        { it: "In effetti, aiutano a imparare se usati bene.", en: "In fact, they help learning if used well." },
        { it: "D'altra parte, distraggono facilmente.", en: "On the other hand, they distract easily." },
        { it: "Tuttavia, si può stabilire delle regole.", en: "However, one can set rules." },
        { it: "Vero. In Italia si discute molto di questo.", en: "True. In Italy people discuss this a lot." }
      ],
      vocabItems: [
        { it: "secondo me", en: "in my opinion" },
        { it: "d'altra parte", en: "on the other hand" },
        { it: "tuttavia", en: "however" },
        { it: "in effetti", en: "in fact" },
        { it: "sono d'accordo", en: "I agree" },
        { it: "non condivido", en: "I don't share (the view)" },
        { it: "però", en: "but" },
        { it: "invece", en: "instead" },
        { it: "il punto", en: "the point" },
        { it: "stabilire", en: "to establish / set" }
      ],
      grammar: [
        "Expressing agreement: <i>Sono d'accordo</i>, <i>Hai ragione</i>, <i>Esatto</i>.",
        "Expressing disagreement politely: <i>Non sono d'accordo</i>, <i>Non condivido</i>, <i>Capisco, però…</i>",
        "Connectors of contrast: però, tuttavia, invece, d'altra parte, mentre.",
        "The impersonal <b>si</b>: <i>Si dice che…</i>, <i>In Italia si lavora molto.</i>"
      ],
      practice: [
        "Debate a topic using contrast connectors.",
        "Write a short opinion paragraph (100 words).",
        "Reformulate five statements with the impersonal si."
      ],
      speaking: [
        "Record a 2-minute opinion on a current issue.",
        "Role-play a friendly debate and reach a compromise.",
        "Agree and disagree with six statements."
      ],
      writing: [
        "Write a 150-word opinion piece with a clear thesis.",
        "Write a reply disagreeing politely with an opinion."
      ],
      describing: [
        "Describe a social issue in your country and your view of it.",
        "Describe how attitudes to work differ between countries."
      ],
      exercises: [
        { q: "Translate: <i>I don't agree, however I understand your point.</i>", a: "Non sono d'accordo, tuttavia capisco il tuo punto." },
        { q: "Impersonal si: <i>People say that…</i>", a: "Si dice che…" },
        { q: "Connector for contrast (formal)", a: "tuttavia" },
        { q: "Translate: <i>In my opinion, it's a problem.</i>", a: "Secondo me, è un problema." }
      ],
      culture: "Coffee-break debate is a national pastime; disagreeing is often done with warmth, not confrontation.",
      checklist: ["I can express and defend an opinion.", "I can use contrast connectors.", "I can use the impersonal si.", "I can disagree politely."]
    },
    {
      id: "int7",
      tab: "Week 7",
      title: "Week 7 — Reading and Analyzing News",
      objectives: [
        "Understand a news article's main points.",
        "Use the passive voice.",
        "Report what someone said.",
        "Summarize and react to news."
      ],
      dialogue: [
        { it: "Hai letto il titolo di oggi?", en: "Have you read today's headline?" },
        { it: "Sì, la nuova legge è stata approvata ieri.", en: "Yes, the new law was approved yesterday." },
        { it: "Cosa dice l'articolo esattamente?", en: "What does the article say exactly?" },
        { it: "Il governo ha detto che entrerà in vigore a giugno.", en: "The government said it will come into force in June." },
        { it: "Secondo la fonte, è stata una decisione difficile.", en: "According to the source, it was a difficult decision." },
        { it: "In sintesi, cambierà molte cose.", en: "In short, it will change many things." }
      ],
      vocabItems: [
        { it: "il titolo", en: "the headline" },
        { it: "la notizia", en: "the news item" },
        { it: "secondo la fonte", en: "according to the source" },
        { it: "l'articolo", en: "the article" },
        { it: "il dibattito", en: "the debate" },
        { it: "in sintesi", en: "in short" },
        { it: "la legge", en: "the law" },
        { it: "entrare in vigore", en: "to come into force" },
        { it: "la decisione", en: "the decision" },
        { it: "approvare", en: "to approve" }
      ],
      grammar: [
        "Passive voice: <i>La legge è stata approvata.</i> (essere + participle).",
        "Passive with venire: <i>Il libro viene letto.</i>",
        "Reported speech (basic): <i>Ha detto che sarebbe arrivato.</i>",
        "Nominalization common in journalism: <i>l'aumento dei prezzi</i>."
      ],
      practice: [
        "Summarize an Italian news article in five sentences.",
        "Explain a headline in your own words.",
        "Convert active sentences to passive."
      ],
      speaking: [
        "Record a 2-minute summary of a news story.",
        "Role-play a news interview with a reporter.",
        "React to a headline with an opinion."
      ],
      writing: [
        "Write a 150-word news summary with a headline.",
        "Write ten passive-voice sentences about current events."
      ],
      describing: [
        "Describe a recent change in your country and its effects.",
        "Describe how the news covers a topic you follow."
      ],
      exercises: [
        { q: "Translate: <i>The law was approved yesterday.</i>", a: "La legge è stata approvata ieri." },
        { q: "Report: <i>Lui: \u201cArriverò.\u201d</i>", a: "Ha detto che sarebbe arrivato." },
        { q: "Passive of <i>approvare</i>", a: "essere approvato/a" },
        { q: "Translate: <i>According to the source…</i>", a: "Secondo la fonte…" }
      ],
      culture: "Italian newspapers range from <i>la Repubblica</i> (centre-left) to <i>il Corriere della Sera</i> (centrist) and <i>il Giornale</i> (centre-right).",
      checklist: ["I can use the passive voice.", "I can report what someone said.", "I can summarize an article.", "I can react to news."]
    },
    {
      id: "int8",
      tab: "Week 8",
      title: "Week 8 — Consolidation and Fluency",
      objectives: [
        "Combine all tenses and moods.",
        "Use discourse markers for flow.",
        "Use common idioms.",
        "Speak and write at length."
      ],
      dialogue: [
        { it: "Allora, come va con l'italiano?", en: "So, how's the Italian going?" },
        { it: "Insomma, migliora ogni giorno.", en: "Well, it improves every day." },
        { it: "Comunque, hai fatto progressi enormi.", en: "Anyway, you've made huge progress." },
        { it: "Grazie! A proposito, ho prenotato un viaggio in Italia.", en: "Thanks! By the way, I booked a trip to Italy." },
        { it: "Che bello! Dopotutto, è il modo migliore per imparare.", en: "How nice! After all, it's the best way to learn." },
        { it: "Non vedo l'ora!", en: "I can't wait!" },
        { it: "In bocca al lupo! Crepi il lupo!", en: "Good luck! (Reply: thanks!)" }
      ],
      vocabItems: [
        { it: "insomma", en: "well / in short" },
        { it: "comunque", en: "anyway / however" },
        { it: "a proposito", en: "by the way" },
        { it: "dopotutto", en: "after all" },
        { it: "in fin dei conti", en: "all things considered" },
        { it: "in bocca al lupo", en: "good luck" },
        { it: "non vedo l'ora", en: "I can't wait" },
        { it: "costa un occhio della testa", en: "it costs an arm and a leg" },
        { it: "fare progressi", en: "to make progress" },
        { it: "prenotare", en: "to book" }
      ],
      grammar: [
        "Review: passato prossimo, imperfetto, futuro, condizionale, congiuntivo.",
        "Discourse markers for natural flow: insomma, comunque, a proposito, dopotutto.",
        "Idiomatic expressions: <i>in bocca al lupo</i>, <i>non vedo l'ora</i>, <i>costa un occhio della testa</i>."
      ],
      practice: [
        "Hold a 10-minute conversation without switching to English.",
        "Write a 200-word opinion essay with introduction and conclusion.",
        "Use ten idioms in context."
      ],
      speaking: [
        "Record a 3-minute talk on a topic of your choice.",
        "Role-play a long conversation combining all topics.",
        "Summarize your learning journey in Italian."
      ],
      writing: [
        "Write a 200-word essay on a topic you care about.",
        "Write a letter to a friend about your plans and progress."
      ],
      describing: [
        "Describe your progress in Italian and what you'll do next.",
        "Describe a cultural difference you've noticed."
      ],
      exercises: [
        { q: "What do you reply to <i>In bocca al lupo</i>?", a: "Crepi (il lupo)!" },
        { q: "Translate: <i>I can't wait!</i>", a: "Non vedo l'ora!" },
        { q: "Meaning of <i>costa un occhio della testa</i>", a: "It costs an arm and a leg." },
        { q: "Discourse marker meaning 'by the way'", a: "a proposito" }
      ],
      culture: "<i>In bocca al lupo!</i> is the standard way to wish good luck; reply <i>crepi il lupo!</i>",
      checklist: ["I can speak for 10 minutes.", "I can write a structured essay.", "I use idioms naturally.", "I combine all tenses."]
    }
  ];

  /* ============================================================
     ADVANCED — C1
     ============================================================ */
  var ADVANCED = [
    {
      id: "adv-overview",
      tab: "Overview",
      title: "Advanced Course — C1",
      html: [
        "<p>An 8-week C1 course for learners aiming at near-native fluency. The focus is on nuance, register, literary and journalistic Italian, and mastering the subjunctive and complex syntax.</p>",
        "<div class='overview-grid'>",
        "<div class='section'><h3>Details</h3><ul>",
        "<li><b>Level:</b> CEFR C1 (advanced)</li>",
        "<li><b>Duration:</b> 8 weeks, 3 sessions/week (60 min)</li>",
        "<li><b>Goal:</b> Argue complex ideas, understand literature and fast speech, write formally.</li>",
        "<li><b>Method:</b> Authentic texts, podcasts, and literature with active analysis.</li>",
        "</ul></div>",
        "<div class='section'><h3>Each week you get</h3><ul>",
        "<li>A rich <b>dialogue</b> at natural speed.</li>",
        "<li><b>Vocabulary</b> with register notes.</li>",
        "<li><b>Advanced grammar</b> and syntax.</li>",
        "<li><b>Speaking</b>, <b>writing</b>, and <b>describing</b> tasks at C1 level.</li>",
        "<li><b>Exercises</b> with answers.</li>",
        "</ul></div>",
        "</div>",
        "<div class='section'><h3>Weekly rhythm</h3><table>",
        "<tr><th>Day</th><th>Focus</th></tr>",
        "<tr><td>Monday</td><td>Complex grammar + literature</td></tr>",
        "<tr><td>Wednesday</td><td>Debate + register</td></tr>",
        "<tr><td>Friday</td><td>Formal writing + editing</td></tr>",
        "</table></div>"
      ].join("")
    },
    {
      id: "adv1",
      tab: "Week 1",
      title: "Week 1 — All Subjunctive Tenses",
      objectives: [
        "Use all four subjunctive tenses.",
        "Apply the sequence of tenses.",
        "Use concessive conjunctions.",
        "Express complex hypotheses."
      ],
      dialogue: [
        { it: "Nonostante piovesse, siamo usciti lo stesso.", en: "Although it was raining, we went out anyway." },
        { it: "Pensavo che avessi già finito il progetto.", en: "I thought you had already finished the project." },
        { it: "Purché ci sia tempo, lo consegnerò domani.", en: "Provided there is time, I'll submit it tomorrow." },
        { it: "A patto che tu mi aiuti, accetto.", en: "As long as you help me, I accept." },
        { it: "Benché sia tardi, dobbiamo continuare.", en: "Although it's late, we must continue." },
        { it: "Se avessi saputo prima, avrei agito diversamente.", en: "If I had known earlier, I would have acted differently." }
      ],
      vocabItems: [
        { it: "quantunque", en: "although (literary)" },
        { it: "purché", en: "provided that" },
        { it: "a patto che", en: "on condition that" },
        { it: "nonostante", en: "despite / although" },
        { it: "per quanto", en: "however much" },
        { it: "ammesso che", en: "assuming that" },
        { it: "lo stesso", en: "anyway" },
        { it: "consegnare", en: "to hand in / deliver" },
        { it: "agire", en: "to act" },
        { it: "diversamente", en: "differently" }
      ],
      grammar: [
        "Present, imperfect, past, pluperfect subjunctive: che io parli / che io parlassi / che io abbia parlato / che io avessi parlato.",
        "Sequence of tenses: <i>Penso che sia</i> (present) vs <i>Pensavo che fosse</i> (past).",
        "Concessive/conditional conjunctions: benché, quantunque, purché, a patto che, ammesso che.",
        "Third conditional: <i>Se avessi saputo, avrei agito.</i>"
      ],
      practice: [
        "Rewrite ten sentences requiring the subjunctive.",
        "Express complex hypotheses about past events.",
        "Complete sentences with concessive conjunctions."
      ],
      speaking: [
        "Record a 2-minute reflection on a past decision using the subjunctive.",
        "Debate hypothetical scenarios using <i>se</i> clauses.",
        "Express regret about something using the pluperfect subjunctive."
      ],
      writing: [
        "Write a 200-word reflective text using all subjunctive tenses.",
        "Write five third-conditional sentences."
      ],
      describing: [
        "Describe how a past situation could have gone differently.",
        "Describe your conditions for accepting an offer (purché / a patto che)."
      ],
      exercises: [
        { q: "Complete: <i>Nonostante ___ (piovere), siamo usciti.</i>", a: "piovesse" },
        { q: "Complete: <i>Pensavo che tu ___ (avere) già finito.</i>", a: "avessi" },
        { q: "Translate: <i>If I had known, I would have acted differently.</i>", a: "Se avessi saputo, avrei agito diversamente." },
        { q: "Subjunctive pluperfect of <i>parlare</i> (che io)", a: "che io avessi parlato" }
      ],
      culture: "The congiuntivo is fully alive in careful writing and speech; dropping it can sound uneducated in formal contexts.",
      checklist: ["I can use all four subjunctive tenses.", "I apply the sequence of tenses.", "I use concessive conjunctions.", "I can build third conditionals."]
    },
    {
      id: "adv2",
      tab: "Week 2",
      title: "Week 2 — Passive, Impersonal, and Si Passivante",
      objectives: [
        "Use passive with essere and venire.",
        "Use si passivante.",
        "Handle impersonal reflexives.",
        "Choose the right construction for register."
      ],
      dialogue: [
        { it: "Si vendono molte case in questo quartiere.", en: "Many houses are sold in this neighbourhood." },
        { it: "La legge è stata discussa a lungo in Parlamento.", en: "The law was discussed at length in Parliament." },
        { it: "Il libro viene pubblicato la prossima settimana.", en: "The book is (being) published next week." },
        { it: "Si ritiene che i prezzi aumenteranno.", en: "It is believed that prices will rise." },
        { it: "In inverno ci si sveglia quando è ancora buio.", en: "In winter one wakes up when it's still dark." },
        { it: "Si è deciso di rinviare la riunione.", en: "It was decided to postpone the meeting." }
      ],
      vocabItems: [
        { it: "viene pubblicato", en: "is published" },
        { it: "si ritiene", en: "it is believed" },
        { it: "si è deciso", en: "it was decided" },
        { it: "viene considerato", en: "is considered" },
        { it: "il quartiere", en: "the neighbourhood" },
        { it: "il Parlamento", en: "Parliament" },
        { it: "rinviare", en: "to postpone" },
        { it: "aumentare", en: "to increase" },
        { it: "la riunione", en: "the meeting" },
        { it: "il buio", en: "the dark" }
      ],
      grammar: [
        "Passive with essere and venire: <i>Il libro è stato / viene letto.</i>",
        "Si passivante: <i>Si vendono case.</i> / <i>Si è discusso a lungo.</i>",
        "Impersonal si with reflexive verbs: <i>Ci si sveglia presto.</i>",
        "Register: passive/impersonal is typical of news and formal writing."
      ],
      practice: [
        "Convert ten active sentences to passive and impersonal forms.",
        "Describe social phenomena using si passivante.",
        "Choose the most formal option for ten sentences."
      ],
      speaking: [
        "Record a formal announcement using impersonal constructions.",
        "Describe customs using <i>si</i> passivante.",
        "Report a decision without naming who made it."
      ],
      writing: [
        "Write a 150-word formal notice using passive and impersonal forms.",
        "Rewrite an informal paragraph in formal, impersonal style."
      ],
      describing: [
        "Describe how things are done in your country using impersonal si.",
        "Describe a building or product being made (passive)."
      ],
      exercises: [
        { q: "Make impersonal: <i>People sell houses here.</i>", a: "Qui si vendono case." },
        { q: "Passive: <i>They discuss the law.</i>", a: "La legge è discussa / viene discussa." },
        { q: "Impersonal reflexive: <i>one wakes up early</i>", a: "ci si sveglia presto" },
        { q: "Translate: <i>It is believed that…</i>", a: "Si ritiene che…" }
      ],
      culture: "The si passivante is everywhere in signage and news — mastering it is essential for reading real Italian.",
      checklist: ["I can use both passive forms.", "I can use si passivante.", "I can handle impersonal reflexives.", "I can choose register."]
    },
    {
      id: "adv3",
      tab: "Week 3",
      title: "Week 3 — Relative Clauses and Nominalization",
      objectives: [
        "Use all relative pronouns.",
        "Build cui-constructions.",
        "Nominalize for formal register.",
        "Write complex sentences."
      ],
      dialogue: [
        { it: "La persona a cui ho parlato era il direttore.", en: "The person I spoke to was the director." },
        { it: "Il progetto, il quale è stato approvato, partirà a maggio.", en: "The project, which was approved, will start in May." },
        { it: "Chiunque voglia partecipare deve iscriversi.", en: "Whoever wants to take part must register." },
        { it: "Ciò che conta è la qualità, non la quantità.", en: "What matters is quality, not quantity." },
        { it: "L'approvazione della legge ha sorpreso tutti.", en: "The approval of the law surprised everyone." },
        { it: "Quanto hai detto è molto interessante.", en: "What you said is very interesting." }
      ],
      vocabItems: [
        { it: "il quale / la quale", en: "which / who (formal)" },
        { it: "colui che", en: "the one who (formal)" },
        { it: "chiunque", en: "whoever" },
        { it: "ciò che", en: "what / that which" },
        { it: "quanto", en: "what / as much as" },
        { it: "l'approvazione", en: "the approval" },
        { it: "la qualità", en: "quality" },
        { it: "la quantità", en: "quantity" },
        { it: "partecipare", en: "to take part" },
        { it: "iscriversi", en: "to register" }
      ],
      grammar: [
        "Relative pronouns: che, cui, il quale, chi, ciò che, quanto.",
        "Preposition + cui: <i>la persona a cui ho parlato</i>; <i>il motivo per cui</i>.",
        "Nominalization for formal style: <i>l'approvazione della legge</i> instead of <i>quando la legge è stata approvata</i>.",
        "Cleft and pseudo-cleft for emphasis: <i>È lui che…</i>, <i>Quello che conta è…</i>"
      ],
      practice: [
        "Combine pairs of sentences using relative clauses.",
        "Rewrite informal sentences in formal, nominalized style.",
        "Transform ten clauses into noun phrases."
      ],
      speaking: [
        "Record a formal summary using relative clauses.",
        "Explain a process using nominalized forms.",
        "Describe a person using <i>il quale</i> and <i>cui</i>."
      ],
      writing: [
        "Write a 200-word formal report using relative clauses and nominalization.",
        "Rewrite a 100-word informal text in formal register."
      ],
      describing: [
        "Describe a complex process using relative clauses.",
        "Describe a person and their role in detail."
      ],
      exercises: [
        { q: "Combine: <i>Ho incontrato un uomo. L'uomo era italiano.</i>", a: "Ho incontrato un uomo che era italiano." },
        { q: "Formal relative: <i>la persona a ___ ho parlato</i>", a: "cui" },
        { q: "Nominalize: <i>quando la legge è stata approvata</i>", a: "l'approvazione della legge" },
        { q: "Translate: <i>What matters is quality.</i>", a: "Ciò che conta è la qualità." }
      ],
      culture: "Formal Italian favors complex subordinate clauses; this is a hallmark of C1 writing.",
      checklist: ["I can use all relative pronouns.", "I can build cui-constructions.", "I can nominalize for register.", "I can write complex sentences."]
    },
    {
      id: "adv4",
      tab: "Week 4",
      title: "Week 4 — Idioms, Proverbs, and Colloquialisms",
      objectives: [
        "Understand common idioms.",
        "Use them naturally in speech.",
        "Know diminutive and augmentative forms.",
        "Interpret proverbs."
      ],
      dialogue: [
        { it: "Domani ho l'esame. In bocca al lupo!", en: "Tomorrow I have the exam. Good luck!" },
        { it: "Crepi! Non vedo l'ora di finire.", en: "Thanks! I can't wait to finish." },
        { it: "Quel libro costa un occhio della testa.", en: "That book costs an arm and a leg." },
        { it: "Lo so, ma va a ruba comunque.", en: "I know, but it's selling like hotcakes anyway." },
        { it: "Smettila di prendermi in giro!", en: "Stop teasing me!" },
        { it: "Dai, un caffettino e passa la paura.", en: "Come on, a quick coffee and the fear is gone." }
      ],
      vocabItems: [
        { it: "in bocca al lupo", en: "good luck" },
        { it: "non vedo l'ora", en: "I can't wait" },
        { it: "costa un occhio", en: "it costs a fortune" },
        { it: "prendere in giro", en: "to tease / pull someone's leg" },
        { it: "fare il furbo", en: "to act sly" },
        { it: "andare a ruba", en: "to sell like hotcakes" },
        { it: "avere le mani in pasta", en: "to be well-connected" },
        { it: "un caffettino", en: "a quick little coffee" },
        { it: "un librone", en: "a big book" },
        { it: "passa la paura", en: "the fear goes away" }
      ],
      grammar: [
        "Idiomatic verb phrases and their register (neutral vs colloquial).",
        "Fixed expressions that resist literal translation.",
        "Diminutives and augmentatives: -ino, -etto, -one, -accio — <i>un caffettino</i>, <i>un librone</i>.",
        "Alterations can add affection, size, or contempt."
      ],
      practice: [
        "Use ten idioms in original sentences.",
        "Explain five Italian proverbs to a foreign friend.",
        "Form diminutives/augmentatives of ten nouns."
      ],
      speaking: [
        "Record a casual conversation full of idioms.",
        "Explain three proverbs and when to use them.",
        "React to situations using the right idiom."
      ],
      writing: [
        "Write a 150-word informal dialogue using ten idioms.",
        "Write a short text explaining five proverbs."
      ],
      describing: [
        "Describe a person's character using idioms and augmentatives.",
        "Describe a situation where an idiom fits perfectly."
      ],
      exercises: [
        { q: "What does <i>costa un occhio della testa</i> mean?", a: "It costs an arm and a leg (very expensive)." },
        { q: "Meaning of <i>andare a ruba</i>", a: "To sell like hotcakes." },
        { q: "Augmentative of <i>libro</i>", a: "librone" },
        { q: "Meaning of <i>prendere in giro</i>", a: "To tease / pull someone's leg." }
      ],
      culture: "Proverbs remain common in family speech — <i>Chi va piano va sano e va lontano.</i>",
      checklist: ["I understand common idioms.", "I can use them naturally.", "I know diminutive/augmentative forms.", "I can interpret proverbs."]
    },
    {
      id: "adv5",
      tab: "Week 5",
      title: "Week 5 — Literary Italian and Register",
      objectives: [
        "Recognize literary and archaic forms.",
        "Use formal connectors.",
        "Switch register deliberately.",
        "Read 19th-century prose."
      ],
      dialogue: [
        { it: "Egli non sapeva onde procedere.", en: "He did not know from where to proceed. (literary)" },
        { it: "Pertanto, decise di attendere.", en: "Therefore, he decided to wait." },
        { it: "Giacché il tempo stringeva, partì all'alba.", en: "Since time was short, he left at dawn." },
        { it: "Ove fosse possibile, avrebbe voluto restare.", en: "Where it were possible, he would have liked to stay." },
        { it: "Codesto atteggiamento, altresì, lo preoccupava.", en: "That attitude, moreover, worried him. (literary)" },
        { it: "Ma in fin dei conti, nulla era perduto.", en: "But all things considered, nothing was lost." }
      ],
      vocabItems: [
        { it: "pertanto", en: "therefore (formal)" },
        { it: "altresì", en: "moreover (formal)" },
        { it: "codesto", en: "that (archaic, Tuscan)" },
        { it: "onde", en: "from where / so that (literary)" },
        { it: "giacché", en: "since / because (formal)" },
        { it: "ove", en: "where / if (literary)" },
        { it: "egli / ella", en: "he / she (literary)" },
        { it: "all'alba", en: "at dawn" },
        { it: "stringere", en: "to press / tighten" },
        { it: "l'atteggiamento", en: "the attitude" }
      ],
      grammar: [
        "Literary and archaic forms: egli, ella, essi, onde, ove, codesto.",
        "Formal connectors: pertanto, altresì, giacché, anzi, onde.",
        "Choosing register: informal / standard / formal / literary.",
        "Passato remoto in narrative: <i>egli partì</i>."
      ],
      practice: [
        "Read a page of a classic novel and identify the register.",
        "Rewrite a passage from literary to modern standard Italian.",
        "Classify ten sentences by register."
      ],
      speaking: [
        "Record a formal speech using formal connectors.",
        "Read a literary passage aloud with correct rhythm.",
        "Retell a classic story in modern Italian."
      ],
      writing: [
        "Write a 200-word passage in formal register.",
        "Rewrite a literary paragraph in modern standard Italian."
      ],
      describing: [
        "Describe a scene in the style of a 19th-century novel.",
        "Describe how language register changes a text's tone."
      ],
      exercises: [
        { q: "Modernize: <i>Egli non sapeva onde procedere.</i>", a: "Lui non sapeva da dove andare / come procedere." },
        { q: "Formal connector meaning 'therefore'", a: "pertanto" },
        { q: "Literary word for 'he'", a: "egli" },
        { q: "Meaning of <i>ove</i> in literary use", a: "where / if" }
      ],
      culture: "Reading classics (Calvino, Moravia, Elena Ferrante) trains the ear for natural rhythm and syntax.",
      checklist: ["I recognize literary forms.", "I can switch register deliberately.", "I can read 19th-century prose.", "I use formal connectors."]
    },
    {
      id: "adv6",
      tab: "Week 6",
      title: "Week 6 — Fast Speech, Regional Accents, and Listening",
      objectives: [
        "Understand discourse particles.",
        "Follow fast speech.",
        "Recognize regional accents.",
        "Shadow a native speaker."
      ],
      dialogue: [
        { it: "Che ne so io? Boh.", en: "How should I know? Dunno." },
        { it: "Mah, secondo me esagera.", en: "Meh, in my opinion he's exaggerating." },
        { it: "Vieni alla festa stasera? Magari!", en: "Are you coming to the party tonight? Maybe!" },
        { it: "Guarda, non ci credo.", en: "Look, I don't believe it." },
        { it: "Senti, figurati se dice di no.", en: "Listen, imagine him saying no." },
        { it: "Vabbè, ci vediamo dopo.", en: "Alright, see you later." }
      ],
      vocabItems: [
        { it: "che ne so", en: "how should I know" },
        { it: "boh", en: "dunno" },
        { it: "mah", en: "meh / who knows" },
        { it: "guarda", en: "look / hey" },
        { it: "senti", en: "listen" },
        { it: "figurati", en: "imagine / no worries" },
        { it: "magari", en: "maybe / I wish" },
        { it: "vabbè", en: "alright / whatever" },
        { it: "esagerare", en: "to exaggerate" },
        { it: "ci vediamo", en: "see you" }
      ],
      grammar: [
        "Discourse particles: boh, mah, magari, figurati — meaning shifts with tone.",
        "Elision and truncation in speech: <i>un po'</i>, <i>d'accordo</i>, <i>quest'anno</i>, <i>vabbè</i>.",
        "Regional pronunciation: Tuscan aspiration, Roman truncation, Southern gemination.",
        "Fillers and softeners that make speech natural."
      ],
      practice: [
        "Watch a film scene with subtitles, then without.",
        "Shadow a native speaker for two minutes, imitating rhythm.",
        "Identify discourse particles in a podcast."
      ],
      speaking: [
        "Record yourself imitating Roman and Tuscan pronunciation.",
        "Hold a casual conversation using discourse particles.",
        "Shadow a 1-minute clip, matching speed and intonation."
      ],
      writing: [
        "Write a colloquial dialogue with discourse particles.",
        "Transcribe a 1-minute audio clip accurately."
      ],
      describing: [
        "Describe how speech changes across regions of Italy.",
        "Describe the difference between formal and colloquial speech."
      ],
      exercises: [
        { q: "What does <i>magari!</i> express?", a: "I wish! / Maybe! (a strong wish or possibility)" },
        { q: "Meaning of <i>figurati</i>", a: "Imagine! / Don't worry / No problem." },
        { q: "Colloquial contraction of <i>va bene</i>", a: "vabbè" },
        { q: "Meaning of <i>boh</i>", a: "I don't know / dunno" }
      ],
      culture: "Italian is highly regional; exposure to multiple accents is essential for real comprehension.",
      checklist: ["I understand discourse particles.", "I can follow fast speech.", "I recognize regional accents.", "I can shadow a native speaker."]
    },
    {
      id: "adv7",
      tab: "Week 7",
      title: "Week 7 — Formal and Academic Writing",
      objectives: [
        "Write formal emails and letters.",
        "Hedge academic claims.",
        "Use cohesion devices.",
        "Structure an argument formally."
      ],
      dialogue: [
        { it: "Gentile Professore, Le scrivo in merito all'esame.", en: "Dear Professor, I am writing regarding the exam." },
        { it: "In merito a ciò, avrei alcune domande.", en: "Regarding that, I have a few questions." },
        { it: "Sembrerebbe che la scadenza sia stata prorogata.", en: "It would seem that the deadline has been extended." },
        { it: "È verosimile che ci siano ulteriori dettagli.", en: "It is likely that there are further details." },
        { it: "Si può ipotizzare un rinvio, onde evitare problemi.", en: "One could hypothesize a postponement, to avoid problems." },
        { it: "La ringrazio anticipatamente. Cordiali saluti.", en: "Thank you in advance. Kind regards." }
      ],
      vocabItems: [
        { it: "in merito a", en: "regarding" },
        { it: "a tal proposito", en: "on that matter" },
        { it: "in conclusione", en: "in conclusion" },
        { it: "in sostanza", en: "in essence" },
        { it: "onde evitare", en: "in order to avoid" },
        { it: "si evidenzia", en: "it is highlighted" },
        { it: "sembrerebbe che", en: "it would seem that" },
        { it: "è verosimile che", en: "it is likely that" },
        { it: "si può ipotizzare", en: "one can hypothesize" },
        { it: "cordiali saluti", en: "kind regards" }
      ],
      grammar: [
        "Formal letter/email conventions: <i>Gentile Dottore, Egregio Signore, Cordiali saluti.</i>",
        "Academic hedging: <i>sembrerebbe che</i>, <i>è verosimile che</i>, <i>si può ipotizzare</i>.",
        "Cohesion devices: pertanto, in merito a, a tal proposito, in conclusione.",
        "Formal address with capital <i>Lei/La</i>."
      ],
      practice: [
        "Write a formal complaint email (200 words).",
        "Write an academic paragraph with hedging.",
        "Rewrite an informal request formally."
      ],
      speaking: [
        "Record a formal presentation opening.",
        "Role-play a formal phone call with an office.",
        "Present an argument with hedged claims."
      ],
      writing: [
        "Write a formal email to a professor (200 words).",
        "Write an academic paragraph with citations and hedging."
      ],
      describing: [
        "Describe a problem formally and propose a solution.",
        "Describe the structure of a formal Italian letter."
      ],
      exercises: [
        { q: "Open a formal email to a professor.", a: "Gentile Professore / Gentile Professoressa," },
        { q: "Close a formal email.", a: "Cordiali saluti." },
        { q: "Hedged form of 'it seems'", a: "sembrerebbe che" },
        { q: "Formal phrase meaning 'regarding'", a: "in merito a" }
      ],
      culture: "Italian formal correspondence uses many formulas; using them correctly signals professionalism.",
      checklist: ["I can write a formal email.", "I can hedge academic claims.", "I use cohesion devices well.", "I can structure an argument."]
    },
    {
      id: "adv8",
      tab: "Week 8",
      title: "Week 8 — Near-Native Fluency and Nuance",
      objectives: [
        "Use subtle tense choices for nuance.",
        "Use cleft sentences for emphasis.",
        "Understand irony and understatement.",
        "Argue a nuanced position."
      ],
      dialogue: [
        { it: "È lui che ha preso la decisione, non io.", en: "It's he who made the decision, not me." },
        { it: "A conti fatti, la situazione è complessa.", en: "All things considered, the situation is complex." },
        { it: "Per l'appunto, volevo parlarne con te.", en: "Precisely, I wanted to talk to you about it." },
        { it: "In buona sostanza, ci sono molte sfumature.", en: "In essence, there are many nuances." },
        { it: "Certo, se vogliamo essere precisi…", en: "Of course, if we want to be precise…" },
        { it: "Sono d'accordo, ma con qualche riserva.", en: "I agree, but with some reservations." }
      ],
      vocabItems: [
        { it: "sottigliezze", en: "subtleties" },
        { it: "sfumature", en: "nuances" },
        { it: "in buona sostanza", en: "in essence" },
        { it: "a conti fatti", en: "all things considered" },
        { it: "per l'appunto", en: "precisely" },
        { it: "con riserva", en: "with reservations" },
        { it: "essere precisi", en: "to be precise" },
        { it: "la decisione", en: "the decision" },
        { it: "la situazione", en: "the situation" },
        { it: "complesso", en: "complex" }
      ],
      grammar: [
        "Subtle tense choices for nuance and emphasis.",
        "Word order for focus: cleft sentences <i>È lui che l'ha fatto.</i>",
        "Pseudo-clefts: <i>Quello che importa è…</i>",
        "Pragmatics: irony, understatement, and politeness strategies."
      ],
      practice: [
        "Debate a complex topic for 15 minutes.",
        "Write a 400-word essay with thesis and counter-argument.",
        "Rephrase ten sentences for emphasis using clefts."
      ],
      speaking: [
        "Record a 3-minute nuanced argument.",
        "Debate a controversial topic, conceding and rebutting.",
        "Use irony and understatement appropriately."
      ],
      writing: [
        "Write a 400-word essay with a clear thesis and counter-argument.",
        "Write a nuanced opinion piece with hedging and emphasis."
      ],
      describing: [
        "Describe a complex issue from two perspectives.",
        "Describe the nuances in a word's meaning across contexts."
      ],
      exercises: [
        { q: "Emphasize that <i>he</i> did it (not someone else).", a: "È lui che l'ha fatto." },
        { q: "Pseudo-cleft for 'what matters is quality'", a: "Quello che conta è la qualità." },
        { q: "Meaning of <i>a conti fatti</i>", a: "All things considered." },
        { q: "Translate: <i>I agree, but with reservations.</i>", a: "Sono d'accordo, ma con qualche riserva." }
      ],
      culture: "At C1+, the goal is not perfection but naturalness — sounding like an educated native speaker.",
      checklist: ["I can argue a nuanced position.", "I can use cleft sentences.", "I understand irony and understatement.", "I can use subtle tense choices."]
    }
  ];

  return { beginner: BEGINNER, intermediate: INTERMEDIATE, advanced: ADVANCED };
})();
