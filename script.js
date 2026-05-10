/* =========================
FILE: script.js
========================= */

const revealElements = document.querySelectorAll(
    ".section, .image-card, .timeline-item, .feature-card, .stat-card"
);

window.addEventListener("scroll", revealOnScroll);

function revealOnScroll() {

    const triggerBottom =
        window.innerHeight * 0.85;

    revealElements.forEach((element) => {

        const top =
            element.getBoundingClientRect().top;

        if(top < triggerBottom){

            element.classList.add("show");

        }

    });

}

revealOnScroll();

/* ================= HERO PARALLAX ================= */

window.addEventListener("scroll", () => {

    const scroll =
        window.scrollY;

    const hero =
        document.querySelector(".hero");

    hero.style.backgroundPositionY =
        `${scroll * 0.5}px`;

});

/* ================= ACTIVE NAV ================= */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop;

        if(scrollY >= sectionTop - 200){

            current =
                section.getAttribute("id");

        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if(
            link.getAttribute("href")
            === `#${current}`
        ){

            link.classList.add("active");

        }

    });

});

/* ================= COUNTER ANIMATION ================= */

const counters =
    document.querySelectorAll(".stat-number, .kpi-value");

counters.forEach(counter => {

    const updateCounter = () => {

        const target =
            +counter.innerText.replace(/,/g,'');

        const count =
            +counter.getAttribute("data-count") || 0;

        const increment =
            target / 80;

        if(count < target){

            const newCount =
                Math.ceil(count + increment);

            counter.setAttribute(
                "data-count",
                newCount
            );

            counter.innerText =
                newCount.toLocaleString();

            setTimeout(updateCounter,20);

        }

    };

    updateCounter();

});
