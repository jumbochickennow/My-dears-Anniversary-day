/* ============================================================================
   ANNIVERSARY WEBSITE - SCRIPT
   ============================================================================
   EDIT YOUR CONTENT HERE — everything (text, photos, dates, letter, colors)
   lives in the siteData object below. Nothing else needs to change.
   ============================================================================ */

const siteData = {
  hero: {
    title: "Happy Anniversary my Baby",
    subtitle: "Our Story in Moments",
    buttonText: "Our Journey",
  },
  memories: [
    {
      id: 1,
      image: "https://raw.githubusercontent.com/jumbochickennow/My-dears-Anniversary/main/photo_2026-08-02_00-04-22.jpg",
      date: "Apr 19, 2025",
      caption: "Firs Encounter",
    },
    {
      id: 2,
      image: "https://raw.githubusercontent.com/jumbochickennow/My-dears-Anniversary/main/SSTP.jpg",
      date: "Jul 16, 2025",
      caption: "Our First Project SSTP",
    },
    {
      id: 3,
      image: "https://raw.githubusercontent.com/jumbochickennow/My-dears-Anniversary/main/natcoo.jpg",
      date: "JUN 26, 2025",
      caption: "Our first Natco",
    },
    {
      id: 4,
      image: "https://raw.githubusercontent.com/jumbochickennow/My-dears-Anniversary/main/photo_2026-08-02_00-04-17.jpg",
      date: "JUN 30, 2025",
      caption: "Our first ice cream date",
    },
    {
      id: 5,
      image: "https://raw.githubusercontent.com/jumbochickennow/My-dears-Anniversary/main/IMG_1090.JPG",
      date: "Sep 14, 2023",
      caption: "Our sweetest dates",
    },
    {
      id: 6,
      image: "https://i.postimg.cc/5yTYRy6f/photo-2026-08-02-22-16-40.jpg",
      date: "12 JULY 2026",
      caption: "Our sweetest reunion",
    },
    {
      id: 7,
      image: "https://i.postimg.cc/d3pkx3LQ/DATEEE-casbah.jpg",
      date: "Dec 28, 2025",
      caption: "Ending the year with a sweet glow",
    },
    {
      id: 8,
      image: "https://i.postimg.cc/QCGF3tpw/IMG-7041.png",
      date: "April 5, 2026",
      caption: "The distance never killed it",
    },
  ],
  milestones: [
    {
      id: 1,
      date: "SEP 2026",
      title: "Our close distance begins",
      description: "New adventure together will begin soon",
      image: "https://i.postimg.cc/3w11NsLG/75ae2f38740a00e1b5d0f8680d3057ca.jpg",
    },
    {
      id: 2,
      date: "NOV-DEC 2026",
      title: "to end the year with a charm",
      description: "Every moment is waiting for us, it is appraoching sooner than later, every smile will taste different",
      image: "https://i.postimg.cc/mZJvT91W/9199894d3500e2d12751ad2d3964b524.jpg",
    },
    {
      id: 3,
      date: "2027",
      title: "Study dates, our journey being written together",
      description: "Under fireworks, with your hand in mine, I know. You are my forever.",
      image: "https://i.postimg.cc/ZqwQ2vhS/0bbf3ed031f6f436412143fcdb58048b.jpg",
    },
    {
      id: 4,
      date: "SUMMER 2027",
      title: "A different taste awaits",
      description: "A year of memories, inside jokes, quiet moments, and our love grows under the sun.",
      image: "https://i.postimg.cc/ZqwQ2vhS/0bbf3ed031f6f436412143fcdb58048b.jpg",
    },
  ],
  roadmap: [
    { step: 1, icon: "✈️", title: "Spain 2030", description: "Your Dream is calling" },
    { step: 2, icon: "💍", title: "The End of Begenning", description: "A new Start" },
    { step: 3, icon: "🌍", title: "Our dream Adventure awaits", description: "Adventures yet to come" },
  ],
  letter: {
    opening: "My Dearest,",
    body: "As I sit here thinking about the past year, I'm overwhelmed with gratitude for every moment with you. From that first moment i saw you, i knew something different was about you, my eyes told me something i didn't believe, you've transformed my world into something more beautiful than I ever imagined possible.\n\nYou are my Sweetest coincidence, my greatest Achievement, and my safest place. The way you laugh, the kindness in your eyes, the strength in your heart—these are the things I treasure the most.\n\nThis past year has been a Rollercoaster of emotions and moments. Not the fairytale kind (though we've had plenty of those moments), but the realest kind of love, the one that pushes you further. The kind that shows up on difficult days. The kind that celebrates quietly. The kind that grows deeper with each passing season.\n\nI promise to love you fiercely, to be your Meow, your comfort, and your greatest believer. Every moment with you is a gift, and I don't take a single one for granted.\n\nHere's to us—to a Million more memories, to dreams yet to chase, and to a love that keeps growing.",
    closing: "Forever Your Dumbass",
    signature: "I meow you",
  },
  colors: {
    primary: "#ff2a85",
    secondary: "#ff1e72",
    dark: "#0f0518",
    glass: "rgba(255,255,255,0.1)",
    glassStrong: "rgba(255,255,255,0.15)",
    white: "#f5f5f5",
  },
};

/* ============================================================================
   APPLY COLOR THEME (reads siteData.colors into CSS variables)
   ============================================================================ */
(function applyTheme() {
  const root = document.documentElement;
  root.style.setProperty("--color-primary", siteData.colors.primary);
  root.style.setProperty("--color-secondary", siteData.colors.secondary);
  root.style.setProperty("--color-dark", siteData.colors.dark);
  root.style.setProperty("--color-glass", siteData.colors.glass);
  root.style.setProperty("--color-glass-strong", siteData.colors.glassStrong);
  root.style.setProperty("--color-white", siteData.colors.white);
})();

/* ============================================================================
   UTILITIES
   ============================================================================ */
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

function isTouchDevice() {
  return (
    "ontouchstart" in window ||
    (window.matchMedia && window.matchMedia("(pointer:coarse)").matches) ||
    false
  );
}

// Deterministic pseudo-random helpers (same seeded formula as the original)
function randomRotation(id) {
  const seed = id * 12.9898;
  return (((Math.sin(seed) * 43758.5453) % 1) * 20 - 10);
}

function randomTranslate(id) {
  const seedX = id * 78.233;
  const seedY = id * 45.164;
  return {
    x: ((Math.sin(seedX) * 43758.5453) % 1 - 0.5) * 60,
    y: ((Math.sin(seedY) * 43758.5453) % 1 - 0.5) * 60,
  };
}

/* ============================================================================
   MOMENTS COUNTER + PROGRESS BAR STATE
   ============================================================================ */
const totalCount = siteData.memories.length + siteData.milestones.length;
let momentsCount = 0;
let counterTimeout = null;

const counterEl = document.getElementById("moments-counter");
const countSpan = document.getElementById("moments-count");
const totalSpan = document.getElementById("moments-total");
totalSpan.textContent = totalCount;

function showCounter() {
  counterEl.classList.add("visible");
  clearTimeout(counterTimeout);
  counterTimeout = setTimeout(() => {
    counterEl.classList.remove("visible");
  }, 2000);
}

function bumpMoments(amount = 1) {
  momentsCount = Math.min(momentsCount + amount, totalCount);
  countSpan.textContent = momentsCount;
  showCounter();
}

function jumpMomentsToMax() {
  momentsCount = totalCount;
  countSpan.textContent = momentsCount;
  showCounter();
}

/* ============================================================================
   PROGRESS BAR (top fill + end-of-page heart)
   ============================================================================ */
const progressBar = document.getElementById("progress-bar");
const progressHeart = document.getElementById("progress-heart");

function handleScrollProgress() {
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? Math.min(window.scrollY / docHeight, 1) : 0;
  progressBar.style.width = `${progress * 100}%`;

  if (progress >= 0.98) {
    progressHeart.classList.add("visible");
  } else {
    progressHeart.classList.remove("visible");
  }
}

window.addEventListener("scroll", debounce(handleScrollProgress, 16));

/* ============================================================================
   HERO SECTION - text + button + particles
   ============================================================================ */
document.getElementById("hero-title").textContent = siteData.hero.title;
document.getElementById("hero-subtitle").textContent = siteData.hero.subtitle;
document.getElementById("hero-button").textContent = siteData.hero.buttonText;

document.getElementById("hero-button").addEventListener("click", () => {
  window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
});

function buildParticles() {
  const touch = isTouchDevice();
  const particleCount = touch ? 30 : 60;
  const layers = { 1: [], 2: [], 3: [] };

  for (let i = 0; i < particleCount; i++) {
    const size = Math.random() * 4 + 2;
    const duration = Math.random() * 20 + 15;
    const delay = Math.random() * 0.5;
    const opacity = Math.random() * 0.6 + 0.2;
    const depth = Math.floor(Math.random() * 3) + 1;

    const el = document.createElement("div");
    el.className = "particle";
    el.style.left = `${Math.random() * 100}%`;
    el.style.top = `${Math.random() * 100}%`;
    el.style.width = `${size}px`;
    el.style.height = `${size}px`;
    el.style.boxShadow = `0 0 ${size * 3}px ${siteData.colors.primary}`;
    el.style.setProperty("--dur", `${duration}s`);
    el.style.setProperty("--delay", `${delay}s`);
    el.style.setProperty("--op-low", `${opacity * 0.5}`);
    el.style.setProperty("--op-high", `${opacity}`);

    layers[depth].push(el);
  }

  for (const depth of [1, 2, 3]) {
    const layerEl = document.getElementById(`particle-layer-${depth}`);
    layerEl.dataset.depth = depth;
    layers[depth].forEach((el) => layerEl.appendChild(el));
  }
}
buildParticles();

/* ============================================================================
   MEMORIES GALLERY - scattered polaroids
   ============================================================================ */
const memoriesContainer = document.getElementById("memories-container");
let activeMemoryId = null;

function renderMemories() {
  siteData.memories.forEach((memory, index) => {
    const rotation = randomRotation(memory.id);
    const translate = randomTranslate(memory.id);

    const wrap = document.createElement("div");
    wrap.className = "memory-photo hidden-init";
    wrap.style.left = `${10 + (index % 4) * 20}%`;
    wrap.style.top = `${index < 4 ? 50 : 150}px`;
    wrap.dataset.id = memory.id;
    wrap.style.transitionDelay = `${index * 0.08}s`;

    wrap.innerHTML = `
      <div class="polaroid">
        <img src="${memory.image}" alt="${memory.caption}" loading="lazy">
        <div class="caption"><p>${memory.caption}</p></div>
      </div>
      <div class="date-label"><p>${memory.date}</p></div>
    `;

    const polaroid = wrap.querySelector(".polaroid");

    function applyTransform() {
      const isActive = activeMemoryId === memory.id;
      polaroid.style.transform = isActive
        ? "rotate(0deg) scale(1.15) translate(0px, 0px)"
        : `rotate(${rotation}deg) scale(1) translate(${translate.x}px, ${translate.y}px)`;
      wrap.classList.toggle("active", isActive);
    }
    applyTransform();

    wrap.addEventListener("click", () => {
      activeMemoryId = activeMemoryId === memory.id ? null : memory.id;
      document.querySelectorAll(".memory-photo").forEach((el) => {
        const id = Number(el.dataset.id);
        const isActive = activeMemoryId === id;
        el.classList.toggle("active", isActive);
        const p = el.querySelector(".polaroid");
        const r = randomRotation(id);
        const t = randomTranslate(id);
        p.style.transform = isActive
          ? "rotate(0deg) scale(1.15) translate(0px, 0px)"
          : `rotate(${r}deg) scale(1) translate(${t.x}px, ${t.y}px)`;
      });

      if (activeMemoryId !== null) {
        bumpMoments(1);
        if (navigator.vibrate) navigator.vibrate(50);
      }
    });

    memoriesContainer.appendChild(wrap);
  });
}
renderMemories();

// Fade memories in once the section scrolls into view
const memoriesObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.querySelectorAll(".memory-photo").forEach((el) => {
          el.classList.remove("hidden-init");
          el.classList.add("entered");
        });
        memoriesObserver.disconnect();
      }
    });
  },
  { threshold: 0.2 }
);
memoriesObserver.observe(document.getElementById("memories"));

/* ============================================================================
   MILESTONES TIMELINE - alternating cards
   ============================================================================ */
const timelineCards = document.getElementById("timeline-cards");

function milestoneCardHTML(milestone, mobile) {
  const cls = mobile ? "milestone-card-mobile" : "milestone-card";
  const dateCls = "milestone-date";
  const imgHeight = mobile ? "milestone-image" : "milestone-image";
  return `
    <div class="${cls}">
      <p class="${dateCls}">${milestone.date}</p>
      <div class="${imgHeight}">
        <img src="${milestone.image}" alt="${milestone.title}" loading="lazy">
      </div>
      <h3 class="milestone-title">${milestone.title}</h3>
      <p class="milestone-desc">${milestone.description}</p>
    </div>
  `;
}

function renderMilestones() {
  siteData.milestones.forEach((milestone, index) => {
    const isLeft = index % 2 === 0;
    const row = document.createElement("div");
    row.className = `milestone-row ${isLeft ? "left" : "right"}`;
    row.dataset.milestone = "true";
    row.dataset.id = milestone.id;

    row.innerHTML = `
      ${milestoneCardHTML(milestone, false)}
      ${milestoneCardHTML(milestone, true)}
      <div class="milestone-dot-wrap"><div class="milestone-dot"></div></div>
    `;

    timelineCards.appendChild(row);
  });
}
renderMilestones();

const timelineLine = document.getElementById("timeline-line");
let timelineLineTriggered = false;

const milestoneObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        bumpMoments(1);

        if (!timelineLineTriggered) {
          timelineLine.classList.add("in-view");
          timelineLineTriggered = true;
        }

        milestoneObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);
document.querySelectorAll("[data-milestone]").forEach((el) => milestoneObserver.observe(el));

/* ============================================================================
   ROADMAP + LETTER
   ============================================================================ */
const roadmapSteps = document.getElementById("roadmap-steps");

function renderRoadmap() {
  siteData.roadmap.forEach((item, index) => {
    const step = document.createElement("div");
    step.className = "roadmap-step";
    step.style.transitionDelay = `${index * 0.15}s`;
    step.innerHTML = `
      <div class="roadmap-icon">${item.icon}</div>
      <h3 class="roadmap-title">${item.title}</h3>
      <p class="roadmap-desc">${item.description}</p>
    `;
    roadmapSteps.appendChild(step);
  });
}
renderRoadmap();

document.getElementById("letter-opening").textContent = siteData.letter.opening;
document.getElementById("letter-closing").textContent = siteData.letter.closing;
document.getElementById("letter-signature").textContent = siteData.letter.signature;

const letterBody = document.getElementById("letter-body");
siteData.letter.body.split("\n\n").forEach((paragraph, idx) => {
  const p = document.createElement("p");
  p.textContent = paragraph;
  p.style.transitionDelay = `${0.3 + idx * 0.1}s`;
  letterBody.appendChild(p);
});

let roadmapTriggered = false;
const roadmapLetterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !roadmapTriggered) {
        roadmapTriggered = true;
        jumpMomentsToMax();
        document.querySelectorAll(".roadmap-step").forEach((el) => el.classList.add("in-view"));
        document.getElementById("letter-card").classList.add("in-view");
        document.querySelectorAll(".reveal-child").forEach((el) => el.classList.add("in-view"));
        letterBody.querySelectorAll("p").forEach((el) => el.classList.add("in-view"));
        roadmapLetterObserver.disconnect();
      }
    });
  },
  { threshold: 0.2 }
);
roadmapLetterObserver.observe(document.getElementById("roadmap-letter"));

/* ============================================================================
   GENERIC "reveal" SECTIONS (titles, hints) - fade in once on scroll
   ============================================================================ */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);
document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

/* Kick off initial progress bar read on load */
handleScrollProgress();
