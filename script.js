// =========================
// REDUCED MOTION CHECK
// =========================
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;


// =========================
// CURSOR GLOW
// =========================
function initCursorGlow() {
    if (prefersReducedMotion) return;

    const glow = document.querySelector('.cursor-glow');
    if (!glow) return;

    window.addEventListener('mousemove', (e) => {
        glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    });
}



function initScrollReveal() {
    const items = document.querySelectorAll('.reveal');
    if (!items.length) return;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
        items.forEach((el) => el.classList.add('is-visible'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    items.forEach((el) => observer.observe(el));
}



function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10) || 0;
    const duration = 1400;
    const start = performance.now();

    function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        el.textContent = Math.round(target * eased).toLocaleString();

        if (progress < 1) {
            requestAnimationFrame(tick);
        } else {
            el.textContent = target.toLocaleString();
        }
    }

    requestAnimationFrame(tick);
}

function initStatCounters() {
    const stats = document.querySelectorAll('.stat-num');
    if (!stats.length) return;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
        stats.forEach((el) => {
            el.textContent = (parseInt(el.dataset.target, 10) || 0).toLocaleString();
        });
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.4 });

    stats.forEach((el) => observer.observe(el));
}



function initContactForm() {
    const form = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');
    if (!form || !status) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = form.querySelector('input[type="email"]');
        status.textContent = `Signal received from ${input.value}. Clearance pending.`;
        form.reset();
    });
}



document.addEventListener('DOMContentLoaded', () => {
    initCursorGlow();
    initScrollReveal();
    initStatCounters();
    initContactForm();
});