// Тренажёр времён: формы глаголов и выбор imperfecto / indefinido.
// Общие задания написаны отдельно; задания по книге приходят из файла глав (поле drills).

const PERS = ["yo", "tú", "él / ella", "nosotros", "vosotros", "ellos"];
const TNAME = { pres: "presente", imp: "imperfecto", indef: "indefinido" };
const TTOPIC = { pres: "presente", imp: "imperfecto", indef: "indefinido" };
const ENDS = {
  pres: { ar: ["o", "as", "a", "amos", "áis", "an"], er: ["o", "es", "e", "emos", "éis", "en"], ir: ["o", "es", "e", "imos", "ís", "en"] },
  imp: { ar: ["aba", "abas", "aba", "ábamos", "abais", "aban"], er: ["ía", "ías", "ía", "íamos", "íais", "ían"], ir: ["ía", "ías", "ía", "íamos", "íais", "ían"] },
  indef: { ar: ["é", "aste", "ó", "amos", "asteis", "aron"], er: ["í", "iste", "ió", "imos", "isteis", "ieron"], ir: ["í", "iste", "ió", "imos", "isteis", "ieron"] }
};
function regular(inf, t) { const st = inf.slice(0, -2), g = inf.slice(-2); return ENDS[t][g].map(e => st + e); }
const sp = s => s.split(" ");
const VERBS = [
  { inf: "hablar", ru: "говорить" }, { inf: "trabajar", ru: "работать" }, { inf: "tomar", ru: "брать" },
  { inf: "comer", ru: "есть" }, { inf: "aprender", ru: "учить" }, { inf: "vivir", ru: "жить" },
  { inf: "escribir", ru: "писать" }, { inf: "usar", ru: "использовать" }, { inf: "llamar", ru: "звать" },
  { inf: "ser", ru: "быть", noReg: 1, irr: { pres: sp("soy eres es somos sois son"), imp: sp("era eras era éramos erais eran"), indef: sp("fui fuiste fue fuimos fuisteis fueron") } },
  { inf: "estar", ru: "быть, находиться", noReg: 1, irr: { pres: sp("estoy estás está estamos estáis están"), indef: sp("estuve estuviste estuvo estuvimos estuvisteis estuvieron") } },
  { inf: "ir", ru: "идти, ехать", noReg: 1, irr: { pres: sp("voy vas va vamos vais van"), imp: sp("iba ibas iba íbamos ibais iban"), indef: sp("fui fuiste fue fuimos fuisteis fueron") } },
  { inf: "tener", ru: "иметь", irr: { pres: sp("tengo tienes tiene tenemos tenéis tienen"), indef: sp("tuve tuviste tuvo tuvimos tuvisteis tuvieron") } },
  { inf: "hacer", ru: "делать", irr: { pres: sp("hago haces hace hacemos hacéis hacen"), indef: sp("hice hiciste hizo hicimos hicisteis hicieron") } },
  { inf: "decir", ru: "сказать", irr: { pres: sp("digo dices dice decimos decís dicen"), indef: sp("dije dijiste dijo dijimos dijisteis dijeron") } },
  { inf: "poder", ru: "мочь", irr: { pres: sp("puedo puedes puede podemos podéis pueden"), indef: sp("pude pudiste pudo pudimos pudisteis pudieron") } },
  { inf: "querer", ru: "хотеть", irr: { pres: sp("quiero quieres quiere queremos queréis quieren"), indef: sp("quise quisiste quiso quisimos quisisteis quisieron") } },
  { inf: "venir", ru: "приходить", irr: { pres: sp("vengo vienes viene venimos venís vienen"), indef: sp("vine viniste vino vinimos vinisteis vinieron") } },
  { inf: "ver", ru: "видеть", noReg: 1, irr: { pres: sp("veo ves ve vemos veis ven"), imp: sp("veía veías veía veíamos veíais veían"), indef: sp("vi viste vio vimos visteis vieron") } },
  { inf: "dar", ru: "давать", noReg: 1, irr: { pres: sp("doy das da damos dais dan"), indef: sp("di diste dio dimos disteis dieron") } },
  { inf: "saber", ru: "знать", irr: { pres: sp("sé sabes sabe sabemos sabéis saben"), indef: sp("supe supiste supo supimos supisteis supieron") } },
  { inf: "poner", ru: "класть", irr: { pres: sp("pongo pones pone ponemos ponéis ponen"), indef: sp("puse pusiste puso pusimos pusisteis pusieron") } },
  { inf: "empezar", ru: "начинать", irr: { pres: sp("empiezo empiezas empieza empezamos empezáis empiezan"), indef: sp("empecé empezaste empezó empezamos empezasteis empezaron") } },
  { inf: "pensar", ru: "думать", irr: { pres: sp("pienso piensas piensa pensamos pensáis piensan") } },
  { inf: "volver", ru: "возвращаться", irr: { pres: sp("vuelvo vuelves vuelve volvemos volvéis vuelven") } },
  { inf: "dormir", ru: "спать", irr: { pres: sp("duermo duermes duerme dormimos dormís duermen"), indef: sp("dormí dormiste durmió dormimos dormisteis durmieron") } },
  { inf: "pedir", ru: "просить", irr: { pres: sp("pido pides pide pedimos pedís piden"), indef: sp("pedí pediste pidió pedimos pedisteis pidieron") } },
  { inf: "leer", ru: "читать", irr: { indef: sp("leí leíste leyó leímos leísteis leyeron") } },
  { inf: "conocer", ru: "знать (быть знакомым)", irr: { pres: sp("conozco conoces conoce conocemos conocéis conocen") } },
  { inf: "buscar", ru: "искать", irr: { indef: sp("busqué buscaste buscó buscamos buscasteis buscaron") } },
  { inf: "llegar", ru: "прибывать", irr: { indef: sp("llegué llegaste llegó llegamos llegasteis llegaron") } }
];
const conj = (v, t) => (v.irr && v.irr[t]) || regular(v.inf, t);

// Общие задания imperfecto / indefinido: [текст с ___, инфинитив, верно, неверно, время верного, почему, перевод]
const II = [
  ["Cuando era niño, ___ a la playa todos los veranos.", "ir", "iba", "fui", "imp", "<b>todos los veranos</b> — действие повторялось из года в год. Привычка в прошлом → imperfecto.", "Когда я был ребёнком, я каждое лето ездил на море."],
  ["Ayer ___ al médico.", "ir", "fui", "iba", "indef", "<b>ayer</b> — конкретный день, событие закончилось → indefinido.", "Вчера я сходил к врачу."],
  ["La casa de mis abuelos ___ muy grande.", "ser", "era", "fue", "imp", "Это описание: какой была дом. Описание и фон → imperfecto.", "Дом моих бабушки и дедушки был очень большим."],
  ["En 1492 Colón ___ a América.", "llegar", "llegó", "llegaba", "indef", "Событие с датой, произошло один раз → indefinido.", "В 1492 году Колумб прибыл в Америку."],
  ["___ cuando salí de casa.", "llover", "Llovía", "Llovió", "imp", "Дождь шёл фоном, когда случилось другое событие (salí). Фон → imperfecto, событие → indefinido.", "Шёл дождь, когда я вышел из дома."],
  ["Leía el periódico cuando ___ el teléfono.", "sonar", "sonó", "sonaba", "indef", "Звонок прервал чтение. Событие, которое врывается в фон → indefinido.", "Я читал газету, когда зазвонил телефон."],
  ["Mi abuela siempre ___ que el trabajo es salud.", "decir", "decía", "dijo", "imp", "<b>siempre</b> в смысле «постоянно, бывало» → привычка → imperfecto.", "Моя бабушка всегда говорила, что труд — это здоровье."],
  ["Anoche ___ solo cuatro horas.", "dormir", "dormí", "dormía", "indef", "<b>anoche</b> — закрытый эпизод вчерашней ночи, оцениваем его целиком → indefinido.", "Прошлой ночью я поспал всего четыре часа."],
  ["De pequeño no me ___ las verduras.", "gustar", "gustaban", "gustaron", "imp", "Состояние в детстве, без начала и конца → imperfecto. Глагол во мн. ч., потому что las verduras.", "В детстве я не любил овощи."],
  ["El verano pasado ___ dos semanas en Sevilla.", "estar", "estuve", "estaba", "indef", "Две недели — ограниченный период, который закончился. Даже если действие длилось, с указанием срока → indefinido.", "Прошлым летом я провёл две недели в Севилье."],
  ["Eran las ocho y ___ mucho frío.", "hacer", "hacía", "hizo", "imp", "Время и погода как обстановка сцены → imperfecto.", "Было восемь часов, и было очень холодно."],
  ["De repente se ___ la puerta.", "abrir", "abrió", "abría", "indef", "<b>de repente</b> — внезапное однократное событие → indefinido.", "Вдруг открылась дверь."],
  ["Antes la gente ___ muchas cartas.", "escribir", "escribía", "escribió", "imp", "<b>antes</b> — «раньше, в те времена»: обычное положение дел → imperfecto.", "Раньше люди писали много писем."],
  ["Viví en Madrid tres años y luego me ___ a Valencia.", "mudarse", "mudé", "mudaba", "indef", "Цепочка событий: прожил, потом переехал → indefinido.", "Я прожил в Мадриде три года, а потом переехал в Валенсию."],
  ["Mientras yo cocinaba, mi hermano ___ la tele.", "ver", "veía", "vio", "imp", "<b>mientras</b> — два процесса шли одновременно, оба фоновые → imperfecto.", "Пока я готовил, брат смотрел телевизор."],
  ["Cuando ___ diez años, me regalaron una bicicleta.", "tener", "tenía", "tuve", "imp", "Возраст в прошлом — это состояние → imperfecto. А подарок — событие (regalaron).", "Когда мне было десять лет, мне подарили велосипед."],
  ["El año pasado ___ veinte libros.", "leer", "leí", "leía", "indef", "Итог за закрытый период: сколько всего прочитал → indefinido.", "В прошлом году я прочитал двадцать книг."],
  ["Esa mañana me ___ a las seis y salí corriendo.", "levantarse", "levanté", "levantaba", "indef", "Последовательные события одного утра → indefinido.", "В то утро я встал в шесть и выбежал из дома."],
  ["No ___ la respuesta, así que pregunté al profesor.", "saber", "sabía", "supe", "imp", "Состояние «знал / не знал» → imperfecto. Ловушка: supe в indefinido значит «узнал».", "Я не знал ответа, поэтому спросил учителя."],
  ["Ayer ___ a tu hermana en la fiesta.", "conocer", "conocí", "conocía", "indef", "Здесь «познакомился» — событие → indefinido. Conocía значило бы «был знаком».", "Вчера я познакомился с твоей сестрой на вечеринке."],
  ["En latín, apis ___ «abeja».", "significar", "significaba", "significó", "imp", "Постоянное значение слова в прошлом → imperfecto, как в книге Соки.", "По-латыни apis означало «пчела»."],
  ["El concierto ___ tres horas.", "durar", "duró", "duraba", "indef", "Концерт рассматривается целиком, он закончился → indefinido.", "Концерт длился три часа."],
  ["Todos los días mi padre ___ del trabajo a las siete.", "volver", "volvía", "volvió", "imp", "<b>todos los días</b> — ежедневная привычка → imperfecto.", "Каждый день отец возвращался с работы в семь."],
  ["Estaba cansado, por eso ___ temprano.", "acostarse", "me acosté", "me acostaba", "indef", "Причина — фон (estaba cansado), а решение лечь — однократное событие → indefinido.", "Я устал, поэтому лёг рано."]
];

/* ---------- состояние ---------- */
function TS() { S.drill = S.drill || {}; S.fstat = S.fstat || { pres: [0, 0], imp: [0, 0], indef: [0, 0] }; return S; }
const BOX_DAYS = [0, 1, 3, 7, 14, 30];
let TR = null; // текущая сессия

function bookDrills() {
  const out = [];
  (window.DRILLS || []).forEach((d, i) => {
    const s = sentIndex[d.sid]; if (!s) return;
    const re = new RegExp(`(^|[^A-Za-zÁÉÍÓÚÜÑáéíóúüñ])${d.w}(?![A-Za-zÁÉÍÓÚÜÑáéíóúüñ])`);
    if (!re.test(s[0])) return;
    const dd = D[d.w.toLowerCase()] || [];
    out.push({ id: "b:" + d.sid + ":" + d.w, text: s[0].replace(re, "$1___"), inf: d.inf, ok: d.ok, alt: d.alt, t: d.t, why: dd[3] || "", ru: s[1], book: true });
  });
  return out;
}
function genericDrills() { return II.map((x, i) => ({ id: "g:" + i, text: x[0], inf: x[1], ok: x[2], alt: x[3], t: x[4], why: x[5], ru: x[6] })); }
function allChoice() { return [...bookDrills(), ...genericDrills()]; }

function shuffle(a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

function pickChoice(n) {
  TS(); const now = Date.now(), items = allChoice();
  const due = items.filter(x => S.drill[x.id] && S.drill[x.id].due <= now).sort((a, b) => S.drill[a.id].due - S.drill[b.id].due);
  const fresh = shuffle(items.filter(x => !S.drill[x.id]));
  const rest = shuffle(items.filter(x => S.drill[x.id] && S.drill[x.id].due > now));
  return shuffle([...due, ...fresh, ...rest].slice(0, n)).map(x => ({ kind: "choice", ...x, opts: shuffle([[x.ok, x.t], [x.alt, x.t === "imp" ? "indef" : "imp"]]) }));
}

function pickForms(n) {
  TS(); const out = [];
  // чаще даём то время, где больше ошибок
  const w = Object.entries(S.fstat).map(([t, [ok, all]]) => [t, 1 + 2 * (all ? 1 - ok / all : 0.5)]);
  const tot = w.reduce((a, b) => a + b[1], 0);
  for (let i = 0; i < n; i++) {
    let r = Math.random() * tot, t = "pres"; for (const [k, x] of w) { if ((r -= x) <= 0) { t = k; break; } }
    const irrPool = VERBS.filter(v => v.irr && v.irr[t]);
    const v = (Math.random() < 0.6 && irrPool.length) ? irrPool[Math.floor(Math.random() * irrPool.length)] : VERBS[Math.floor(Math.random() * VERBS.length)];
    const p = [0, 1, 2, 3, 5, 0, 2, 5, 4][Math.floor(Math.random() * 9)]; // vosotros реже
    const ok = conj(v, t)[p];
    const cand = new Set();
    Object.keys(TNAME).filter(x => x !== t).forEach(x => cand.add(conj(v, x)[p]));
    if (!v.noReg) cand.add(regular(v.inf, t)[p]);
    cand.add(conj(v, t)[p === 0 ? 2 : p === 2 ? 0 : p === 3 ? 5 : 3]);
    cand.delete(ok);
    const opts = shuffle([ok, ...shuffle([...cand]).slice(0, 3)]);
    out.push({ kind: "form", id: `f:${v.inf}:${t}:${p}`, v, t, p, ok, opts });
  }
  return out;
}

/* ---------- экран ---------- */
function renderTrainer() {
  TS();
  const box = document.getElementById("trainer");
  const items = allChoice(), learned = items.filter(x => (S.drill[x.id] || {}).box >= 3).length;
  const due = items.filter(x => S.drill[x.id] && S.drill[x.id].due <= Date.now()).length;
  const fs = Object.entries(S.fstat).map(([t, [ok, all]]) => `<span class="lg" data-t="${t}">${TNAME[t]}: ${all ? Math.round(ok / all * 100) + "%" : "—"}</span>`).join("");
  box.innerHTML = `
   <p class="hint">Короткие сессии по 10 заданий. Ошибки возвращаются чаще, освоенное — реже.</p>
   <div class="mode" data-tc="imp">
     <div class="mode-h"><b>Imperfecto или indefinido</b><span>${learned} из ${items.length} освоено${due ? ` · к повтору ${due}` : ""}</span></div>
     <p>Выберите нужное время в предложении. После ответа — почему именно оно. ${items.some(x => x.book) ? "Часть предложений из вашей книги." : ""}</p>
     <button class="btn primary" id="go-choice">Начать</button>
   </div>
   <div class="mode" data-tc="pres">
     <div class="mode-h"><b>Формы глаголов</b><span>presente · imperfecto · indefinido</span></div>
     <p>Выберите правильную форму. Неправильные глаголы попадаются чаще, а время, в котором больше ошибок, — тоже.</p>
     <div class="legend">${fs}</div>
     <button class="btn primary" id="go-forms">Начать</button>
   </div>`;
  paintTc(box);
  box.querySelector("#go-choice").onclick = () => startSession(pickChoice(10), "choice");
  box.querySelector("#go-forms").onclick = () => startSession(pickForms(10), "forms");
}

function startSession(items, mode) { TR = { items, i: 0, mode, wrong: [], answered: null }; renderItem(); }

function renderItem() {
  const box = document.getElementById("trainer"), it = TR.items[TR.i];
  const bar = `<div class="tr-top"><button class="back" id="tr-exit">← Выйти</button><span class="tr-n">${TR.i + 1} / ${TR.items.length}</span></div>
    <div class="bar"><i style="width:${(TR.i) / TR.items.length * 100}%"></i></div>`;
  let q = "", opts = "";
  if (it.kind === "choice") {
    q = `<div class="tr-q">${esc(it.text).replace("___", `<span class="gap">___</span> <span class="inf">(${it.inf})</span>`)}</div>`;
    opts = it.opts.map(([f, t]) => `<button class="opt" data-v="${esc(f)}" data-tc="${t}"><b>${esc(f)}</b><small>${TNAME[t]}</small></button>`).join("");
  } else {
    q = `<div class="tr-q"><span class="inf-big">${it.v.inf}</span> <span class="inf">(${it.v.ru})</span><div class="tr-sub"><b>${PERS[it.p]}</b> · <span class="lg" data-t="${it.t}">${TNAME[it.t]}</span></div></div>`;
    opts = it.opts.map(f => `<button class="opt" data-v="${esc(f)}"><b>${esc(f)}</b></button>`).join("");
  }
  box.innerHTML = `${bar}<div class="flash">${q}</div><div class="opts ${it.kind === "form" ? "four" : ""}">${opts}</div><div id="tr-fb"></div>`;
  paintTc(box);
  box.querySelector("#tr-exit").onclick = () => { TR = null; renderTrainer(); };
  box.querySelectorAll(".opt").forEach(b => b.onclick = () => answer(b));
}

function answer(btn) {
  const it = TR.items[TR.i], box = document.getElementById("trainer");
  if (TR.answered === TR.i) return; TR.answered = TR.i;
  const ok = btn.dataset.v === it.ok;
  box.querySelectorAll(".opt").forEach(b => { b.disabled = true; if (b.dataset.v === it.ok) b.classList.add("right"); else if (b === btn) b.classList.add("wrong"); });
  TS();
  if (it.kind === "choice") {
    const r = S.drill[it.id] || { box: 0, due: 0 };
    r.box = ok ? Math.min(r.box + 1, 5) : 0; r.due = Date.now() + (ok ? BOX_DAYS[r.box] * 864e5 : 0); S.drill[it.id] = r;
  } else { const f = S.fstat[it.t]; f[0] += ok ? 1 : 0; f[1] += 1; }
  if (!ok) TR.wrong.push(it);
  save();
  let fb = `<div class="fb ${ok ? "good" : "bad"}"><b>${ok ? "Верно" : "Неверно"}.</b> `;
  if (it.kind === "choice") {
    fb += `Правильно: <b>${esc(it.ok)}</b> (${TNAME[it.t]}).</div>
      <div class="gram">${it.why}</div><div class="sent-tr">${esc(it.ru)}</div>
      <div class="topics"><button class="topic-link" data-topic="${TTOPIC[it.t]}" data-tc="${it.t}">Справка: ${GRAMMAR[TTOPIC[it.t]].name}<span>→</span></button></div>`;
  } else {
    const row = conj(it.v, it.t), irr = it.v.irr && it.v.irr[it.t];
    fb += `${it.v.inf}, ${PERS[it.p]}, ${TNAME[it.t]} → <b>${esc(it.ok)}</b>.</div>
      <div class="gram">${irr ? `<b>Неправильный</b> в ${TNAME[it.t]}: запомните форму целиком.` : `<b>Правильный</b>: основа ${it.v.inf.slice(0, -2)}- + окончание -${it.v.inf.slice(-2)} в ${TNAME[it.t]}.`}</div>
      <div class="tbl"><table>${row.map((f, i) => `<tr><td>${PERS[i]}</td><td>${i === it.p ? `<b>${f}</b>` : f}</td></tr>`).join("")}</table></div>`;
  }
  fb += `<button class="btn primary" id="tr-next">${TR.i + 1 < TR.items.length ? "Дальше" : "Итог"}</button>`;
  const fbEl = document.getElementById("tr-fb"); fbEl.innerHTML = fb; paintTc(fbEl);
  fbEl.querySelectorAll("[data-topic]").forEach(b => b.onclick = () => openTopic(b.dataset.topic, null));
  fbEl.querySelector("#tr-next").onclick = () => { TR.i++; if (TR.i < TR.items.length) renderItem(); else renderSummary(); };
  fbEl.scrollIntoView({ block: "nearest", behavior: "smooth" });
}

function renderSummary() {
  const n = TR.items.length, w = TR.wrong.length, box = document.getElementById("trainer");
  const list = TR.wrong.map(it => it.kind === "choice"
    ? `<div class="row"><span class="rw">${esc(it.ok)}</span><span class="rt">${esc(it.text.replace("___", it.ok))}</span></div>`
    : `<div class="row"><span class="rw">${esc(it.ok)}</span><span class="rt">${it.v.inf} · ${PERS[it.p]} · ${TNAME[it.t]}</span></div>`).join("");
  box.innerHTML = `<div class="flash"><div class="fl-word">${n - w} из ${n}</div>
     <p class="hint">${w ? "Задания с ошибками вернутся в следующих сессиях раньше остальных." : "Без ошибок. Освоенные задания теперь будут появляться реже."}</p></div>
     ${w ? `<h2>Ошибки</h2><div class="list">${list}</div>` : ""}
     <div class="actions"><button class="btn primary" id="tr-again">Ещё 10</button><button class="btn" id="tr-home">К выбору</button></div>`;
  box.querySelector("#tr-again").onclick = () => startSession(TR.mode === "choice" ? pickChoice(10) : pickForms(10), TR.mode);
  box.querySelector("#tr-home").onclick = () => { TR = null; renderTrainer(); };
  renderStats();
}
