// Справка по временам испанского глагола. Общая для всех текстов.
const CONJ = (head, rows) => ({ head, rows });
const P6 = ["yo", "tú", "él / ella", "nosotros", "vosotros", "ellos"];
const tbl3 = (verbs, forms) => CONJ(["", ...verbs], P6.map((p, i) => [p, ...forms.map(f => f[i])]));

const GRAMMAR = {
  presente: {
    name: "Presente", ru: "Настоящее время", tense: "pres",
    when: [
      "Факты и то, что верно всегда: <i>El castellano procede del latín.</i>",
      "Действие прямо сейчас: <i>Leo un libro.</i>",
      "Регулярное, повторяющееся: <i>Las flores empiezan a abrirse en primavera.</i>",
      "В рассказе о прошлом для живости (presente histórico) — в этой книге встречается часто."
    ],
    formNote: "Отбрасываем -ar / -er / -ir и добавляем окончания:",
    table: tbl3(["tomar", "comer", "vivir"], [
      ["tomo", "tomas", "toma", "tomamos", "tomáis", "toman"],
      ["como", "comes", "come", "comemos", "coméis", "comen"],
      ["vivo", "vives", "vive", "vivimos", "vivís", "viven"]]),
    irregular: "Корень меняется под ударением: <b>e→ie</b> (empezar: empiezo, empiezas, empieza… но empezamos), <b>o→ue</b> (poder: puedo… но podemos), <b>e→i</b> (pedir: pido). Форма yo на <b>-go</b>: venir — vengo, hacer — hago, decir — digo, tener — tengo. Свои формы у ser (soy, eres, es, somos, sois, son), ir (voy, vas, va…) и estar (estoy, estás, está…).",
    trap: "Корень меняется только под ударением, поэтому у nosotros и vosotros он обычный: puedo, но podemos."
  },
  imperfecto: {
    name: "Pretérito imperfecto", ru: "Прошедшее: фон и привычка", tense: "imp",
    when: [
      "Описание и фон в прошлом — как было, что значило: <i>La palabra significaba «abeja».</i>",
      "Привычное или повторяющееся, часто с siempre, muchas veces, cada año: <i>Muchas veces se empleaba el diminutivo.</i>",
      "Состояние без чёткого начала и конца: <i>Abril estaba consagrado a Venus.</i>",
      "Действие, которое шло, когда случилось другое: <i>Leía cuando sonó el teléfono.</i>"
    ],
    formNote: "У -ar окончание -aba, у -er и -ir одинаковое -ía:",
    table: tbl3(["tomar", "comer", "vivir"], [
      ["tomaba", "tomabas", "tomaba", "tomábamos", "tomabais", "tomaban"],
      ["comía", "comías", "comía", "comíamos", "comíais", "comían"],
      ["vivía", "vivías", "vivía", "vivíamos", "vivíais", "vivían"]]),
    irregular: "Неправильных всего три: <b>ser</b> — era, eras, era, éramos, erais, eran; <b>ir</b> — iba, ibas, iba, íbamos, ibais, iban; <b>ver</b> — veía, veías, veía…",
    trap: "Imperfecto или indefinido? Представьте сцену в театре. Imperfecto — декорации: что было, что длилось, что делали обычно. Indefinido — события на сцене: что случилось и закончилось."
  },
  indefinido: {
    name: "Pretérito indefinido", ru: "Прошедшее: завершённое событие", tense: "indef",
    when: [
      "Законченное событие в прошлом: <i>Ocurrió con muchas otras palabras.</i>",
      "Момент или период, который закончился: ayer, en 1492, en el siglo XIII.",
      "Цепочка событий: сначала одно, потом другое.",
      "Итог процесса: <i>Acabó por convertirse en sinónimo.</i>"
    ],
    formNote: "У -er и -ir окончания одинаковые; ударение на окончании:",
    table: tbl3(["tomar", "comer", "vivir"], [
      ["tomé", "tomaste", "tomó", "tomamos", "tomasteis", "tomaron"],
      ["comí", "comiste", "comió", "comimos", "comisteis", "comieron"],
      ["viví", "viviste", "vivió", "vivimos", "vivisteis", "vivieron"]]),
    irregular: "<b>ser</b> и <b>ir</b> совпадают: fui, fuiste, fue, fuimos, fuisteis, fueron. Особая основа и окончания без ударения: tener — tuve, estar — estuve, poder — pude, hacer — hice (hizo), decir — dije (dijeron), venir — vine, querer — quise.",
    trap: "Всё решает ударение: tomo — «я беру» (presente), tomó — «он взял» (indefinido)."
  },
  perfecto: {
    name: "Pretérito perfecto", ru: "Прошедшее, связанное с настоящим", tense: "perf",
    when: [
      "Период ещё не закончился: hoy, esta semana, este año, siempre, nunca, todavía no. <i>Siempre se ha dicho que…</i>",
      "Опыт или результат без указания, когда именно: <i>Algunos han sugerido que…</i>",
      "Недавнее событие, важное сейчас."
    ],
    formNote: "haber в настоящем времени + participio (не меняется):",
    table: CONJ(["", "haber", "пример"], P6.map((p, i) => [p,
      ["he", "has", "ha", "hemos", "habéis", "han"][i],
      ["he tomado", "has comido", "ha dicho", "hemos vivido", "habéis visto", "han sugerido"][i]])),
    irregular: "Неправильными бывают только participios: dicho, hecho, visto, escrito, abierto, puesto, vuelto.",
    trap: "В Испании perfecto часто заменяет indefinido для недавнего прошлого. В Латинской Америке, откуда автор книги, чаще скажут indefinido: siempre se dijo."
  },
  subjuntivo: {
    name: "Subjuntivo: когда и почему", ru: "Сослагательное наклонение", tense: "subj",
    when: [
      "Indicativo говорит о фактах как о фактах. Subjuntivo выражает отношение к действию: оценку, желание, сомнение, неопределённость.",
      "Схема почти всегда одна: <b>главная часть + que + subjuntivo</b>. Смотрите, что выражает главная часть.",
      "<b>Оценка, эмоция:</b> es curioso que, es raro que, me alegra que, es una pena que. Даже если факт реальный: <i>Puede parecer curioso que el castellano haya tomado…</i>",
      "<b>Желание, просьба:</b> quiero que, espero que, pido que.",
      "<b>Сомнение, отрицание:</b> dudo que, no creo que, es posible que.",
      "<b>Цель:</b> para que — <i>Te lo explico para que lo entiendas.</i>",
      "<b>Неопределённое «что бы ни, любой»:</b> <i>todo aquello que fuera contrario a la razón</i> — всё, что бы ни было противно разуму."
    ],
    formNote: "Какое время subjuntivo выбрать (согласование времён):",
    table: CONJ(["Главная часть", "Действие в придаточном", "Subjuntivo"], [
      ["настоящее, perfecto, будущее", "одновременно или позже", "presente: sea, tome"],
      ["настоящее, perfecto, будущее", "уже произошло", "perfecto: haya tomado"],
      ["прошедшее или condicional", "любое", "imperfecto: fuera, tomara"]]),
    irregular: "Presente de subjuntivo строится от формы yo: tomo → tome, como → coma, vengo → venga, digo → diga. Гласная окончания «меняется местами»: у -ar становится -e, у -er/-ir становится -a. Особые формы: ser — sea, ir — vaya, haber — haya, estar — esté, saber — sepa.",
    trap: "После creo que — indicativo (уверен), после no creo que — subjuntivo (сомневаюсь)."
  },
  "subj-perfecto": {
    name: "Pretérito perfecto de subjuntivo", ru: "Subjuntivo для уже случившегося", tense: "subj",
    when: [
      "Есть повод для subjuntivo (оценка, желание, сомнение…), главная часть в настоящем, а действие в придаточном уже произошло.",
      "<i>Es curioso que el castellano haya tomado el diminutivo.</i> — любопытно (сейчас), что язык взял (раньше).",
      "<i>Me alegra que hayas venido.</i> — рад, что ты пришёл."
    ],
    formNote: "haber в presente de subjuntivo + participio:",
    table: CONJ(["", "haber", "пример"], P6.map((p, i) => [p,
      ["haya", "hayas", "haya", "hayamos", "hayáis", "hayan"][i],
      ["haya tomado", "hayas comido", "haya dicho", "hayamos vivido", "hayáis visto", "hayan venido"][i]])),
    irregular: "Неправильные только participios: dicho, hecho, visto, escrito, abierto, puesto.",
    trap: "Сравните: ha tomado — простой факт; haya tomado — тот же факт, но после оценки, сомнения или желания."
  },
  "subj-imperfecto": {
    name: "Imperfecto de subjuntivo", ru: "Subjuntivo в прошедшем и «если бы»", tense: "subj",
    when: [
      "Есть повод для subjuntivo, а главная часть в прошедшем или в condicional: <i>Calificaban todo aquello que fuera…</i>, <i>Quería que vinieras.</i>",
      "Нереальное условие «если бы»: <i>Si fuera rico, viajaría.</i>",
      "Вежливая просьба: <i>Quisiera un café.</i>"
    ],
    formNote: "Берём 3 л. мн. ч. indefinido, отрезаем -ron и добавляем -ra:",
    table: tbl3(["tomaron →", "comieron →", "fueron (ser/ir) →"], [
      ["tomara", "tomaras", "tomara", "tomáramos", "tomarais", "tomaran"],
      ["comiera", "comieras", "comiera", "comiéramos", "comierais", "comieran"],
      ["fuera", "fueras", "fuera", "fuéramos", "fuerais", "fueran"]]),
    irregular: "Все неправильности берутся из indefinido: tuvieron → tuviera, dijeron → dijera, pudieron → pudiera, hicieron → hiciera. Есть равноправный вариант на -se: fuese, tomase.",
    trap: "fuera — это и ser, и ir: «был бы» или «пошёл бы». Подскажет контекст."
  },
  condicional: {
    name: "Condicional", ru: "Форма с «бы»", tense: "cond",
    when: [
      "Предположение, гипотеза: <i>El nombre podría ser aphrilis.</i>",
      "Вежливость: <i>¿Podría ayudarme?</i>",
      "Следствие нереального условия: <i>Si tuviera tiempo, leería más.</i>",
      "<b>condicional + haber + participio</b> — «мог бы (тогда)», предположение о прошлом: <i>podría haber sido aphrilis</i>."
    ],
    formNote: "Целый инфинитив + -ía; окончания одинаковые для всех спряжений:",
    table: tbl3(["tomar", "comer", "vivir"], [
      ["tomaría", "tomarías", "tomaría", "tomaríamos", "tomaríais", "tomarían"],
      ["comería", "comerías", "comería", "comeríamos", "comeríais", "comerían"],
      ["viviría", "vivirías", "viviría", "viviríamos", "viviríais", "vivirían"]]),
    irregular: "Основа меняется как в будущем времени: poder — podría, tener — tendría, hacer — haría, decir — diría, saber — sabría, venir — vendría, haber — habría.",
    trap: "Не спутайте с imperfecto: comía (ел, imperfecto) и comería (ел бы, condicional). У condicional окончание прибавляется к целому инфинитиву."
  },
  participio: {
    name: "Participio", ru: "Причастие", tense: "oth",
    when: [
      "С haber образует составные времена и не меняется: <i>han sugerido, haya tomado</i>.",
      "С ser, estar или без глагола работает как прилагательное и согласуется в роде и числе: <i>estaba consagrado</i>, <i>esta voz, empleada inicialmente…</i>"
    ],
    formNote: "-ar → -ado, -er и -ir → -ido:",
    table: CONJ(["Инфинитив", "Participio"], [["tomar", "tomado"], ["comer", "comido"], ["sugerir", "sugerido"], ["consagrar", "consagrado"]]),
    irregular: "decir — dicho, hacer — hecho, ver — visto, escribir — escrito, abrir — abierto, poner — puesto, volver — vuelto, morir — muerto, romper — roto.",
    trap: "han sugerido (с haber не меняется), но las palabras sugeridas (как прилагательное согласуется)."
  },
  perifrasis: {
    name: "Глагольные конструкции", ru: "Perífrasis", tense: "oth",
    when: [
      "<b>ir + gerundio</b> — постепенный процесс: <i>fue adquiriendo otros significados</i> — постепенно приобретал.",
      "<b>empezar a + инфинитив</b> — начинать: <i>empiezan a abrirse</i>.",
      "<b>acabar por + инфинитив</b> — в итоге, в конце концов: <i>acabó por convertirse</i>.",
      "<b>querer decir</b> — означать.",
      "Ещё частые: <b>seguir + gerundio</b> — продолжать, <b>volver a + инф.</b> — снова, <b>tener que + инф.</b> — должен."
    ],
    formNote: "Gerundio: -ar → -ando, -er и -ir → -iendo:",
    table: CONJ(["Инфинитив", "Gerundio"], [["tomar", "tomando"], ["comer", "comiendo"], ["adquirir", "adquiriendo"], ["leer", "leyendo (после гласной -yendo)"], ["pedir", "pidiendo (e→i)"]]),
    irregular: "",
    trap: "Время показывает первый глагол: fue adquiriendo — indefinido (процесс завершился), iba adquiriendo — imperfecto (процесс шёл)."
  },
  se: {
    name: "Безличное и пассивное se", ru: "Действие без деятеля", tense: "oth",
    when: [
      "<b>se + глагол в 3 л.</b> — действие без указания, кто его делает: <i>se usaba</i> — употреблялось, <i>se dice</i> — говорят, <i>se ha dicho</i> — говорили.",
      "Глагол согласуется с предметом: <i>se usaba la palabra</i>, но <i>se usaban las palabras</i>.",
      "<i>se formó</i> — образовалось."
    ],
    formNote: "Отдельных окончаний нет: se + обычная форма 3 л. в нужном времени.",
    table: null, irregular: "",
    trap: "Не путайте с возвратными глаголами: referirse, convertirse. Там se — часть самого глагола («относиться», «превращаться»)."
  }
};
const GRAMMAR_ORDER = ["presente", "imperfecto", "indefinido", "perfecto", "subjuntivo", "subj-perfecto", "subj-imperfecto", "condicional", "participio", "perifrasis", "se"];
const TENSE_LEGEND = [["pres", "presente"], ["imp", "imperfecto"], ["indef", "indefinido"], ["perf", "perfecto"], ["subj", "subjuntivo"], ["cond", "condicional"], ["oth", "инфинитив, причастие"]];
