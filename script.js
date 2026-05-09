/* =========================================
   INDUSTRY 4.0 PORTFOLIO ANIMATION SYSTEM
========================================= */

const reveals = document.querySelectorAll(
  ".section, .image-card, .timeline-item, .stat-card"
);

window.addEventListener("scroll", () => {

  const trigger = window.innerHeight * 0.85;

  reveals.forEach((item) => {

    const top = item.getBoundingClientRect().top;

    if (top < trigger) {
      item.classList.add("show");
    }

  });

});

/* =========================================
   PARALLAX HERO EFFECT
========================================= */

window.addEventListener("scroll", () => {

  const scrollY = window.scrollY;

  const hero = document.querySelector(".hero");

  hero.style.backgroundPositionY = `${scrollY * 0.5}px`;

});

/* =========================================
   ACTIVE NAVIGATION HIGHLIGHT
========================================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach((section) => {

    const sectionTop = section.offsetTop;

    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach((link) => {

    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }

  });

});
