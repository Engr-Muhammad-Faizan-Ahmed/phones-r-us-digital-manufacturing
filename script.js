/* ======================================
   INDUSTRY 4.0 PORTFOLIO INTERACTIONS
   Phones-R-Us — Cinematic Experience Layer
====================================== */

// ---------- NAVBAR SCROLL EFFECT ----------

const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
        nav.style.boxShadow = '0 5px 20px rgba(0,0,0,0.08)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.85)';
        nav.style.boxShadow = 'none';
    }
});

// ---------- SMOOTH SCROLL FOR NAV LINKS ----------

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ---------- SCROLL REVEAL ANIMATION ----------

const revealElements = document.querySelectorAll('.section, .card, .timeline-item');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
});

// ---------- HERO TEXT ANIMATION ----------

window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero h1');
    const heroText = document.querySelector('.hero p');
    const heroBtn = document.querySelector('.hero-btn');

    if (heroTitle) heroTitle.style.opacity = '1';
    if (heroText) heroText.style.opacity = '1';
    if (heroBtn) heroBtn.style.opacity = '1';

    if (heroTitle) heroTitle.style.transform = 'translateY(0)';
    if (heroText) heroText.style.transform = 'translateY(0)';
    if (heroBtn) heroBtn.style.transform = 'translateY(0)';
});

// ---------- INITIAL HERO STATE (CINEMATIC ENTRY) ----------

document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero h1');
    const heroText = document.querySelector('.hero p');
    const heroBtn = document.querySelector('.hero-btn');

    if (heroTitle) {
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(30px)';
        heroTitle.style.transition = 'all 1s ease';
    }

    if (heroText) {
        heroText.style.opacity = '0';
        heroText.style.transform = 'translateY(30px)';
        heroText.style.transition = 'all 1.2s ease';
    }

    if (heroBtn) {
        heroBtn.style.opacity = '0';
        heroBtn.style.transform = 'translateY(30px)';
        heroBtn.style.transition = 'all 1.4s ease';
    }

    setTimeout(() => {
        if (heroTitle) heroTitle.style.opacity = '1';
        if (heroTitle) heroTitle.style.transform = 'translateY(0)';

        setTimeout(() => {
            if (heroText) heroText.style.opacity = '1';
            if (heroText) heroText.style.transform = 'translateY(0)';
        }, 200);

        setTimeout(() => {
            if (heroBtn) heroBtn.style.opacity = '1';
            if (heroBtn) heroBtn.style.transform = 'translateY(0)';
        }, 400);

    }, 300);
});

// ---------- ADD ACTIVE CLASS STYLES VIA JS (LIGHT ENHANCEMENT) ----------

const style = document.createElement('style');
style.innerHTML = `
    .reveal {
        opacity: 0;
        transform: translateY(40px);
        transition: all 0.8s ease;
    }

    .reveal.active {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

/* ======================================
   END OF ENGINEERING INTERACTION LAYER
====================================== */
