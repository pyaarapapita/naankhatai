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
    this.updateVolUI(0.8);
    this.updateSeekUI(0);

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
        this.updateSeekUI(pct);
        if (this.currentTimeElem) {
          this.currentTimeElem.textContent = this.formatTime(pct * (this.audio.duration || 0));
        }
      });

      this.seekSlider.addEventListener("change", () => {
        const pct = this.seekSlider.value / 100;
        this.audio.currentTime = pct * (this.audio.duration || 0);
        this.updateSeekUI(pct);
        this.isSeeking = false;
      });
    }

    if (this.volSlider) {
      this.volSlider.addEventListener("input", () => {
        const val = parseFloat(this.volSlider.value);
        this.setVolume(val);
      });
    }

    if (this.volBtn) {
      this.volBtn.addEventListener("click", () => {
        if (this.audio.volume > 0.01) {
          this.lastVolume = this.audio.volume;
          this.setVolume(0);
        } else {
          this.setVolume(this.lastVolume || 0.8);
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

  setVolume(vol) {
    if (!this.audio) return;
    const clamped = Math.max(0, Math.min(1, vol));
    this.audio.volume = clamped;
    if (clamped > 0.01) this.lastVolume = clamped;
    this.updateVolUI(clamped);
  }

  updateVolUI(vol) {
    if (this.volSlider) {
      this.volSlider.value = vol;
      const pct = (vol * 100).toFixed(1);
      this.volSlider.style.background = `linear-gradient(to right, #e5c583 0%, #e5c583 ${pct}%, rgba(255, 255, 255, 0.18) ${pct}%, rgba(255, 255, 255, 0.18) 100%)`;
    }
    const volIcon = document.getElementById("vol-icon");
    if (volIcon) {
      if (vol <= 0.01) {
        volIcon.innerHTML = `
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <line x1="23" y1="9" x2="17" y2="15"></line>
          <line x1="17" y1="9" x2="23" y2="15"></line>
        `;
      } else if (vol < 0.5) {
        volIcon.innerHTML = `
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        `;
      } else {
        volIcon.innerHTML = `
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        `;
      }
    }
  }

  updateSeekUI(progressPct) {
    if (this.seekSlider) {
      const p = (Math.max(0, Math.min(1, progressPct)) * 100).toFixed(1);
      this.seekSlider.style.background = `linear-gradient(to right, #e5c583 0%, #e5c583 ${p}%, rgba(255, 255, 255, 0.18) ${p}%, rgba(255, 255, 255, 0.18) 100%)`;
    }
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
    this.updateVolUI(0);
    this.audio.play().then(() => {
      if (this.vinylDisc) this.vinylDisc.classList.add("is-playing");
      if (this.playIcon) this.playIcon.style.display = "none";
      if (this.pauseIcon) this.pauseIcon.style.display = "block";

      const startTime = performance.now();
      const step = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / durationMs, 1);
        const currentVol = progress * targetVol;
        this.audio.volume = currentVol;
        this.updateVolUI(currentVol);
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
    if (this.seekSlider && !this.isSeeking) {
      this.seekSlider.value = progressPct * 100;
      this.updateSeekUI(progressPct);
    }

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

// Global Desktop Keyboard Shortcut (Spacebar Play/Pause)
window.addEventListener("keydown", (e) => {
  const targetTag = e.target ? e.target.tagName.toLowerCase() : "";
  if (targetTag === "input" || targetTag === "textarea" || e.target?.isContentEditable) {
    return;
  }
  if (e.code === "Space" || e.key === " " || e.keyCode === 32) {
    e.preventDefault();
    if (musicController) {
      musicController.togglePlay();
      if (musicController.playBtn) {
        musicController.playBtn.style.transform = "scale(0.9)";
        setTimeout(() => {
          if (musicController.playBtn) musicController.playBtn.style.transform = "";
        }, 140);
      }
    }
  }
});

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
    this.currentHoverIndex = null;
    this.isModalOpen = false;
    this.sparks3D = [];

    // Hover Inspection Card Elements
    this.hoverBox = document.getElementById("memory-hover-card");
    this.hoverThumb = document.getElementById("hover-thumb-img");
    this.hoverChapter = document.getElementById("hover-box-chapter");
    this.hoverNum = document.getElementById("hover-box-num");
    this.hoverTitle = document.getElementById("hover-box-title");
    this.hoverCaption = document.getElementById("hover-box-caption");
    this.hoverClickTarget = document.getElementById("hover-box-click-target");
    this.topConsole = document.getElementById("top-console");
    this.navAutoHideTimer = null;

    this.initScene();
    this.initLights();
    this.initCosmicAtmosphere();
    this.initCards();
    this.initRibbonSpline();
    this.initEvents();
    this.animate();
  }

  updateHoverBoxContent(index) {
    const item = this.cards[index];
    if (!item) return;
    const memory = item.memory;
    const chInfo = CHAPTER_INFO[memory.chapter] || { label: "Our Story" };

    const photoSource = (window.PHOTO_EMBEDS && window.PHOTO_EMBEDS[index]) 
      ? window.PHOTO_EMBEDS[index] 
      : encodeURI(item.photoSrc);
    if (this.hoverThumb) this.hoverThumb.src = photoSource;
    if (this.hoverChapter) this.hoverChapter.textContent = chInfo.label;
    if (this.hoverNum) this.hoverNum.textContent = `#${index + 1}`;
    if (this.hoverTitle) this.hoverTitle.textContent = memory.title;
    if (this.hoverCaption) this.hoverCaption.textContent = memory.caption;
  }

  initScene() {
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x06050a, 0.0012);

    this.camera = new THREE.PerspectiveCamera(
      54,
      window.innerWidth / window.innerHeight,
      0.1,
      2500
    );
    this.camera.position.set(0, 18, 75);

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

    this.starTexture = new THREE.CanvasTexture(starCanvas);
    const starMat = new THREE.PointsMaterial({
      size: 3.0,
      vertexColors: true,
      map: this.starTexture,
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
      map: this.starTexture,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    this.dustPoints = new THREE.Points(dustGeom, dustMat);
    this.scene.add(this.dustPoints);

    // 2. Orbital Saturnian Stardust Rings (Glowing celestial dust halo)
    const ringCount = 380;
    const ringGeom = new THREE.BufferGeometry();
    const ringPositions = new Float32Array(ringCount * 3);
    for (let r = 0; r < ringCount; r++) {
      const angle = (r / ringCount) * Math.PI * 2;
      const rad = 105 + (Math.random() - 0.5) * 10;
      ringPositions[r * 3] = Math.cos(angle) * rad;
      ringPositions[r * 3 + 1] = (Math.random() - 0.5) * 4;
      ringPositions[r * 3 + 2] = Math.sin(angle) * rad;
    }
    ringGeom.setAttribute("position", new THREE.BufferAttribute(ringPositions, 3));
    const ringMat = new THREE.PointsMaterial({
      color: 0xe5c583,
      size: 2.2,
      map: this.starTexture,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    this.orbitalRing = new THREE.Points(ringGeom, ringMat);
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
    if (THREE.sRGBEncoding) texture.encoding = THREE.sRGBEncoding;
    if (THREE.SRGBColorSpace) texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  }

  createPlaceholderTexture(index, memory) {
    const c = document.createElement("canvas");
    c.width = 440;
    c.height = 600;
    const ctx = c.getContext("2d");

    // Luxury cosmic velvet gradient with golden depth
    const bgGrad = ctx.createLinearGradient(0, 0, 440, 600);
    bgGrad.addColorStop(0, "#2c213f");
    bgGrad.addColorStop(0.45, "#181226");
    bgGrad.addColorStop(1, "#0f0b18");
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 440, 600);

    // Warm radiant celestial glow
    const radialGlow = ctx.createRadialGradient(220, 260, 10, 220, 260, 180);
    radialGlow.addColorStop(0, "rgba(229, 197, 131, 0.32)");
    radialGlow.addColorStop(1, "rgba(229, 197, 131, 0)");
    ctx.fillStyle = radialGlow;
    ctx.fillRect(0, 0, 440, 600);

    // Double golden borders
    ctx.strokeStyle = "rgba(229, 197, 131, 0.65)";
    ctx.lineWidth = 3.5;
    ctx.strokeRect(18, 18, 404, 564);

    ctx.strokeStyle = "rgba(229, 197, 131, 0.25)";
    ctx.lineWidth = 1.5;
    ctx.strokeRect(26, 26, 388, 548);

    // Corner flourishes
    const drawCorner = (x, y, dx, dy) => {
      ctx.beginPath();
      ctx.moveTo(x, y + dy * 16);
      ctx.lineTo(x, y);
      ctx.lineTo(x + dx * 16, y);
      ctx.strokeStyle = "#e5c583";
      ctx.lineWidth = 2.5;
      ctx.stroke();
    };
    drawCorner(22, 22, 1, 1);
    drawCorner(418, 22, -1, 1);
    drawCorner(22, 578, 1, -1);
    drawCorner(418, 578, -1, -1);

    // Center emblem
    ctx.font = "44px serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#e5c583";
    ctx.fillText("✦", 220, 220);

    // Chapter badge
    const chInfo = CHAPTER_INFO[memory?.chapter] || { label: "Our Story" };
    ctx.font = "600 15px 'Plus Jakarta Sans', sans-serif";
    ctx.fillStyle = "rgba(229, 197, 131, 0.9)";
    ctx.fillText(chInfo.label.toUpperCase(), 220, 275);

    // Memory title
    ctx.font = "600 24px 'Playfair Display', serif";
    ctx.fillStyle = "#ffffff";
    const rawTitle = memory?.title || `Memory #${index + 1}`;
    const displayTitle = rawTitle.length > 24 ? rawTitle.substring(0, 22) + "..." : rawTitle;
    ctx.fillText(displayTitle, 220, 320);

    // Subtitle
    ctx.font = "14px 'Plus Jakarta Sans', sans-serif";
    ctx.fillStyle = "rgba(242, 237, 228, 0.55)";
    ctx.fillText(`Memory #${index + 1}`, 220, 360);

    const texture = new THREE.CanvasTexture(c);
    if (THREE.sRGBEncoding) texture.encoding = THREE.sRGBEncoding;
    if (THREE.SRGBColorSpace) texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  }

  // Calculate 3D coordinates for ascending spiral helix
  getCoordinates(i, total) {
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

    for (let i = 0; i < total; i++) {
      const memory = MEMORY_DATA[i] || {
        title: `Memory #${i + 1}`,
        caption: "A special moment in our journey together.",
        chapter: "all"
      };

      const coords = this.getCoordinates(i, total);

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
      const placeholderTex = this.createPlaceholderTexture(i, memory);
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

      // Back Face Inset (Shares photoMat so photo is visible from every angle!)
      const backMesh = new THREE.Mesh(photoGeom, photoMat);
      backMesh.position.z = -0.21;
      backMesh.rotation.y = Math.PI;
      backMesh.userData = photoMesh.userData;
      cardGroup.add(backMesh);

      const baseRot = { x: cardGroup.rotation.x, y: cardGroup.rotation.y, z: cardGroup.rotation.z };
      cardGroup.userData.baseRot = baseRot;

      this.cards.push({
        group: cardGroup,
        photoMesh: photoMesh,
        backMesh: backMesh,
        frameMat: frameMat,
        edgeMat: edgeMat,
        photoMat: photoMat,
        photoSrc: this.photoList[i],
        memory: memory,
        index: i,
        basePos: coords.pos.clone(),
        baseRot: baseRot,
        textureLoaded: false,
        visibleByChapter: true
      });

      this.scene.add(cardGroup);
    }

    this.loadTexturesInBatches(10);
  }

  loadTexturesInBatches(batchSize = 10) {
    let currentIdx = 0;
    const total = this.cards.length;

    const loadNextBatch = () => {
      if (currentIdx >= total) return;
      const end = Math.min(currentIdx + batchSize, total);

      for (let i = currentIdx; i < end; i++) {
        const item = this.cards[i];
        const src = (window.PHOTO_EMBEDS && window.PHOTO_EMBEDS[i])
          ? window.PHOTO_EMBEDS[i]
          : item.photoSrc;

        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => {
          const tex = new THREE.Texture(img);
          if (THREE.sRGBEncoding) tex.encoding = THREE.sRGBEncoding;
          if (THREE.SRGBColorSpace) tex.colorSpace = THREE.SRGBColorSpace;
          tex.minFilter = THREE.LinearFilter;
          tex.generateMipmaps = false;
          tex.needsUpdate = true;
          item.photoMat.map = tex;
          item.photoMat.needsUpdate = true;
          item.textureLoaded = true;
        };
        img.onerror = () => {
          // If relative path fails, try encoded URL
          if (!src.startsWith("data:") && !item.retried) {
            item.retried = true;
            img.src = encodeURI(item.photoSrc);
          }
        };
        img.src = src;
      }

      currentIdx = end;
      setTimeout(loadNextBatch, 25);
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
      size: 2.6,
      map: this.starTexture,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false
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
    const CurveClass = THREE.CatmullRomCurve3 || THREE.CatmullRomCurve3D;
    this.splineCurve = new CurveClass(points);

    if (this.splineLineMesh) {
      this.scene.remove(this.splineLineMesh);
      this.splineLineMesh.geometry.dispose();
      this.splineLineMesh.material.dispose();
    }

    const curvePoints = this.splineCurve.getPoints(450);
    const lineGeom = new THREE.BufferGeometry().setFromPoints(curvePoints);
    const lineMat = new THREE.LineBasicMaterial({
      color: 0xe5c583,
      transparent: true,
      opacity: 0.38,
      blending: THREE.AdditiveBlending
    });
    this.splineLineMesh = new THREE.Line(lineGeom, lineMat);
    this.scene.add(this.splineLineMesh);
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
    this.camera.position.set(0, 48, 140);
    gsap.to(this.camera.position, {
      x: 0,
      y: 18,
      z: 75,
      duration: 2.8,
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
      map: this.starTexture,
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
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    // Auto-hide nav bar on card focus / 3D exploration, reveal when mouse reaches top
    window.addEventListener("pointermove", (e) => {
      if (this.isModalOpen) return;

      if (e.clientY < 75) {
        if (this.topConsole) this.topConsole.classList.remove("nav-autohide");
        clearTimeout(this.navAutoHideTimer);
      } else if (this.currentHoverIndex !== null) {
        if (this.topConsole) this.topConsole.classList.add("nav-autohide");
      }
    });

    window.addEventListener("mousemove", () => {
      if (this.currentHoverIndex === null) {
        clearTimeout(this.navAutoHideTimer);
        this.navAutoHideTimer = setTimeout(() => {
          if (this.topConsole && this.currentHoverIndex === null && !this.isModalOpen) {
            this.topConsole.classList.remove("nav-autohide");
          }
        }, 2500);
      }
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
        if (dist > 6) return;
      }

      // Raycast accurately at pointer-up coordinates (only open if directly clicking a card)
      const clickCoords = new THREE.Vector2(
        (e.clientX / window.innerWidth) * 2 - 1,
        -(e.clientY / window.innerHeight) * 2 + 1
      );
      this.raycaster.setFromCamera(clickCoords, this.camera);
      const meshes = this.cards.flatMap(c => [c.photoMesh, c.backMesh]);
      const intersects = this.raycaster.intersectObjects(meshes);

      if (intersects.length > 0 && intersects[0].distance < 140) {
        const hitIdx = intersects[0].object.userData.index;
        if (typeof hitIdx === "number") {
          this.openMemory(hitIdx);
        }
      }
    });

    // Hover Card click opens memory lightbox
    if (this.hoverClickTarget) {
      this.hoverClickTarget.addEventListener("click", () => {
        if (this.currentHoverIndex !== null) {
          this.openMemory(this.currentHoverIndex);
        }
      });
    }

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

    if (this.hoverBox) this.hoverBox.classList.remove("is-visible");
    if (this.topConsole) this.topConsole.classList.add("nav-autohide");

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

    const photoSource = (window.PHOTO_EMBEDS && window.PHOTO_EMBEDS[index])
      ? window.PHOTO_EMBEDS[index]
      : encodeURI(card.photoSrc);
    if (imgElem) imgElem.src = photoSource;
    if (badgeElem) badgeElem.textContent = `Memory #${index + 1} of ${this.cards.length}`;
    if (titleElem) titleElem.textContent = memory.title;
    if (captionElem) captionElem.textContent = memory.caption;
    if (indexElem) indexElem.textContent = `${index + 1} / ${this.cards.length}`;

    if (lightbox) lightbox.classList.add("is-open");
    playSparkleSound();
  }

  navigateMemory(delta) {
    const imgElem = document.getElementById("lightbox-img");
    const contentPane = document.querySelector(".lightbox-content-pane");

    gsap.to([imgElem, contentPane], {
      opacity: 0,
      x: delta > 0 ? -22 : 22,
      duration: 0.18,
      ease: "power2.in",
      onComplete: () => {
        let nextIdx = (this.activeCardIndex + delta + this.cards.length) % this.cards.length;
        this.openMemory(nextIdx);
        gsap.fromTo([imgElem, contentPane],
          { opacity: 0, x: delta > 0 ? 22 : -22 },
          { opacity: 1, x: 0, duration: 0.28, ease: "power2.out" }
        );
      }
    });
  }

  closeMemory() {
    this.isModalOpen = false;
    const lightbox = document.getElementById("memory-lightbox");
    if (lightbox) lightbox.classList.remove("is-open");
    if (this.topConsole) this.topConsole.classList.remove("nav-autohide");
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

    // Living organic floating & subtle sway so cards never look still
    for (let i = 0; i < this.cards.length; i++) {
      const item = this.cards[i];
      const baseRot = item.baseRot || { x: 0, y: 0, z: 0 };
      if (this.currentHoverIndex !== i) {
        item.group.position.y = item.basePos.y + Math.sin(time * 1.4 + i * 0.45) * 0.65;
        item.group.rotation.y = baseRot.y + Math.sin(time * 0.85 + i * 0.6) * 0.05;
        item.group.rotation.x = baseRot.x + Math.cos(time * 0.75 + i * 0.5) * 0.035;
      }
    }

    // Interactive 3D Camera Parallax & Card Raycast Hover Check
    if (!this.isModalOpen && this.controls.enabled) {
      this.cameraParallaxOffset.x += (this.parallaxMouse.x * 5 - this.cameraParallaxOffset.x) * 0.04;
      this.cameraParallaxOffset.y += (this.parallaxMouse.y * 3.5 - this.cameraParallaxOffset.y) * 0.04;

      this.camera.position.x += this.cameraParallaxOffset.x * 0.03;
      this.camera.position.y += this.cameraParallaxOffset.y * 0.03;

      this.raycaster.setFromCamera(this.mouse, this.camera);
      const meshes = this.cards.flatMap(c => [c.photoMesh, c.backMesh]);
      const intersects = this.raycaster.intersectObjects(meshes);

      if (intersects.length > 0 && intersects[0].distance < 100) {
        const hit = intersects[0].object;
        const hitIndex = hit.userData.index;

        if (this.currentHoverIndex !== hitIndex) {
          // --- PREVIOUS CARD AUTOMATICALLY DISAPPEARS FROM FOCUSED STATE ---
          if (this.currentHoverIndex !== null) {
            const prevCard = this.cards[this.currentHoverIndex];
            if (prevCard) {
              gsap.to(prevCard.group.position, {
                x: prevCard.basePos.x,
                y: prevCard.basePos.y,
                z: prevCard.basePos.z,
                duration: 0.45,
                ease: "power2.out"
              });
              gsap.to(prevCard.group.scale, {
                x: prevCard.visibleByChapter ? 1.05 : 0.82,
                y: prevCard.visibleByChapter ? 1.05 : 0.82,
                z: prevCard.visibleByChapter ? 1.05 : 0.82,
                duration: 0.4,
                ease: "power2.out"
              });
              prevCard.edgeMat.color.setHex(0xe5c583);
              prevCard.edgeMat.opacity = prevCard.visibleByChapter ? 0.55 : 0.12;
            }
          }

          // --- NEW CARD LIFTS FORWARD WITH RADIANT GLOW ---
          const newCard = this.cards[hitIndex];
          const dirToCam = new THREE.Vector3().subVectors(this.camera.position, newCard.group.position).normalize();
          const liftedPos = newCard.basePos.clone().add(dirToCam.multiplyScalar(4.5));

          gsap.to(newCard.group.position, {
            x: liftedPos.x,
            y: liftedPos.y,
            z: liftedPos.z,
            duration: 0.45,
            ease: "back.out(1.4)"
          });
          gsap.to(newCard.group.scale, {
            x: 1.25,
            y: 1.25,
            z: 1.25,
            duration: 0.45,
            ease: "back.out(1.4)"
          });
          newCard.edgeMat.color.setHex(0xffffff);
          newCard.edgeMat.opacity = 1.0;

          // Non-hovered cards softly dim for optical focus
          this.cards.forEach((c, idx) => {
            if (idx !== hitIndex) {
              gsap.to(c.photoMat, { opacity: c.visibleByChapter ? 0.35 : 0.1, duration: 0.3 });
            } else {
              gsap.to(c.photoMat, { opacity: 1.0, duration: 0.2 });
            }
          });

          // --- HOVER BOX: PREVIOUS CONTENT SMOOTHLY DISSOLVES, NEW SLIDES IN ---
          if (this.hoverBox) {
            const boxInner = this.hoverBox.querySelector(".hover-box-inner");
            if (this.hoverBox.classList.contains("is-visible")) {
              gsap.to(boxInner, {
                opacity: 0.2,
                y: -4,
                duration: 0.12,
                onComplete: () => {
                  this.updateHoverBoxContent(hitIndex);
                  gsap.to(boxInner, { opacity: 1, y: 0, duration: 0.22, ease: "power2.out" });
                }
              });
            } else {
              this.updateHoverBoxContent(hitIndex);
              this.hoverBox.classList.add("is-visible");
            }
          }

          this.currentHoverIndex = hitIndex;
          document.body.style.cursor = "pointer";

          // Auto-hide nav bar on card focus
          if (this.topConsole) this.topConsole.classList.add("nav-autohide");
        }
      } else if (this.currentHoverIndex !== null) {
        // --- MOUSE LEFT ALL CARDS: PREVIOUS CARD DISAPPEARS BACK TO REST ---
        const prevCard = this.cards[this.currentHoverIndex];
        if (prevCard) {
          gsap.to(prevCard.group.position, {
            x: prevCard.basePos.x,
            y: prevCard.basePos.y,
            z: prevCard.basePos.z,
            duration: 0.45,
            ease: "power2.out"
          });
          gsap.to(prevCard.group.scale, {
            x: prevCard.visibleByChapter ? 1.05 : 0.82,
            y: prevCard.visibleByChapter ? 1.05 : 0.82,
            z: prevCard.visibleByChapter ? 1.05 : 0.82,
            duration: 0.4,
            ease: "power2.out"
          });
          prevCard.edgeMat.color.setHex(0xe5c583);
          prevCard.edgeMat.opacity = prevCard.visibleByChapter ? 0.55 : 0.12;
        }

        // Restore all cards' opacity
        this.cards.forEach((c) => {
          gsap.to(c.photoMat, { opacity: c.visibleByChapter ? 1.0 : 0.18, duration: 0.35 });
        });

        if (this.hoverBox) this.hoverBox.classList.remove("is-visible");
        this.currentHoverIndex = null;
        document.body.style.cursor = "default";

        if (this.topConsole) this.topConsole.classList.remove("nav-autohide");
      }
    }

    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }
}

let universeManager = null;
function bootUniverse() {
  if (universeManager) return;
  try {
    initEntryCanvas();
    if (typeof THREE !== "undefined") {
      universeManager = new UniverseManager();
      window.universeManager = universeManager;
    } else {
      setTimeout(bootUniverse, 100);
    }
  } catch (err) {
    console.error("UniverseManager boot failed:", err);
  }
}

if (document.readyState === "loading") {
  window.addEventListener("DOMContentLoaded", bootUniverse);
} else {
  bootUniverse();
}

// ============================================================================
// TOP NAVIGATION TABS (UNIVERSE / LITTLE THINGS / ARCADE / LETTER)
// ============================================================================
const navTabs = document.querySelectorAll(".nav-tab-btn");
const viewLittleThings = document.getElementById("view-little-things");
const viewArcade = document.getElementById("view-arcade");
const viewLetter = document.getElementById("view-letter");
const universeControls = document.getElementById("universe-controls");

navTabs.forEach((btn) => {
  btn.addEventListener("click", () => {
    navTabs.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    playSparkleSound();

    const target = btn.getAttribute("data-tab");
    if (viewLittleThings) viewLittleThings.classList.remove("is-active");
    if (viewArcade) viewArcade.classList.remove("is-active");
    if (viewLetter) viewLetter.classList.remove("is-active");

    if (universeManager) {
      if (universeManager.topConsole) universeManager.topConsole.classList.remove("nav-autohide");
      if (universeManager.hoverBox) universeManager.hoverBox.classList.remove("is-visible");
    }

    if (target === "little-things") {
      if (viewLittleThings) viewLittleThings.classList.add("is-active");
      if (universeControls) universeControls.classList.add("view-hidden");
      if (universeManager) universeManager.controls.enabled = false;
    } else if (target === "arcade") {
      if (viewArcade) viewArcade.classList.add("is-active");
      if (universeControls) universeControls.classList.add("view-hidden");
      if (universeManager) universeManager.controls.enabled = false;
      if (window.heartCatchGame) {
        setTimeout(() => window.heartCatchGame.resize(), 50);
      }
    } else if (target === "letter") {
      if (viewLetter) viewLetter.classList.add("is-active");
      if (universeControls) universeControls.classList.add("view-hidden");
      if (universeManager) universeManager.controls.enabled = false;
    } else {
      if (universeControls) universeControls.classList.remove("view-hidden");
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

window.heartCatchGame = new HeartCatchGame();

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

// ============================================================================
// INTERACTIVE ADDITIONS: SEARCH, SHUFFLE & WISHING STAR
// ============================================================================

// 1. Starlight Memory Search & Surprise Fly-To
function initMemorySearch() {
  const searchBtn = document.getElementById("search-memories-btn");
  const searchBar = document.getElementById("memory-search-bar");
  const searchInput = document.getElementById("memory-search-input");
  const searchDropdown = document.getElementById("search-results-dropdown");
  const surpriseBtn = document.getElementById("surprise-memory-btn");

  if (searchBtn && searchBar && searchInput) {
    searchBtn.addEventListener("click", () => {
      searchBar.classList.toggle("hidden");
      if (!searchBar.classList.contains("hidden")) {
        searchInput.focus();
      } else {
        searchInput.value = "";
        if (searchDropdown) searchDropdown.innerHTML = "";
      }
    });

    searchInput.addEventListener("input", () => {
      const query = searchInput.value.trim().toLowerCase();
      if (!searchDropdown) return;
      if (!query) {
        searchDropdown.innerHTML = "";
        return;
      }

      const matches = [];
      for (let i = 0; i < MEMORY_DATA.length; i++) {
        const mem = MEMORY_DATA[i];
        const numStr = String(i + 1);
        if (
          mem.title.toLowerCase().includes(query) ||
          mem.caption.toLowerCase().includes(query) ||
          numStr === query ||
          `#${numStr}` === query
        ) {
          matches.push({ index: i, memory: mem });
          if (matches.length >= 6) break;
        }
      }

      if (matches.length === 0) {
        searchDropdown.innerHTML = `<div style="padding: 10px; font-size: 0.82rem; color: var(--text-muted); text-align: center;">No matching memories found</div>`;
        return;
      }

      searchDropdown.innerHTML = matches.map(m => {
        const ch = CHAPTER_INFO[m.memory.chapter] || { label: "Our Story" };
        const thumb = (window.PHOTO_EMBEDS && window.PHOTO_EMBEDS[m.index]) ? window.PHOTO_EMBEDS[m.index] : CONFIG.PHOTOS[m.index];
        return `
          <div class="search-result-item" data-index="${m.index}">
            <img class="search-result-thumb" src="${thumb}" alt="Thumb" />
            <div class="search-result-meta">
              <span class="search-result-title">#${m.index + 1} • ${m.memory.title}</span>
              <span class="search-result-chapter">${ch.label}</span>
            </div>
          </div>
        `;
      }).join("");

      const items = searchDropdown.querySelectorAll(".search-result-item");
      items.forEach(item => {
        item.addEventListener("click", () => {
          const idx = parseInt(item.getAttribute("data-index"), 10);
          if (universeManager) {
            universeManager.openMemory(idx);
          }
          searchBar.classList.add("hidden");
          searchInput.value = "";
          searchDropdown.innerHTML = "";
        });
      });
    });

    // Close on click outside search bar
    document.addEventListener("pointerdown", (e) => {
      if (searchBar && !searchBar.classList.contains("hidden")) {
        if (!searchBar.contains(e.target) && e.target !== searchBtn && !searchBtn.contains(e.target)) {
          searchBar.classList.add("hidden");
        }
      }
    });
  }

  if (surpriseBtn) {
    surpriseBtn.addEventListener("click", () => {
      if (!universeManager || !universeManager.cards.length) return;
      playSparkleSound();
      const randIdx = Math.floor(Math.random() * universeManager.cards.length);
      universeManager.openMemory(randIdx);
    });
  }
}

// 2. Little Things Random Spotlight
function initLittleThingsRandomizer() {
  const randomBtn = document.getElementById("pick-random-thing-btn");
  if (!randomBtn) return;

  randomBtn.addEventListener("click", () => {
    const cards = document.querySelectorAll(".thing-card");
    if (!cards.length) return;

    playSuccessChime();
    if (window.confetti) {
      confetti({
        particleCount: 55,
        spread: 65,
        origin: { y: 0.5 },
        colors: ["#e5c583", "#f7e7be", "#ffffff", "#f4b266"]
      });
    }

    const randIdx = Math.floor(Math.random() * cards.length);
    cards.forEach(c => c.classList.remove("spotlight"));
    const chosen = cards[randIdx];
    chosen.classList.add("spotlight");
    chosen.scrollIntoView({ behavior: "smooth", block: "center" });

    gsap.fromTo(chosen, 
      { scale: 0.95 }, 
      { scale: 1.04, duration: 0.35, yoyo: true, repeat: 1, ease: "power2.out" }
    );
  });
}

// 3. Starlight Wishing Star & Daily Notes
const WISH_NOTES = [
  "You are my favorite notification in the entire world.",
  "I promise to always keep finding reasons to make you laugh until your stomach hurts.",
  "Even the quietest ordinary days feel like a celebration when I'm with you.",
  "Your smile is my absolute weakness, and I wouldn't have it any other way.",
  "Thank you for being patient with me, for loving me, and for being my home.",
  "I love who I become when I am with you — happier, calmer, and genuinely at peace.",
  "No distance, bad day, or silly argument could ever change how much you mean to me.",
  "I promise to always be the person who brings you warm tea and your favorite snacks when you're tired.",
  "You make everyday life feel gentle and magical.",
  "I still get that little happy flutter every single time I see you walk towards me.",
  "Thank you for choosing me every single day. I will never take it for granted.",
  "With you, even sitting in silence doing nothing feels like the best evening ever.",
  "I promise to always listen, to keep learning, and to never stop putting effort into us.",
  "You are the best decision I ever made.",
  "Every memory we have together is a treasure I hold close to my heart.",
  "I love your silly laughs, your sleepy voice, and the way you care so deeply about the people you love.",
  "Whatever the future holds, I just want it with you in it.",
  "Forever in your corner, through all the chaos, triumphs, and little quiet moments."
];

let lastWishIdx = -1;
function initWishingStar() {
  const trigger = document.getElementById("wishing-star-trigger");
  const noteText = document.getElementById("wishing-note-text");
  if (!trigger || !noteText) return;

  trigger.addEventListener("click", () => {
    playSuccessChime();

    gsap.fromTo(trigger,
      { scale: 0.85, rotate: -20 },
      { scale: 1.15, rotate: 20, duration: 0.3, yoyo: true, repeat: 1, ease: "back.out(2)" }
    );

    if (window.confetti) {
      confetti({
        particleCount: 65,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#e5c583", "#f7e7be", "#ffffff", "#8aaad6"]
      });
    }

    let nextIdx = Math.floor(Math.random() * WISH_NOTES.length);
    while (nextIdx === lastWishIdx && WISH_NOTES.length > 1) {
      nextIdx = Math.floor(Math.random() * WISH_NOTES.length);
    }
    lastWishIdx = nextIdx;

    noteText.textContent = `"${WISH_NOTES[nextIdx]}"`;
    gsap.fromTo(noteText,
      { opacity: 0, y: 6 },
      { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
    );
  });
}

// Initialize Interactive Features on Load
function initInteractiveFeatures() {
  initMemorySearch();
  initLittleThingsRandomizer();
  initWishingStar();
}

if (document.readyState === "loading") {
  window.addEventListener("DOMContentLoaded", initInteractiveFeatures);
} else {
  initInteractiveFeatures();
}

// Global window bindings for inline HTML handlers
window.openRomanticLetter = openRomanticLetter;
window.handleQuizAnswer = handleQuizAnswer;
window.sendVirtualHug = sendVirtualHug;
