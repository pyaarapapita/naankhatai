/**
 * ============================================================================
 * OUR STORY • CELESTIAL ODYSSEY (3D ROMANTIC INTERACTIVE UNIVERSE)
 * JavaScript Engine (Three.js + GSAP + Canvas-Confetti + Web Audio API)
 * Palette: Deepest Cosmic Obsidian, Polished Champagne Gold, Royal Velvet Bordeaux,
 * Amber Starlight, Diamond White
 * ============================================================================
 */

// ============================================================================
// CONFIGURATION & MEMORY ASSETS
// ============================================================================
const CONFIG = {
  // Configurable anniversary start date & time (August 18, 2026 at 1:48 PM)
  START_DATE: new Date("2026-08-18T13:48:00"),

  // Audio files (will try in order)
  AUDIO_SOURCES: [
    "Barsaat - Banjaare (Official Video).mp3",
    "Barsaat - Banjaare (Official Video)-[AudioTrimmer.com].mp3",
    "song.mp3",
    "logic/assets/Barsaat - Banjaare (Official Video)-[AudioTrimmer.com].mp3"
  ],

  // Song thumbnail/cover image
  COVER_IMAGE: "cover.jpg",

  // 100 Photos from photo/ folder
  PHOTOS: [
    "photo/WhatsApp Image 2026-11-13 at 23.41.04 (1).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.04 (2).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.04.jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.05 (1).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.05 (2).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.05.jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.06 (1).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.06 (2).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.06 (3).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.06.jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.07 (1).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.07 (2).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.07.jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.08 (1).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.08 (2).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.08.jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.09 (1).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.09 (2).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.09.jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.10 (1).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.10.jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.11 (1).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.11.jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.12 (1).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.12 (2).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.12 (3).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.12.jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.13 (1).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.13 (2).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.13.jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.14 (1).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.14 (2).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.14.jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.15 (1).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.15 (2).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.15.jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.16 (1).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.16 (2).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.16.jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.17 (1).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.17 (2).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.17.jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.18 (1).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.18 (2).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.18.jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.19 (1).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.19 (2).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.19.jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.20 (1).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.20 (2).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.20.jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.21 (1).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.21 (2).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.21.jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.22 (1).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.22 (2).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.22.jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.23 (1).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.23 (2).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.23.jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.24 (1).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.24.jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.25 (1).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.25 (2).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.25 (3).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.25.jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.26 (1).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.26 (2).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.26.jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.27 (1).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.27 (2).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.27.jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.28 (1).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.28 (2).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.28.jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.29 (1).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.29 (2).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.29.jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.30 (1).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.30 (2).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.30 (3).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.30.jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.31 (1).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.31.jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.32 (1).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.32 (2).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.32.jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.33 (1).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.33 (2).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.33.jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.34 (1).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.34 (2).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.34 (3).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.34.jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.35 (1).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.35 (2).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.35.jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.36 (1).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.36 (2).jpeg",
    "photo/WhatsApp Image 2026-11-13 at 23.41.36.jpeg"
  ]
};

// Curated romantic captions for all memories
const ROMANTIC_CAPTIONS = [
  "Where our spark first caught fire on August 18, 2026 at 1:48 PM ✨",
  "The sweetest smile that effortlessly illuminates my entire universe.",
  "Every single time I look at you, I fall in love all over again.",
  "In your eyes, I found my safest harbor and warmest home.",
  "You make the simplest days feel like a cinematic masterpiece.",
  "Late night conversations where time ceased to exist.",
  "The quiet moments with you mean more than anything in this world.",
  "Thank you for being my steadfast anchor whenever the storms rolled in.",
  "You are not just my love — you are my greatest companion.",
  "That contagious laugh of yours is my absolute favorite symphony.",
  "Every road traveled with you is paved in starlight.",
  "You have the gentlest soul and the most compassionate heart.",
  "Holding your hand is the most tranquil feeling in this universe.",
  "A million unspoken little things that make me adore you deeper.",
  "Even on the heaviest days, your presence makes everything gentle.",
  "My favorite adventure will always be building life beside you.",
  "You are my answered prayer, my sweetest and rarest blessing.",
  "I cherish every laugh, every gaze, and every chapter we write.",
  "You taught me what patient, unconditional love truly looks like.",
  "A hundred lifetimes wouldn't be enough to cherish you properly.",
  "Your kindness makes the entire world a softer place to be.",
  "No matter where the compass points, my heart will always point to you.",
  "The noise of the world fades the second you stand beside me.",
  "Every photograph here is a sacred tribute to how fortunate I am.",
  "You made me believe in genuine, timeless soulmates.",
  "The quiet grace you carry in your spirit inspires me every single day.",
  "With you, even a simple evening walk feels like poetry.",
  "Your joy and peace of mind will always be my highest calling.",
  "A radiance that runs so much deeper than words could ever describe.",
  "I promise to always protect and celebrate your beautiful smile.",
  "Through every changing season, I will choose you again and again.",
  "Loving you is the most natural, effortless thing I have ever done.",
  "The memory of our first conversation still brings butterflies.",
  "I cherish who I become when I am in your warmth.",
  "Every star in the night sky whispers of your gentleness.",
  "You are the dream that came true when I wasn't even looking.",
  "Thank you for never letting go of my hand.",
  "My heart will always beat in harmony with yours, forever.",
  "You turn every monochrome day into a vibrant golden sunrise.",
  "Your embrace is where all of my worries instantly dissolve.",
  "I am endlessly proud of the woman you are.",
  "The purest, most sincere devotion I have ever known.",
  "An eternity together is just the beginning.",
  "Our story is my favorite masterpiece in the stars.",
  "Thank you for your infinite patience, understanding, and grace.",
  "You are my today, my tomorrow, and all of my future.",
  "The gentle way you care for the world leaves me breathless.",
  "I love the way your eyes light up when you laugh from the soul.",
  "Being yours is the greatest honor of my entire existence.",
  "August 18, 2026 • 1:48 PM: The exact moment our forever began ♥"
];

function getCaptionForIndex(idx) {
  return ROMANTIC_CAPTIONS[idx % ROMANTIC_CAPTIONS.length];
}

// ============================================================================
// AUDIO SYNTHESIZER (WEB AUDIO API CELESTIAL CHIMES)
// Zero latency, zero external sound files needed
// ============================================================================
let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function playSparkleSound() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    
    // Golden harp arpeggio (C5, E5, G5, B5, C6)
    const freqs = [523.25, 659.25, 783.99, 987.77, 1046.50];
    freqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.045);

      gain.gain.setValueAtTime(0, now + idx * 0.045);
      gain.gain.linearRampToValueAtTime(0.08, now + idx * 0.045 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.045 + 0.42);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + idx * 0.045);
      osc.stop(now + idx * 0.045 + 0.45);
    });
  } catch (e) {}
}

function playSuccessChime() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    const freqs = [587.33, 739.99, 880.00, 1174.66, 1479.98];
    freqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.07);

      gain.gain.setValueAtTime(0, now + idx * 0.07);
      gain.gain.linearRampToValueAtTime(0.12, now + idx * 0.07 + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.07 + 0.85);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + idx * 0.07);
      osc.stop(now + idx * 0.07 + 0.9);
    });
  } catch (e) {}
}

// ============================================================================
// 1. ENTRY GATE & AMBIENT CANVAS
// ============================================================================
const entryGate = document.getElementById("entry-gate");
const enterBtn = document.getElementById("enter-btn");
const entryCanvas = document.getElementById("entry-canvas");

let entryParticles = [];
let entryAnimId = null;

function initEntryCanvas() {
  if (!entryCanvas) return;
  const ctx = entryCanvas.getContext("2d");
  let width = (entryCanvas.width = window.innerWidth);
  let height = (entryCanvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    if (entryGate.classList.contains("curtain-hidden")) return;
    width = entryCanvas.width = window.innerWidth;
    height = entryCanvas.height = window.innerHeight;
  });

  // Spawn floating gold and amber starlight motes
  entryParticles = [];
  const count = Math.min(60, Math.floor(width / 20));
  for (let i = 0; i < count; i++) {
    entryParticles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 8 + 3,
      speedY: Math.random() * 0.6 + 0.25,
      speedX: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.7 + 0.2,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.025 + 0.01,
      color: Math.random() > 0.4 ? "#e5c583" : "#f4b266"
    });
  }

  function drawStarMote(ctx, x, y, size, color, alpha) {
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = color;
    ctx.shadowBlur = 12;
    ctx.shadowColor = color;
    ctx.beginPath();
    ctx.arc(x, y, size * 0.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function loop() {
    ctx.clearRect(0, 0, width, height);
    for (let p of entryParticles) {
      p.y -= p.speedY;
      p.x += Math.sin(p.pulse) * 0.4 + p.speedX;
      p.pulse += p.pulseSpeed;
      if (p.y < -20) {
        p.y = height + 15;
        p.x = Math.random() * width;
      }
      const curAlpha = p.opacity * (0.6 + 0.4 * Math.sin(p.pulse));
      drawStarMote(ctx, p.x, p.y, p.size, p.color, curAlpha);
    }
    entryAnimId = requestAnimationFrame(loop);
  }
  loop();
}

enterBtn.addEventListener("click", () => {
  getAudioContext();
  playSuccessChime();

  entryGate.classList.add("curtain-hidden");
  setTimeout(() => {
    if (entryAnimId) cancelAnimationFrame(entryAnimId);
  }, 1400);

  // Smooth audio fade in
  musicController.fadeIn(0.8, 2200);

  // Cinematic 3D camera fly-in
  if (universeManager) {
    universeManager.startIntroFlyIn();
  }
});

// ============================================================================
// 4. LIVE JOURNEY TIMER HUD
// ============================================================================
const hudDays = document.getElementById("hud-days");
const hudHours = document.getElementById("hud-hours");
const hudMinutes = document.getElementById("hud-minutes");
const hudSeconds = document.getElementById("hud-seconds");

function updateJourneyTimer() {
  const now = new Date();
  const diff = now.getTime() - CONFIG.START_DATE.getTime();

  if (diff >= 0) {
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    hudDays.textContent = String(days).padStart(3, "0");
    hudHours.textContent = String(hours).padStart(2, "0");
    hudMinutes.textContent = String(mins).padStart(2, "0");
    hudSeconds.textContent = String(secs).padStart(2, "0");
  } else {
    hudDays.textContent = "000";
    hudHours.textContent = "00";
    hudMinutes.textContent = "00";
    hudSeconds.textContent = "00";
  }
}

setInterval(updateJourneyTimer, 1000);
updateJourneyTimer();

// ============================================================================
// 2. CLASSY FLOATING MUSIC PLAYER (GOLD & OBSIDIAN VINYL)
// ============================================================================
class MusicController {
  constructor() {
    this.audio = document.getElementById("bg-audio");
    this.vinylDisc = document.getElementById("vinyl-disc-elem");
    this.vinylProgressRing = document.getElementById("vinyl-ring-progress");
    this.playBtn = document.getElementById("play-pause-btn");
    this.playIcon = document.getElementById("play-icon");
    this.pauseIcon = document.getElementById("pause-icon");
    this.seekSlider = document.getElementById("player-seek");
    this.currentTimeElem = document.getElementById("player-current-time");
    this.totalTimeElem = document.getElementById("player-total-time");
    this.volSlider = document.getElementById("vol-slider");
    this.volBtn = document.getElementById("vol-toggle-btn");
    this.lastVolume = 0.8;
    this.isSeeking = false;

    this.init();
  }

  init() {
    this.audio.volume = 0;

    this.playBtn.addEventListener("click", () => this.togglePlay());

    this.audio.addEventListener("timeupdate", () => {
      if (!this.isSeeking) {
        this.updateProgress();
      }
    });

    this.audio.addEventListener("loadedmetadata", () => {
      this.totalTimeElem.textContent = this.formatTime(this.audio.duration);
    });

    this.seekSlider.addEventListener("input", () => {
      this.isSeeking = true;
      const pct = this.seekSlider.value / 100;
      this.currentTimeElem.textContent = this.formatTime(pct * (this.audio.duration || 0));
    });

    this.seekSlider.addEventListener("change", () => {
      const pct = this.seekSlider.value / 100;
      this.audio.currentTime = pct * (this.audio.duration || 0);
      this.isSeeking = false;
    });

    this.volSlider.addEventListener("input", () => {
      this.audio.volume = parseFloat(this.volSlider.value);
      if (this.audio.volume > 0) this.lastVolume = this.audio.volume;
    });

    this.volBtn.addEventListener("click", () => {
      if (this.audio.volume > 0) {
        this.lastVolume = this.audio.volume;
        this.audio.volume = 0;
        this.volSlider.value = 0;
      } else {
        this.audio.volume = this.lastVolume || 0.8;
        this.volSlider.value = this.audio.volume;
      }
    });

    this.audio.addEventListener("play", () => {
      this.vinylDisc.classList.add("is-playing");
      this.playIcon.style.display = "none";
      this.pauseIcon.style.display = "block";
    });

    this.audio.addEventListener("pause", () => {
      this.vinylDisc.classList.remove("is-playing");
      this.playIcon.style.display = "block";
      this.pauseIcon.style.display = "none";
    });
  }

  togglePlay() {
    getAudioContext();
    if (this.audio.paused) {
      this.audio.play().catch(e => console.log("Play interrupted: ", e));
    } else {
      this.audio.pause();
    }
  }

  fadeIn(targetVol = 0.8, durationMs = 2200) {
    this.audio.volume = 0;
    this.audio.play().then(() => {
      this.vinylDisc.classList.add("is-playing");
      this.playIcon.style.display = "none";
      this.pauseIcon.style.display = "block";

      const startTime = performance.now();
      const step = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / durationMs, 1);
        this.audio.volume = progress * targetVol;
        this.volSlider.value = this.audio.volume;
        if (progress < 1 && !this.audio.paused) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    }).catch(err => {
      console.warn("Autoplay audio waiting for interaction: ", err);
    });
  }

  updateProgress() {
    const cur = this.audio.currentTime || 0;
    const dur = this.audio.duration || 1;
    const progressPct = cur / dur;

    this.currentTimeElem.textContent = this.formatTime(cur);
    if (!isNaN(dur) && dur > 1) {
      this.totalTimeElem.textContent = this.formatTime(dur);
    }
    this.seekSlider.value = progressPct * 100;

    const circumference = 157;
    const offset = circumference - progressPct * circumference;
    if (this.vinylProgressRing) {
      this.vinylProgressRing.style.strokeDashoffset = offset;
    }
  }

  formatTime(secs) {
    if (isNaN(secs)) return "0:00";
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  }
}

const musicController = new MusicController();

// ============================================================================
// 3. TRUE 3D INTERACTIVE MEMORY UNIVERSE (THREE.JS + GSAP)
// ============================================================================
class UniverseManager {
  constructor() {
    this.canvas = document.getElementById("webgl-canvas");
    this.photoList = CONFIG.PHOTOS;
    this.cards = [];
    this.activeCardIndex = 0;
    this.currentMode = "spiral"; // spiral | heart | sphere
    this.isTouring = false;
    this.tourTimeout = null;
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2(-9999, -9999);
    this.parallaxMouse = new THREE.Vector2(0, 0);
    this.cameraParallaxOffset = new THREE.Vector2(0, 0);
    this.hoveredCard = null;
    this.isModalOpen = false;

    this.initScene();
    this.initLights();
    this.initCosmicAtmosphere();
    this.initCards();
    this.initRibbonSpline();
    this.initEvents();
    this.animate();
  }

  initScene() {
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x06050a, 0.0028);

    this.camera = new THREE.PerspectiveCamera(
      52,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    );
    this.camera.position.set(0, 140, 280);

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.25;

    this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.045;
    this.controls.maxDistance = 340;
    this.controls.minDistance = 8;
    this.controls.target.set(0, 0, 0);
  }

  initLights() {
    // Ambient cosmic indigo
    const ambientLight = new THREE.AmbientLight(0x201a35, 1.4);
    this.scene.add(ambientLight);

    // Warm champagne gold primary point light
    this.goldPoint = new THREE.PointLight(0xe5c583, 3.2, 350);
    this.goldPoint.position.set(0, 45, 30);
    this.scene.add(this.goldPoint);

    // Deep velvet bordeaux secondary warmth
    this.winePoint = new THREE.PointLight(0x78213b, 2.5, 300);
    this.winePoint.position.set(50, -35, -25);
    this.scene.add(this.winePoint);

    // Starlight blue accent
    this.bluePoint = new THREE.PointLight(0x6a89b8, 1.8, 300);
    this.bluePoint.position.set(-50, 30, -30);
    this.scene.add(this.bluePoint);

    // Crisp directional key light for specular highlights
    const dirLight = new THREE.DirectionalLight(0xfff6e6, 1.2);
    dirLight.position.set(40, 100, 60);
    this.scene.add(dirLight);
  }

  initCosmicAtmosphere() {
    // 1. 2200 Shimmering Cosmic Star Particles
    const starCount = 2200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);

    const palette = [
      new THREE.Color(0xe5c583), // Champagne Gold
      new THREE.Color(0xf7e7be), // Light Gold
      new THREE.Color(0xf4b266), // Amber
      new THREE.Color(0x8aaad6), // Starlight Blue
      new THREE.Color(0xffffff)  // Pure White
    ];

    for (let i = 0; i < starCount; i++) {
      const radius = 70 + Math.random() * 420;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const color = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const starCanvas = document.createElement("canvas");
    starCanvas.width = 32;
    starCanvas.height = 32;
    const sCtx = starCanvas.getContext("2d");
    const grad = sCtx.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, "rgba(255,255,255,1)");
    grad.addColorStop(0.35, "rgba(247,231,190,0.85)");
    grad.addColorStop(1, "rgba(247,231,190,0)");
    sCtx.fillStyle = grad;
    sCtx.beginPath();
    sCtx.arc(16, 16, 16, 0, Math.PI * 2);
    sCtx.fill();

    const starTexture = new THREE.CanvasTexture(starCanvas);
    const starMat = new THREE.PointsMaterial({
      size: 2.8,
      vertexColors: true,
      map: starTexture,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.starPoints = new THREE.Points(geometry, starMat);
    this.scene.add(this.starPoints);

    // 2. Orbital Saturnian Stardust Rings
    const ringGeom = new THREE.RingGeometry(80, 125, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xe5c583,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.12,
      wireframe: true
    });
    this.orbitalRing = new THREE.Mesh(ringGeom, ringMat);
    this.orbitalRing.rotation.x = Math.PI * 0.38;
    this.orbitalRing.rotation.y = Math.PI * 0.15;
    this.scene.add(this.orbitalRing);

    // 3. Floating Diamond Crystals
    this.diamondCrystals = [];
    const crystalGeom = new THREE.OctahedronGeometry(1.2, 0);
    const crystalMat = new THREE.MeshStandardMaterial({
      color: 0xe5c583,
      metalness: 0.9,
      roughness: 0.15,
      emissive: 0xb88d3e,
      emissiveIntensity: 0.3
    });

    for (let c = 0; c < 24; c++) {
      const crystal = new THREE.Mesh(crystalGeom, crystalMat);
      crystal.position.set(
        (Math.random() - 0.5) * 160,
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 160
      );
      crystal.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      crystal.scale.setScalar(Math.random() * 0.8 + 0.6);
      this.diamondCrystals.push(crystal);
      this.scene.add(crystal);
    }
  }

  createLuxuryPlaceholderTexture(index) {
    const c = document.createElement("canvas");
    c.width = 440;
    c.height = 600;
    const ctx = c.getContext("2d");

    // Luxury midnight velvet gradient
    const bgGrad = ctx.createLinearGradient(0, 0, 440, 600);
    bgGrad.addColorStop(0, "#1a1526");
    bgGrad.addColorStop(0.5, "#0d0a14");
    bgGrad.addColorStop(1, "#1c1424");
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 440, 600);

    // Outer double gold hairline border
    ctx.strokeStyle = "rgba(229, 197, 131, 0.5)";
    ctx.lineWidth = 4;
    ctx.strokeRect(16, 16, 408, 568);

    ctx.strokeStyle = "rgba(229, 197, 131, 0.25)";
    ctx.lineWidth = 1.5;
    ctx.strokeRect(26, 26, 388, 548);

    // Subtle corner ornaments
    const drawCorner = (x, y, dx, dy) => {
      ctx.beginPath();
      ctx.moveTo(x, y + dy * 18);
      ctx.lineTo(x, y);
      ctx.lineTo(x + dx * 18, y);
      ctx.strokeStyle = "#e5c583";
      ctx.lineWidth = 3;
      ctx.stroke();
    };
    drawCorner(22, 22, 1, 1);
    drawCorner(418, 22, -1, 1);
    drawCorner(22, 578, 1, -1);
    drawCorner(418, 578, -1, -1);

    // Center Gold Star / Heart Emblem
    ctx.font = "46px serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#e5c583";
    ctx.fillText("✦", 220, 240);

    // Typography
    ctx.font = "600 24px 'Cormorant Garamond', serif";
    ctx.fillStyle = "#f7e7be";
    ctx.fillText(`MEMORY • #${index + 1}`, 220, 310);

    ctx.font = "16px 'Plus Jakarta Sans', sans-serif";
    ctx.fillStyle = "rgba(242, 237, 228, 0.65)";
    ctx.fillText("August 18, 2026", 220, 345);

    const texture = new THREE.CanvasTexture(c);
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  }

  // Calculate 3D target coordinates for layout modes
  getCoordinatesForMode(mode, i, total) {
    if (mode === "heart") {
      // Parametric 3D Heart Nebula
      const t = (i / total) * Math.PI * 2;
      const x = 16 * Math.pow(Math.sin(t), 3) * 2.8;
      const y = (13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t)) * 2.8;
      const z = (Math.sin(i * 3) * 14) + (Math.cos(t) * 10);
      return {
        pos: new THREE.Vector3(x, y, z),
        rot: new THREE.Vector3(0, Math.sin(t) * 0.4, 0)
      };
    } else if (mode === "sphere") {
      // Fibonacci Celestial Globe Sphere
      const phi = Math.acos(-1 + (2 * i) / total);
      const theta = Math.sqrt(total * Math.PI) * phi;
      const radius = 58;
      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);
      const pos = new THREE.Vector3(x, y, z);
      return {
        pos: pos,
        rot: new THREE.Vector3(0, 0, 0) // Will lookAt origin
      };
    } else {
      // Default: Ascending Spiral Helix
      const angle = i * 0.44;
      const radius = 26 + Math.sin(i * 0.22) * 5 + i * 0.35;
      const y = (i - total / 2) * 1.45;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      return {
        pos: new THREE.Vector3(x, y, z),
        rot: new THREE.Vector3(0, 0, 0)
      };
    }
  }

  initCards() {
    const total = this.photoList.length;
    this.textureLoader = new THREE.TextureLoader();
    if (typeof window !== "undefined" && window.location.protocol === "file:") {
      this.textureLoader.setCrossOrigin("");
    }

    // 1. Real 3D Physical Monolith Frame (Box with thickness)
    const boxGeom = new THREE.BoxGeometry(6.6, 9.2, 0.35);
    const edgeGeom = new THREE.EdgesGeometry(boxGeom);

    // Front photo plane
    const photoGeom = new THREE.PlaneGeometry(6.0, 8.4);

    for (let i = 0; i < total; i++) {
      const coords = this.getCoordinatesForMode("spiral", i, total);

      const cardGroup = new THREE.Group();
      cardGroup.position.copy(coords.pos);

      // Look outwards from spiral center
      cardGroup.lookAt(coords.pos.x * 1.5, coords.pos.y + 1.2, coords.pos.z * 1.5);

      // Solid luxury obsidian/metallic frame
      const frameMat = new THREE.MeshStandardMaterial({
        color: 0x110e18,
        metalness: 0.88,
        roughness: 0.22,
        emissive: 0x221808,
        emissiveIntensity: 0.2
      });
      const frameMesh = new THREE.Mesh(boxGeom, frameMat);
      cardGroup.add(frameMesh);

      // Polished Gold Chamfer Edge Wireframe
      const edgeMat = new THREE.LineBasicMaterial({
        color: 0xe5c583,
        transparent: true,
        opacity: 0.55
      });
      const edgeLines = new THREE.LineSegments(edgeGeom, edgeMat);
      cardGroup.add(edgeLines);

      // Front Photo Inset (Offset slightly forward on Z)
      const placeholderTex = this.createLuxuryPlaceholderTexture(i);
      const photoMat = new THREE.MeshBasicMaterial({
        map: placeholderTex,
        side: THREE.FrontSide
      });
      const photoMesh = new THREE.Mesh(photoGeom, photoMat);
      photoMesh.position.z = 0.185;

      photoMesh.userData = {
        index: i,
        photoSrc: this.photoList[i],
        caption: getCaptionForIndex(i),
        group: cardGroup,
        frameMat: frameMat,
        edgeMat: edgeMat
      };
      cardGroup.add(photoMesh);

      this.cards.push({
        group: cardGroup,
        photoMesh: photoMesh,
        frameMat: frameMat,
        edgeMat: edgeMat,
        photoMat: photoMat,
        photoSrc: this.photoList[i],
        index: i,
        basePos: coords.pos.clone(),
        textureLoaded: false
      });

      this.scene.add(cardGroup);
    }

    this.loadTexturesInBatches(4);
  }

  loadTexturesInBatches(batchSize = 4) {
    let currentIdx = 0;
    const total = this.cards.length;

    const loadNextBatch = () => {
      if (currentIdx >= total) return;
      const end = Math.min(currentIdx + batchSize, total);

      for (let i = currentIdx; i < end; i++) {
        const item = this.cards[i];
        const safeSrc = encodeURI(item.photoSrc);
        this.textureLoader.load(
          safeSrc,
          (tex) => {
            tex.colorSpace = THREE.SRGBColorSpace;
            tex.minFilter = THREE.LinearFilter;
            item.photoMat.map = tex;
            item.photoMat.needsUpdate = true;
            item.textureLoaded = true;
          },
          undefined,
          (err) => {
            console.warn(`Fallback image: ${item.photoSrc}`, err);
          }
        );
      }

      currentIdx = end;
      setTimeout(loadNextBatch, 120);
    };

    loadNextBatch();
  }

  // 3. Starlight Ribbon Spline (Flowing celestial river connecting memories)
  initRibbonSpline() {
    this.updateRibbonSpline();

    // Flowing starlight particles along the ribbon
    const particleCount = 380;
    const geom = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    geom.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const pMat = new THREE.PointsMaterial({
      color: 0xf7e7be,
      size: 3.2,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending
    });

    this.ribbonParticles = new THREE.Points(geom, pMat);
    this.ribbonParticleT = new Float32Array(particleCount);
    for (let p = 0; p < particleCount; p++) {
      this.ribbonParticleT[p] = p / particleCount;
    }
    this.scene.add(this.ribbonParticles);
  }

  updateRibbonSpline() {
    const points = this.cards.map(c => c.group.position.clone());
    this.splineCurve = new THREE.CatmullRomCurve3D(points);

    if (this.splineTubeMesh) {
      this.scene.remove(this.splineTubeMesh);
      this.splineTubeMesh.geometry.dispose();
    }

    const tubeGeom = new THREE.TubeGeometry(this.splineCurve, 200, 0.22, 6, false);
    const tubeMat = new THREE.MeshBasicMaterial({
      color: 0xe5c583,
      transparent: true,
      opacity: 0.28,
      wireframe: false
    });
    this.splineTubeMesh = new THREE.Mesh(tubeGeom, tubeMat);
    this.scene.add(this.splineTubeMesh);
  }

  // Morph all 100 cards into the chosen 3D layout (Helix, Heart, Sphere)
  setLayoutMode(mode) {
    if (this.currentMode === mode) return;
    this.currentMode = mode;
    playSparkleSound();

    const total = this.cards.length;

    this.cards.forEach((card, i) => {
      const target = this.getCoordinatesForMode(mode, i, total);
      card.basePos.copy(target.pos);

      // Animate position
      gsap.to(card.group.position, {
        x: target.pos.x,
        y: target.pos.y,
        z: target.pos.z,
        duration: 1.8,
        ease: "power2.inOut",
        delay: (i % 10) * 0.03
      });

      // Animate orientation
      if (mode === "sphere") {
        gsap.to(card.group.rotation, {
          x: 0,
          y: Math.atan2(target.pos.x, target.pos.z),
          z: 0,
          duration: 1.8,
          ease: "power2.inOut"
        });
      } else if (mode === "heart") {
        gsap.to(card.group.rotation, {
          x: 0,
          y: 0,
          z: 0,
          duration: 1.8,
          ease: "power2.inOut"
        });
      } else {
        // Spiral
        gsap.to(card.group.rotation, {
          x: 0,
          y: Math.atan2(target.pos.x, target.pos.z),
          z: Math.sin(i * 0.7) * 0.08,
          duration: 1.8,
          ease: "power2.inOut"
        });
      }
    });

    // Rebuild ribbon spline after morph completes
    setTimeout(() => {
      this.updateRibbonSpline();
    }, 1900);
  }

  startIntroFlyIn() {
    gsap.to(this.camera.position, {
      x: 0,
      y: 18,
      z: 75,
      duration: 3.0,
      ease: "power2.out",
      onUpdate: () => {
        this.controls.target.set(0, 0, 0);
        this.controls.update();
      }
    });
  }

  initEvents() {
    window.addEventListener("resize", () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Mouse Parallax & Hover Detection
    window.addEventListener("pointermove", (e) => {
      if (this.isModalOpen) return;

      // Subtle 3D Camera Parallax
      this.parallaxMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      this.parallaxMouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

      // Ignore hover if pointer is on UI HUD
      if (e.target !== this.canvas) {
        this.mouse.x = -9999;
        this.mouse.y = -9999;
        if (this.hoveredCard) {
          gsap.to(this.hoveredCard.userData.group.scale, { x: 1, y: 1, z: 1, duration: 0.3 });
          this.hoveredCard.userData.edgeMat.color.setHex(0xe5c583);
          this.hoveredCard.userData.edgeMat.opacity = 0.55;
          this.hoveredCard = null;
          document.body.style.cursor = "default";
        }
        return;
      }

      this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    // Pointer Click exclusively on 3D canvas
    this.canvas.addEventListener("pointerdown", (e) => {
      this.pointerDownPos = { x: e.clientX, y: e.clientY };
    });

    this.canvas.addEventListener("pointerup", (e) => {
      if (this.isModalOpen || !this.controls.enabled) return;

      // Ignore if user was dragging/orbiting the scene
      if (this.pointerDownPos) {
        const dist = Math.hypot(e.clientX - this.pointerDownPos.x, e.clientY - this.pointerDownPos.y);
        if (dist > 5) return;
      }

      // If already hovering on a card, open it immediately
      if (this.hoveredCard) {
        this.openMemory(this.hoveredCard.userData.index);
        return;
      }

      // Fallback raycast
      const clickCoords = new THREE.Vector2(
        (e.clientX / window.innerWidth) * 2 - 1,
        -(e.clientY / window.innerHeight) * 2 + 1
      );
      this.raycaster.setFromCamera(clickCoords, this.camera);
      const meshes = this.cards.map(c => c.photoMesh);
      const intersects = this.raycaster.intersectObjects(meshes);

      if (intersects.length > 0 && intersects[0].distance < 100) {
        this.openMemory(intersects[0].object.userData.index);
      }
    });

    // Layout Morph Buttons (Helix / Heart / Sphere)
    const modeBtns = document.querySelectorAll("#layout-modes-bar .mode-btn");
    modeBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        modeBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const mode = btn.getAttribute("data-mode");
        this.setLayoutMode(mode);
      });
    });

    // Guided Tour Button
    const tourBtn = document.getElementById("tour-toggle-btn");
    tourBtn.addEventListener("click", () => this.toggleGuidedTour());

    // Reset Camera Button
    const resetBtn = document.getElementById("reset-cam-btn");
    resetBtn.addEventListener("click", () => this.resetCamera());

    // Lightbox Controls
    document.getElementById("lightbox-close-btn").addEventListener("click", () => this.closeMemory());
    document.getElementById("lightbox-prev-btn").addEventListener("click", () => this.navigateMemory(-1));
    document.getElementById("lightbox-next-btn").addEventListener("click", () => this.navigateMemory(1));
    document.getElementById("memory-lightbox").addEventListener("click", (e) => {
      if (e.target.id === "memory-lightbox") {
        this.closeMemory();
      }
    });

    window.addEventListener("keydown", (e) => {
      if (!this.isModalOpen) return;
      if (e.key === "Escape") this.closeMemory();
      if (e.key === "ArrowLeft") this.navigateMemory(-1);
      if (e.key === "ArrowRight") this.navigateMemory(1);
    });
  }

  openMemory(index) {
    if (this.isTouring) this.stopGuidedTour();

    this.activeCardIndex = index;
    this.isModalOpen = true;
    const card = this.cards[index];

    // Smoothly fly camera to face card with depth
    const groupPos = card.group.position;
    const offsetDir = new THREE.Vector3().subVectors(this.camera.position, groupPos).normalize();
    const targetCamPos = groupPos.clone().add(offsetDir.multiplyScalar(16));

    gsap.to(this.controls.target, {
      x: groupPos.x,
      y: groupPos.y,
      z: groupPos.z,
      duration: 1.2,
      ease: "power2.out"
    });

    gsap.to(this.camera.position, {
      x: targetCamPos.x,
      y: targetCamPos.y,
      z: targetCamPos.z,
      duration: 1.2,
      ease: "power2.out",
      onUpdate: () => this.controls.update()
    });

    // Populate Lightbox
    const lightbox = document.getElementById("memory-lightbox");
    const imgElem = document.getElementById("lightbox-img");
    const badgeElem = document.getElementById("lightbox-badge");
    const titleElem = document.getElementById("lightbox-title");
    const captionElem = document.getElementById("lightbox-caption");
    const indexElem = document.getElementById("lightbox-index-indicator");

    imgElem.src = encodeURI(card.photoSrc);
    badgeElem.textContent = `Memory #${index + 1} of ${this.cards.length}`;
    titleElem.textContent = `August 18 • Story #${index + 1}`;
    captionElem.textContent = card.photoMesh.userData.caption;
    indexElem.textContent = `${index + 1} / ${this.cards.length}`;

    lightbox.classList.add("is-open");
    playSparkleSound();
  }

  navigateMemory(delta) {
    let nextIdx = (this.activeCardIndex + delta + this.cards.length) % this.cards.length;
    this.openMemory(nextIdx);
  }

  closeMemory() {
    this.isModalOpen = false;
    document.getElementById("memory-lightbox").classList.remove("is-open");
  }

  toggleGuidedTour() {
    if (this.isTouring) {
      this.stopGuidedTour();
    } else {
      this.startGuidedTour();
    }
  }

  startGuidedTour() {
    this.isTouring = true;
    const tourBtn = document.getElementById("tour-toggle-btn");
    tourBtn.classList.add("tour-active");
    tourBtn.querySelector("span").textContent = "Pause Tour";
    this.tourStep(this.activeCardIndex || 0);
  }

  stopGuidedTour() {
    this.isTouring = false;
    clearTimeout(this.tourTimeout);
    const tourBtn = document.getElementById("tour-toggle-btn");
    tourBtn.classList.remove("tour-active");
    tourBtn.querySelector("span").textContent = "Guided Tour";
  }

  tourStep(index) {
    if (!this.isTouring) return;
    this.activeCardIndex = index;
    const card = this.cards[index];

    const groupPos = card.group.position;
    const targetCamPos = groupPos.clone().add(new THREE.Vector3(0, 2, 16));

    const counterPill = document.getElementById("memory-counter-pill");
    counterPill.innerHTML = `<span>#${index + 1}: ${card.photoMesh.userData.caption.slice(0, 30)}...</span>`;

    gsap.to(this.controls.target, {
      x: groupPos.x,
      y: groupPos.y,
      z: groupPos.z,
      duration: 2.2,
      ease: "power2.inOut"
    });

    gsap.to(this.camera.position, {
      x: targetCamPos.x,
      y: targetCamPos.y,
      z: targetCamPos.z,
      duration: 2.2,
      ease: "power2.inOut",
      onUpdate: () => this.controls.update(),
      onComplete: () => {
        gsap.to(card.group.scale, {
          x: 1.15,
          y: 1.15,
          z: 1.15,
          duration: 0.45,
          yoyo: true,
          repeat: 1
        });

        this.tourTimeout = setTimeout(() => {
          if (this.isTouring) {
            const nextIdx = (index + 1) % this.cards.length;
            this.tourStep(nextIdx);
          }
        }, 3600);
      }
    });
  }

  resetCamera() {
    if (this.isTouring) this.stopGuidedTour();
    if (this.isModalOpen) this.closeMemory();

    gsap.to(this.controls.target, {
      x: 0,
      y: 0,
      z: 0,
      duration: 1.6,
      ease: "power2.out"
    });

    gsap.to(this.camera.position, {
      x: 0,
      y: 18,
      z: 75,
      duration: 1.6,
      ease: "power2.out",
      onUpdate: () => this.controls.update()
    });

    document.getElementById("memory-counter-pill").innerHTML = `<span>100 Memories in the Stars</span>`;
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    const time = performance.now() * 0.001;

    // Slowly rotate background starfield
    if (this.starPoints) {
      this.starPoints.rotation.y = time * 0.015;
    }

    // Rotate orbital dust ring
    if (this.orbitalRing) {
      this.orbitalRing.rotation.z = time * 0.02;
    }

    // Rotate diamond crystals
    if (this.diamondCrystals) {
      for (let i = 0; i < this.diamondCrystals.length; i++) {
        const dc = this.diamondCrystals[i];
        dc.rotation.x += 0.01;
        dc.rotation.y += 0.015;
      }
    }

    // Flow particles along the Starlight Ribbon
    if (this.ribbonParticles && this.splineCurve) {
      const posAttr = this.ribbonParticles.geometry.attributes.position;
      const count = this.ribbonParticleT.length;
      for (let p = 0; p < count; p++) {
        this.ribbonParticleT[p] = (this.ribbonParticleT[p] + 0.0007) % 1;
        const pt = this.splineCurve.getPointAt(this.ribbonParticleT[p]);
        if (pt) {
          posAttr.setXYZ(p, pt.x, pt.y, pt.z);
        }
      }
      posAttr.needsUpdate = true;
    }

    // Organic gentle floating of cards
    for (let i = 0; i < this.cards.length; i++) {
      const item = this.cards[i];
      item.group.position.y = item.basePos.y + Math.sin(time * 1.5 + i * 0.5) * 0.25;
    }

    // Interactive 3D Camera Parallax (Glides smoothly with mouse)
    if (!this.isModalOpen && this.controls.enabled) {
      this.cameraParallaxOffset.x += (this.parallaxMouse.x * 5 - this.cameraParallaxOffset.x) * 0.04;
      this.cameraParallaxOffset.y += (this.parallaxMouse.y * 3.5 - this.cameraParallaxOffset.y) * 0.04;

      this.camera.position.x += this.cameraParallaxOffset.x * 0.03;
      this.camera.position.y += this.cameraParallaxOffset.y * 0.03;

      // Raycast hover check
      this.raycaster.setFromCamera(this.mouse, this.camera);
      const meshes = this.cards.map(c => c.photoMesh);
      const intersects = this.raycaster.intersectObjects(meshes);

      if (intersects.length > 0 && intersects[0].distance < 100) {
        const hit = intersects[0].object;
        if (this.hoveredCard !== hit) {
          if (this.hoveredCard) {
            gsap.to(this.hoveredCard.userData.group.scale, { x: 1, y: 1, z: 1, duration: 0.3 });
            this.hoveredCard.userData.edgeMat.color.setHex(0xe5c583);
            this.hoveredCard.userData.edgeMat.opacity = 0.55;
          }
          this.hoveredCard = hit;
          gsap.to(hit.userData.group.scale, { x: 1.12, y: 1.12, z: 1.12, duration: 0.3 });
          hit.userData.edgeMat.color.setHex(0xffffff);
          hit.userData.edgeMat.opacity = 1.0;
          document.body.style.cursor = "pointer";
        }
      } else if (this.hoveredCard) {
        gsap.to(this.hoveredCard.userData.group.scale, { x: 1, y: 1, z: 1, duration: 0.3 });
        this.hoveredCard.userData.edgeMat.color.setHex(0xe5c583);
        this.hoveredCard.userData.edgeMat.opacity = 0.55;
        this.hoveredCard = null;
        document.body.style.cursor = "default";
      }
    }

    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }
}

let universeManager = null;
window.addEventListener("DOMContentLoaded", () => {
  initEntryCanvas();
  universeManager = new UniverseManager();
});

// ============================================================================
// TOP NAVIGATION TABS (UNIVERSE / ARCADE / LETTER)
// ============================================================================
const navTabs = document.querySelectorAll(".nav-tab-btn");
const viewArcade = document.getElementById("view-arcade");
const viewLetter = document.getElementById("view-letter");

navTabs.forEach((btn) => {
  btn.addEventListener("click", () => {
    navTabs.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const target = btn.getAttribute("data-tab");
    viewArcade.classList.remove("is-active");
    viewLetter.classList.remove("is-active");

    if (target === "arcade") {
      viewArcade.classList.add("is-active");
      if (universeManager) universeManager.controls.enabled = false;
    } else if (target === "letter") {
      viewLetter.classList.add("is-active");
      if (universeManager) universeManager.controls.enabled = false;
    } else {
      if (universeManager) universeManager.controls.enabled = true;
    }
  });
});

// ============================================================================
// 5. MINI-GAME ("CATCH MY HEART" - CELESTIAL GEMS & STARS)
// ============================================================================
class HeartCatchGame {
  constructor() {
    this.canvas = document.getElementById("game-canvas");
    this.scoreElem = document.getElementById("game-score");
    this.timeElem = document.getElementById("game-time");
    this.startBtn = document.getElementById("game-start-btn");
    this.overlay = document.getElementById("game-overlay");
    this.titleElem = document.getElementById("game-title");
    this.descElem = document.getElementById("game-desc");
    this.noteElem = document.getElementById("game-secret-note");

    this.score = 0;
    this.targetScore = 10;
    this.timeLeft = 15;
    this.isPlaying = false;
    this.hearts = [];
    this.sparkles = [];
    this.timerInterval = null;
    this.animId = null;

    this.init();
  }

  init() {
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");
    this.resize();
    window.addEventListener("resize", () => this.resize());

    this.startBtn.addEventListener("click", () => this.startGame());

    const handleTap = (clientX, clientY) => {
      if (!this.isPlaying) return;
      const rect = this.canvas.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      for (let i = this.hearts.length - 1; i >= 0; i--) {
        const h = this.hearts[i];
        const dist = Math.hypot(h.x - x, h.y - y);
        if (dist <= h.size * 1.6) {
          this.score++;
          this.scoreElem.textContent = `${this.score} / ${this.targetScore}`;
          this.spawnSparkles(h.x, h.y, h.color);
          this.hearts.splice(i, 1);
          playSparkleSound();

          if (this.score >= this.targetScore) {
            this.winGame();
          }
          break;
        }
      }
    };

    this.canvas.addEventListener("pointerdown", (e) => handleTap(e.clientX, e.clientY));
  }

  resize() {
    const parent = this.canvas.parentElement;
    if (parent) {
      this.width = this.canvas.width = parent.clientWidth;
      this.height = this.canvas.height = parent.clientHeight;
    }
  }

  startGame() {
    this.resize();
    this.score = 0;
    this.timeLeft = 15;
    this.scoreElem.textContent = `0 / ${this.targetScore}`;
    this.timeElem.textContent = `15s`;
    this.hearts = [];
    this.sparkles = [];
    this.isPlaying = true;
    this.overlay.classList.add("hidden");
    this.noteElem.style.display = "none";

    clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      this.timeLeft--;
      this.timeElem.textContent = `${this.timeLeft}s`;
      if (this.timeLeft <= 0) {
        this.endGame(false);
      }
    }, 1000);

    this.loop();
  }

  spawnHeart() {
    if (this.hearts.length >= 12) return;
    // Luxury gold, amber, and celestial starlight palette
    const colors = ["#e5c583", "#f7e7be", "#f4b266", "#8aaad6"];
    this.hearts.push({
      x: Math.random() * (this.width - 50) + 25,
      y: this.height + 30,
      size: Math.random() * 16 + 14,
      speedY: Math.random() * 2.2 + 1.2,
      sineOffset: Math.random() * Math.PI * 2,
      sineSpeed: Math.random() * 0.05 + 0.02,
      sineAmp: Math.random() * 1.6 + 0.5,
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  spawnSparkles(x, y, color) {
    for (let i = 0; i < 18; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 4.5 + 1.5;
      this.sparkles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: Math.random() * 4 + 2,
        alpha: 1,
        color: color
      });
    }
  }

  drawHeart(x, y, size, color) {
    const ctx = this.ctx;
    ctx.save();
    ctx.fillStyle = color;
    ctx.shadowBlur = 15;
    ctx.shadowColor = color;
    ctx.beginPath();
    const topCurve = size * 0.3;
    ctx.moveTo(x, y + topCurve);
    ctx.bezierCurveTo(x, y, x - size / 2, y, x - size / 2, y + topCurve);
    ctx.bezierCurveTo(x - size / 2, y + (size + topCurve) / 2, x, y + size, x, y + size * 1.25);
    ctx.bezierCurveTo(x, y + size, x + size / 2, y + (size + topCurve) / 2, x + size / 2, y + topCurve);
    ctx.bezierCurveTo(x + size / 2, y, x, y, x, y + topCurve);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  loop() {
    if (!this.isPlaying) return;
    this.ctx.clearRect(0, 0, this.width, this.height);

    if (Math.random() < 0.08) {
      this.spawnHeart();
    }

    for (let i = this.hearts.length - 1; i >= 0; i--) {
      const h = this.hearts[i];
      h.y -= h.speedY;
      h.x += Math.sin(h.sineOffset) * h.sineAmp;
      h.sineOffset += h.sineSpeed;

      this.drawHeart(h.x, h.y, h.size, h.color);

      if (h.y < -40) {
        this.hearts.splice(i, 1);
      }
    }

    for (let i = this.sparkles.length - 1; i >= 0; i--) {
      const sp = this.sparkles[i];
      sp.x += sp.vx;
      sp.y += sp.vy;
      sp.alpha -= 0.035;

      this.ctx.save();
      this.ctx.globalAlpha = Math.max(0, sp.alpha);
      this.ctx.fillStyle = sp.color;
      this.ctx.beginPath();
      ctx.arc(sp.x, sp.y, sp.size, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.restore();

      if (sp.alpha <= 0) {
        this.sparkles.splice(i, 1);
      }
    }

    this.animId = requestAnimationFrame(() => this.loop());
  }

  winGame() {
    this.endGame(true);
    if (window.confetti) {
      confetti({
        particleCount: 120,
        spread: 85,
        origin: { y: 0.6 },
        colors: ["#e5c583", "#f7e7be", "#ffffff", "#f4b266", "#78213b"]
      });
    }
  }

  endGame(won) {
    this.isPlaying = false;
    clearInterval(this.timerInterval);
    if (this.animId) cancelAnimationFrame(this.animId);

    this.overlay.classList.remove("hidden");
    if (won) {
      playSuccessChime();
      this.titleElem.textContent = "You Caught All The Starlight Hearts! ✦";
      this.descElem.textContent = "You unlocked my secret love message:";
      this.noteElem.innerHTML = `
        "Truth is, my heart was already entirely yours from August 18, 2026 at 1:48 PM. You never have to chase it — it beats only for you, unconditionally and forever. ♥"
      `;
      this.noteElem.style.display = "block";
      this.startBtn.textContent = "Play Again ✦";
    } else {
      this.titleElem.textContent = "Time's Up! ✨";
      this.descElem.textContent = `You caught ${this.score} / ${this.targetScore} hearts. Try once more to unlock the secret note!`;
      this.startBtn.textContent = "Try Again ✦";
    }
  }
}

new HeartCatchGame();

// ============================================================================
// ROMANTIC QUIZ INTERACTION
// ============================================================================
const QUIZ_RESPONSES = [
  "Aww, my heart just melted! You know me so well ♥",
  "Every single second since August 18, 2026 at 1:48 PM has been pure magic!",
  "I promise with my entire heart to love you better every single day."
];

function handleQuizAnswer(qNum, optIdx) {
  playSparkleSound();

  if (window.confetti) {
    confetti({
      particleCount: 60,
      spread: 65,
      origin: { y: 0.7 },
      colors: ["#e5c583", "#f7e7be", "#ffffff", "#78213b"]
    });
  }

  const card = document.querySelector(`.quiz-card[data-quiz="${qNum}"]`);
  if (card) {
    const btns = card.querySelectorAll(".quiz-opt-btn");
    btns.forEach((b, i) => {
      b.classList.remove("answered-correct");
      if (i === optIdx) b.classList.add("answered-correct");
    });
  }

  showQuizToast(QUIZ_RESPONSES[qNum - 1]);
}

let toastTimeout = null;
function showQuizToast(msg) {
  const toast = document.getElementById("quiz-toast");
  const msgElem = document.getElementById("quiz-toast-msg");
  msgElem.textContent = msg;

  toast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}

// ============================================================================
// THE APOLOGY & GRATITUDE LETTER (3D ROYAL WAX-SEALED ENVELOPE)
// ============================================================================
function openRomanticLetter() {
  const envelope = document.getElementById("envelope-elem");
  const letter = document.getElementById("unfolded-letter");
  const hint = document.getElementById("envelope-hint");

  if (!envelope.classList.contains("opened")) {
    envelope.classList.add("opened");
    playSuccessChime();

    if (window.confetti) {
      confetti({
        particleCount: 90,
        spread: 95,
        origin: { y: 0.65 },
        colors: ["#e5c583", "#f7e7be", "#ffffff", "#78213b", "#4a1525"]
      });
    }

    if (hint) hint.style.display = "none";

    setTimeout(() => {
      letter.style.display = "block";
      letter.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 600);
  }
}

function sendVirtualHug() {
  playSuccessChime();
  if (window.confetti) {
    confetti({
      particleCount: 130,
      spread: 105,
      origin: { y: 0.6 },
      colors: ["#e5c583", "#f7e7be", "#f4b266", "#78213b", "#ffffff"]
    });
  }
  showQuizToast("A tight, warm hug and a gentle forehead kiss sent straight to you ♥");
}
