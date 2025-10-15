document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    body.classList.remove('no-js');

    /* Navigation --------------------------------------------------------- */
    const navToggle = document.getElementById('navToggle');
    const navContainer = document.getElementById('primaryNavigation');
    const navLinks = navContainer ? navContainer.querySelectorAll('a') : [];

    const closeNavigation = () => {
        if (!navToggle || !navContainer) {
            return;
        }
        navContainer.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        body.classList.remove('nav-open');
    };

    if (navToggle && navContainer) {
        navToggle.addEventListener('click', () => {
            const expanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', String(!expanded));
            navContainer.classList.toggle('is-open');
            body.classList.toggle('nav-open', !expanded);
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => closeNavigation());
        });

        document.addEventListener('keydown', event => {
            if (event.key === 'Escape') {
                closeNavigation();
            }
        });
    }

    /* Scroll-driven navigation state ------------------------------------- */
    const sections = document.querySelectorAll('main section[id]');
    const navLinkMap = new Map();
    navLinks.forEach(link => {
        const id = link.getAttribute('href');
        if (id && id.startsWith('#')) {
            navLinkMap.set(id, link);
        }
    });

    if (sections.length && navLinkMap.size) {
        const sectionObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const id = `#${entry.target.id}`;
                const link = navLinkMap.get(id);
                if (!link) {
                    return;
                }
                if (entry.isIntersecting) {
                    navLinks.forEach(item => item.classList.remove('is-active'));
                    link.classList.add('is-active');
                }
            });
        }, {
            root: null,
            threshold: 0.32,
        });

        sections.forEach(section => sectionObserver.observe(section));
    }

    /* Smooth anchor scroll ----------------------------------------------- */
    const OFFSET = 80;
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', event => {
            const targetId = link.getAttribute('href');
            if (!targetId || targetId === '#') {
                return;
            }
            const target = document.querySelector(targetId);
            if (!target) {
                return;
            }
            event.preventDefault();
            const top = target.getBoundingClientRect().top + window.scrollY - OFFSET;
            window.scrollTo({ top, behavior: 'smooth' });
        });
    });

    /* Animated metrics --------------------------------------------------- */
    const animatedFields = document.querySelectorAll('[data-count]');

    const runCount = (element) => {
        const finalValue = Number(element.dataset.count);
        if (!Number.isFinite(finalValue)) {
            return;
        }
        const duration = 1600;
        const start = performance.now();
        const step = now => {
            const progress = Math.min((now - start) / duration, 1);
            const value = Math.floor(progress * finalValue);
            element.textContent = value.toLocaleString();
            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };
        requestAnimationFrame(step);
    };

    if (animatedFields.length) {
        const countObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.dataset.hasCounted) {
                    entry.target.dataset.hasCounted = 'true';
                    runCount(entry.target);
                }
            });
        }, {
            threshold: 0.35,
        });

        animatedFields.forEach(field => countObserver.observe(field));
    }

    /* Event filtering ---------------------------------------------------- */
    const filterButtons = document.querySelectorAll('.filter-btn');
    const eventCards = document.querySelectorAll('.event-card');

    const setFilter = category => {
        filterButtons.forEach(btn => {
            const isActive = btn.dataset.filter === category || (category === 'all' && btn.dataset.filter === 'all');
            btn.classList.toggle('is-active', isActive);
            btn.setAttribute('aria-selected', String(btn.classList.contains('is-active')));
        });

        eventCards.forEach(card => {
            const cardCategory = card.dataset.category;
            const shouldShow = category === 'all' || cardCategory === category;
            card.style.display = shouldShow ? 'flex' : 'none';
        });
    };

    if (filterButtons.length) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                setFilter(button.dataset.filter || 'all');
            });
        });
        setFilter('all');
    }

    /* Hero parallax ------------------------------------------------------ */
    const heroMedia = document.querySelector('.hero-media');
    if (heroMedia) {
        window.addEventListener('scroll', () => {
            const offset = window.scrollY * 0.18;
            heroMedia.style.transform = `translateY(${offset}px)`;
        }, { passive: true });
    }

    /* Contact form ------------------------------------------------------- */
    const contactForm = document.getElementById('contactForm');

    const showError = (field, message) => {
        const errorElement = contactForm?.querySelector(`[data-for="${field.id}"]`);
        if (errorElement) {
            errorElement.textContent = message || '';
        }
    };

    const validateField = field => {
        if (!field) {
            return true;
        }
        if (field.validity.valid) {
            showError(field, '');
            return true;
        }
        if (field.validity.valueMissing) {
            showError(field, 'Required field');
        } else if (field.validity.typeMismatch) {
            showError(field, 'Enter a valid email address');
        } else {
            showError(field, 'Invalid entry');
        }
        return false;
    };

    if (contactForm) {
        const requiredFields = contactForm.querySelectorAll('[required]');

        requiredFields.forEach(field => {
            field.addEventListener('blur', () => validateField(field));
            field.addEventListener('input', () => validateField(field));
        });

        contactForm.addEventListener('submit', event => {
            event.preventDefault();
            let isValid = true;
            requiredFields.forEach(field => {
                const fieldValid = validateField(field);
                if (!fieldValid) {
                    isValid = false;
                }
            });

            if (!isValid) {
                return;
            }

            const formData = new FormData(contactForm);
            // TODO: Connect to backend or service provider.
            console.table(Object.fromEntries(formData.entries()));
            contactForm.reset();
            contactForm.querySelectorAll('.field-error').forEach(node => node.textContent = '');
            alert('Thank you. Our team will reach out shortly.');
        });
    }

    /* Newsletter --------------------------------------------------------- */
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        const emailField = newsletterForm.querySelector('input[type="email"]');
        const errorField = newsletterForm.querySelector('[data-for="newsletterEmail"]');

        const clearNewsletterError = () => {
            if (errorField) {
                errorField.textContent = '';
            }
        };

        emailField?.addEventListener('input', clearNewsletterError);

        newsletterForm.addEventListener('submit', event => {
            event.preventDefault();
            if (!emailField || !emailField.value.trim()) {
                if (errorField) {
                    errorField.textContent = 'Required field';
                }
                return;
            }
            if (!emailField.checkValidity()) {
                if (errorField) {
                    errorField.textContent = 'Enter a valid email address';
                }
                return;
            }

            // TODO: Integrate newsletter subscription handler.
            console.info('Newsletter subscription:', emailField.value.trim());
            newsletterForm.reset();
            clearNewsletterError();
            alert('You are on the list. Welcome to AustinIPA insights.');
        });
    }

    /* Utilities ---------------------------------------------------------- */
    const currentYearField = document.getElementById('currentYear');
    if (currentYearField) {
        currentYearField.textContent = new Date().getFullYear();
    }
});
