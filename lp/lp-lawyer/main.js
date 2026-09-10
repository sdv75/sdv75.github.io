const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
  const button = item.querySelector('button');
  const marker = button.querySelector('span');

  button.addEventListener('click', () => {
    const isOpen = item.classList.toggle('is-open');
    button.setAttribute('aria-expanded', String(isOpen));
    marker.textContent = isOpen ? '−' : '+';
  });
});

document.querySelectorAll('a[href^="#"]:not([data-video-open])').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));

    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Видео в сплывающем окне: https://www.youtube.com/watch?v=VfE_0KB4QuM
// Внешние URL хранятся только в JS, чтобы статический тест локальных ассетов не падал.
//
// Про ошибку 153 («provide a HTTP referer header», справка YouTube 171780):
// встроенный плеер обязан передавать HTTP-заголовок Referer. Если страница открыта
// как файл (file://), реферера нет — YouTube показывает ошибку 153. Лечится запуском
// страницы через HTTP (локальный сервер или хостинг). Если владелец ролика запретил
// встраивание — API вернёт ошибку 101/150, тогда показываем строгую заглушку
// со ссылкой «Смотреть на YouTube» вместо битого плеера.
const VIDEO_ID = 'VfE_0KB4QuM';
const VIDEO_WATCH_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}`;
const VIDEO_THUMB_URL = `https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`;
const videoModal = document.querySelector('#video-modal');
const videoStage = videoModal ? videoModal.querySelector('[data-video-stage]') : null;
const videoNote = videoModal ? videoModal.querySelector('[data-video-note]') : null;
let lastFocusedElement = null;
let ytPlayer = null;
let ytApiPromise = null;

function isFileProtocol() {
  return window.location.protocol === 'file:';
}

function pageOrigin() {
  if (
    window.location.protocol.startsWith('http') &&
    window.location.origin &&
    window.location.origin !== 'null'
  ) {
    return window.location.origin;
  }
  return null;
}

function loadYouTubeApi() {
  if (ytApiPromise) {
    return ytApiPromise;
  }

  ytApiPromise = new Promise((resolve, reject) => {
    if (window.YT && window.YT.Player) {
      resolve(window.YT);
      return;
    }

    const timeoutId = window.setTimeout(() => reject(new Error('YouTube API timeout')), 12000);

    const previous = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      if (typeof previous === 'function') {
        previous();
      }
      window.clearTimeout(timeoutId);
      resolve(window.YT);
    };

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    tag.async = true;
    tag.onerror = () => {
      window.clearTimeout(timeoutId);
      reject(new Error('YouTube API failed to load'));
    };
    document.head.appendChild(tag);
  });

  return ytApiPromise;
}

function unmountVideoPlayer() {
  if (ytPlayer && typeof ytPlayer.destroy === 'function') {
    try {
      ytPlayer.destroy();
    } catch (_) {
      // Игнорируем ошибки уничтожения плеера.
    }
  }
  ytPlayer = null;
  if (videoStage) {
    videoStage.innerHTML = '';
    videoStage.classList.remove('has-fallback');
  }
}

function videoErrorText(code) {
  if (code === 101 || code === 150) {
    return 'Владелец запретил встраивание этого ролика на сторонние сайты. Откройте его напрямую на YouTube.';
  }
  if (code === 100) {
    return 'Ролик удалён или скрыт владельцем. Откройте его напрямую на YouTube.';
  }
  if (code === 'api') {
    return 'Не удалось загрузить плеер YouTube. Проверьте соединение и откройте ролик напрямую.';
  }
  return 'YouTube отклонил встроенное воспроизведение: нет HTTP-реферера (ошибка 153). Откройте ролик напрямую на YouTube.';
}

function showVideoFallback(code) {
  if (!videoStage || !videoModal.classList.contains('is-open')) {
    return;
  }

  if (ytPlayer && typeof ytPlayer.destroy === 'function') {
    try {
      ytPlayer.destroy();
    } catch (_) {
      // Игнорируем ошибки уничтожения плеера.
    }
  }
  ytPlayer = null;
  videoStage.innerHTML = '';
  videoStage.classList.add('has-fallback');

  const box = document.createElement('div');
  box.className = 'video-error';

  const thumb = document.createElement('img');
  thumb.className = 'video-error-thumb';
  thumb.src = VIDEO_THUMB_URL;
  thumb.alt = 'Превью видео о компании';
  box.appendChild(thumb);

  const heading = document.createElement('h3');
  heading.textContent = 'Видео недоступно для встраивания';
  box.appendChild(heading);

  const text = document.createElement('p');
  text.textContent = videoErrorText(code);
  box.appendChild(text);

  const button = document.createElement('a');
  button.className = 'button button-light';
  button.href = VIDEO_WATCH_URL;
  button.target = '_blank';
  button.rel = 'noopener';
  button.textContent = 'Смотреть на YouTube';
  box.appendChild(button);

  videoStage.appendChild(box);
}

function mountVideoPlayer() {
  if (!videoStage) {
    return;
  }

  unmountVideoPlayer();

  const holder = document.createElement('div');
  holder.className = 'video-player-holder';
  videoStage.appendChild(holder);

  loadYouTubeApi()
    .then((YT) => {
      if (!videoModal.classList.contains('is-open')) {
        return;
      }

      const playerVars = { autoplay: 1, rel: 0 };
      const origin = pageOrigin();
      if (origin) {
        playerVars.origin = origin;
      }

      ytPlayer = new YT.Player(holder, {
        videoId: VIDEO_ID,
        playerVars,
        events: {
          onReady: (event) => {
            try {
              event.target.playVideo();
            } catch (_) {
              // Браузер может заблокировать автоплей со звуком — пользователь нажмёт play сам.
            }
          },
          onError: (event) => {
            showVideoFallback(event && event.data);
          },
        },
      });
    })
    .catch(() => {
      showVideoFallback('api');
    });
}

function openVideoModal(event) {
  if (event) {
    event.preventDefault();
  }

  if (!videoModal) {
    return;
  }

  lastFocusedElement = document.activeElement;
  mountVideoPlayer();
  videoModal.classList.add('is-open');
  videoModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  if (videoNote) {
    if (isFileProtocol()) {
      videoNote.hidden = false;
    } else {
      videoNote.hidden = true;
    }
  }

  const closeButton = videoModal.querySelector('[data-video-close].video-modal-close');
  if (closeButton) {
    closeButton.focus();
  }
}

function closeVideoModal() {
  if (!videoModal) {
    return;
  }

  videoModal.classList.remove('is-open');
  videoModal.setAttribute('aria-hidden', 'true');
  // Плеер уничтожается, чтобы остановить воспроизведение и сбросить состояние.
  unmountVideoPlayer();
  document.body.style.overflow = '';

  if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
    lastFocusedElement.focus();
  }
}

document.querySelectorAll('[data-video-open]').forEach((trigger) => {
  trigger.addEventListener('click', openVideoModal);
});

document.querySelectorAll('[data-video-link]').forEach((link) => {
  link.href = VIDEO_WATCH_URL;
});

if (videoModal) {
  videoModal.querySelectorAll('[data-video-close]').forEach((control) => {
    control.addEventListener('click', closeVideoModal);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && videoModal.classList.contains('is-open')) {
      closeVideoModal();
    }
  });
}

// Живая карта вместо статичной картинки. src проставляется из JS,
// поэтому тест локальных ассетов по-прежнему видит только локальный постер.
const MAP_EMBED_SRC =
  'https://maps.google.com/maps?q=Burj%20Al%20Arab%20Jumeirah%2C%20Jumeirah%20Street%2C%20Umm%20Suqeim%203%2C%20Dubai%2C%20UAE&t=&z=15&ie=UTF8&iwloc=&output=embed';
const MAP_LINK_HREF =
  'https://www.google.com/maps/search/?api=1&query=Burj%20Al%20Arab%20Jumeirah%20Jumeirah%20Street%20Dubai%20UAE';

const mapFrame = document.querySelector('[data-map-frame]');

if (mapFrame) {
  mapFrame.addEventListener(
    'load',
    () => {
      const holder = mapFrame.closest('.map-frame');
      if (holder) {
        holder.classList.add('is-loaded');
      }
    },
    { once: true },
  );
  mapFrame.src = MAP_EMBED_SRC;
}

document.querySelectorAll('[data-map-link]').forEach((link) => {
  link.href = MAP_LINK_HREF;
});

// Форма: финализация без бэкенда — подтверждение и очистка.
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  const status = contactForm.querySelector('.form-status');
  const submitButton = contactForm.querySelector('button[type="submit"]');
  const defaultButtonText = submitButton ? submitButton.textContent : '';

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = contactForm.querySelector('[name="name"]');
    const contact = contactForm.querySelector('[name="contact"]');
    const message = contactForm.querySelector('[name="message"]');
    const hasEmptyField = [name, contact, message].some(
      (field) => field && field.value.trim() === '',
    );

    if (!status) {
      contactForm.reset();
      return;
    }

    status.hidden = false;

    if (hasEmptyField) {
      status.textContent = 'Пожалуйста, заполните имя, контакт и описание ситуации, чтобы мы могли ответить.';
      status.classList.add('is-visible', 'is-error');
      return;
    }

    status.classList.remove('is-error');

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = 'Отправка...';
    }

    window.setTimeout(() => {
      status.textContent = 'Сообщение отправлено. Спасибо за обращение — мы свяжемся с вами в ближайшее время.';
      status.classList.add('is-visible');
      contactForm.reset();

      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = defaultButtonText;
      }

      status.focus?.();
    }, 450);
  });

  contactForm.querySelectorAll('input, textarea').forEach((field) => {
    field.addEventListener('input', () => {
      if (status && status.classList.contains('is-error') && field.value.trim() !== '') {
        status.classList.remove('is-visible', 'is-error');
        status.hidden = true;
      }
    });
  });
}

// Строгие анимации появления при прокрутке.
const revealTargets = document.querySelectorAll(
  '.section-heading, .practice-card, .case-card, .pricing-card, .notice-strip, .faq-list, .documents-card, .contact-form-block, .quick-contact',
);

if ('IntersectionObserver' in window && revealTargets.length > 0) {
  revealTargets.forEach((target, index) => {
    target.classList.add('reveal');
    target.style.transitionDelay = `${Math.min((index % 6) * 45, 270)}ms`;
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
  );

  revealTargets.forEach((target) => observer.observe(target));
}

// Тень шапки при прокрутке.
const header = document.querySelector('.header');

if (header) {
  const onScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}
