// ===== STATE =====
let currentStep = 1;
let bookingData = { specialty: '', doctor: '', date: '', time: '', name: '', phone: '', email: '', reason: '' };
let selectedDay = null;
let selectedSlot = null;
let reviewIndex = 0;
let activeFilter = 'Все';

// ===== HEADER SCROLL =====
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== MOBILE MENU =====
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileOverlay = document.getElementById('mobileOverlay');
const mobileClose = document.getElementById('mobileClose');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.add('open');
  mobileOverlay.classList.add('open');
  menuToggle.classList.add('active');
});
function closeMobileMenu() {
  mobileMenu.classList.remove('open');
  mobileOverlay.classList.remove('open');
  menuToggle.classList.remove('active');
}
mobileClose.addEventListener('click', closeMobileMenu);
mobileOverlay.addEventListener('click', closeMobileMenu);
document.querySelectorAll('.mobile-link').forEach(a => a.addEventListener('click', closeMobileMenu));

// ===== RENDER SPECIALTIES (клик «Перейти в отделение» -> секция команды, п.6) =====
const specialtiesGrid = document.getElementById('specialtiesGrid');
specialties.forEach((s, i) => {
  const card = document.createElement('div');
  card.className = 'specialty-card reveal';
  card.style.transitionDelay = `${i * 0.05}s`;
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-label', 'Перейти в отделение ' + s.name);
  card.innerHTML = `
    <div class="specialty-card-image"><img src="${s.img}" alt="Отделение ${s.name}" loading="lazy"></div>
    <div class="specialty-card-body">
      <h3>${s.name}</h3>
      <p>${s.desc}</p>
      <span class="specialty-card-link">Перейти в отделение <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
    </div>
  `;
  card.addEventListener('click', () => goToDepartment(s.name));
  card.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goToDepartment(s.name); } });
  specialtiesGrid.appendChild(card);
});

// ===== RENDER DOCTORS: все 12 отделений на ленте-карусели (п.6) =====
const doctorFilters = document.getElementById('doctorFilters');
const allSpecialties = ['Все', ...specialties.map(s => s.name)];
allSpecialties.forEach(s => {
  const btn = document.createElement('button');
  btn.className = 'filter-btn' + (s === 'Все' ? ' active' : '');
  btn.textContent = s;
  btn.dataset.specialty = s;
  btn.onclick = () => filterDoctors(s, btn);
  doctorFilters.appendChild(btn);
});

function filterDoctors(specialty, btn) {
  activeFilter = specialty;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderDoctors();
}

// Переход из «Нашей экспертизы» в «Нашу команду» с активацией отделения (п.6)
function goToDepartment(specialty) {
  const btn = document.querySelector(`.filter-btn[data-specialty="${specialty}"]`);
  if (btn) {
    filterDoctors(specialty, btn);
    btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  } else {
    activeFilter = specialty;
    renderDoctors();
  }
  document.getElementById('doctors').scrollIntoView({ behavior: 'smooth' });
}

function scrollDeptFilters(dir) {
  doctorFilters.scrollBy({ left: dir * 320, behavior: 'smooth' });
}

function renderDoctors() {
  const grid = document.getElementById('doctorsGrid');
  grid.innerHTML = '';
  const filtered = activeFilter === 'Все' ? doctors : doctors.filter(d => d.specialty === activeFilter);
  filtered.forEach((d, i) => {
    const card = document.createElement('div');
    card.className = 'doctor-card reveal visible';
    card.style.animation = `fadeUp 0.5s ${i * 0.08}s both`;
    const idx = doctors.indexOf(d);
    card.innerHTML = `
      <div class="doctor-card-image"><img src="${d.img}" alt="${d.name}" loading="lazy"></div>
      <div class="doctor-card-body">
        <h3>${d.name}</h3>
        <div class="doctor-card-specialty">${d.specialty}</div>
        <div class="doctor-card-meta">${d.experience} опыта<br>${d.languages}</div>
        <div class="doctor-card-actions">
          <button class="btn btn-secondary" data-idx="${idx}" data-action="profile">Профиль</button>
          <button class="btn btn-primary" data-idx="${idx}" data-action="book">Записаться</button>
        </div>
      </div>
    `;
    card.querySelector('[data-action="profile"]').addEventListener('click', () => openDoctorModal(idx));
    card.querySelector('[data-action="book"]').addEventListener('click', () => openBookingWithDoctor(d.specialty, d.name));
    grid.appendChild(card);
  });
}
renderDoctors();

// ===== DOCTOR MODAL =====
function openDoctorModal(idx) {
  const d = doctors[idx];
  const content = document.getElementById('doctorModalContent');
  content.innerHTML = `
    <div class="modal-header">
      <div class="modal-header-image"><img src="${d.img}" alt="${d.name}"></div>
      <div class="modal-header-info">
        <h2>${d.name}</h2>
        <div class="specialty">${d.specialty}</div>
        <div class="modal-meta-grid">
          <div class="modal-meta-item"><label>Опыт</label><span>${d.experience}</span></div>
          <div class="modal-meta-item"><label>Языки</label><span>${d.languages}</span></div>
          <div class="modal-meta-item"><label>Консультация</label><span>${d.price}</span></div>
          <div class="modal-meta-item"><label>Доступность</label><span>Пн–Сб</span></div>
        </div>
      </div>
    </div>
    <div class="modal-body">
      <h4>Образование</h4>
      <p>${d.education}</p>
      <h4 style="margin-top: 24px;">Области экспертизы</h4>
      <ul>${d.expertise.map(e => `<li>${e}</li>`).join('')}</ul>
    </div>
    <div class="modal-cta">
      <button class="btn btn-primary btn-large" onclick="closeDoctorModal(); openBookingWithDoctor('${d.specialty}', '${d.name}');">Записаться к ${d.name.split(' ').pop()}</button>
    </div>
  `;
  document.getElementById('doctorModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeDoctorModal() {
  document.getElementById('doctorModal').classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('doctorModal').addEventListener('click', (e) => {
  if (e.target.id === 'doctorModal') closeDoctorModal();
});

// ===== SCHEDULE =====
function generateScheduleDays() {
  const container = document.getElementById('scheduleDays');
  container.innerHTML = '';
  const days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  const months = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];
  const today = new Date();
  for (let i = 0; i < 7; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    const dayEl = document.createElement('div');
    dayEl.className = 'schedule-day' + (i === 0 ? ' active' : '');
    dayEl.innerHTML = `
      <div class="schedule-day-name">${days[d.getDay()]}</div>
      <div class="schedule-day-date">${d.getDate()}</div>
      <div class="schedule-day-month">${months[d.getMonth()]}</div>
    `;
    dayEl.onclick = () => selectDay(dayEl, d);
    container.appendChild(dayEl);
  }
  selectedDay = new Date(today);
  updateScheduleSlots();
}

function selectDay(el, date) {
  document.querySelectorAll('.schedule-day').forEach(d => d.classList.remove('active'));
  el.classList.add('active');
  selectedDay = date;
  updateScheduleSlots();
}

function updateScheduleSlots() {
  const container = document.getElementById('scheduleSlots');
  container.innerHTML = '';
  
  const selectedDoctorName = document.getElementById('scheduleDoctor').value;
  
  if (!selectedDoctorName) {
    container.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">Выберите специализацию и врача, чтобы увидеть доступное время</div>';
    return;
  }
  
  const doctor = doctors.find(d => d.name === selectedDoctorName);
  if (!doctor) return;
  
  // Generate unavailable slots randomly based on day
  const dayIndex = selectedDay ? selectedDay.getDate() % 7 : 0;
  const unavailableIndices = new Set([dayIndex, (dayIndex + 2) % doctor.slots.length]);
  
  doctor.slots.forEach((time, idx) => {
    const slot = document.createElement('div');
    const isUnavail = unavailableIndices.has(idx);
    slot.className = 'schedule-slot' + (isUnavail ? ' unavailable' : '');
    slot.textContent = time;
    if (!isUnavail) {
      slot.onclick = () => selectSlot(slot, time);
    }
    container.appendChild(slot);
  });
}

function selectSlot(el, time) {
  document.querySelectorAll('.schedule-slot').forEach(s => s.classList.remove('selected'));
  el.classList.add('selected');
  selectedSlot = time;
}

// Populate schedule filters
const scheduleSpecialtySelect = document.getElementById('scheduleSpecialty');
const scheduleDoctorSelect = document.getElementById('scheduleDoctor');

// Add specialties to schedule filter
specialties.forEach(s => {
  const opt = document.createElement('option');
  opt.value = s.name;
  opt.textContent = s.name;
  scheduleSpecialtySelect.appendChild(opt);
});

function onScheduleSpecialtyChange() {
  const specialty = scheduleSpecialtySelect.value;
  scheduleDoctorSelect.innerHTML = '<option value="">Выберите врача</option>';
  
  if (specialty) {
    const filteredDoctors = doctors.filter(d => d.specialty === specialty);
    filteredDoctors.forEach(d => {
      const opt = document.createElement('option');
      opt.value = d.name;
      opt.textContent = d.name;
      scheduleDoctorSelect.appendChild(opt);
    });
  }
  
  selectedSlot = null;
  updateScheduleSlots();
}

function onScheduleDoctorChange() {
  selectedSlot = null;
  updateScheduleSlots();
}

generateScheduleDays();

// ===== BOOKING FORM =====
function openBooking() {
  document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
}

function openBookingWithDoctor(specialty, doctor) {
  bookingData.specialty = specialty;
  bookingData.doctor = doctor;
  
  // If we have specialty and doctor, skip to step 3 (date/time)
  if (specialty && doctor) {
    currentStep = 3;
  } else {
    currentStep = 1;
  }
  
  updateBookingStep();
  renderBookingSpecialties();
  renderBookingDoctors();
  renderBookingTimes();
  
  setTimeout(() => {
    document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
  }, 100);
}

function renderBookingSpecialties() {
  const container = document.getElementById('bookingSpecialties');
  container.innerHTML = '';
  specialties.forEach(s => {
    const card = document.createElement('div');
    card.className = 'option-card' + (bookingData.specialty === s.name ? ' selected' : '');
    card.innerHTML = `<h4>${s.name}</h4>`;
    card.onclick = () => {
      bookingData.specialty = s.name;
      bookingData.doctor = '';
      renderBookingSpecialties();
      renderBookingDoctors();
    };
    container.appendChild(card);
  });
}

function renderBookingDoctors() {
  const container = document.getElementById('bookingDoctors');
  container.innerHTML = '';
  const filtered = bookingData.specialty ? doctors.filter(d => d.specialty === bookingData.specialty) : doctors;
  filtered.forEach(d => {
    const card = document.createElement('div');
    card.className = 'option-card' + (bookingData.doctor === d.name ? ' selected' : '');
    card.innerHTML = `<h4>${d.name}</h4><p>${d.specialty}</p>`;
    card.onclick = () => {
      bookingData.doctor = d.name;
      renderBookingDoctors();
    };
    container.appendChild(card);
  });
}

function renderBookingTimes() {
  const container = document.getElementById('bookingTimes');
  container.innerHTML = '';
  
  if (!bookingData.doctor) {
    container.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 20px; color: var(--text-muted);">Сначала выберите врача</div>';
    return;
  }
  
  const doctor = doctors.find(d => d.name === bookingData.doctor);
  if (!doctor) return;
  
  const dateVal = document.getElementById('bookingDate').value;
  const dayIndex = dateVal ? new Date(dateVal).getDate() % 7 : 0;
  const unavailableIndices = new Set([dayIndex, (dayIndex + 2) % doctor.slots.length]);
  
  doctor.slots.forEach((time, idx) => {
    const card = document.createElement('div');
    const isUnavail = unavailableIndices.has(idx);
    card.className = 'option-card' + (bookingData.time === time ? ' selected' : '') + (isUnavail ? ' unavailable' : '');
    card.innerHTML = `<h4>${time}</h4>`;
    if (!isUnavail) {
      card.onclick = () => {
        bookingData.time = time;
        renderBookingTimes();
      };
    }
    container.appendChild(card);
  });
}

function onBookingDateChange() {
  bookingData.time = '';
  renderBookingTimes();
}

renderBookingSpecialties();
renderBookingDoctors();
renderBookingTimes();

// Set min date
const dateInput = document.getElementById('bookingDate');
const today = new Date().toISOString().split('T')[0];
dateInput.min = today;
dateInput.value = today;

function updateBookingStep() {
  document.querySelectorAll('.booking-step').forEach(s => s.classList.remove('active'));
  document.querySelector(`.booking-step[data-step="${currentStep}"]`).classList.add('active');
  document.querySelectorAll('.progress-step').forEach(s => {
    const step = parseInt(s.dataset.step);
    s.classList.remove('active', 'completed');
    if (step === currentStep) s.classList.add('active');
    if (step < currentStep) s.classList.add('completed');
  });
  const progress = ((currentStep - 1) / 4) * 100;
  document.getElementById('progressBar').style.width = progress + '%';

  if (currentStep === 5) renderBookingSummary();
}

function nextStep() {
  if (!validateStep(currentStep)) return;
  if (currentStep < 5) {
    currentStep++;
    updateBookingStep();
    
    // If we just moved to step 3, render times
    if (currentStep === 3) {
      renderBookingTimes();
    }
  }
}

function prevStep() {
  if (currentStep > 1) {
    currentStep--;
    updateBookingStep();
  }
}

function validateStep(step) {
  let valid = true;
  if (step === 1) {
    if (!bookingData.specialty) {
      showToast('Пожалуйста, выберите специализацию.', 'error');
      valid = false;
    }
  } else if (step === 2) {
    if (!bookingData.doctor) {
      showToast('Пожалуйста, выберите врача.', 'error');
      valid = false;
    }
  } else if (step === 3) {
    const dateVal = document.getElementById('bookingDate').value;
    if (!dateVal) {
      document.getElementById('bookingDate').classList.add('error');
      document.getElementById('bookingDateError').classList.add('show');
      valid = false;
    } else {
      document.getElementById('bookingDate').classList.remove('error');
      document.getElementById('bookingDateError').classList.remove('show');
    }
    if (!bookingData.time) {
      document.getElementById('bookingTimeError').classList.add('show');
      valid = false;
    } else {
      document.getElementById('bookingTimeError').classList.remove('show');
    }
    bookingData.date = dateVal;
  } else if (step === 4) {
    const name = document.getElementById('patientName').value.trim();
    const phone = document.getElementById('patientPhone').value.trim();
    const email = document.getElementById('patientEmail').value.trim();

    if (!name) {
      document.getElementById('patientName').classList.add('error');
      document.getElementById('patientNameError').classList.add('show');
      valid = false;
    } else {
      document.getElementById('patientName').classList.remove('error');
      document.getElementById('patientNameError').classList.remove('show');
    }

    const phoneRegex = /^[\+]?[\d\s\-\(\)]{7,}$/;
    if (!phone || !phoneRegex.test(phone)) {
      document.getElementById('patientPhone').classList.add('error');
      document.getElementById('patientPhoneError').classList.add('show');
      valid = false;
    } else {
      document.getElementById('patientPhone').classList.remove('error');
      document.getElementById('patientPhoneError').classList.remove('show');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      document.getElementById('patientEmail').classList.add('error');
      document.getElementById('patientEmailError').classList.add('show');
      valid = false;
    } else {
      document.getElementById('patientEmail').classList.remove('error');
      document.getElementById('patientEmailError').classList.remove('show');
    }

    if (valid) {
      bookingData.name = name;
      bookingData.phone = phone;
      bookingData.email = email;
      bookingData.reason = document.getElementById('patientReason').value.trim();
    }
  }
  return valid;
}

function renderBookingSummary() {
  const summary = document.getElementById('bookingSummary');
  summary.innerHTML = `
    <div class="booking-summary-row"><span>Специализация</span><span>${bookingData.specialty}</span></div>
    <div class="booking-summary-row"><span>Врач</span><span>${bookingData.doctor}</span></div>
    <div class="booking-summary-row"><span>Дата</span><span>${bookingData.date}</span></div>
    <div class="booking-summary-row"><span>Время</span><span>${bookingData.time}</span></div>
    <div class="booking-summary-row"><span>Пациент</span><span>${bookingData.name}</span></div>
    <div class="booking-summary-row"><span>Телефон</span><span>${bookingData.phone}</span></div>
    <div class="booking-summary-row"><span>Email</span><span>${bookingData.email}</span></div>
    ${bookingData.reason ? `<div class="booking-summary-row"><span>Причина</span><span>${bookingData.reason}</span></div>` : ''}
  `;
}

function submitBooking() {
  const btn = document.getElementById('submitBooking');
  btn.textContent = 'Отправка…';
  btn.disabled = true;

  setTimeout(() => {
    // Store in sessionStorage
    sessionStorage.setItem('lastBooking', JSON.stringify(bookingData));

    // Show success
    const successSummary = document.getElementById('successSummary');
    successSummary.innerHTML = `
      <div class="booking-summary-row"><span>Врач</span><span>${bookingData.doctor}</span></div>
      <div class="booking-summary-row"><span>Специализация</span><span>${bookingData.specialty}</span></div>
      <div class="booking-summary-row"><span>Дата</span><span>${bookingData.date}</span></div>
      <div class="booking-summary-row"><span>Время</span><span>${bookingData.time}</span></div>
      <div class="booking-summary-row"><span>Пациент</span><span>${bookingData.name}</span></div>
      <div class="booking-summary-row"><span>Телефон</span><span>${bookingData.phone}</span></div>
    `;
    document.getElementById('successModal').classList.add('open');
    document.body.style.overflow = 'hidden';

    // Reset
    btn.textContent = 'Подтвердить запись →';
    btn.disabled = false;
    currentStep = 1;
    bookingData = { specialty: '', doctor: '', date: '', time: '', name: '', phone: '', email: '', reason: '' };
    document.getElementById('patientName').value = '';
    document.getElementById('patientPhone').value = '';
    document.getElementById('patientEmail').value = '';
    document.getElementById('patientReason').value = '';
    updateBookingStep();
    renderBookingSpecialties();
    renderBookingDoctors();
    renderBookingTimes();
  }, 1500);
}

function closeSuccessModal() {
  document.getElementById('successModal').classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('successModal').addEventListener('click', (e) => {
  if (e.target.id === 'successModal') closeSuccessModal();
});

// ===== PRICING =====
const pricingGrid = document.getElementById('pricingGrid');
pricingData.forEach(p => {
  const card = document.createElement('div');
  card.className = 'price-card' + (p.featured ? ' featured' : '');
  card.innerHTML = `
    ${p.badge ? `<div class="price-badge">${p.badge}</div>` : ''}
    <div class="price-name">${p.name}</div>
    <div class="price-desc">${p.desc}</div>
    <div class="price-amount">$${p.price} <span>/ визит</span></div>
    <div class="price-card-footer">
      <button class="btn ${p.featured ? 'btn-primary' : 'btn-secondary'}" onclick="openBooking()">Записаться</button>
      <button class="btn btn-ghost" onclick="openPricingModal('${p.name}')">Узнать о ценах</button>
    </div>
  `;
  pricingGrid.appendChild(card);
});

// ===== PRICING MODAL =====
function openPricingModal(service) {
  document.getElementById('pricingService').value = service;
  document.getElementById('pricingModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closePricingModal() {
  document.getElementById('pricingModal').classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('pricingModal').addEventListener('click', (e) => {
  if (e.target.id === 'pricingModal') closePricingModal();
});

function submitPricingForm(e) {
  e.preventDefault();
  const name = document.getElementById('pricingName').value.trim();
  const phone = document.getElementById('pricingPhone').value.trim();
  let valid = true;

  if (!name) {
    document.getElementById('pricingName').classList.add('error');
    document.getElementById('pricingNameError').classList.add('show');
    valid = false;
  } else {
    document.getElementById('pricingName').classList.remove('error');
    document.getElementById('pricingNameError').classList.remove('show');
  }

  const phoneRegex = /^[\+]?[\d\s\-\(\)]{7,}$/;
  if (!phone || !phoneRegex.test(phone)) {
    document.getElementById('pricingPhone').classList.add('error');
    document.getElementById('pricingPhoneError').classList.add('show');
    valid = false;
  } else {
    document.getElementById('pricingPhone').classList.remove('error');
    document.getElementById('pricingPhoneError').classList.remove('show');
  }

  if (!valid) return;

  const btn = document.getElementById('pricingSubmitBtn');
  btn.textContent = 'Отправка…';
  btn.disabled = true;

  setTimeout(() => {
    closePricingModal();
    showToast('Запрос успешно отправлен! Мы свяжемся с вами в ближайшее время.', 'success');
    btn.textContent = 'Отправить запрос';
    btn.disabled = false;
    document.getElementById('pricingForm').reset();
  }, 1200);
}

// ===== ACCORDION =====
const accordion = document.getElementById('accordion');
accordionData.forEach((item, i) => {
  const el = document.createElement('div');
  el.className = 'accordion-item';
  el.innerHTML = `
    <div class="accordion-header" onclick="toggleAccordion(this)">
      <span>${item.title}</span>
      <div class="accordion-icon">+</div>
    </div>
    <div class="accordion-content">
      <div class="accordion-content-inner">${item.content}</div>
    </div>
  `;
  accordion.appendChild(el);
});

function toggleAccordion(header) {
  const item = header.parentElement;
  const content = item.querySelector('.accordion-content');
  const isOpen = item.classList.contains('open');

  // Close all
  document.querySelectorAll('.accordion-item').forEach(a => {
    a.classList.remove('open');
    a.querySelector('.accordion-content').style.maxHeight = null;
  });

  if (!isOpen) {
    item.classList.add('open');
    content.style.maxHeight = content.scrollHeight + 'px';
  }
}

// ===== REVIEWS =====
const reviewsTrack = document.getElementById('reviewsTrack');
reviewsData.forEach(r => {
  const stars = '★'.repeat(r.rating) + '☆'.repeat(5 - r.rating);
  const card = document.createElement('div');
  card.className = 'review-card';
  card.innerHTML = `
    <div class="review-card-inner">
      <div class="review-card-header">
        <div class="review-avatar"><img src="${r.avatar}" alt="${r.name}" loading="lazy"></div>
        <div>
          <div class="review-card-name">${r.name}</div>
          <div class="review-card-date">${r.date}</div>
        </div>
      </div>
      <div class="review-card-stars">${stars}</div>
      <div class="review-card-text">${r.text}</div>
    </div>
  `;
  reviewsTrack.appendChild(card);
});

function renderReviewsDots() {
  const dots = document.getElementById('reviewsDots');
  if (!dots) return;
  dots.innerHTML = '';
  reviewsData.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'reviews-dot' + (i === reviewIndex ? ' active' : '');
    dot.setAttribute('aria-label', 'Отзыв ' + (i + 1));
    dot.onclick = () => { reviewIndex = i; updateReviews(); };
    dots.appendChild(dot);
  });
  const counter = document.getElementById('reviewsCounter');
  if (counter) counter.textContent = (reviewIndex + 1) + ' / ' + reviewsData.length;
}

function updateReviews() {
  // Каждый отзыв занимает 100% ширины карусели: ничего не вылезает (п.5)
  reviewsTrack.style.transform = `translateX(-${reviewIndex * 100}%)`;
  document.querySelectorAll('.reviews-dot').forEach((d, i) => d.classList.toggle('active', i === reviewIndex));
  const counter = document.getElementById('reviewsCounter');
  if (counter) counter.textContent = (reviewIndex + 1) + ' / ' + reviewsData.length;
}

function moveReviews(dir) {
  reviewIndex += dir;
  if (reviewIndex < 0) reviewIndex = reviewsData.length - 1;
  if (reviewIndex > reviewsData.length - 1) reviewIndex = 0;
  updateReviews();
}

renderReviewsDots();
updateReviews();
window.addEventListener('resize', updateReviews);

// Свайп на мобильных
(function initReviewsSwipe() {
  const carousel = document.querySelector('.reviews-carousel');
  if (!carousel) return;
  let startX = 0;
  carousel.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, { passive: true });
  carousel.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 40) moveReviews(dx < 0 ? 1 : -1);
  }, { passive: true });
})();

// ===== TOAST =====
function showToast(message, type = 'error') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = 'toast ' + type;
  toast.innerHTML = `
    <div class="toast-icon">${type === 'success' ? '✓' : '⚠'}</div>
    <div class="toast-message">${message}</div>
  `;
  container.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// ===== WIDGET: «Найдите своего специалиста» =====
const widgetSpecialty = document.getElementById('widgetSpecialty');
const widgetDoctor = document.getElementById('widgetDoctor');
specialties.forEach(s => {
  const opt = document.createElement('option');
  opt.value = s.name;
  opt.textContent = s.name;
  widgetSpecialty.appendChild(opt);
});
// Минимальная дата виджета — сегодня
(function initWidgetDate() {
  const wDate = document.getElementById('widgetDate');
  if (wDate) wDate.min = new Date().toISOString().split('T')[0];
})();
widgetSpecialty.addEventListener('change', () => {
  widgetDoctor.innerHTML = '<option value="">Выберите врача</option>';
  const spec = widgetSpecialty.value;
  doctors.filter(d => d.specialty === spec).forEach(d => {
    const opt = document.createElement('option');
    opt.value = d.name;
    opt.textContent = d.name;
    widgetDoctor.appendChild(opt);
  });
});

function checkAvailability() {
  const spec = widgetSpecialty.value;
  const doc = widgetDoctor.value;
  const date = document.getElementById('widgetDate').value;
  if (!spec || !doc || !date) {
    showToast('Пожалуйста, заполните все поля.', 'error');
    return;
  }
  showToast('Доступные слоты найдены! Перенаправление на запись…', 'success');
  setTimeout(() => {
    bookingData.specialty = spec;
    bookingData.doctor = doc;
    bookingData.date = date;
    bookingData.time = '';
    const bookingDateInput = document.getElementById('bookingDate');
    if (bookingDateInput) bookingDateInput.value = date; // FIX п.4: дата из виджета попадает в форму
    currentStep = 3; // FIX п.4: идем на шаг «Время», а не сразу на «Данные»
    updateBookingStep();
    renderBookingSpecialties();
    renderBookingDoctors();
    renderBookingTimes();
    document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
  }, 1000);
}

function continueBooking() {
  const selectedDoctorName = document.getElementById('scheduleDoctor').value;
  
  if (!selectedDoctorName) {
    showToast('Пожалуйста, выберите специализацию и врача.', 'error');
    return;
  }
  
  if (!selectedSlot) {
    showToast('Пожалуйста, выберите время.', 'error');
    return;
  }
  
  const doctor = doctors.find(d => d.name === selectedDoctorName);
  if (!doctor) return;
  
  bookingData.specialty = doctor.specialty;
  bookingData.doctor = doctor.name;
  bookingData.time = selectedSlot;
  
  if (selectedDay) {
    bookingData.date = selectedDay.toISOString().split('T')[0];
    document.getElementById('bookingDate').value = bookingData.date;
  }
  
  // Skip to step 4 (patient details)
  currentStep = 4;
  updateBookingStep();
  renderBookingSpecialties();
  renderBookingDoctors();
  renderBookingTimes();
  
  document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
}

// ===== SCROLL REVEAL =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ===== KEYBOARD =====
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeDoctorModal();
    closeSuccessModal();
    closePricingModal();
    closeMobileMenu();
  }
});

// ===== FORM INPUT CLEAR ERRORS =====
document.querySelectorAll('.form-group input, .form-group select, .form-group textarea').forEach(input => {
  input.addEventListener('input', () => {
    input.classList.remove('error');
    const error = input.parentElement.querySelector('.form-error');
    if (error) error.classList.remove('show');
  });
});
