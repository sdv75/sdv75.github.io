// Animated Text Typewriter Effect
class AnimatedText {
    constructor(element, text, delay = 80) {
        this.element = element;
        this.text = text;
        this.delay = delay;
        this.currentIndex = 0;
        this.isTyping = false;
    }

    start() {
        if (this.isTyping) return;
        this.isTyping = true;
        this.element.textContent = '';
        this.type();
    }

    type() {
        if (this.currentIndex < this.text.length) {
            this.element.textContent += this.text.charAt(this.currentIndex);
            this.currentIndex++;
            setTimeout(() => this.type(), this.delay);
        } else {
            this.isTyping = false;
            this.currentIndex = 0;
        }
    }
}

// Smooth Scroll for Navigation
function smoothScrollTo(targetId) {
    const target = document.querySelector(targetId);
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Intersection Observer for Animations
function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    const animatedElements = document.querySelectorAll('.skill-card, .project-card, .contact-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
}

// Contact Form Handler
function setupContactForm(lang) {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;

        // Show loading state
        submitButton.textContent = 'Отправляется...';
        submitButton.disabled = true;

        // Simulate form submission (replace with actual submission logic)
        setTimeout(() => {
            // Reset form
            form.reset();

            // Show success message
            submitButton.textContent = 'Сообщение отправлено!';
            submitButton.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';

            // Reset button after 3 seconds
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                submitButton.style.background = 'var(--gradient-primary)';
            }, 3000);
        }, 2000);
    });
}

// Floating Elements Animation
function animateFloatingElements() {
    const floatingElements = document.querySelectorAll('.floating-element');

    floatingElements.forEach((element, index) => {
        const randomDelay = Math.random() * 2000;
        const randomDuration = 3000 + Math.random() * 2000;

        setTimeout(() => {
            element.style.animation = `floatAnimation ${randomDuration}ms ease-in-out infinite`;
        }, randomDelay);
    });
}

// Custom floating animation
function addFloatingAnimation() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatAnimation {
            0%, 100% {
                transform: translateY(0px) rotate(0deg);
                opacity: 0.7;
            }
            25% {
                transform: translateY(-20px) rotate(90deg);
                opacity: 0.9;
            }
            50% {
                transform: translateY(-10px) rotate(180deg);
                opacity: 0.5;
            }
            75% {
                transform: translateY(-30px) rotate(270deg);
                opacity: 0.8;
            }
        }
    `;
    document.head.appendChild(style);
}

// Scroll-triggered animations
function setupScrollAnimations() {
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
            }
        });
    }, options);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Add CSS for section animations
    const style = document.createElement('style');
    style.textContent = `
        section {
            opacity: 0;
            transform: translateY(50px);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        section.section-visible {
            opacity: 1;
            transform: translateY(0);
        }
        
        .hero-section {
            opacity: 1;
            transform: none;
        }
    `;
    document.head.appendChild(style);
}

// Button click handlers
function setupButtonHandlers() {
    // Hero buttons
    const projectsButton = document.querySelector('.hero-buttons .btn-primary');
    const contactButton = document.querySelector('.hero-buttons .btn-outline');

    if (projectsButton) {
        projectsButton.addEventListener('click', () => {
            document.querySelector('.projects-section').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    if (contactButton) {
        contactButton.addEventListener('click', () => {
            document.querySelector('.contact-section').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Project buttons (GitHub and Demo)
    const projectButtons = document.querySelectorAll('.project-buttons .btn');
    projectButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            // Add your actual links here
            const isGithub = button.textContent.trim().includes('Код');
            if (isGithub) {
                // Replace with actual GitHub links
                console.log('Opening GitHub repository...');
            } else {
                // Replace with actual demo links
                console.log('Opening demo...');
            }
        });
    });
}

// Parallax effect for hero background
function setupParallax() {
    const heroBg = document.querySelector('.hero-bg');
    if (!heroBg) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        heroBg.style.transform = `translateY(${parallax}px)`;
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Определяем текущий язык по URL
    const path = window.location.pathname;
    let lang = 'en'; // язык по умолчанию

    if (path.includes('/ru/')) {
        lang = 'ru';
    } else if (path.includes('/ua/')) {
        lang = 'ua';
    }

    // Словарь переводов
    const animatedTexts = {
        ru: 'Создаю Telegram боты, микросервисы и автоматизацию',
        ua: 'Створюю Telegram боти, мікросервіси та автоматизацію',
        en: 'I build Telegram bots, microservices, and automation tools'
    };

    // Получаем элемент
    const animatedTextElement = document.getElementById('animated-text');
    if (animatedTextElement) {
        const animatedText = new AnimatedText(
            animatedTextElement,
            animatedTexts[lang],
            80
        );

        setTimeout(() => {
            animatedText.start();
        }, 1000);
    }

    // Остальной код
    setupIntersectionObserver();
    // setupContactForm(lang);
    addFloatingAnimation();
    animateFloatingElements();
    setupScrollAnimations();
    setupButtonHandlers();
    setupParallax();
});

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add smooth hover effects for cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.skill-card, .project-card, .contact-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px) scale(1.02)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
});

// Add focus styles for keyboard navigation
const focusStyle = document.createElement('style');
focusStyle.textContent = `
    .keyboard-navigation *:focus {
        outline: 2px solid var(--primary);
        outline-offset: 2px;
    }
`;
document.head.appendChild(focusStyle);
