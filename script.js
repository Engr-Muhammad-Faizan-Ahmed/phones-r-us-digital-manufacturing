/* ==========================================
   INDUSTRY 4.0 ENGINEERING PORTFOLIO (V3)
   Visual Upgrade Pack — Cinematic Engineering UI
========================================== */

:root {
    --navy: #1B2A4A;
    --teal: #00B4A6;
    --dark: #0B1220;
    --light: #FFFFFF;
    --gray: #6B7280;
    --soft: #F5F7FA;
    --card: #ffffff;

    --radius: 16px;
    --shadow: 0 12px 30px rgba(0,0,0,0.10);
    --shadow-hover: 0 20px 50px rgba(0,0,0,0.18);

    --transition: all 0.4s ease;
    --max-width: 1200px;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Arial, sans-serif;
    background: var(--light);
    color: var(--navy);
    line-height: 1.6;
    overflow-x: hidden;
    scroll-behavior: smooth;
}

/* ================= NAVBAR ================= */

nav {
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 60px;
    background: rgba(255,255,255,0.75);
    backdrop-filter: blur(14px);
    border-bottom: 1px solid rgba(0,0,0,0.06);
    z-index: 1000;
}

nav .logo {
    font-weight: 700;
    letter-spacing: 1px;
}

nav ul {
    list-style: none;
    display: flex;
    gap: 28px;
}

nav ul li a {
    text-decoration: none;
    color: var(--navy);
    font-weight: 500;
    transition: var(--transition);
}

nav ul li a:hover {
    color: var(--teal);
}

/* ================= HERO (CINEMATIC INDUSTRIAL LANDING) ================= */

.hero {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;

    /* 🔥 HERO BACKGROUND IMAGE LAYER */
    background: url("images/hero.jpg") center/cover no-repeat;

    /* fallback overlay gradient */
}

.hero::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
        135deg,
        rgba(11,18,32,0.92),
        rgba(27,42,74,0.85)
    );
}

.hero::after {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center, rgba(0,180,166,0.18), transparent 60%);
}

.hero-content {
    position: relative;
    max-width: 900px;
    animation: fadeUp 1.2s ease forwards;
}

.hero h1 {
    font-size: 60px;
    font-weight: 700;
    margin-bottom: 20px;
    letter-spacing: -1px;
    color: white;
}

.hero p {
    font-size: 18px;
    color: rgba(255,255,255,0.75);
    margin-bottom: 30px;
}

.hero-btn {
    display: inline-block;
    padding: 14px 32px;
    background: var(--teal);
    color: white;
    border-radius: var(--radius);
    text-decoration: none;
    font-weight: 600;
    transition: var(--transition);
}

.hero-btn:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-hover);
}

/* ================= SECTION SYSTEM ================= */

.section {
    padding: 120px 10%;
    max-width: var(--max-width);
    margin: 0 auto;
}

.dark-section {
    background: var(--soft);
}

.section-title {
    font-size: 34px;
    font-weight: 700;
    margin-bottom: 20px;
}

.section-title::after {
    content: "";
    width: 60px;
    height: 3px;
    background: var(--teal);
    display: block;
    margin-top: 10px;
}

.section-text {
    font-size: 16px;
    color: var(--gray);
    max-width: 900px;
}

/* ================= IMAGE GRID (ENGINEERING SHOWCASE) ================= */

.image-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    margin-top: 40px;
}

.image-card {
    border-radius: var(--radius);
    overflow: hidden;
    box-shadow: var(--shadow);
    position: relative;
    transition: var(--transition);
    background: white;
}

.image-card img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.image-card:hover img {
    transform: scale(1.08);
}

.image-card:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow-hover);
}

.image-caption {
    padding: 14px;
    font-size: 14px;
    color: var(--gray);
}

/* ================= CARDS ================= */

.card {
    background: var(--card);
    padding: 28px;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    transition: var(--transition);
    text-align: center;
}

.card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-hover);
}

/* ================= TIMELINE ================= */

.timeline {
    margin-top: 50px;
    border-left: 3px solid var(--teal);
    padding-left: 25px;
}

.timeline-item {
    margin-bottom: 35px;
    position: relative;
}

.timeline-item::before {
    content: "";
    position: absolute;
    left: -34px;
    top: 6px;
    width: 12px;
    height: 12px;
    background: var(--teal);
    border-radius: 50%;
    box-shadow: 0 0 0 4px rgba(0,180,166,0.15);
}

.timeline-item h3 {
    font-size: 18px;
    margin-bottom: 6px;
}

.timeline-item p {
    color: var(--gray);
}

/* ================= FOOTER ================= */

footer {
    text-align: center;
    padding: 50px;
    background: var(--dark);
    color: white;
}

/* ================= ANIMATION ================= */

@keyframes fadeUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}

/* ================= RESPONSIVE ================= */

@media (max-width: 768px) {
    nav { padding: 15px 20px; }
    .hero h1 { font-size: 38px; }
    .section { padding: 80px 20px; }
}
