// Contacts для portfolio-frontend: единый источник — /contacts.js в корне сайта (window.SITE_CONTACTS).
// В HTML хардкода контактов нет, только плейсхолдеры с data-contact.
// Значения подставляются из переменных contacts.js.
// ВАЖНО: здесь только контакты. Никаких анимаций/observer-стилей для section:
// у frontend своя CSS-анимация .reveal, чужой код скрывал целые секции.
function applyContacts(contacts) {
    if (!contacts) {
        console.error('SITE_CONTACTS is missing: contacts.js not loaded');
        return;
    }

    const setHref = (key, value) => {
        if (!value) return;
        document.querySelectorAll(`[data-contact="${key}"]`).forEach((el) => {
            if (el.tagName.toLowerCase() === 'a') {
                el.setAttribute('href', value);
            }
        });
    };

    const setText = (key, value) => {
        if (!value) return;
        document.querySelectorAll(`[data-contact="${key}"]`).forEach((el) => {
            el.textContent = value;
        });
    };

    if (contacts.telegram) {
        setHref('telegram-url', contacts.telegram.url);
        setText('telegram-display', contacts.telegram.display);
    }
    if (contacts.email) {
        setHref('email-mailto', contacts.email.mailto);
        setText('email-address', contacts.email.address);
    }
    if (contacts.whatsapp) {
        setHref('whatsapp-url', contacts.whatsapp.wa_url);
        setText('whatsapp-display', contacts.whatsapp.phone_display);
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    applyContacts(window.SITE_CONTACTS);
});
