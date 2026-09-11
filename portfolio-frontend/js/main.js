/* PantelaFlow — standalone interactions (no framework, no modules, no fetch).
   Works from file:// — plain script, relative paths only. */
(function () {
  "use strict";

  var ARROW = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8" /></svg>';

  /* ---------- 0. Language (ru / uk / en from <html lang>) ---------- */
  var PAGE_LANG = (document.documentElement.lang || "ru").toLowerCase();
  var LANG = PAGE_LANG.indexOf("uk") === 0 ? "uk" : (PAGE_LANG.indexOf("en") === 0 ? "en" : "ru");
  var LOCALES = { ru: "ru-RU", uk: "uk-UA", en: "en-US" };

  var I18N = {
    ru: {
      packages: ["Быстрый старт / Тест ниши", "Бизнес под ключ", "Сайт + AI Автоматизация", "Заявка из калькулятора"],
      choosePkg: "Выберите пакет",
      formTitle: "Оставить заявку на проект",
      formLead: "Оставьте контакты — я изучу задачу и подскажу, какой формат сайта принесёт максимум денег.",
      nameLbl: "Имя",
      namePh: "Как к вам обращаться?",
      contactLbl: "Телефон или Telegram",
      contactPh: "+7 или @username",
      packageLbl: "Пакет",
      deadlineLbl: "Сроки",
      deadlines: ["Как можно скорее", "Нужно через неделю", "Ищу варианты"],
      taskLbl: "Задача",
      taskPh: "Опишите бизнес, задачу и сроки — я предложу структуру и стоимость.",
      submitBtn: "Отправить заявку ",
      consentPre: "Нажимая кнопку, вы соглашаетесь с ",
      consentA: "политикой обработки персональных данных",
      consentMid: " и ",
      consentB: "офертой",
      stateNeed: "Заполните имя и контакт",
      stateSending: "Отправляю заявку...",
      stateDone: "Спасибо! Я отвечу в течение 30 минут.",
      openSite: "Открыть сайт ",
      soonOpen: "Скоро откроется",
      wantSame: "Хочу такой же ",
      cfSending: "Отправляю...",
      cfDone: "Спасибо! Скоро свяжусь с вами.",
      works: {
        "israel-passport": { title: "OLE HADASH — оформление паспорта Израиля", note: "Премиальный лендинг сервиса репатриации: сильный оффер, блок доверия и быстрый путь к консультации." },
        "gaming-club": { title: "Арена — компьютерный клуб нового поколения", note: "Темный gaming-лендинг с видеофоном, анимациями и записью на сессию." },
        "mirra-real-estate": { title: "MIRRA — риелторское агентство", note: "Каталог квартир и агентская упаковка с motion-эффектами и заявкой на подбор." },
        "localmart-shop": { title: "LocalMart — интернет-магазин под ключ", note: "MVP интернет-магазина: каталог, корзина, админка, CSV-импорт и Telegram-уведомления." }
      }
    },
    uk: {
      packages: ["Швидкий старт / Тест ніші", "Бізнес під ключ", "Сайт + AI Автоматизація", "Заявка з калькулятора"],
      choosePkg: "Оберіть пакет",
      formTitle: "Залишити заявку на проєкт",
      formLead: "Залиште контакти — я вивчу задачу й підкажу, який формат сайту принесе максимум грошей.",
      nameLbl: "Ім’я",
      namePh: "Як до вас звертатися?",
      contactLbl: "Телефон або Telegram",
      contactPh: "+7 або @username",
      packageLbl: "Пакет",
      deadlineLbl: "Строки",
      taskLbl: "Задача",
      taskPh: "Опишіть бізнес, задачу й строки — я запропоную структуру та вартість.",
      submitBtn: "Надіслати заявку ",
      consentPre: "Натискаючи кнопку, ви погоджуєтесь з ",
      consentA: "політикою обробки персональних даних",
      consentMid: " та ",
      consentB: "офертою",
      stateNeed: "Заповніть ім’я та контакт",
      stateSending: "Надсилаю заявку...",
      stateDone: "Дякую! Я відповім протягом 30 хвилин.",
      openSite: "Відкрити сайт ",
      soonOpen: "Скоро відкриється",
      wantSame: "Хочу такий самий ",
      cfSending: "Надсилаю...",
      cfDone: "Дякую! Скоро зв’яжуся з вами.",
      works: {
        "israel-passport": { title: "OLE HADASH — оформлення паспорта Ізраїлю", note: "Преміальний лендінг сервісу репатріації: сильний оффер, блок довіри та швидкий шлях до консультації." },
        "gaming-club": { title: "Арена — комп’ютерний клуб нового покоління", note: "Темний gaming-лендінг із відеофоном, анімаціями та записом на сесію." },
        "mirra-real-estate": { title: "MIRRA — рієлторське агентство", note: "Каталог квартир і агентське пакування з motion-ефектами та заявкою на підбір." },
        "localmart-shop": { title: "LocalMart — інтернет-магазин під ключ", note: "MVP інтернет-магазину: каталог, кошик, адмінка, CSV-імпорт і Telegram-сповіщення." }
      }
    },
    en: {
      packages: ["Quick start / Niche test", "Business turnkey", "Website + AI Automation", "Calculator request"],
      choosePkg: "Choose a package",
      formTitle: "Request a project",
      formLead: "Leave your contacts — I’ll study your task and suggest the website format that brings the most money.",
      nameLbl: "Name",
      namePh: "How should I address you?",
      contactLbl: "Phone or Telegram",
      contactPh: "+7 or @username",
      packageLbl: "Package",
      deadlineLbl: "Timeline",
      deadlines: ["As soon as possible", "Needed in a week", "Exploring options"],
      taskLbl: "Task",
      taskPh: "Describe your business, task and timeline — I’ll suggest structure and cost.",
      submitBtn: "Send request ",
      consentPre: "By clicking the button, you agree to the ",
      consentA: "personal data processing policy",
      consentMid: " and the ",
      consentB: "offer agreement",
      stateNeed: "Please fill in your name and contact",
      stateSending: "Sending request...",
      stateDone: "Thank you! I’ll reply within 30 minutes.",
      openSite: "Open website ",
      soonOpen: "Opening soon",
      wantSame: "I want the same ",
      cfSending: "Sending...",
      cfDone: "Thank you! I’ll be in touch soon.",
      works: {
        "israel-passport": { title: "OLE HADASH — Israel passport processing", note: "Premium landing page for a repatriation service: strong offer, trust block and a fast path to consultation." },
        "gaming-club": { title: "Arena — next-generation gaming club", note: "Dark gaming landing page with video background, animations and session booking." },
        "mirra-real-estate": { title: "MIRRA — real estate agency", note: "Apartment catalog and agency packaging with motion effects and a matching request." },
        "localmart-shop": { title: "LocalMart — turnkey online store", note: "Online store MVP: catalog, cart, admin panel, CSV import and Telegram notifications." }
      }
    }
  };
  var T = I18N[LANG] || I18N.ru;

  /* ---------- 1. Dynamic legal date (terms.html / privacy.html) ---------- */
  document.querySelectorAll("[data-legal-date]").forEach(function (node) {
    try {
      node.textContent = new Date().toLocaleDateString(LOCALES[LANG] || LOCALES.ru, {
        day: "numeric",
        month: "long",
        year: "numeric"
      });
    } catch (e) {
      node.textContent = "";
    }
  });

  /* ---------- 2. Calculator ---------- */
  var blocksRange = document.getElementById("blocksRange");
  if (blocksRange) {
    var blocksValue = document.getElementById("blocksValue");
    var calcTotal = document.getElementById("calcTotal");
    var seoToggle = document.getElementById("seoToggle");
    var analyticsToggle = document.getElementById("analyticsToggle");
    var designType = "custom";
    var DESIGN_ADD = { ready: 0, custom: 150, premium: 300 };

    function formatRub(value) {
      try {
        return "$" + new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(value);
      } catch (e) {
        return "$" + String(Math.round(value)).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    }

    function updateCalculator() {
      var blocks = Number(blocksRange.value);
      var total =
        blocks * 50 +
        (DESIGN_ADD[designType] || 0) +
        (seoToggle && seoToggle.checked ? 50 : 0) +
        (analyticsToggle && analyticsToggle.checked ? 80 : 0);
      if (blocksValue) blocksValue.textContent = String(blocks);
      if (calcTotal) calcTotal.textContent = formatRub(total);
      var min = Number(blocksRange.min);
      var max = Number(blocksRange.max);
      var progress = ((blocks - min) / (max - min)) * 100;
      blocksRange.style.background =
        "linear-gradient(90deg, var(--accent-pf) " + progress + "%, #dfe3e0 " + progress + "%)";
    }

    document.querySelectorAll("[data-design]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        document.querySelectorAll("[data-design]").forEach(function (n) {
          n.classList.remove("active");
        });
        btn.classList.add("active");
        designType = btn.getAttribute("data-design") || "custom";
        updateCalculator();
      });
    });

    [blocksRange, seoToggle, analyticsToggle].forEach(function (node) {
      if (node) node.addEventListener("input", updateCalculator);
    });

    updateCalculator();
  }

  /* ---------- 3. FAQ accordion ---------- */
  document.querySelectorAll(".faq-item").forEach(function (item) {
    item.addEventListener("click", function () {
      var isOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item.open").forEach(function (n) {
        n.classList.remove("open");
        n.setAttribute("aria-expanded", "false");
      });
      if (!isOpen) {
        item.classList.add("open");
        item.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* ---------- 4. Modal (request / work preview) ---------- */
  // Тексты/картинки модалки берутся из I18N[LANG]; пути картинок — от корня frontend (страницы лежат в en|ru|ua).
  var WORKS = {
    "israel-passport": {
      title: T.works["israel-passport"].title,
      img: "../images/work-screens/israel-passport.png",
      url: "",
      note: T.works["israel-passport"].note
    },
    "gaming-club": {
      title: T.works["gaming-club"].title,
      img: "../images/work-screens/gaming-club-arena.png",
      url: "",
      note: T.works["gaming-club"].note
    },
    "mirra-real-estate": {
      title: T.works["mirra-real-estate"].title,
      img: "../images/work-screens/mirra-real-estate.png",
      url: "",
      note: T.works["mirra-real-estate"].note
    },
    "localmart-shop": {
      title: T.works["localmart-shop"].title,
      img: "../images/work-screens/localmart-shop-mvp.png",
      url: "",
      note: T.works["localmart-shop"].note
    }
  };

  var modal = document.getElementById("modal");
  if (modal) {
    var modalContent = document.getElementById("modalContent");
    var lastFocus = null;

    function esc(s) {
      return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
    }

    function renderRequest(pkg) {
      var packages = T.packages;
      var options = ['<option value="">' + esc(T.choosePkg) + "</option>"].concat(
        packages.map(function (p) {
          return (
            '<option' + (pkg === p ? " selected" : "") + ">" + esc(p) + "</option>"
          );
        })
      );
      var deadlineOpts = T.deadlines.map(function (d) {
        return "<option>" + esc(d) + "</option>";
      });
      modalContent.innerHTML =
        '<div class="modal-inner">' +
        '<h2 id="modalTitle">' + esc(T.formTitle) + "</h2>" +
        "<p>" + esc(T.formLead) + "</p>" +
        '<form class="form-grid" id="requestForm" novalidate>' +
        "<label>" + esc(T.nameLbl) +
        '<input name="name" autocomplete="name" placeholder="' + esc(T.namePh) + '" required /></label>' +
        "<label>" + esc(T.contactLbl) +
        '<input name="contact" autocomplete="tel" placeholder="' + esc(T.contactPh) + '" required /></label>' +
        "<label>" + esc(T.packageLbl) + '<select name="package">' +
        options.join("") +
        "</select></label>" +
        "<label>" + esc(T.deadlineLbl) + '<select name="deadline">' +
        deadlineOpts.join("") +
        "</select></label>" +
        '<label class="full">' + esc(T.taskLbl) +
        '<textarea name="task" placeholder="' + esc(T.taskPh) + '"></textarea></label>' +
        '<button class="btn btn-primary" type="submit">' + esc(T.submitBtn) +
        ARROW +
        "</button>" +
        '<p class="consent-text full">' + esc(T.consentPre) + '<a href="privacy.html">' + esc(T.consentA) + "</a>" + esc(T.consentMid) + '<a href="terms.html">' + esc(T.consentB) + "</a>.</p>" +
        '<p class="form-state full" id="requestState" aria-live="polite"></p>' +
        "</form></div>";
      var form = document.getElementById("requestForm");
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var fd = new FormData(form);
        var state = document.getElementById("requestState");
        if (!fd.get("name") || !fd.get("contact")) {
          state.textContent = T.stateNeed;
          return;
        }
        state.textContent = T.stateSending;
        setTimeout(function () {
          state.textContent = T.stateDone;
          form.reset();
        }, 800);
      });
    }

    function renderWork(key) {
      var work = WORKS[key];
      if (!work) return;
      var action = work.url
        ? '<a class="btn btn-primary" href="' +
          esc(work.url) +
          '" target="_blank" rel="noreferrer">' + esc(T.openSite) +
          ARROW +
          "</a>"
        : '<span class="case-label">' + esc(T.soonOpen) + "</span>";
      modalContent.innerHTML =
        '<div class="modal-inner work-preview">' +
        '<h2 id="modalTitle">' +
        esc(work.title) +
        "</h2>" +
        "<p>" +
        esc(work.note) +
        "</p>" +
        '<img src="' +
        esc(work.img) +
        '" alt="' +
        esc(work.title) +
        '" width="1440" height="810" />' +
        '<div class="btn-row">' +
        action +
        '<button class="btn btn-outline" type="button" data-open-request data-package="' + esc(T.packages[1]) + '">' + esc(T.wantSame) +
        ARROW +
        "</button></div></div>";
      modalContent
        .querySelector("[data-open-request]")
        .addEventListener("click", function () {
          openModal("request", { pkg: T.packages[1] });
        });
    }

    function openModal(kind, payload) {
      payload = payload || {};
      lastFocus = document.activeElement;
      if (kind === "request") renderRequest(payload.pkg || "");
      if (kind === "work") renderWork(payload.key);
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("modal-open");
      var first = modal.querySelector("input, select, textarea, button");
      if (first && first.focus) {
        try {
          first.focus({ preventScroll: true });
        } catch (e) {
          first.focus();
        }
      }
    }

    function closeModal() {
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("modal-open");
      if (lastFocus && lastFocus.focus) {
        try {
          lastFocus.focus({ preventScroll: true });
        } catch (e) {
          lastFocus.focus();
        }
      }
    }

    document.addEventListener("click", function (e) {
      var reqBtn = e.target.closest("[data-open-request]");
      if (reqBtn && modal.contains(reqBtn)) return; // handled inside modal
      if (reqBtn) {
        openModal("request", { pkg: reqBtn.getAttribute("data-package") || "" });
        return;
      }
      var workBtn = e.target.closest("[data-work-trigger]");
      if (workBtn) {
        openModal("work", { key: workBtn.getAttribute("data-work-trigger") });
        return;
      }
      if (e.target.closest("[data-close-modal]")) {
        closeModal();
        return;
      }
      if (e.target === modal) closeModal();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
    });
  }

  /* ---------- 5. Contact form (mock, same as Next.js version) ---------- */
  var contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var fd = new FormData(contactForm);
      var state = document.getElementById("contactState");
      if (!fd.get("name") || !fd.get("contact")) {
        state.textContent = T.stateNeed;
        return;
      }
      state.textContent = T.cfSending;
      setTimeout(function () {
        state.textContent = T.cfDone;
        contactForm.reset();
      }, 700);
    });
  }
})();
