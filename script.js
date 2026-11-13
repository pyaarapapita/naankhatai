/**
 * ============================================================================
 * OUR STORY • 3D ROMANTIC INTERACTIVE UNIVERSE
 * JavaScript Engine (Three.js + GSAP + Canvas-Confetti + Web Audio API)
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

// Curated romantic captions for memories
const ROMANTIC_CAPTIONS = [
  "Where our spark first caught fire on August 18 at 1:48 PM ✨",
  "The sweetest smile that effortlessly lights up my entire world.",
  "Every time I look at you, I fall in love all over again.",
  "In your eyes, I found my safest and warmest home.",
  "You make ordinary days feel like a cinematic dream.",
  "Late night conversations that I never wanted to end.",
  "The quiet moments with you mean more than anything in this world.",
  "Thank you for being my anchor whenever the storms rolled in.",
  "You're not just my love, you are my best friend.",
  "That contagious laugh of yours is my absolute favorite sound.",
  "Every road traveled with you is pure magic.",
  "You have the gentlest soul and the biggest heart I know.",
  "Holding your hand is the most peaceful feeling in the universe.",
  "A million little things you do that make me love you deeper.",
  "Even on difficult days, having you makes everything okay.",
  "My favorite adventure will always be doing life with you.",
  "You are my answered prayer, my sweetest gift.",
  "I cherish every laugh, every gaze, every memory we share.",
  "You taught me what unconditional love truly looks and feels like.",
  "Forever wouldn't be long enough to spend with you.",
  "Your warmth makes the whole world a softer place.",
  "No matter where life takes us, my heart will always point to you.",
  "The world fades away whenever you are next to me.",
  "Every photograph here is a reminder of how lucky I am.",
  "You made me believe in true soulmates.",
  "The kindness you carry in your heart inspires me every day.",
  "With you, every little coffee date feels like a fairy tale.",
  "Your happiness will always be my highest priority.",
  "A beauty that runs so much deeper than words could ever tell.",
  "I promise to always protect your sweet smile.",
  "Through every season and chapter, I will always choose you.",
  "You make loving you the easiest thing I've ever done.",
  "The memory of our first moment still gives me butterflies.",
  "I love who I am when I am with you.",
  "Every star in the night sky whispers how much I adore you.",
  "You are my dream that came true when I wasn't even looking.",
  "Thank you for never letting go of my hand.",
  "My heart beats in time with yours, always and forever.",
  "You turn every gray sky into a golden sunrise.",
  "Your hugs are where all my worries instantly disappear.",
  "I am so proud of the woman you are becoming.",
  "The purest love I have ever known.",
  "A thousand lifetimes wouldn't be enough to love you.",
  "Our story is my favorite masterpiece.",
  "Thank you for your endless patience and understanding.",
  "You are my today, my tomorrow, and all of my future.",
  "The way you care for people is so breathtaking.",
  "I love the way your eyes crinkle when you truly laugh.",
  "Being yours is the greatest honor of my life.",
  "August 18 • 1:48 PM: The exact moment my forever began ♥"
];

function getCaptionForIndex(idx) {
  return ROMANTIC_CAPTIONS[idx % ROMANTIC_CAPTIONS.length];
}

// ============================================================================
// AUDIO SYNTHESIZER (WEB AUDIO API CHIMES)
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
    
    // Play sweet celestial harp arpeggio
    const freqs = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    freqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.05);

      gain.gain.setValueAtTime(0, now + idx * 0.05);
      gain.gain.linearRampToValueAtTime(0.08, now + idx * 0.05 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.05 + 0.4);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + idx * 0.05);
      osc.stop(now + idx * 0.05 + 0.45);
    });
  } catch (e) {
    // Silent fail if audio context blocked
  }
}

function playSuccessChime() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    const freqs = [587.33, 739.99, 880.00, 1174.66]; // D5, F#5, A5, D6
    freqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);

      gain.gain.setValueAtTime(0, now + idx * 0.08);
      gain.gain.linearRampToValueAtTime(0.12, now + idx * 0.08 + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.8);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.85);
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

  // Spawn floating glowing heart embers
  entryParticles = [];
  const count = Math.min(50, Math.floor(width / 25));
  for (let i = 0; i < count; i++) {
    entryParticles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 12 + 6,
      speedY: Math.random() * 0.8 + 0.3,
      speedX: (Math.random() - 0.5) * 0.6,
      opacity: Math.random() * 0.6 + 0.2,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.03 + 0.01,
      color: Math.random() > 0.4 ? "#ff5e8e" : "#f6d365"
    });
  }

  function drawHeart(ctx, x, y, size, color, alpha) {
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = color;
    ctx.shadowBlur = 15;
    ctx.shadowColor = color;
    ctx.beginPath();
    const topCurveHeight = size * 0.3;
    ctx.moveTo(x, y + topCurveHeight);
    // top left curve
    ctx.bezierCurveTo(x, y, x - size / 2, y, x - size / 2, y + topCurveHeight);
    // bottom left curve
    ctx.bezierCurveTo(x - size / 2, y + (size + topCurveHeight) / 2, x, y + size, x, y + size * 1.2);
    // bottom right curve
    ctx.bezierCurveTo(x, y + size, x + size / 2, y + (size + topCurveHeight) / 2, x + size / 2, y + topCurveHeight);
    // top right curve
    ctx.bezierCurveTo(x + size / 2, y, x, y, x, y + topCurveHeight);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  function loop() {
    ctx.clearRect(0, 0, width, height);
    for (let p of entryParticles) {
      p.y -= p.speedY;
      p.x += Math.sin(p.pulse) * 0.5 + p.speedX;
      p.pulse += p.pulseSpeed;
      if (p.y < -30) {
        p.y = height + 20;
        p.x = Math.random() * width;
      }
      const curAlpha = p.opacity * (0.7 + 0.3 * Math.sin(p.pulse));
      drawHeart(ctx, p.x, p.y, p.size, p.color, curAlpha);
    }
    entryAnimId = requestAnimationFrame(loop);
  }
  loop();
}

enterBtn.addEventListener("click", () => {
  // Trigger Web Audio context unlock
  getAudioContext();
  playSuccessChime();

  // 1.2s smooth curtain fade-out
  entryGate.classList.add("curtain-hidden");
  setTimeout(() => {
    if (entryAnimId) cancelAnimationFrame(entryAnimId);
  }, 1300);

  // Smooth background music fade in 0 -> 0.8
  musicController.fadeIn(0.8, 2000);

  // Initialize and trigger camera fly-in into Three.js galaxy
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
    // If date is set in future
    hudDays.textContent = "000";
    hudHours.textContent = "00";
    hudMinutes.textContent = "00";
    hudSeconds.textContent = "00";
  }
}

setInterval(updateJourneyTimer, 1000);
updateJourneyTimer();

// ============================================================================
// 2. CLASSY FLOATING MUSIC PLAYER WITH VINYL THUMBNAIL UI
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
    this.audio.volume = 0; // Starts silent until entered

    // Toggle Play / Pause
    this.playBtn.addEventListener("click", () => this.togglePlay());

    // Update time & progress ring
    this.audio.addEventListener("timeupdate", () => {
      if (!this.isSeeking) {
        this.updateProgress();
      }
    });

    // Duration loaded
    this.audio.addEventListener("loadedmetadata", () => {
      this.totalTimeElem.textContent = this.formatTime(this.audio.duration);
    });

    // Seek slider input
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

    // Volume Slider
    this.volSlider.addEventListener("input", () => {
      this.audio.volume = parseFloat(this.volSlider.value);
      if (this.audio.volume > 0) this.lastVolume = this.audio.volume;
    });

    // Mute / Unmute Toggle
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

    // Ensure vinyl spins only while audio is playing
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

  fadeIn(targetVol = 0.8, durationMs = 2000) {
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
      console.warn("Autoplay audio blocked or pending user interaction: ", err);
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

    // SVG Circular Progress Ring (circumference = 2 * PI * 25 ≈ 157)
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
// 3. 3D INTERACTIVE PHOTO UNIVERSE (THREE.JS + GSAP)
// ============================================================================
class UniverseManager {
  constructor() {
    this.canvas = document.getElementById("webgl-canvas");
    this.photoList = CONFIG.PHOTOS;
    this.cards = [];
    this.activeCardIndex = 0;
    this.isTouring = false;
    this.tourTimeout = null;
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2(-9999, -9999);
    this.hoveredCard = null;
    this.isModalOpen = false;

    this.initScene();
    this.initLights();
    this.initStars();
    this.initCards();
    this.initEvents();
    this.animate();
  }

  initScene() {
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x120914, 0.0035);

    this.camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      1500
    );
    // Initial position far in deep space for the entry fly-in
    this.camera.position.set(0, 120, 260);

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15;

    // OrbitControls
    this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.maxDistance = 320;
    this.controls.minDistance = 6;
    this.controls.target.set(0, 0, 0);
  }

  initLights() {
    // Soft romantic ambient purple
    const ambientLight = new THREE.AmbientLight(0x401f46, 1.3);
    this.scene.add(ambientLight);

    // Warm rose point light
    this.roseLight = new THREE.PointLight(0xff5e8e, 2.4, 300);
    this.roseLight.position.set(0, 30, 20);
    this.scene.add(this.roseLight);

    // Champagne gold secondary light
    this.goldLight = new THREE.PointLight(0xf6d365, 2.0, 300);
    this.goldLight.position.set(40, -25, -20);
    this.scene.add(this.goldLight);

    // Subtle directional highlight
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(30, 80, 50);
    this.scene.add(dirLight);
  }

  initStars() {
    // 1600 shimmering cosmic star particles
    const starCount = 1600;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);

    const palette = [
      new THREE.Color(0xff8da1), // soft blush
      new THREE.Color(0xf6d365), // warm gold
      new THREE.Color(0xffffff), // starlight white
      new THREE.Color(0xe0a96d)  // rose gold
    ];

    for (let i = 0; i < starCount; i++) {
      const radius = 60 + Math.random() * 380;
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

    // Procedural soft circle sprite for stars
    const starCanvas = document.createElement("canvas");
    starCanvas.width = 32;
    starCanvas.height = 32;
    const sCtx = starCanvas.getContext("2d");
    const grad = sCtx.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, "rgba(255,255,255,1)");
    grad.addColorStop(0.3, "rgba(255,255,255,0.7)");
    grad.addColorStop(1, "rgba(255,255,255,0)");
    sCtx.fillStyle = grad;
    sCtx.beginPath();
    sCtx.arc(16, 16, 16, 0, Math.PI * 2);
    sCtx.fill();

    const starTexture = new THREE.CanvasTexture(starCanvas);
    const material = new THREE.PointsMaterial({
      size: 2.5,
      vertexColors: true,
      map: starTexture,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.starPoints = new THREE.Points(geometry, material);
    this.scene.add(this.starPoints);
  }

  // Generate an elegant procedural placeholder card texture with glowing border & memory number
  createPlaceholderTexture(index) {
    const c = document.createElement("canvas");
    c.width = 400;
    c.height = 560;
    const ctx = c.getContext("2d");

    // Deep luxury vignette gradient
    const bgGrad = ctx.createLinearGradient(0, 0, 400, 560);
    bgGrad.addColorStop(0, "#2c1230");
    bgGrad.addColorStop(0.5, "#180a1c");
    bgGrad.addColorStop(1, "#280f2d");
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 400, 560);

    // Inner glowing rose-gold border
    ctx.strokeStyle = "rgba(246, 211, 101, 0.45)";
    ctx.lineWidth = 6;
    ctx.strokeRect(18, 18, 364, 524);

    // Subtle corner accents
    ctx.strokeStyle = "#ff5e8e";
    ctx.lineWidth = 3;
    ctx.strokeRect(28, 28, 344, 504);

    // Heart icon in center
    ctx.font = "60px serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#ff5e8e";
    ctx.fillText("♥", 200, 240);

    // Memory Number text
    ctx.font = "bold 26px 'Plus Jakarta Sans', sans-serif";
    ctx.fillStyle = "#f6d365";
    ctx.fillText(`Memory #${index + 1}`, 200, 310);

    ctx.font = "18px 'Plus Jakarta Sans', sans-serif";
    ctx.fillStyle = "rgba(255, 240, 243, 0.7)";
    ctx.fillText("August 18 • 1:48 PM", 200, 345);

    const texture = new THREE.CanvasTexture(c);
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  }

  initCards() {
    const total = this.photoList.length;
    this.textureLoader = new THREE.TextureLoader();
    if (typeof window !== "undefined" && window.location.protocol === "file:") {
      this.textureLoader.setCrossOrigin("");
    }

    // Standard card geometry: width 6.8, height 9.2
    const cardGeom = new THREE.PlaneGeometry(6.8, 9.2);
    // Outer border frame: width 7.3, height 9.7
    const frameGeom = new THREE.PlaneGeometry(7.3, 9.7);

    // Spiral Constellation Parameters
    for (let i = 0; i < total; i++) {
      // Golden spiral winding path
      const angle = i * 0.44;
      const radius = 24 + Math.sin(i * 0.22) * 5 + i * 0.32;
      const y = (i - total / 2) * 1.35;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;

      // Group to hold front photo + outer glowing rose-gold border frame
      const cardGroup = new THREE.Group();
      cardGroup.position.set(x, y, z);

      // Card faces outwards from the spiral center with a gentle aesthetic tilt
      cardGroup.lookAt(x * 1.5, y + 1.5, z * 1.5);
      cardGroup.rotateZ((Math.sin(i * 0.7) * 0.08));

      // 1. Outer Rose-Gold Bevel / Border Mesh
      const frameMat = new THREE.MeshStandardMaterial({
        color: 0x240f28,
        metalness: 0.85,
        roughness: 0.25,
        emissive: 0xff5e8e,
        emissiveIntensity: 0.15,
        side: THREE.DoubleSide
      });
      const frameMesh = new THREE.Mesh(frameGeom, frameMat);
      frameMesh.position.z = -0.02;
      cardGroup.add(frameMesh);

      // 2. Photo Card Mesh (Starts with elegant procedural placeholder)
      const placeholderTex = this.createPlaceholderTexture(i);
      const photoMat = new THREE.MeshBasicMaterial({
        map: placeholderTex,
        side: THREE.FrontSide
      });

      const photoMesh = new THREE.Mesh(cardGeom, photoMat);
      photoMesh.userData = {
        index: i,
        photoSrc: this.photoList[i],
        caption: getCaptionForIndex(i),
        group: cardGroup,
        frameMat: frameMat,
        baseScale: 1
      };
      cardGroup.add(photoMesh);

      // Save references
      this.cards.push({
        group: cardGroup,
        photoMesh: photoMesh,
        frameMat: frameMat,
        photoMat: photoMat,
        photoSrc: this.photoList[i],
        index: i,
        basePos: new THREE.Vector3(x, y, z),
        textureLoaded: false
      });

      this.scene.add(cardGroup);
    }

    // Progressively load textures in batches to preserve mobile memory and smooth 60fps
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
            console.warn(`Fallback for image ${item.photoSrc}: `, err);
          }
        );
      }

      currentIdx = end;
      // Stagger next batch by 120ms
      setTimeout(loadNextBatch, 120);
    };

    loadNextBatch();
  }

  startIntroFlyIn() {
    // Smooth cinematic camera sweep into the spiral galaxy
    gsap.to(this.camera.position, {
      x: 0,
      y: 16,
      z: 68,
      duration: 2.8,
      ease: "power2.out",
      onUpdate: () => {
        this.controls.target.set(0, 0, 0);
        this.controls.update();
      }
    });
  }

  initEvents() {
    // Window Resize
    window.addEventListener("resize", () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Pointer Move for Raycasting Hover (ignores UI elements)
    window.addEventListener("pointermove", (e) => {
      if (this.isModalOpen) return;
      if (e.target !== this.canvas) {
        this.mouse.x = -9999;
        this.mouse.y = -9999;
        if (this.hoveredCard) {
          gsap.to(this.hoveredCard.userData.group.scale, { x: 1, y: 1, z: 1, duration: 0.25 });
          this.hoveredCard.userData.frameMat.emissiveIntensity = 0.15;
          this.hoveredCard = null;
          document.body.style.cursor = "default";
        }
        return;
      }
      this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    // Pointer Click exclusively on the 3D Canvas
    this.canvas.addEventListener("pointerdown", (e) => {
      this.pointerDownPos = { x: e.clientX, y: e.clientY };
    });

    this.canvas.addEventListener("pointerup", (e) => {
      if (this.isModalOpen || !this.controls.enabled) return;
      
      // Prevent click trigger if user was dragging orbit controls
      if (this.pointerDownPos) {
        const dist = Math.hypot(e.clientX - this.pointerDownPos.x, e.clientY - this.pointerDownPos.y);
        if (dist > 5) return;
      }

      // If already hovering over a valid card in foreground, open it directly
      if (this.hoveredCard) {
        this.openMemory(this.hoveredCard.userData.index);
        return;
      }

      // Fallback click check with exact event coordinates & distance threshold
      const clickCoords = new THREE.Vector2(
        (e.clientX / window.innerWidth) * 2 - 1,
        -(e.clientY / window.innerHeight) * 2 + 1
      );
      this.raycaster.setFromCamera(clickCoords, this.camera);
      const meshes = this.cards.map(c => c.photoMesh);
      const intersects = this.raycaster.intersectObjects(meshes);

      // Only open if clicking directly on a foreground card (< 95 units away)
      if (intersects.length > 0 && intersects[0].distance < 95) {
        const hit = intersects[0].object;
        this.openMemory(hit.userData.index);
      }
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

    // Keyboard navigation
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

    // Smoothly fly camera to face the card in 3D
    const groupPos = card.group.position;
    const offsetDir = new THREE.Vector3().subVectors(this.camera.position, groupPos).normalize();
    const targetCamPos = groupPos.clone().add(offsetDir.multiplyScalar(15));

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

    // Populate and display Lightbox Modal
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
    const lightbox = document.getElementById("memory-lightbox");
    lightbox.classList.remove("is-open");
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

    // Smoothly fly camera to next memory
    const groupPos = card.group.position;
    const targetCamPos = groupPos.clone().add(new THREE.Vector3(0, 2, 14));

    // Update counter pill
    const counterPill = document.getElementById("memory-counter-pill");
    counterPill.innerHTML = `<span>Memory #${index + 1}: ${card.photoMesh.userData.caption.slice(0, 32)}...</span>`;

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
        // Pulse card
        gsap.to(card.group.scale, {
          x: 1.15,
          y: 1.15,
          z: 1.15,
          duration: 0.4,
          yoyo: true,
          repeat: 1
        });

        // Wait 3.5 seconds before moving to next memory
        this.tourTimeout = setTimeout(() => {
          if (this.isTouring) {
            const nextIdx = (index + 1) % this.cards.length;
            this.tourStep(nextIdx);
          }
        }, 3500);
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
      duration: 1.5,
      ease: "power2.out"
    });

    gsap.to(this.camera.position, {
      x: 0,
      y: 16,
      z: 68,
      duration: 1.5,
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

    // Gentle organic floating bobbing of photo cards
    for (let i = 0; i < this.cards.length; i++) {
      const item = this.cards[i];
      item.group.position.y = item.basePos.y + Math.sin(time * 1.4 + i * 0.5) * 0.22;
    }

    // Raycast hover check when modal is not open
    if (!this.isModalOpen && this.controls.enabled) {
      this.raycaster.setFromCamera(this.mouse, this.camera);
      const meshes = this.cards.map(c => c.photoMesh);
      const intersects = this.raycaster.intersectObjects(meshes);

      // Only hover foreground cards within reaching distance (< 95 units)
      if (intersects.length > 0 && intersects[0].distance < 95) {
        const hit = intersects[0].object;
        if (this.hoveredCard !== hit) {
          if (this.hoveredCard) {
            // Unhover previous
            gsap.to(this.hoveredCard.userData.group.scale, { x: 1, y: 1, z: 1, duration: 0.25 });
            this.hoveredCard.userData.frameMat.emissiveIntensity = 0.15;
          }
          this.hoveredCard = hit;
          gsap.to(hit.userData.group.scale, { x: 1.12, y: 1.12, z: 1.12, duration: 0.25 });
          hit.userData.frameMat.emissiveIntensity = 0.65;
          document.body.style.cursor = "pointer";
        }
      } else if (this.hoveredCard) {
        gsap.to(this.hoveredCard.userData.group.scale, { x: 1, y: 1, z: 1, duration: 0.25 });
        this.hoveredCard.userData.frameMat.emissiveIntensity = 0.15;
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
// TOP NAVIGATION DOCK (SWITCH BETWEEN UNIVERSE / ARCADE / LETTER)
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
      // 3D Universe active
      if (universeManager) universeManager.controls.enabled = true;
    }
  });
});

// ============================================================================
// 5. MINI-GAME ("CATCH MY HEART")
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

    // Click / Touch detection
    const handleTap = (clientX, clientY) => {
      if (!this.isPlaying) return;
      const rect = this.canvas.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      for (let i = this.hearts.length - 1; i >= 0; i--) {
        const h = this.hearts[i];
        const dist = Math.hypot(h.x - x, h.y - y);
        if (dist <= h.size * 1.5) {
          // Catch heart!
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
    const colors = ["#ff5e8e", "#ff8da1", "#f6d365", "#e63946"];
    this.hearts.push({
      x: Math.random() * (this.width - 40) + 20,
      y: this.height + 30,
      size: Math.random() * 14 + 14,
      speedY: Math.random() * 2.2 + 1.2,
      sineOffset: Math.random() * Math.PI * 2,
      sineSpeed: Math.random() * 0.05 + 0.02,
      sineAmp: Math.random() * 1.5 + 0.5,
      color: colors[Math.floor(Math.random() * colors.length)],
      pulse: Math.random() * Math.PI
    });
  }

  spawnSparkles(x, y, color) {
    for (let i = 0; i < 16; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 4 + 1.5;
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
    ctx.shadowBlur = 12;
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

    // Spawn new hearts
    if (Math.random() < 0.08) {
      this.spawnHeart();
    }

    // Update & Draw Hearts
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

    // Update & Draw Sparkles
    for (let i = this.sparkles.length - 1; i >= 0; i--) {
      const sp = this.sparkles[i];
      sp.x += sp.vx;
      sp.y += sp.vy;
      sp.alpha -= 0.035;

      this.ctx.save();
      this.ctx.globalAlpha = Math.max(0, sp.alpha);
      this.ctx.fillStyle = sp.color;
      this.ctx.beginPath();
      this.ctx.arc(sp.x, sp.y, sp.size, 0, Math.PI * 2);
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
    // Launch festive heart confetti
    if (window.confetti) {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#ff5e8e", "#f6d365", "#ff8da1", "#ffffff"]
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
      this.titleElem.textContent = "You Caught All My Hearts! 💖";
      this.descElem.textContent = "You unlocked my secret love message:";
      this.noteElem.innerHTML = `
        "Truth is, my heart was already yours from August 18 at 1:48 PM. You never have to chase it — it beats only for you, always and unconditionally. ♥"
      `;
      this.noteElem.style.display = "block";
      this.startBtn.textContent = "Play Again ✨";
    } else {
      this.titleElem.textContent = "Time's Up! 🌸";
      this.descElem.textContent = `You caught ${this.score} / ${this.targetScore} hearts. Try once more to unlock the secret note!`;
      this.startBtn.textContent = "Try Again 💖";
    }
  }
}

new HeartCatchGame();

// ============================================================================
// ROMANTIC QUIZ INTERACTION
// ============================================================================
const QUIZ_RESPONSES = [
  "Aww, my heart just melted! You know me so well ♥",
  "Every single second since Aug 18, 1:48 PM has been pure magic!",
  "I promise with my entire heart to love you better every single day."
];

function handleQuizAnswer(qNum, optIdx) {
  playSparkleSound();

  // Burst confetti
  if (window.confetti) {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#ff5e8e", "#f6d365", "#ffd1dc"]
    });
  }

  // Highlight button
  const card = document.querySelector(`.quiz-card[data-quiz="${qNum}"]`);
  if (card) {
    const btns = card.querySelectorAll(".quiz-opt-btn");
    btns.forEach((b, i) => {
      b.classList.remove("answered-correct");
      if (i === optIdx) b.classList.add("answered-correct");
    });
  }

  // Show Sweet Toast
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
// THE APOLOGY & GRATITUDE LETTER (3D ANIMATED ENVELOPE)
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
        particleCount: 80,
        spread: 90,
        origin: { y: 0.65 },
        colors: ["#ff5e8e", "#f6d365", "#e63946", "#ffd1dc"]
      });
    }

    if (hint) hint.style.display = "none";

    // Unfold letter with smooth delay
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
      particleCount: 120,
      spread: 100,
      origin: { y: 0.6 },
      colors: ["#ff4d6d", "#ff758c", "#ff8da1", "#ffd1dc", "#f6d365"]
    });
  }
  showQuizToast("A tight, warm hug and a gentle kiss sent straight to you ♥");
}
