/* ================= CALCULATOR ================= */
var calcState = { object:'flat', area:60, repair:'capital', rooms:'2', extras:{} };
var RATE  = { cosmetic:4500, capital:8500, design:12500 };
var BASE  = { cosmetic:150000, capital:350000, design:500000 };
var ROOM_K = { '1':0.95, '2':1, '3':1.06, '4':1.12 };
var DAY_K = { cosmetic:0.7, capital:1, design:1.3 };
var EXT_RATE = { demont:800, electro:1200, plumb:1200, rough:1500 };

var priceEl = document.getElementById('priceValue');
var timeEl  = document.getElementById('timeValue');
var areaRange = document.getElementById('areaRange');
var areaInput = document.getElementById('areaInput');

function recalc(){
  var extraSum = 0;
  for (var k in calcState.extras){ if (calcState.extras[k]) extraSum += EXT_RATE[k]; }
  var objK = calcState.object === 'house' ? 1.15 : 1;
  var raw = (BASE[calcState.repair] + calcState.area * RATE[calcState.repair]) * ROOM_K[calcState.rooms] * objK + calcState.area * extraSum;
  var price = Math.round(raw / 10000) * 100;
  var days = Math.round((15 + calcState.area / 2) * DAY_K[calcState.repair]);
  priceEl.textContent = 'от ' + price.toLocaleString('ru-RU') + ' $';
  timeEl.textContent = 'Сроки: от ' + days + ' дней';
  priceEl.style.transform = 'scale(1.06)';
  setTimeout(function(){ priceEl.style.transform = 'scale(1)'; }, 180);
}
function paintRange(){
  var p = (calcState.area - 20) / (300 - 20) * 100;
  areaRange.style.background = 'linear-gradient(to right, var(--accent) ' + p + '%, #e4e3dd ' + p + '%)';
}
document.querySelectorAll('[data-group]').forEach(function(group){
  group.addEventListener('click', function(e){
    var btn = e.target.closest('.opt-btn');
    if (!btn) return;
    group.querySelectorAll('.opt-btn').forEach(function(b){ b.classList.remove('active'); });
    btn.classList.add('active');
    calcState[group.dataset.group] = btn.dataset.val;
    recalc();
  });
});
areaRange.addEventListener('input', function(){
  calcState.area = +areaRange.value;
  areaInput.value = areaRange.value;
  paintRange(); recalc();
});
areaInput.addEventListener('input', function(){
  var v = Math.max(20, Math.min(300, +areaInput.value || 20));
  calcState.area = v;
  areaRange.value = v;
  paintRange(); recalc();
});
document.querySelectorAll('[data-ext]').forEach(function(cb){
  cb.addEventListener('change', function(){
    calcState.extras[cb.dataset.ext] = cb.checked;
    recalc();
  });
});
paintRange(); recalc();

/* ================= BEFORE / AFTER SLIDERS ================= */
document.querySelectorAll('.ba').forEach(function(box){
  function setPos(clientX){
    var r = box.getBoundingClientRect();
    var p = (clientX - r.left) / r.width * 100;
    p = Math.max(2, Math.min(98, p));
    box.style.setProperty('--pos', p + '%');
  }
  box.addEventListener('pointerdown', function(e){
    e.preventDefault();
    box.setPointerCapture(e.pointerId);
    setPos(e.clientX);
    function mv(ev){ setPos(ev.clientX); }
    function up(){ box.removeEventListener('pointermove', mv); box.removeEventListener('pointerup', up); box.removeEventListener('pointercancel', up); }
    box.addEventListener('pointermove', mv);
    box.addEventListener('pointerup', up);
    box.addEventListener('pointercancel', up);
  });
});

/* ================= REVIEWS CAROUSEL ================= */
var track = document.getElementById('reviewsTrack');
var revLeftBtn = document.getElementById('revLeft');
var revRightBtn = document.getElementById('revRight');
function revStep(){
  var c = track.querySelector('.review-card');
  return c ? c.getBoundingClientRect().width + 24 : 400;
}
revLeftBtn.addEventListener('click', function(){ track.scrollBy({left:-revStep(), behavior:'smooth'}); });
revRightBtn.addEventListener('click', function(){ track.scrollBy({left:revStep(), behavior:'smooth'}); });
function syncRevArrows(){
  var max = track.scrollWidth - track.clientWidth;
  revLeftBtn.disabled = track.scrollLeft <= 2;
  revRightBtn.disabled = track.scrollLeft >= max - 2;
}
track.addEventListener('scroll', syncRevArrows);
window.addEventListener('resize', syncRevArrows);
syncRevArrows();

/* ================= REVEAL ON SCROLL ================= */
var revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window){
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if (en.isIntersecting){ en.target.classList.add('on'); io.unobserve(en.target); }
    });
  }, {threshold:.1});
  revealEls.forEach(function(el){ io.observe(el); });
} else {
  revealEls.forEach(function(el){ el.classList.add('on'); });
}

/* ================= PACKAGES -> LEAD FORM ================= */
// При клике «Выбрать пакет»: переход к форме, очистка и заполнение поля сообщения данными пакета
document.querySelectorAll('.pack-card').forEach(function(card){
  var btn = card.querySelector('button');
  if (!btn) return;
  btn.addEventListener('click', function(){
    var nameEl = card.querySelector('.pack-name');
    var priceEl2 = card.querySelector('.pack-price');
    var packName = nameEl ? nameEl.textContent.trim() : '';
    var packPrice = priceEl2 ? priceEl2.textContent.trim() : '';
    var items = [];
    card.querySelectorAll('.pack-list li').forEach(function(li){
      items.push(li.textContent.trim());
    });
    var msgField = document.getElementById('fMsg');
    var form = document.getElementById('leadForm');
    // 1. Сначала очищаем поле сообщения
    if (msgField) msgField.value = '';
    // 2. Затем заполняем информацией из пакета
    if (msgField){
      msgField.value = 'Здравствуйте! Интересует пакет «' + packName + '» (' + packPrice + ').\n'
        + 'Состав пакета:\n- ' + items.join('\n- ');
    }
    // 3. Плавно перемещаемся к форме «Оставить заявку»
    if (form){
      form.scrollIntoView({behavior:'smooth', block:'center'});
      // Фокус на поле имени после прокрутки, чтобы пользователь сразу заполнял заявку
      setTimeout(function(){
        var nameField = document.getElementById('fName');
        if (nameField) nameField.focus({preventScroll:true});
      }, 600);
    }
  });
});

/* ================= FORM (HTML5-валидация + очистка полей) ================= */
document.getElementById('leadForm').addEventListener('submit', function(e){
  e.preventDefault();
  var form = this;
  var btn = form.querySelector('button[type=submit]');
  var old = btn.textContent;
  btn.textContent = 'Заявка отправлена ✓';
  form.reset();
  setTimeout(function(){ btn.textContent = old; }, 2500);
});
