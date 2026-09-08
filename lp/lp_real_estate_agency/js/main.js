/* ============ IMAGES ============ */
const IMG = {
  l1:"assets/images/listing-1.png",
  l2:"assets/images/listing-2.png",
  l3:"assets/images/listing-3.png",
  l4:"assets/images/listing-4.png",
  l5:"assets/images/listing-5.png",
  l6:"assets/images/listing-6.png",
  l7:"assets/images/listing-7.png",
  l8:"assets/images/listing-8.png",
  a1:"assets/images/avatar-1.png",
  a2:"assets/images/avatar-2.png",
  a3:"assets/images/avatar-3.png",
  a4:"assets/images/avatar-4.png"
};

/* ============ I18N ============ */
const I18N = {
ru:{
"brand.tag":"Недвижимость у моря · Болгария",
"nav.catalog":"Каталог","nav.calc":"Калькулятор","nav.reviews":"Отзывы","nav.contacts":"Контакты",
"nav.cta":"Заявка на подбор",
"hero.badge":"Черноморское побережье Болгарии · сезон 2026",
"hero.title":"Дом у моря, подобранный под <em>вашу жизнь</em>",
"hero.sub":"Апартаменты, виллы и студии в проверенных комплексах побережья. Поиск по объектам, ипотечный калькулятор и персональный подбор — всё на одной странице.",
"hero.btn1":"Подобрать объект","hero.btn2":"Смотреть каталог",
"search.title":"Поиск по объектам недвижимости",
"search.city":"Город","search.type":"Тип недвижимости","search.rooms":"Комнаты","search.price":"Бюджет до",
"search.btn":"Найти объекты","search.reset":"Сбросить",
"search.found":"Найдено объектов: {n}","search.none":"По заданным параметрам ничего не найдено. Попробуйте изменить фильтры — или оставьте заявку, и мы подберём варианты вручную.",
"opt.city.all":"Все города","opt.type.all":"Любой тип","opt.rooms.any":"Любое число",
"type.apartment":"Апартамент","type.house":"Дом / Вилла","type.studio":"Студия","type.penthouse":"Пентхаус","type.townhouse":"Таунхаус",
"stat1":"лет на рынке Болгарии","stat2":"сделок закрыто за 12 лет","stat3":"жилых комплексов-партнёров","stat4":"клиентов рекомендуют нас",
"about.eyebrow":"О компании","about.title":"Знаем побережье дом за домом",
"about.p1":"BREGO Estate работает с недвижимостью болгарского Черноморья с 2013 года: от студий у пляжа до вилл на первой линии. Мы лично проверяем каждый комплекс, застройщика и документ.",
"about.p2":"Подбор, просмотр, сделка и оформление ипотеки — на русском и болгарском языках, с сопровождением до получения ключей.",
"about.float":"комплексов в нашей базе","about.f1t":"Подбор под сценарий жизни","about.f1s":"Для жизни, отдыха или аренды — считаем доходность и ликвидность.",
"about.f2t":"Юридическая чистота","about.f2s":"Проверяем документы, акты 16/17 и историю застройщика.",
"about.f3t":"Сделка под ключ","about.f3s":"Ипотека, нотариус, регистрация — берём всё на себя.",
"cat.eyebrow":"Каталог","cat.title":"Каталог объектов","cat.sub":"Листайте карусель — подборка обновляется каждую неделю.",
"card.rooms":"комн.","card.area":"м²","card.floor":"Этаж","card.btn":"Заявка на просмотр",
"calc.eyebrow":"Финансы","calc.title":"Ипотечный калькулятор",
"calc.price":"Стоимость объекта","calc.down":"Первоначальный взнос","calc.term":"Срок кредита","calc.rate":"Ставка, годовых",
"calc.monthly":"Ежемесячный платёж","calc.loan":"Сумма кредита","calc.downSum":"Первоначальный взнос","calc.over":"Переплата по процентам","calc.total":"Общая выплата",
"calc.legend1":"тело кредита","calc.legend2":"проценты",
"calc.btn":"Получить предварительное одобрение",
"years.one":"год","years.few":"года","years.many":"лет","years.bg":"години",
"rev.eyebrow":"Отзывы","rev.title":"Отзывы клиентов","rev.sub":"Истории людей, которые уже нашли свой дом у моря вместе с нами.",
"con.eyebrow":"Контакты","con.title":"Контакты","con.sub":"Офис у моря в Варне. Ответим на русском и болгарском.",
"con.addr":"Адрес офиса","con.addrV":"Варна, бул. «Приморски» 45, офис 12",
"con.phone":"Телефон","con.email":"Email","con.hours":"Часы работы","con.hoursV":"Пн–Сб, 9:00–19:00",
"con.map":"Открыть карту объектов",
"con.formTitle":"Напишите нам","con.formName":"Ваше имя","con.formContact":"Телефон или email","con.formMsg":"Сообщение","con.formSend":"Отправить сообщение",
"con.okTitle":"Сообщение получено!","con.okText":"Спасибо! Мы уже видим ваше сообщение и ответим в ближайшее рабочее время.","con.okAgain":"Написать ещё",
"req.title":"Заявка на подбор объектов","req.sub":"Оставьте контакты — менеджер подберёт варианты и свяжется с вами.",
"req.name":"Имя","req.phone":"Телефон","req.email":"Email","req.city":"Город","req.type":"Тип объекта","req.budget":"Бюджет, €","req.comment":"Комментарий / пожелания",
"req.agree":"Согласен(на) на обработку персональных данных и получение подбора объектов.",
"req.send":"Отправить заявку",
"req.okTitle":"Заявка получена!","req.okText":"Спасибо! Ваша заявка принята в работу. Менеджер свяжется с вами в течение 15 минут в рабочее время (Пн–Сб, 9:00–19:00).",
"req.okNum":"Номер заявки","req.okNote":"Мы отправили копию заявки на указанный контакт.","req.okAgain":"Новая заявка","req.okClose":"Закрыть",
"map.title":"Карта объектов","map.hint":"Нажмите на метку или город, чтобы увидеть объект.","map.cities":"Города и объекты",
"map.btn":"Заявка на просмотр",
"foot.desc":"Агентство недвижимости болгарского Черноморья. Подбор, покупка и сопровождение сделок на двух языках.",
"foot.menu":"Меню","foot.contacts":"Контакты","foot.demoT":"Бесплатная консультация","foot.demoTx":"Подберём 3–5 вариантов под ваш бюджет, проверим документы и организуем просмотр — онлайн или на месте.",
"foot.rights":"Все права защищены.","foot.made":"Варна · Пн–Сб 9:00–19:00 · +359 87 654 32 10",
"toast.req":"Заявка отправлена! Мы свяжемся с вами.","toast.msg":"Сообщение отправлено! Спасибо.",
"mq.label":"Наши партнёры-застройщики:"
},
bg:{
"brand.tag":"Имоти на море · България",
"nav.catalog":"Каталог","nav.calc":"Калкулатор","nav.reviews":"Отзиви","nav.contacts":"Контакти",
"nav.cta":"Заявка за подбор",
"hero.badge":"Българско Черноморие · сезон 2026",
"hero.title":"Дом на море, подбран според <em>вашия живот</em>",
"hero.sub":"Апартаменти, вили и студиа в проверени комплекси по крайбрежието. Търсене на имоти, ипотечен калкулатор и персонален подбор — всичко на една страница.",
"hero.btn1":"Подбери имот","hero.btn2":"Виж каталога",
"search.title":"Търсене на имоти",
"search.city":"Град","search.type":"Вид имот","search.rooms":"Стаи","search.price":"Бюджет до",
"search.btn":"Намери имоти","search.reset":"Изчисти",
"search.found":"Намерени имоти: {n}","search.none":"Няма намерени имоти по зададените параметри. Променете филтрите или оставете заявка — ще подберем варианти ръчно.",
"opt.city.all":"Всички градове","opt.type.all":"Всеки вид","opt.rooms.any":"Всеки брой",
"type.apartment":"Апартамент","type.house":"Къща / Вила","type.studio":"Студио","type.penthouse":"Пентхаус","type.townhouse":"Таунхаус",
"stat1":"години на пазара в България","stat2":"сделки за 12 години","stat3":"жилищни комплекса партньори","stat4":"от клиентите ни препоръчват",
"about.eyebrow":"За нас","about.title":"Познаваме крайбрежието дом по дом",
"about.p1":"BREGO Estate работи с имоти по българското Черноморие от 2013 г.: от студиа до плажа до вили на първа линия. Лично проверяваме всеки комплекс, строител и документ.",
"about.p2":"Подбор, оглед, сделка и ипотека — на руски и български език, със съдействие до получаване на ключовете.",
"about.float":"комплекса в нашата база","about.f1t":"Подбор според начин на живот","about.f1s":"За живеене, почивка или отдаване под наем — смятаме доходност и ликвидност.",
"about.f2t":"Правна сигурност","about.f2s":"Проверяваме документи, Актове 16/17 и историята на строителя.",
"about.f3t":"Сделка до ключ","about.f3s":"Ипотека, нотариус, регистрация — поемаме всичко.",
"cat.eyebrow":"Каталог","cat.title":"Каталог с имоти","cat.sub":"Разглеждайте карусела — подборът се обновява всяка седмица.",
"card.rooms":"стаи","card.area":"м²","card.floor":"Етаж","card.btn":"Заявка за оглед",
"calc.eyebrow":"Финанси","calc.title":"Ипотечен калкулатор",
"calc.price":"Цена на имота","calc.down":"Първоначална вноска","calc.term":"Срок на кредита","calc.rate":"Лихвен процент, годишен",
"calc.monthly":"Месечна вноска","calc.loan":"Сума на кредита","calc.downSum":"Първоначална вноска","calc.over":"Общо дължима лихва","calc.total":"Обща сума за изплащане",
"calc.legend1":"тяло на кредита","calc.legend2":"лихва",
"calc.btn":"Получи предварително одобрение",
"years.one":"година","years.few":"години","years.many":"години","years.bg":"години",
"rev.eyebrow":"Отзиви","rev.title":"Отзиви на клиенти","rev.sub":"Истории на хора, които вече намериха своя дом на море с нас.",
"con.eyebrow":"Контакти","con.title":"Контакти","con.sub":"Офис на море във Варна. Отговаряме на руски и български.",
"con.addr":"Адрес на офиса","con.addrV":"Варна, бул. «Приморски» 45, офис 12",
"con.phone":"Телефон","con.email":"Имейл","con.hours":"Работно време","con.hoursV":"Пн–Сб, 9:00–19:00 ч.",
"con.map":"Отвори картата с имоти",
"con.formTitle":"Пишете ни","con.formName":"Вашето име","con.formContact":"Телефон или имейл","con.formMsg":"Съобщение","con.formSend":"Изпрати съобщението",
"con.okTitle":"Съобщението е получено!","con.okText":"Благодарим! Виждаме съобщението ви и ще отговорим в най-близко работно време.","con.okAgain":"Напишете ново",
"req.title":"Заявка за подбор на имоти","req.sub":"Оставете контакти — мениджър ще подбере варианти и ще се свърже с вас.",
"req.name":"Име","req.phone":"Телефон","req.email":"Имейл","req.city":"Град","req.type":"Вид имот","req.budget":"Бюджет, €","req.comment":"Коментар / желания",
"req.agree":"Съгласен/съгласна съм с обработката на лични данни и получаването на подбор от имоти.",
"req.send":"Изпрати заявката",
"req.okTitle":"Заявката е получена!","req.okText":"Благодарим! Заявката ви е приета. Мениджър ще се свърже с вас до 15 минути в работно време (Пн–Сб, 9:00–19:00).",
"req.okNum":"Номер на заявката","req.okNote":"Изпратихме копие на заявката на посочения контакт.","req.okAgain":"Нова заявка","req.okClose":"Затвори",
"map.title":"Карта на имотите","map.hint":"Кликнете върху маркер или град, за да видите имота.","map.cities":"Градове и имоти",
"map.btn":"Заявка за оглед",
"foot.desc":"Агенция за имоти по българското Черноморие. Подбор, покупка и съпровождане на сделки на два езика.",
"foot.menu":"Меню","foot.contacts":"Контакти","foot.demoT":"Безплатна консултация","foot.demoTx":"Ще подберем 3–5 варианта според бюджета ви, ще проверим документите и ще организираме оглед — онлайн или на място.",
"foot.rights":"Всички права запазени.","foot.made":"Варна · Пн–Сб 9:00–19:00 · +359 87 654 32 10",
"toast.req":"Заявката е изпратена! Ще се свържем с вас.","toast.msg":"Съобщението е изпратено! Благодарим.",
"mq.label":"Нашите партньори строители:"
}};

let lang = localStorage.getItem('brego_lang') || 'ru';
const t = (k, p) => { let s = (I18N[lang] && I18N[lang][k]) || I18N.ru[k] || k; if(p) for(const key in p) s = s.replace('{'+key+'}', p[key]); return s; };
const nf = n => new Intl.NumberFormat(lang==='ru'?'ru-RU':'bg-BG').format(Math.round(n));

/* ============ DATA ============ */
const CITY_NAME = {varna:{ru:'Варна',bg:'Варна'},burgas:{ru:'Бургас',bg:'Бургас'},sozopol:{ru:'Созопол',bg:'Созопол'},sunny:{ru:'Солнечный берег',bg:'Слънчев бряг'},balchik:{ru:'Балчик',bg:'Балчик'},obzor:{ru:'Обзор',bg:'Обзор'},svlas:{ru:'Свети Влас',bg:'Свети Влас'},sofia:{ru:'София',bg:'София'}};
const LISTINGS = [
 {id:1,img:IMG.l1,city:'varna',type:'apartment',rooms:2,area:78,floor:'6/9',price:145000,gold:1,x:66,y:24,
  title:{ru:'Апартамент с панорамным видом на море',bg:'Апартамент с панорамна морска гледка'}},
 {id:2,img:IMG.l2,city:'sozopol',type:'house',rooms:5,area:240,floor:'2 этажа',price:420000,gold:1,x:45,y:74,
  title:{ru:'Вилла с бассейном на первой линии',bg:'Вила с басейн на първа линия'}},
 {id:3,img:IMG.l3,city:'sunny',type:'studio',rooms:1,area:42,floor:'4/6',price:59000,x:50,y:58,
  title:{ru:'Светлая студия в новом комплексе',bg:'Светло студио в нов комплекс'}},
 {id:4,img:IMG.l4,city:'burgas',type:'penthouse',rooms:4,area:165,floor:'12/12',price:310000,gold:1,x:47,y:63,
  title:{ru:'Пентхаус с террасой 60 м² над морем',bg:'Пентхаус с тераса 60 м² над морето'}},
 {id:5,img:IMG.l5,city:'balchik',type:'house',rooms:4,area:180,floor:'2 этажа',price:198000,x:72,y:12,
  title:{ru:'Дом с садом в тихом квартале',bg:'Къща с градина в тих квартал'}},
 {id:6,img:IMG.l6,city:'obzor',type:'apartment',rooms:3,area:96,floor:'3/6',price:112000,x:54,y:46,
  title:{ru:'Апартамент в комплексе с парком',bg:'Апартамент в комплекс с парк'}},
 {id:7,img:IMG.l7,city:'svlas',type:'townhouse',rooms:4,area:140,floor:'3 этажа',price:235000,x:51,y:54,
  title:{ru:'Таунхаус с террасой в 300 м от пляжа',bg:'Таунхаус с тераса на 300 м от плажа'}},
 {id:8,img:IMG.l8,city:'sofia',type:'apartment',rooms:3,area:105,floor:'14/20',price:175000,x:10,y:58,
  title:{ru:'Городской апартамент в центре Софии',bg:'Градски апартамент в центъра на София'}}
];
const REVIEWS = [
 {ava:IMG.a3,name:{ru:'Георгий Димитров',bg:'Георги Димитров'},meta:{ru:'Вилла в Созополе · май 2026',bg:'Вила в Созопол · май 2026'},
  txt:{ru:'Искали дом на первой линии полгода. BREGO показали 7 вариантов, честно рассказали про минусы двух из них. Сделка заняла 5 недель, всё сопровождали до ключей.',bg:'Търсихме къща на първа линия половин година. BREGO показаха 7 варианта и честно казаха минусите на два от тях. Сделката отне 5 седмици, съпроводиха ни до ключовете.'}},
 {ava:IMG.a2,name:{ru:'Елена Петрова',bg:'Елена Петрова'},meta:{ru:'Апартамент во Варне · март 2026',bg:'Апартамент във Варна · март 2026'},
  txt:{ru:'Живу в другой стране, всё оформили дистанционно: онлайн-просмотры, ипотека в болгарском банке, нотариус. Отдельное спасибо за калькулятор — платёж совпал до евро.',bg:'Живея в друга държава, всичко мина дистанционно: онлайн огледи, ипотека в българска банка, нотариус. Благодарности за калкулатора — вноската съвпа до евро.'}},
 {ava:IMG.a1,name:{ru:'Сергей Илиев',bg:'Сергей Илиев'},meta:{ru:'Студия под аренду · июль 2026',bg:'Студио под наем · юли 2026'},
  txt:{ru:'Брал студию как инвестицию. Посчитали доходность по сезону, показали реальную загрузку комплекса. Первый сезон отбил ожидания — 7,4% годовых.',bg:'Купих студио като инвестиция. Изчислиха доходността по сезона и показаха реалната заетост на комплекса. Първият сезон надмина очакванията — 7,4% годишно.'}},
 {ava:IMG.a4,name:{ru:'Мария Стоянова',bg:'Мария Стоянова'},meta:{ru:'Пентхаус в Бургасе · февраль 2026',bg:'Пентхаус в Бургас · февруари 2026'},
  txt:{ru:'Ценила деликатность: не давили, не «впаривали». Подбор из 40+ комплексов сузили до трёх, и третий оказался тем самым. Документы проверили юристы агентства.',bg:'Оцених деликатността: без натиск и «впаряне». Подборът от 40+ комплекса се стесни до три, и третият се оказа точният. Документите бяха проверени от юристите на агенцията.'}},
 {ava:null,ini:'НК',name:{ru:'Николай К.',bg:'Николай К.'},meta:{ru:'Таунхаус, Свети Влас · июнь 2026',bg:'Таунхаус, Свети Влас · юни 2026'},
  txt:{ru:'Второй раз обращаюсь: сначала квартира для родителей, теперь таунхаус. Нравится, что говорят на двух языках и не исчезают после сделки.',bg:'Обръщам се за втори път: първо апартамент за родителите, сега таунхаус. Харесвам, че говорят на два езика и не изчезват след сделката.'}}
];
const PARTNERS = ['ORCA Development','Black Sea Homes','Marina Capital','Azurro Build','Prima Estate','Helios Group','Terra Vista'];

/* ============ HELPERS ============ */
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
function fmtEUR(v){ return nf(v)+' €'; }
function fmtCur(v, cur){ return cur==='BGN' ? nf(v*1.95583)+' лв.' : nf(v)+' €'; }
function yearsWord(n){ if(lang==='bg') return n===1? t('years.one') : t('years.bg');
  const m10=n%10,m100=n%100; if(m10===1&&m100!==11) return t('years.one'); if(m10>=2&&m10<=4&&(m100<12||m100>14)) return t('years.few'); return t('years.many'); }
function toast(msg){ $('#toastTxt').textContent = msg; const el=$('#toast'); el.classList.add('show'); clearTimeout(el._tm); el._tm=setTimeout(()=>el.classList.remove('show'),3600); }

/* ============ APPLY LANG ============ */
function applyLang(){
  document.documentElement.lang = lang;
  localStorage.setItem('brego_lang', lang);
  $$('[data-i18n]').forEach(el=>{ el.innerHTML = t(el.dataset.i18n); });
  $$('.lang-switch button').forEach(b=>b.classList.toggle('active', b.dataset.lang===lang));
  renderMarquee(); renderCatalog(); renderReviews(); renderResults(); renderMap(); calcUpdate(); updatePriceLabel();
}
document.querySelectorAll('.lang-switch button').forEach(b=>b.addEventListener('click',()=>{ lang=b.dataset.lang; applyLang(); }));

/* ============ HEADER ============ */
addEventListener('scroll',()=>$('#header').classList.toggle('scrolled', scrollY>10));
$('#burger').addEventListener('click',()=>{ $('#burger').classList.toggle('open'); $('#mobileMenu').classList.toggle('open'); });
$$('#mobileMenu a').forEach(a=>a.addEventListener('click',()=>{ $('#burger').classList.remove('open'); $('#mobileMenu').classList.remove('open'); }));

/* ============ SMOOTH SCROLL с учётом фиксированного хедера ============ */
document.addEventListener('click',e=>{
  const a=e.target.closest('a[href^="#"]'); if(!a) return;
  const id=a.getAttribute('href'); if(id.length<2) return;
  const el=document.querySelector(id); if(!el) return;
  e.preventDefault();
  $('#burger')?.classList.remove('open'); $('#mobileMenu')?.classList.remove('open');
  if(id==='#top'){ scrollTo({top:0,behavior:'smooth'}); return; }
  const headH=($('#header')?.offsetHeight)||74;
  const top=el.getBoundingClientRect().top+scrollY-headH+10;
  scrollTo({top:Math.max(0,top),behavior:'smooth'});
});

/* ============ MARQUEE ============ */
function renderMarquee(){
  const items = PARTNERS.map(p=>`<span><i>◆</i> ${p}</span>`).join('');
  $('#mqTrack').innerHTML = items + items;
}

/* ============ CAROUSEL (infinite loop) ============ */
function makeCarousel(rootSel){
  const root = $(rootSel); const track = root.querySelector('.car-track'); const view = root.querySelector('.car-view');
  let n=0, idx=0, step=0, tx=0, timer=null, dragging=false, startX=0, startTx=0, moved=0;
  function build(){
    const real = [...track.children]; n = real.length; if(!n) return;
    real.forEach(s=>track.appendChild(s.cloneNode(true)));
    [...track.children].slice(0,n).reverse().forEach(s=>track.prepend(s.cloneNode(true)));
    measure(); apply(false);
  }
  function pv(){ return parseFloat(getComputedStyle(track).getPropertyValue('--pv'))||1; }
  function gap(){ const g=parseFloat(getComputedStyle(track).columnGap||getComputedStyle(track).gap); return Number.isFinite(g)?g:24; }
  function measure(){ const slide=track.querySelector('.car-slide'); if(slide){ step=slide.getBoundingClientRect().width+gap(); } else { const w=view.clientWidth; step=(w-gap()*(pv()-1))/pv()+gap(); } }
  function apply(anim){ track.classList.toggle('no-trans',!anim); tx = -((n+idx)*step); track.style.transform=`translateX(${tx}px)`; }
  function next(){ idx++; apply(true); }
  function prev(){ idx--; apply(true); }
  track.addEventListener('transitionend',()=>{ if(idx>=n){ idx-=n; apply(false);} else if(idx<0){ idx+=n; apply(false);} });
  root.querySelectorAll('.car-btn').forEach(b=>b.addEventListener('click',()=>{ (b.dataset.dir==='1'?next:prev)(); restart(); }));
  /* drag */
  track.addEventListener('pointerdown',e=>{ dragging=true; moved=0; startX=e.clientX; startTx=tx; track.classList.add('dragging','no-trans'); stop(); });
  addEventListener('pointermove',e=>{ if(!dragging) return; const d=e.clientX-startX; moved=Math.max(moved,Math.abs(d)); tx=startTx+d; track.style.transform=`translateX(${tx}px)`; });
  addEventListener('pointerup',()=>{ if(!dragging) return; dragging=false; track.classList.remove('dragging');
    if(moved>step/5){ if(tx<startTx) idx++; else idx--; } apply(true); restart(); });
  root.addEventListener('mouseenter',stop); root.addEventListener('mouseleave',restart);
  function stop(){ clearInterval(timer); timer=null; }
  function restart(){ stop(); timer=setInterval(()=>{ if(!dragging && !document.querySelector('.modal.open')) next(); },4600); }
  addEventListener('resize',()=>{ measure(); apply(false); });
  addEventListener('load',()=>{ measure(); apply(false); });
  build(); restart();
  return { rebuild(){ track.innerHTML=''; stop(); } };
}
let catCar=null, revCar=null;

/* ============ CARDS ============ */
function cardHTML(l){
  return `<div class="car-slide"><article class="p-card">
    <div class="p-img"><img loading="lazy" src="${l.img}" alt="${l.title[lang]}">
      <div class="p-tags"><span class="p-tag">${CITY_NAME[l.city][lang]}</span>${l.gold?`<span class="p-tag gold">★ TOP</span>`:''}</div></div>
    <div class="p-body">
      <span class="p-city">${t('type.'+l.type)}</span>
      <h3 class="p-title">${l.title[lang]}</h3>
      <div class="p-specs"><span><svg class="ico ico-sm" viewBox="0 0 24 24" fill="none" stroke="#128097" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6"/><path d="M3 18h18"/><path d="M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"/></svg> ${l.rooms} ${t('card.rooms')}</span><span><svg class="ico ico-sm" viewBox="0 0 24 24" fill="none" stroke="#128097" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 12h16M12 4v16"/></svg> ${l.area} ${t('card.area')}</span><span><svg class="ico ico-sm" viewBox="0 0 24 24" fill="none" stroke="#128097" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="18" rx="1"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2"/></svg> ${t('card.floor')} ${l.floor}</span></div>
      <div class="p-foot"><span class="p-price">${fmtEUR(l.price)}</span>
        <button class="btn btn-sm" data-req="${l.id}">${t('card.btn')}</button></div>
    </div></article></div>`;
}
function renderCatalog(){
  if(catCar) catCar.rebuild();
  $('#catTrack').innerHTML = LISTINGS.map(cardHTML).join('');
  catCar = makeCarousel('#catCar');
}
function renderReviews(){
  if(revCar) revCar.rebuild();
  $('#revTrack').innerHTML = REVIEWS.map(r=>`<div class="car-slide"><article class="rev-card">
    <div class="rev-top">${r.ava?`<img class="rev-ava" src="${r.ava}" alt="">`:`<span class="rev-ava init">${r.ini}</span>`}
      <div class="rev-name"><b>${r.name[lang]}</b><span>${r.meta[lang]}</span></div>
      <span class="stars">★★★★★</span></div>
    <p class="rev-txt">«${r.txt[lang]}»</p>
    <span class="rev-date">${r.meta[lang].split('·')[1]||''}</span></article></div>`).join('');
  revCar = makeCarousel('#revCar');
}

/* ============ SEARCH ============ */
function updatePriceLabel(){ const v=+$('#fPrice').value; $('#priceVal').textContent = fmtEUR(v);
  const f=(v-50000)/(500000-50000)*100; $('#fPrice').style.setProperty('--fill',f+'%'); }
$('#fPrice').addEventListener('input',updatePriceLabel);
let lastResults=null;
function doSearch(){
  const c=$('#fCity').value, ty=$('#fType').value, r=+$('#fRooms').value, p=+$('#fPrice').value;
  lastResults = LISTINGS.filter(l=>(c==='all'||l.city===c)&&(ty==='all'||l.type===ty)&&(l.rooms>=r)&&(l.price<=p));
  renderResults(true);
  $('#resultsPanel').scrollIntoView({behavior:'smooth',block:'nearest'});
}
function renderResults(scroll){
  const panel=$('#resultsPanel');
  if(lastResults===null){ panel.classList.remove('show'); return; }
  panel.classList.add('show');
  $('#resultsCount').textContent = t('search.found',{n:lastResults.length});
  $('#resultsGrid').innerHTML = lastResults.length ? lastResults.map(l=>`
    <div class="res-card"><img src="${l.img}" alt=""><div class="res-body">
      <span class="rc-city">${CITY_NAME[l.city][lang]}</span>
      <div class="rc-title">${l.title[lang]}</div>
      <div class="rc-row"><span class="rc-price">${fmtEUR(l.price)}</span><span class="rc-specs">${l.rooms} ${t('card.rooms')} · ${l.area} ${t('card.area')}</span></div>
      <div style="margin-top:10px"><button class="btn btn-sm btn-ghost" style="width:100%" data-req="${l.id}">${t('card.btn')}</button></div>
    </div></div>`).join('') : `<div class="no-res" style="grid-column:1/-1"><svg class="no-res-ico" viewBox="0 0 24 24" fill="none" stroke="#128097" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M16.5 16.5L21 21"/></svg><br>${t('search.none')}</div>`;
}
$('#searchBtn').addEventListener('click',doSearch);
$('#searchReset').addEventListener('click',()=>{ $('#fCity').value='all'; $('#fType').value='all'; $('#fRooms').value='0'; $('#fPrice').value=500000; updatePriceLabel(); lastResults=null; renderResults(); });

/* ============ CALCULATOR ============ */
let curCur='EUR';
function calcUpdate(){
  const price=+$('#cPrice').value, downP=+$('#cDown').value, yrs=+$('#cTerm').value, rate=+$('#cRate').value;
  $('#vPrice').textContent=fmtEUR(price);
  $('#vDown').textContent=downP+'% · '+fmtEUR(price*downP/100);
  $('#vTerm').textContent=yrs+' '+yearsWord(yrs);
  $('#vRate').textContent=rate.toLocaleString(lang==='ru'?'ru-RU':'bg-BG',{minimumFractionDigits:1})+'%';
  [['#cPrice',30000,600000],['#cDown',10,90],['#cTerm',3,30],['#cRate',2,9]].forEach(([s,a,b])=>{ const el=$(s); el.style.setProperty('--fill',((el.value-a)/(b-a)*100)+'%'); });
  const loan=price*(1-downP/100), r=rate/100/12, m=yrs*12;
  const pay = r>0 ? loan*r/(1-Math.pow(1+r,-m)) : loan/m;
  const total=pay*m, over=total-loan;
  $('#outMonthly').textContent=fmtCur(pay,curCur)+' / '+ (lang==='ru'?'мес.':'мес.');
  $('#outLoan').textContent=fmtCur(loan,curCur);
  $('#outDown').textContent=fmtCur(price*downP/100,curCur);
  $('#outOver').textContent=fmtCur(over,curCur);
  $('#outTotal').textContent=fmtCur(total,curCur);
  const pp=loan/total*100; $('#barP').style.width=pp+'%'; $('#barI').style.width=(100-pp)+'%';
}
['#cPrice','#cDown','#cTerm','#cRate'].forEach(s=>$(s).addEventListener('input',calcUpdate));
$$('.cur-toggle button').forEach(b=>b.addEventListener('click',()=>{ curCur=b.dataset.cur; $$('.cur-toggle button').forEach(x=>x.classList.toggle('active',x===b)); calcUpdate(); }));

/* ============ MODALS ============ */
function openModal(id){ $(id).classList.add('open'); document.body.style.overflow='hidden'; }
function closeModal(m){ m.classList.remove('open'); document.body.style.overflow=''; }
$$('.modal').forEach(m=>{ m.addEventListener('click',e=>{ if(e.target.closest('[data-close]')) closeModal(m); }); });
addEventListener('keydown',e=>{ if(e.key==='Escape') $$('.modal.open').forEach(closeModal); });

/* request modal */
function openRequest(prefill){
  $('#reqForm').style.display=''; $('#reqOk').classList.remove('show');
  if(prefill){
    if(prefill.listing){ const l=prefill.listing; $('#rqCity').value=l.city; $('#rqType').value=l.type; $('#rqBudget').value=l.price;
      $('#rqComment').value = (lang==='ru'?'Интересует объект: ':'Интересува ме имот: ') + l.title[lang] + ' ('+fmtEUR(l.price)+')'; }
    if(prefill.calc){ $('#rqBudget').value = $('#cPrice').value; $('#rqComment').value = (lang==='ru'?'Расчёт ипотеки: ':'Ипотечно изчисление: ') + $('#outMonthly').textContent; }
  }
  openModal('#reqModal');
}
document.addEventListener('click',e=>{
  const b=e.target.closest('[data-open-request]'); if(b){ openRequest({calc:b.dataset.calc}); return; }
  const r=e.target.closest('[data-req]'); if(r){ const l=LISTINGS.find(x=>x.id==r.dataset.req); openRequest({listing:l}); }
});
$('#reqForm').addEventListener('submit',e=>{
  e.preventDefault();
  let ok=true;
  [['#rqName',v=>v.trim().length>=2],['#rqPhone',v=>/[\d+()\-\s]{6,}/.test(v)]].forEach(([s,f])=>{ const el=$(s); const good=f(el.value); el.classList.toggle('err',!good); if(!good) ok=false; });
  if(!$('#rqAgree').checked){ ok=false; toast(lang==='ru'?'Нужно согласие на обработку данных':'Нужно е съгласие за обработката на данни'); }
  if(!ok) return;
  const num='BR-'+(2400+Math.floor(Math.random()*599));
  $('#reqNum').textContent=t('req.okNum')+': '+num;
  $('#reqForm').style.display='none'; $('#reqOk').classList.add('show');
  toast(t('toast.req'));
});
$('#reqAgain').addEventListener('click',()=>{ $('#reqForm').reset(); $('#rqAgree').checked=true; $('#reqForm').style.display=''; $('#reqOk').classList.remove('show'); });

/* contact form */
$('#contactForm').addEventListener('submit',e=>{
  e.preventDefault(); let ok=true;
  [['#cfName',v=>v.trim().length>=2],['#cfContact',v=>v.trim().length>=5],['#cfMsg',v=>v.trim().length>=5]].forEach(([s,f])=>{ const el=$(s); const good=f(el.value); el.classList.toggle('err',!good); if(!good) ok=false; });
  if(!ok) return;
  $('#contactForm').style.display='none'; $('#contactOk').classList.add('show'); toast(t('toast.msg'));
});
$('#contactAgain').addEventListener('click',()=>{ $('#contactForm').reset(); $('#contactForm').style.display=''; $('#contactOk').classList.remove('show'); });

/* ============ MAP ============ */
function renderMap(){
  $('#mapPins').innerHTML = LISTINGS.map(l=>`<button class="map-pin" data-pin="${l.id}" style="left:${l.x}%;top:${l.y}%" title="${l.title[lang]}"><i></i></button>`).join('');
  const cities=[...new Set(LISTINGS.map(l=>l.city))];
  $('#mapCityList').innerHTML = cities.map(c=>{ const cnt=LISTINGS.filter(l=>l.city===c).length;
    return `<button class="map-city" data-city="${c}">${CITY_NAME[c][lang]} <b>${cnt}</b></button>`; }).join('');
  hidePopup();
}
function hidePopup(){ $('#mapPopup').classList.remove('show'); $$('.map-pin').forEach(p=>p.classList.remove('active')); $$('.map-city').forEach(p=>p.classList.remove('active')); }
function showPin(id){
  const l=LISTINGS.find(x=>x.id==id); if(!l) return;
  hidePopup(); const pin=document.querySelector(`[data-pin="${id}"]`); if(pin) pin.classList.add('active');
  const cityBtn=document.querySelector(`.map-city[data-city="${l.city}"]`); if(cityBtn) cityBtn.classList.add('active');
  const pop=$('#mapPopup');
  pop.innerHTML=`<img src="${l.img}" alt="${l.title[lang]}"><div class="mp-body"><b>${l.title[lang]}</b>
    <div class="mp-specs">${CITY_NAME[l.city][lang]} · ${t('type.'+l.type)}</div>
    <div class="mp-specs">${l.rooms} ${t('card.rooms')} · ${l.area} ${t('card.area')} · ${t('card.floor')} ${l.floor}</div>
    <div class="mp-price">${fmtEUR(l.price)}</div>
    <button class="btn btn-sm" data-req="${l.id}" data-from-map>${t('map.btn')}</button></div>`;
  pop.classList.add('show');
  /* позиционирование: всегда внутри карты + зазор от метки, чтобы её не закрывать */
  const area=$('#mapArea'), AW=area.clientWidth, AH=area.clientHeight, GAP=18, PAD=8;
  const PW=pop.offsetWidth, PH=pop.offsetHeight;
  const pinX=l.x/100*AW, pinY=l.y/100*AH;
  let left=Math.max(PAD,Math.min(pinX-PW/2,AW-PW-PAD));
  let top=pinY-PH-GAP;
  if(top<PAD) top=pinY+GAP; /* мало места сверху — показываем под меткой */
  if(top+PH>AH-PAD) top=Math.max(PAD,AH-PH-PAD);
  pop.style.left=left+'px'; pop.style.top=top+'px';
}
$('#openMap').addEventListener('click',()=>{ openModal('#mapModal'); renderMap(); });
document.addEventListener('click',e=>{
  const pin=e.target.closest('[data-pin]'); if(pin){ showPin(pin.dataset.pin); return; }
  const c=e.target.closest('[data-city]'); if(c){ const first=LISTINGS.find(l=>l.city===c.dataset.city); showPin(first.id); return; }
  if(e.target.closest('#mapArea > img.map-bg')) hidePopup();
  if(e.target.closest('[data-from-map]')){ closeModal($('#mapModal')); }
});

/* ============ REVEAL + COUNTERS ============ */
const io=new IntersectionObserver(es=>es.forEach(x=>{ if(x.isIntersecting){ x.target.classList.add('in'); io.unobserve(x.target);} }),{threshold:.12});
$$('.reveal').forEach(el=>io.observe(el));
const cio=new IntersectionObserver(es=>es.forEach(x=>{ if(!x.isIntersecting) return; cio.unobserve(x.target);
  const el=x.target, target=+el.dataset.count, suf=el.dataset.suffix||''; let s=null;
  const tick=ts=>{ if(!s)s=ts; const p=Math.min((ts-s)/1400,1); el.textContent=nf(target*(1-Math.pow(1-p,3)))+suf; if(p<1) requestAnimationFrame(tick); };
  requestAnimationFrame(tick); }),{threshold:.5});
$$('.stat b').forEach(el=>cio.observe(el));

/* ============ INIT ============ */
applyLang();
updatePriceLabel();
