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

// 100 Curated, grounded romantic memories with chapter mapping
const MEMORY_DATA = [
  {
    "title": "Where our story first began",
    "caption": "The day everything quietly shifted and my world found its favorite person.",
    "chapter": "early"
  },
  {
    "title": "The very first conversation",
    "caption": "We started talking and suddenly hours melted into what felt like five minutes.",
    "chapter": "early"
  },
  {
    "title": "That instant, effortless spark",
    "caption": "I remember noticing how natural it felt to just be myself around you.",
    "chapter": "early"
  },
  {
    "title": "The first time your smile caught me off guard",
    "caption": "You gave that gentle smile and I knew right then you were someone really special.",
    "chapter": "early"
  },
  {
    "title": "A nervous glance that meant everything",
    "caption": "That quiet, unhurried moment where neither of us wanted the conversation to end.",
    "chapter": "early"
  },
  {
    "title": "Talking about everything under the sun",
    "caption": "We talked about the most random things, yet every word felt important.",
    "chapter": "early"
  },
  {
    "title": "The moment I realized you were different",
    "caption": "I caught myself smiling at my phone like an idiot after saying goodbye.",
    "chapter": "early"
  },
  {
    "title": "When hours started passing like minutes",
    "caption": "Looking back, that was the exact moment life got infinitely sweeter.",
    "chapter": "early"
  },
  {
    "title": "First day butterflies that never quite left",
    "caption": "You walked in with so much warmth that the whole room felt different.",
    "chapter": "early"
  },
  {
    "title": "Our awkward first inside jokes",
    "caption": "Those first shared glances where words weren't even necessary.",
    "chapter": "early"
  },
  {
    "title": "The first shared laugh that felt like home",
    "caption": "I knew right here that you were going to mean the world to me.",
    "chapter": "early"
  },
  {
    "title": "Realizing I wanted to know everything about you",
    "caption": "A simple hello that changed the entire direction of my life.",
    "chapter": "early"
  },
  {
    "title": "The playlist swap that started it all",
    "caption": "Exchanging our favorite songs and realizing our tastes aligned so well.",
    "chapter": "early"
  },
  {
    "title": "Checking my phone hoping it was your text",
    "caption": "That nervous flutter in my chest every time your name popped up on my screen.",
    "chapter": "early"
  },
  {
    "title": "The sweet beginning of us",
    "caption": "The quiet start to our journey together.",
    "chapter": "early"
  },
  {
    "title": "When you smiled and my heart did a backflip",
    "caption": "Your laughter was so pure and genuine — I knew I wanted to hear it every day.",
    "chapter": "early"
  },
  {
    "title": "The very first walk where time stood still",
    "caption": "A quiet evening walk where neither of us wanted to say goodbye.",
    "chapter": "early"
  },
  {
    "title": "Finding out how much we had in common",
    "caption": "Finding out all the little quirks we share that make us click.",
    "chapter": "early"
  },
  {
    "title": "That unspoken connection from day one",
    "caption": "A spark that felt calm, steady, and so right from the beginning.",
    "chapter": "early"
  },
  {
    "title": "The moment a friendship turned into something sacred",
    "caption": "The very first chapter of a story I wouldn't trade for anything in this world.",
    "chapter": "early"
  },
  {
    "title": "Late night street food craving",
    "caption": "Standing by a food stall at midnight laughing about nothing in particular.",
    "chapter": "food"
  },
  {
    "title": "Your face when the food finally arrives",
    "caption": "That pure, unadulterated joy in your eyes right before your first bite.",
    "chapter": "food"
  },
  {
    "title": "Stealing the last bite of dessert",
    "caption": "You claimed you were full, but somehow that last piece magically disappeared.",
    "chapter": "food"
  },
  {
    "title": "The 45-minute menu debate",
    "caption": "Going back and forth for an eternity just to order what we always order.",
    "chapter": "food"
  },
  {
    "title": "Our favorite cozy cafe corner",
    "caption": "Tucked away in the corner of our favorite cafe, completely lost in our own bubble.",
    "chapter": "food"
  },
  {
    "title": "Coffee dates that turn into dinner",
    "caption": "What was supposed to be a quick coffee turned into five hours of storytelling.",
    "chapter": "food"
  },
  {
    "title": "Post-midnight ice cream run",
    "caption": "Late night craving runs in pajamas because life is too short to skip dessert.",
    "chapter": "food"
  },
  {
    "title": "When we ordered way too much food",
    "caption": "We convinced ourselves we could finish it all. We definitely couldn't.",
    "chapter": "food"
  },
  {
    "title": "Sharing one plate and fighting over fries",
    "caption": "Splitting a meal and pretending I'm mad that you ate all the good pieces.",
    "chapter": "food"
  },
  {
    "title": "The best tea after a long exhausting day",
    "caption": "A hot cup of tea, cool breeze, and your voice washing away all the stress.",
    "chapter": "food"
  },
  {
    "title": "Cooking together and almost burning it",
    "caption": "The kitchen was a chaotic disaster, but the laughs were totally worth it.",
    "chapter": "food"
  },
  {
    "title": "Spicy food regrets and endless water glasses",
    "caption": "You swore it wasn't too spicy, and then we both drank three bottles of water.",
    "chapter": "food"
  },
  {
    "title": "That hidden food spot we discovered together",
    "caption": "Finding that tiny hole-in-the-wall spot that instantly became 'our place'.",
    "chapter": "food"
  },
  {
    "title": "Comfort food on a rainy afternoon",
    "caption": "Warm comfort food while watching the rain outside — pure bliss.",
    "chapter": "food"
  },
  {
    "title": "Sweet tooth emergencies at 1 AM",
    "caption": "Cruising through quiet streets hunting for anything sweet that was still open.",
    "chapter": "food"
  },
  {
    "title": "Biting into something delicious and doing a little dance",
    "caption": "Watching you do your happy foodie shimmy is the cutest thing on this planet.",
    "chapter": "food"
  },
  {
    "title": "Breakfast dates when we are barely awake",
    "caption": "Sleepy eyes, messy hair, and warm coffee across the breakfast table.",
    "chapter": "food"
  },
  {
    "title": "The battle over who pays the bill",
    "caption": "The silent wrestling match under the table trying to grab the bill first.",
    "chapter": "food"
  },
  {
    "title": "Mid-drive snack pitstop",
    "caption": "Stopping by the roadside just to grab snacks we definitely didn't need.",
    "chapter": "food"
  },
  {
    "title": "When you made me try something new and I actually loved it",
    "caption": "I only tried it because you insisted, and now I'm completely hooked.",
    "chapter": "food"
  },
  {
    "title": "Late night noodles and random life talks",
    "caption": "Slurping noodles at 1:30 AM while solving all the world's problems.",
    "chapter": "food"
  },
  {
    "title": "Your signature foodie happy face",
    "caption": "The cutest expression you make when the food exceeds all expectations.",
    "chapter": "food"
  },
  {
    "title": "Dessert before dinner because why not",
    "caption": "Breaking every rule of balanced nutrition because you wanted waffles.",
    "chapter": "food"
  },
  {
    "title": "Sharing drinks and stealing sips",
    "caption": "You taking a 'tiny sip' and half the glass being gone — classic you.",
    "chapter": "food"
  },
  {
    "title": "Food always tastes ten times better when I'm with you",
    "caption": "Honestly, even plain bread would taste gourmet if I get to eat it beside you.",
    "chapter": "food"
  },
  {
    "title": "Taking the longest detour possible",
    "caption": "Missing our turn three times because we were too busy talking about life.",
    "chapter": "chaos"
  },
  {
    "title": "Singing completely off-key in the car",
    "caption": "Blasting our favorite track with the windows rolled down, screaming every lyric.",
    "chapter": "chaos"
  },
  {
    "title": "When everything went wrong and we couldn't stop laughing",
    "caption": "The plan completely fell apart, but it turned into the best day we ever had.",
    "chapter": "chaos"
  },
  {
    "title": "Getting drenched in sudden rain",
    "caption": "Running for shelter under a tiny awning, soaked to the bone and laughing.",
    "chapter": "chaos"
  },
  {
    "title": "Silly candid faces when no one's looking",
    "caption": "Catching you making that ridiculous face right before I took the photo.",
    "chapter": "chaos"
  },
  {
    "title": "An unplanned drive with zero destination",
    "caption": "No GPS, no timeline, just good music and the open road with you.",
    "chapter": "chaos"
  },
  {
    "title": "When you lost your keys for the tenth time",
    "caption": "Searching every bag and pocket for ten minutes only to find them in your hand.",
    "chapter": "chaos"
  },
  {
    "title": "Our inside jokes that make zero sense to anyone else",
    "caption": "Someone saying one word and both of us instantly bursting into giggles.",
    "chapter": "chaos"
  },
  {
    "title": "Attempting a serious photo and failing miserably",
    "caption": "We tried to look dignified and aesthetic for once, and we lasted about two seconds.",
    "chapter": "chaos"
  },
  {
    "title": "Walking through crowded streets hand in hand",
    "caption": "Weaving through the bustling crowd, making sure your hand never slipped from mine.",
    "chapter": "chaos"
  },
  {
    "title": "The chaotic rush to catch our timing",
    "caption": "Running late as usual, but somehow making the chaos feel like a fun movie.",
    "chapter": "chaos"
  },
  {
    "title": "When you got scared of something tiny",
    "caption": "You jumping a mile high over a tiny moth — I will never let you live that down.",
    "chapter": "chaos"
  },
  {
    "title": "Teasing each other till tears rolled down",
    "caption": "Roasting each other with so much love that our cheeks hurt from smiling.",
    "chapter": "chaos"
  },
  {
    "title": "Messy hair, strong winds, and wide smiles",
    "caption": "Windswept, exhausted, and happier than anyone has any right to be.",
    "chapter": "chaos"
  },
  {
    "title": "Spontaneous plans that turned into core memories",
    "caption": "The best days are always the ones we never put on a calendar.",
    "chapter": "chaos"
  },
  {
    "title": "Getting lost and calling it an adventure",
    "caption": "Realizing we were completely lost and deciding that was even better.",
    "chapter": "chaos"
  },
  {
    "title": "When you won the argument with that smug grin",
    "caption": "You gave that little triumphant eyebrow raise and I had to surrender.",
    "chapter": "chaos"
  },
  {
    "title": "Random goofy selfies in the camera roll",
    "caption": "Finding these candid gems later and remembering how much fun we had.",
    "chapter": "chaos"
  },
  {
    "title": "Late night conversations in the car outside your place",
    "caption": "Sitting in the parked car for an extra hour because neither of us wanted to say goodnight.",
    "chapter": "chaos"
  },
  {
    "title": "When we laughed at the exact same moment across the room",
    "caption": "One glance between us and we both knew exactly what the other was thinking.",
    "chapter": "chaos"
  },
  {
    "title": "Tripping over nothing and acting like it was planned",
    "caption": "The clumsy moments that prove we are perfectly imperfect together.",
    "chapter": "chaos"
  },
  {
    "title": "Our dramatic reenactments of everyday drama",
    "caption": "Listening to you passionately explain random drama is top-tier entertainment.",
    "chapter": "chaos"
  },
  {
    "title": "Weathering the little storms together",
    "caption": "No matter how hectic things got, we always found our way back to laughter.",
    "chapter": "chaos"
  },
  {
    "title": "The hilarious stories we will tell for years",
    "caption": "These ridiculous moments are the ones I know I will cherish for decades.",
    "chapter": "chaos"
  },
  {
    "title": "Never a dull moment when you're around",
    "caption": "Life with you is never boring — it's colorful, loud, and full of heart.",
    "chapter": "chaos"
  },
  {
    "title": "Comfortable silence after a long day",
    "caption": "We didn't need to speak a single word — just sitting together was enough.",
    "chapter": "sweet"
  },
  {
    "title": "Your hand gently holding my sleeve",
    "caption": "That subtle, unconscious way you reach out for my hand when we walk.",
    "chapter": "sweet"
  },
  {
    "title": "Watching the city lights at midnight",
    "caption": "Looking out at the quiet city, grateful beyond words for the person beside me.",
    "chapter": "sweet"
  },
  {
    "title": "When you fell asleep mid-sentence",
    "caption": "You insisted you weren't tired, and thirty seconds later you were completely asleep.",
    "chapter": "sweet"
  },
  {
    "title": "Warm tea and quiet afternoon sun",
    "caption": "Golden sunlight streaming through the window and quiet tea between us.",
    "chapter": "sweet"
  },
  {
    "title": "That look of pure warmth across the table",
    "caption": "I looked up and caught you looking at me with that gentle, unmistakable warmth.",
    "chapter": "sweet"
  },
  {
    "title": "The softest forehead kiss",
    "caption": "A quiet forehead kiss to remind you that you are always safe with me.",
    "chapter": "sweet"
  },
  {
    "title": "Checking in on me during a chaotic workday",
    "caption": "A three-word text during my hardest afternoon that made everything feel manageable.",
    "chapter": "sweet"
  },
  {
    "title": "Sitting side by side watching the sky change colors",
    "caption": "Watching the sky turn shades of pink and gold, resting in pure tranquility.",
    "chapter": "sweet"
  },
  {
    "title": "The way you care for stray animals",
    "caption": "Watching your heart melt for every stray dog or kitten we pass on the road.",
    "chapter": "sweet"
  },
  {
    "title": "Holding your cold hands in my warm pockets",
    "caption": "Your hands were like ice, but holding them warmed up my entire world.",
    "chapter": "sweet"
  },
  {
    "title": "Hearing your voice when I needed it most",
    "caption": "Rough days instantly lose their weight the second I hear your voice.",
    "chapter": "sweet"
  },
  {
    "title": "The peace I feel when you are near",
    "caption": "There is a calmness in your presence that I have never found anywhere else.",
    "chapter": "sweet"
  },
  {
    "title": "Your gentle, thoughtful little surprises",
    "caption": "The tiny, selfless things you do quietly without asking for any recognition.",
    "chapter": "sweet"
  },
  {
    "title": "Finding our rhythm in everyday life",
    "caption": "The simple joy of grocery shopping, cooking, or doing chores side by side.",
    "chapter": "sweet"
  },
  {
    "title": "The quiet safety of being together",
    "caption": "Knowing that whatever happens outside, I have a home to return to in you.",
    "chapter": "sweet"
  },
  {
    "title": "When you rested your head on my shoulder",
    "caption": "You rested your head on my shoulder on the way back, and I wished the ride was infinite.",
    "chapter": "sweet"
  },
  {
    "title": "Sharing secrets we never told anyone else",
    "caption": "Opening up about our fears and dreams, knowing we are safe with each other.",
    "chapter": "sweet"
  },
  {
    "title": "A calm evening with zero distractions",
    "caption": "No phones, no rushing, just quiet breathing and gentle conversation.",
    "chapter": "sweet"
  },
  {
    "title": "The way you believe in me when I doubt myself",
    "caption": "You see strength in me on the days I struggle to see it in myself.",
    "chapter": "sweet"
  },
  {
    "title": "Our little routine that feels like home",
    "caption": "The comforting predictability of our good mornings and sleepy goodnights.",
    "chapter": "sweet"
  },
  {
    "title": "Watching you smile when you think nobody is looking",
    "caption": "Caught off guard, smiling at your own thoughts — my absolute favorite sight.",
    "chapter": "sweet"
  },
  {
    "title": "The softness in your eyes",
    "caption": "A gentleness that runs so much deeper than words could ever convey.",
    "chapter": "sweet"
  },
  {
    "title": "Every ordinary Tuesday that feels special with you",
    "caption": "You have this superpower of turning an ordinary weekday into something memorable.",
    "chapter": "sweet"
  },
  {
    "title": "Thank you for being my anchor",
    "caption": "Whenever life felt overwhelming, you were the calm that pulled me through.",
    "chapter": "sweet"
  },
  {
    "title": "Growing together through every season",
    "caption": "Learning, adapting, apologizing, and loving each other better with each passing week.",
    "chapter": "sweet"
  },
  {
    "title": "The comfort of knowing you're in my corner",
    "caption": "Having someone who knows the real you and loves you even more for it.",
    "chapter": "sweet"
  },
  {
    "title": "A love that feels calm, steady, and true",
    "caption": "Not a fleeting spark, but a warm, steady hearth that never goes cold.",
    "chapter": "sweet"
  },
  {
    "title": "My favorite view will always be you",
    "caption": "The world has so many beautiful places, but nothing compares to your smile.",
    "chapter": "sweet"
  },
  {
    "title": "A hundred memories down, a lifetime more to go",
    "caption": "This website holds our first 100 memories, but our journey is just getting started.",
    "chapter": "sweet"
  }
];

// Chapter labels mapping
const CHAPTER_INFO = {
  all: { label: "All Memories", count: 100 },
  early: { label: "Early Days", count: 20 },
  food: { label: "Food & Late Nights", count: 25 },
  chaos: { label: "Chaos & Trips", count: 25 },
  sweet: { label: "Sweet & Quiet", count: 30 }
};

// ============================================================================
// AUDIO SYNTHESIZER (WEB AUDIO API CELESTIAL CHIMES)
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

if (enterBtn) {
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
}

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

    if (hudDays) hudDays.textContent = String(days).padStart(3, "0");
    if (hudHours) hudHours.textContent = String(hours).padStart(2, "0");
    if (hudMinutes) hudMinutes.textContent = String(mins).padStart(2, "0");
    if (hudSeconds) hudSeconds.textContent = String(secs).padStart(2, "0");
  } else {
    if (hudDays) hudDays.textContent = "000";
    if (hudHours) hudHours.textContent = "00";
    if (hudMinutes) hudMinutes.textContent = "00";
    if (hudSeconds) hudSeconds.textContent = "00";
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
    if (!this.audio) return;
    this.audio.volume = 0;

    if (this.playBtn) {
      this.playBtn.addEventListener("click", () => this.togglePlay());
    }

    this.audio.addEventListener("timeupdate", () => {
      if (!this.isSeeking) {
        this.updateProgress();
      }
    });

    this.audio.addEventListener("loadedmetadata", () => {
      if (this.totalTimeElem) {
        this.totalTimeElem.textContent = this.formatTime(this.audio.duration);
      }
    });

    if (this.seekSlider) {
      this.seekSlider.addEventListener("input", () => {
        this.isSeeking = true;
        const pct = this.seekSlider.value / 100;
        if (this.currentTimeElem) {
          this.currentTimeElem.textContent = this.formatTime(pct * (this.audio.duration || 0));
        }
      });

      this.seekSlider.addEventListener("change", () => {
        const pct = this.seekSlider.value / 100;
        this.audio.currentTime = pct * (this.audio.duration || 0);
        this.isSeeking = false;
      });
    }

    if (this.volSlider) {
      this.volSlider.addEventListener("input", () => {
        this.audio.volume = parseFloat(this.volSlider.value);
        if (this.audio.volume > 0) this.lastVolume = this.audio.volume;
      });
    }

    if (this.volBtn) {
      this.volBtn.addEventListener("click", () => {
        if (this.audio.volume > 0) {
          this.lastVolume = this.audio.volume;
          this.audio.volume = 0;
          if (this.volSlider) this.volSlider.value = 0;
        } else {
          this.audio.volume = this.lastVolume || 0.8;
          if (this.volSlider) this.volSlider.value = this.audio.volume;
        }
      });
    }

    this.audio.addEventListener("play", () => {
      if (this.vinylDisc) this.vinylDisc.classList.add("is-playing");
      if (this.playIcon) this.playIcon.style.display = "none";
      if (this.pauseIcon) this.pauseIcon.style.display = "block";
    });

    this.audio.addEventListener("pause", () => {
      if (this.vinylDisc) this.vinylDisc.classList.remove("is-playing");
      if (this.playIcon) this.playIcon.style.display = "block";
      if (this.pauseIcon) this.pauseIcon.style.display = "none";
    });
  }

  togglePlay() {
    getAudioContext();
    if (!this.audio) return;
    if (this.audio.paused) {
      this.audio.play().catch(e => console.log("Play interrupted: ", e));
    } else {
      this.audio.pause();
    }
  }

  fadeIn(targetVol = 0.8, durationMs = 2200) {
    if (!this.audio) return;
    this.audio.volume = 0;
    this.audio.play().then(() => {
      if (this.vinylDisc) this.vinylDisc.classList.add("is-playing");
      if (this.playIcon) this.playIcon.style.display = "none";
      if (this.pauseIcon) this.pauseIcon.style.display = "block";

      const startTime = performance.now();
      const step = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / durationMs, 1);
        this.audio.volume = progress * targetVol;
        if (this.volSlider) this.volSlider.value = this.audio.volume;
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
    if (!this.audio) return;
    const cur = this.audio.currentTime || 0;
    const dur = this.audio.duration || 1;
    const progressPct = cur / dur;

    if (this.currentTimeElem) this.currentTimeElem.textContent = this.formatTime(cur);
    if (this.totalTimeElem && !isNaN(dur) && dur > 1) {
      this.totalTimeElem.textContent = this.formatTime(dur);
    }
    if (this.seekSlider) this.seekSlider.value = progressPct * 100;

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
    this.currentChapter = "all"; // all | early | food | chaos | sweet
    this.isTouring = false;
    this.tourTimeout = null;
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2(-9999, -9999);
    this.parallaxMouse = new THREE.Vector2(0, 0);
    this.cameraParallaxOffset = new THREE.Vector2(0, 0);
    this.hoveredCard = null;
    this.isModalOpen = false;
    this.sparks3D = [];

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
    this.scene.fog = new THREE.FogExp2(0x06050a, 0.0024);

    this.camera = new THREE.PerspectiveCamera(
      54,
      window.innerWidth / window.innerHeight,
      0.1,
      2500
    );
    this.camera.position.set(0, 130, 260);

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.3;

    this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.045;
    this.controls.maxDistance = 340;
    this.controls.minDistance = 10;
    this.controls.target.set(0, 0, 0);
  }

  initLights() {
    // Ambient cosmic indigo
    const ambientLight = new THREE.AmbientLight(0x201a35, 1.5);
    this.scene.add(ambientLight);

    // Warm champagne gold primary point light
    this.goldPoint = new THREE.PointLight(0xe5c583, 3.4, 380);
    this.goldPoint.position.set(0, 50, 35);
    this.scene.add(this.goldPoint);

    // Deep velvet bordeaux secondary warmth
    this.winePoint = new THREE.PointLight(0x78213b, 2.6, 320);
    this.winePoint.position.set(55, -40, -30);
    this.scene.add(this.winePoint);

    // Starlight blue accent
    this.bluePoint = new THREE.PointLight(0x6a89b8, 1.8, 300);
    this.bluePoint.position.set(-50, 30, -30);
    this.scene.add(this.bluePoint);

    // Crisp directional key light for metallic highlights
    const dirLight = new THREE.DirectionalLight(0xfff8ee, 1.3);
    dirLight.position.set(40, 110, 70);
    this.scene.add(dirLight);
  }

  initCosmicAtmosphere() {
    // 1. Dual-Depth Particle System:
    // (A) Distant Galaxy Starfield (2,400 Stars)
    const starCount = 2400;
    const starGeom = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    const palette = [
      new THREE.Color(0xe5c583), // Champagne Gold
      new THREE.Color(0xf7e7be), // Light Gold
      new THREE.Color(0xf4b266), // Amber
      new THREE.Color(0x8aaad6), // Starlight Blue
      new THREE.Color(0xffffff)  // Pure White
    ];

    for (let i = 0; i < starCount; i++) {
      const radius = 80 + Math.random() * 450;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      starPositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      starPositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      starPositions[i * 3 + 2] = radius * Math.cos(phi);

      const color = palette[Math.floor(Math.random() * palette.length)];
      starColors[i * 3] = color.r;
      starColors[i * 3 + 1] = color.g;
      starColors[i * 3 + 2] = color.b;
    }

    starGeom.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    starGeom.setAttribute("color", new THREE.BufferAttribute(starColors, 3));

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
      size: 3.0,
      vertexColors: true,
      map: starTexture,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.starPoints = new THREE.Points(starGeom, starMat);
    this.scene.add(this.starPoints);

    // (B) Foreground Cosmic Dust Motes (100 Motes - floating close for real 3D depth parallax)
    const dustCount = 100;
    const dustGeom = new THREE.BufferGeometry();
    const dustPositions = new Float32Array(dustCount * 3);
    for (let d = 0; d < dustCount; d++) {
      dustPositions[d * 3] = (Math.random() - 0.5) * 140;
      dustPositions[d * 3 + 1] = (Math.random() - 0.5) * 120;
      dustPositions[d * 3 + 2] = (Math.random() - 0.5) * 140;
    }
    dustGeom.setAttribute("position", new THREE.BufferAttribute(dustPositions, 3));
    const dustMat = new THREE.PointsMaterial({
      color: 0xf7e7be,
      size: 4.5,
      map: starTexture,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    this.dustPoints = new THREE.Points(dustGeom, dustMat);
    this.scene.add(this.dustPoints);

    // 2. Orbital Saturnian Stardust Rings
    const ringGeom = new THREE.RingGeometry(85, 130, 64);
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

    // 3. Floating Diamond Octahedron Crystals
    this.diamondCrystals = [];
    const crystalGeom = new THREE.OctahedronGeometry(1.4, 0);
    const crystalMat = new THREE.MeshStandardMaterial({
      color: 0xe5c583,
      metalness: 0.9,
      roughness: 0.15,
      emissive: 0xb88d3e,
      emissiveIntensity: 0.35
    });

    for (let c = 0; c < 24; c++) {
      const crystal = new THREE.Mesh(crystalGeom, crystalMat);
      crystal.position.set(
        (Math.random() - 0.5) * 170,
        (Math.random() - 0.5) * 110,
        (Math.random() - 0.5) * 170
      );
      crystal.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      crystal.scale.setScalar(Math.random() * 0.8 + 0.6);
      this.diamondCrystals.push(crystal);
      this.scene.add(crystal);
    }
  }

  createCardBackTexture(index) {
    const c = document.createElement("canvas");
    c.width = 440;
    c.height = 600;
    const ctx = c.getContext("2d");

    // Luxury midnight velvet gradient
    const bgGrad = ctx.createLinearGradient(0, 0, 440, 600);
    bgGrad.addColorStop(0, "#161220");
    bgGrad.addColorStop(0.5, "#0b0912");
    bgGrad.addColorStop(1, "#181122");
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 440, 600);

    // Outer double gold hairline border
    ctx.strokeStyle = "rgba(229, 197, 131, 0.55)";
    ctx.lineWidth = 3.5;
    ctx.strokeRect(18, 18, 404, 564);

    ctx.strokeStyle = "rgba(229, 197, 131, 0.25)";
    ctx.lineWidth = 1.5;
    ctx.strokeRect(28, 28, 384, 544);

    // Geometric Diamond & Star Emblem
    ctx.font = "52px serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#e5c583";
    ctx.fillText("✦", 220, 260);

    // Typography
    ctx.font = "600 22px 'Cormorant Garamond', serif";
    ctx.fillStyle = "#f7e7be";
    ctx.fillText(`MEMORY • #${index + 1}`, 220, 330);

    ctx.font = "14px 'Plus Jakarta Sans', sans-serif";
    ctx.fillStyle = "rgba(242, 237, 228, 0.55)";
    ctx.fillText("Our Story", 220, 365);

    const texture = new THREE.CanvasTexture(c);
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  }

  createPlaceholderTexture(index) {
    const c = document.createElement("canvas");
    c.width = 440;
    c.height = 600;
    const ctx = c.getContext("2d");

    const bgGrad = ctx.createLinearGradient(0, 0, 440, 600);
    bgGrad.addColorStop(0, "#1c1628");
    bgGrad.addColorStop(0.5, "#0e0b16");
    bgGrad.addColorStop(1, "#1e1426");
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 440, 600);

    ctx.strokeStyle = "rgba(229, 197, 131, 0.4)";
    ctx.lineWidth = 2;
    ctx.strokeRect(20, 20, 400, 560);

    ctx.font = "38px serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#e5c583";
    ctx.fillText("✦", 220, 270);

    ctx.font = "600 20px 'Cormorant Garamond', serif";
    ctx.fillStyle = "#f7e7be";
    ctx.fillText(`#${index + 1}`, 220, 330);

    const texture = new THREE.CanvasTexture(c);
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  }

  // Calculate 3D target coordinates for layout modes
  getCoordinatesForMode(mode, i, total) {
    if (mode === "heart") {
      // Parametric 3D Heart Nebula
      const t = (i / total) * Math.PI * 2;
      const x = 16 * Math.pow(Math.sin(t), 3) * 2.85;
      const y = (13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t)) * 2.85;
      const z = (Math.sin(i * 3) * 14) + (Math.cos(t) * 10);
      return {
        pos: new THREE.Vector3(x, y, z),
        rot: new THREE.Vector3(0, Math.sin(t) * 0.4, 0)
      };
    } else if (mode === "sphere") {
      // Fibonacci Celestial Globe Sphere
      const phi = Math.acos(-1 + (2 * i) / total);
      const theta = Math.sqrt(total * Math.PI) * phi;
      const radius = 62;
      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);
      return {
        pos: new THREE.Vector3(x, y, z),
        rot: new THREE.Vector3(0, 0, 0)
      };
    } else {
      // Default: Ascending Spiral Helix
      const angle = i * 0.44;
      const radius = 28 + Math.sin(i * 0.22) * 5 + i * 0.36;
      const y = (i - total / 2) * 1.5;
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

    // Real 3D Physical Monolith Frame (Box with thickness)
    const boxGeom = new THREE.BoxGeometry(6.6, 9.2, 0.4);
    const edgeGeom = new THREE.EdgesGeometry(boxGeom);

    // Front photo plane inset
    const photoGeom = new THREE.PlaneGeometry(6.0, 8.4);
    // Back card plane
    const backGeom = new THREE.PlaneGeometry(6.0, 8.4);

    for (let i = 0; i < total; i++) {
      const memory = MEMORY_DATA[i] || {
        title: `Memory #${i + 1}`,
        caption: "A special moment in our journey together.",
        chapter: "all"
      };

      const coords = this.getCoordinatesForMode("spiral", i, total);

      const cardGroup = new THREE.Group();
      cardGroup.position.copy(coords.pos);

      // Face outwards from spiral center
      cardGroup.lookAt(coords.pos.x * 1.5, coords.pos.y + 1.2, coords.pos.z * 1.5);

      // Solid luxury titanium/obsidian frame
      const frameMat = new THREE.MeshStandardMaterial({
        color: 0x110e18,
        metalness: 0.88,
        roughness: 0.25,
        emissive: 0x1e1508,
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
      const placeholderTex = this.createPlaceholderTexture(i);
      const photoMat = new THREE.MeshBasicMaterial({
        map: placeholderTex,
        side: THREE.FrontSide
      });
      const photoMesh = new THREE.Mesh(photoGeom, photoMat);
      photoMesh.position.z = 0.21;

      photoMesh.userData = {
        index: i,
        photoSrc: this.photoList[i],
        title: memory.title,
        caption: memory.caption,
        chapter: memory.chapter,
        group: cardGroup,
        frameMat: frameMat,
        edgeMat: edgeMat
      };
      cardGroup.add(photoMesh);

      // Back Face Emblem (Visible when orbiting behind card)
      const backTex = this.createCardBackTexture(i);
      const backMat = new THREE.MeshBasicMaterial({
        map: backTex,
        side: THREE.FrontSide
      });
      const backMesh = new THREE.Mesh(backGeom, backMat);
      backMesh.position.z = -0.21;
      backMesh.rotation.y = Math.PI;
      cardGroup.add(backMesh);

      this.cards.push({
        group: cardGroup,
        photoMesh: photoMesh,
        frameMat: frameMat,
        edgeMat: edgeMat,
        photoMat: photoMat,
        photoSrc: this.photoList[i],
        memory: memory,
        index: i,
        basePos: coords.pos.clone(),
        textureLoaded: false,
        visibleByChapter: true
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

  // Starlight Ribbon Spline (Flowing celestial river connecting memories)
  initRibbonSpline() {
    this.updateRibbonSpline();

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

  // Filter memories by chapter (All, Early Days, Food, Chaos, Sweet)
  filterChapter(chapterKey) {
    this.currentChapter = chapterKey;
    playSparkleSound();

    let matchingCount = 0;
    const centerPoint = new THREE.Vector3();

    this.cards.forEach((c) => {
      const matches = (chapterKey === "all" || c.memory.chapter === chapterKey);
      c.visibleByChapter = matches;

      if (matches) {
        matchingCount++;
        centerPoint.add(c.group.position);
        gsap.to(c.group.scale, { x: 1.05, y: 1.05, z: 1.05, duration: 0.6 });
        gsap.to(c.photoMat, { opacity: 1.0, duration: 0.6 });
        c.edgeMat.opacity = 0.55;
      } else {
        gsap.to(c.group.scale, { x: 0.82, y: 0.82, z: 0.82, duration: 0.6 });
        gsap.to(c.photoMat, { opacity: 0.18, duration: 0.6 });
        c.edgeMat.opacity = 0.12;
      }
    });

    if (matchingCount > 0) {
      centerPoint.divideScalar(matchingCount);
      // Smoothly pan camera to chapter center
      gsap.to(this.controls.target, {
        x: centerPoint.x,
        y: centerPoint.y,
        z: centerPoint.z,
        duration: 1.6,
        ease: "power2.out"
      });
    }

    const pill = document.getElementById("memory-counter-pill");
    if (pill) {
      const info = CHAPTER_INFO[chapterKey] || { label: "Memories", count: matchingCount };
      pill.innerHTML = `<span>Showing ${matchingCount} ${info.label}</span>`;
    }
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

  spawn3DClickBurst(pos) {
    const sparkCount = 28;
    const geom = new THREE.BufferGeometry();
    const positions = new Float32Array(sparkCount * 3);
    const velocities = [];

    for (let i = 0; i < sparkCount; i++) {
      positions[i * 3] = pos.x;
      positions[i * 3 + 1] = pos.y;
      positions[i * 3 + 2] = pos.z;

      const angle = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const speed = Math.random() * 0.45 + 0.15;
      velocities.push(new THREE.Vector3(
        speed * Math.sin(phi) * Math.cos(angle),
        speed * Math.sin(phi) * Math.sin(angle),
        speed * Math.cos(phi)
      ));
    }

    geom.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const mat = new THREE.PointsMaterial({
      color: 0xf7e7be,
      size: 4.0,
      transparent: true,
      opacity: 1,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const sparkMesh = new THREE.Points(geom, mat);
    this.scene.add(sparkMesh);

    this.sparks3D.push({
      mesh: sparkMesh,
      velocities: velocities,
      life: 1.0
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

      // Ignore hover if pointer is on UI HUD / overlays
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

    // Chapter Filter Chips
    const chapterChips = document.querySelectorAll("#chapter-filter-bar .chapter-chip");
    chapterChips.forEach((chip) => {
      chip.addEventListener("click", () => {
        chapterChips.forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        const chapterKey = chip.getAttribute("data-chapter");
        this.filterChapter(chapterKey);
      });
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
    if (tourBtn) {
      tourBtn.addEventListener("click", () => this.toggleGuidedTour());
    }

    // Reset Camera Button
    const resetBtn = document.getElementById("reset-cam-btn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => this.resetCamera());
    }

    // Lightbox Controls
    const closeBtn = document.getElementById("lightbox-close-btn");
    if (closeBtn) closeBtn.addEventListener("click", () => this.closeMemory());

    const prevBtn = document.getElementById("lightbox-prev-btn");
    if (prevBtn) prevBtn.addEventListener("click", () => this.navigateMemory(-1));

    const nextBtn = document.getElementById("lightbox-next-btn");
    if (nextBtn) nextBtn.addEventListener("click", () => this.navigateMemory(1));

    const lightbox = document.getElementById("memory-lightbox");
    if (lightbox) {
      lightbox.addEventListener("click", (e) => {
        if (e.target.id === "memory-lightbox") {
          this.closeMemory();
        }
      });
    }

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
    const memory = card.memory;

    // Spawn 3D particle fountain
    this.spawn3DClickBurst(card.group.position);

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

    if (imgElem) imgElem.src = encodeURI(card.photoSrc);
    if (badgeElem) badgeElem.textContent = `Memory #${index + 1} of ${this.cards.length}`;
    if (titleElem) titleElem.textContent = memory.title;
    if (captionElem) captionElem.textContent = memory.caption;
    if (indexElem) indexElem.textContent = `${index + 1} / ${this.cards.length}`;

    if (lightbox) lightbox.classList.add("is-open");
    playSparkleSound();
  }

  navigateMemory(delta) {
    let nextIdx = (this.activeCardIndex + delta + this.cards.length) % this.cards.length;
    this.openMemory(nextIdx);
  }

  closeMemory() {
    this.isModalOpen = false;
    const lightbox = document.getElementById("memory-lightbox");
    if (lightbox) lightbox.classList.remove("is-open");
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
    if (tourBtn) {
      tourBtn.classList.add("tour-active");
      tourBtn.querySelector("span").textContent = "Pause Tour";
    }
    this.tourStep(this.activeCardIndex || 0);
  }

  stopGuidedTour() {
    this.isTouring = false;
    clearTimeout(this.tourTimeout);
    const tourBtn = document.getElementById("tour-toggle-btn");
    if (tourBtn) {
      tourBtn.classList.remove("tour-active");
      tourBtn.querySelector("span").textContent = "Guided Tour";
    }
  }

  tourStep(index) {
    if (!this.isTouring) return;
    this.activeCardIndex = index;
    const card = this.cards[index];

    const groupPos = card.group.position;
    const targetCamPos = groupPos.clone().add(new THREE.Vector3(0, 2, 16));

    const counterPill = document.getElementById("memory-counter-pill");
    if (counterPill) {
      counterPill.innerHTML = `<span>#${index + 1}: ${card.memory.title}</span>`;
    }

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
            // Find next matching card if filtered
            let nextIdx = (index + 1) % this.cards.length;
            if (this.currentChapter !== "all") {
              let attempts = 0;
              while (!this.cards[nextIdx].visibleByChapter && attempts < this.cards.length) {
                nextIdx = (nextIdx + 1) % this.cards.length;
                attempts++;
              }
            }
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

    const pill = document.getElementById("memory-counter-pill");
    if (pill) {
      pill.innerHTML = `<span>100 Memories in the Stars</span>`;
    }
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    const time = performance.now() * 0.001;

    // Slowly rotate background starfield
    if (this.starPoints) {
      this.starPoints.rotation.y = time * 0.015;
    }

    // Slowly drift foreground cosmic dust
    if (this.dustPoints) {
      this.dustPoints.rotation.y = time * 0.022;
      this.dustPoints.rotation.x = Math.sin(time * 0.1) * 0.05;
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

    // Animate 3D Click Sparks
    for (let s = this.sparks3D.length - 1; s >= 0; s--) {
      const sp = this.sparks3D[s];
      const posAttr = sp.mesh.geometry.attributes.position;
      const count = sp.velocities.length;
      for (let i = 0; i < count; i++) {
        posAttr.setXYZ(
          i,
          posAttr.getX(i) + sp.velocities[i].x,
          posAttr.getY(i) + sp.velocities[i].y,
          posAttr.getZ(i) + sp.velocities[i].z
        );
      }
      posAttr.needsUpdate = true;
      sp.life -= 0.025;
      sp.mesh.material.opacity = Math.max(0, sp.life);

      if (sp.life <= 0) {
        this.scene.remove(sp.mesh);
        sp.mesh.geometry.dispose();
        sp.mesh.material.dispose();
        this.sparks3D.splice(s, 1);
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
// TOP NAVIGATION TABS (UNIVERSE / LITTLE THINGS / ARCADE / LETTER)
// ============================================================================
const navTabs = document.querySelectorAll(".nav-tab-btn");
const viewLittleThings = document.getElementById("view-little-things");
const viewArcade = document.getElementById("view-arcade");
const viewLetter = document.getElementById("view-letter");

navTabs.forEach((btn) => {
  btn.addEventListener("click", () => {
    navTabs.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const target = btn.getAttribute("data-tab");
    if (viewLittleThings) viewLittleThings.classList.remove("is-active");
    if (viewArcade) viewArcade.classList.remove("is-active");
    if (viewLetter) viewLetter.classList.remove("is-active");

    if (target === "little-things") {
      if (viewLittleThings) viewLittleThings.classList.add("is-active");
      if (universeManager) universeManager.controls.enabled = false;
    } else if (target === "arcade") {
      if (viewArcade) viewArcade.classList.add("is-active");
      if (universeManager) universeManager.controls.enabled = false;
    } else if (target === "letter") {
      if (viewLetter) viewLetter.classList.add("is-active");
      if (universeManager) universeManager.controls.enabled = false;
    } else {
      if (universeManager) universeManager.controls.enabled = true;
    }
  });
});

// Little Things Card Click Interaction
const thingCards = document.querySelectorAll(".thing-card");
thingCards.forEach((card) => {
  card.addEventListener("click", () => {
    playSparkleSound();
    gsap.fromTo(card, 
      { scale: 0.98 }, 
      { scale: 1.03, duration: 0.25, yoyo: true, repeat: 1, ease: "power2.out" }
    );
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

    if (this.startBtn) {
      this.startBtn.addEventListener("click", () => this.startGame());
    }

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
          if (this.scoreElem) this.scoreElem.textContent = `${this.score} / ${this.targetScore}`;
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
    if (this.scoreElem) this.scoreElem.textContent = `0 / ${this.targetScore}`;
    if (this.timeElem) this.timeElem.textContent = `15s`;
    this.hearts = [];
    this.sparkles = [];
    this.isPlaying = true;
    if (this.overlay) this.overlay.classList.add("hidden");
    if (this.noteElem) this.noteElem.style.display = "none";

    clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      this.timeLeft--;
      if (this.timeElem) this.timeElem.textContent = `${this.timeLeft}s`;
      if (this.timeLeft <= 0) {
        this.endGame(false);
      }
    }, 1000);

    this.loop();
  }

  spawnHeart() {
    if (this.hearts.length >= 12) return;
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

    if (this.overlay) this.overlay.classList.remove("hidden");
    if (won) {
      playSuccessChime();
      if (this.titleElem) this.titleElem.textContent = "You Caught All The Hearts! ✦";
      if (this.descElem) this.descElem.textContent = "Here's what I wanted to tell you:";
      if (this.noteElem) {
        this.noteElem.innerHTML = `
          "Truth is, you didn't even have to catch those hearts — mine has been completely yours through all our laughs, food runs, late nights, and everyday moments. Thank you for being my favorite person. ♥"
        `;
        this.noteElem.style.display = "block";
      }
      if (this.startBtn) this.startBtn.textContent = "Play Again ✦";
    } else {
      if (this.titleElem) this.titleElem.textContent = "Time's Up! ✨";
      if (this.descElem) this.descElem.textContent = `You caught ${this.score} / ${this.targetScore} hearts. Try once more to unlock the note!`;
      if (this.startBtn) this.startBtn.textContent = "Try Again ✦";
    }
  }
}

new HeartCatchGame();

// ============================================================================
// REAL COUPLE QUIZ INTERACTION
// ============================================================================
const QUIZ_RESPONSES = [
  "Haha, so true! It's our signature couple chaos ♥",
  "Any moment where you're smiling is my favorite time, honestly.",
  "I mean that with all my heart — I promise to always keep growing for us."
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
  if (msgElem) msgElem.textContent = msg;

  if (toast) {
    toast.classList.add("show");
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove("show");
    }, 3200);
  }
}

// ============================================================================
// THE APOLOGY & GRATITUDE LETTER (3D ROYAL WAX-SEALED ENVELOPE)
// ============================================================================
function openRomanticLetter() {
  const envelope = document.getElementById("envelope-elem");
  const letter = document.getElementById("unfolded-letter");
  const hint = document.getElementById("envelope-hint");

  if (envelope && !envelope.classList.contains("opened")) {
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
      if (letter) {
        letter.style.display = "block";
        letter.scrollIntoView({ behavior: "smooth", block: "center" });
      }
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
