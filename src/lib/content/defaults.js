// Default/fallback copy for every editable section. This is what renders
// before Firebase is configured, while content is loading, or if a given
// Firestore doc hasn't been created yet. The admin "Seed defaults" action
// writes exactly these objects into Firestore as a starting point.

export const defaultContent = {
  hero: {
    eyebrow: 'Founder of Coursiq · Technology, design, entrepreneurship',
    headline: 'Making complex ideas feel simple.',
    sub: "I'm Ethan Chbat, founder of Coursiq. I work where technology, design, and entrepreneurship meet, and most of what I do comes down to taking something complicated and making it feel obvious.",
  },
  introduction: {
    eyebrow: 'Introduction',
    heading: 'I like understanding things well enough to make them simple.',
    lead: "I've been building things since I was eleven: software, systems, arguments. I still get obsessed with how something works until I can explain it clearly and make it better.",
    support:
      'That\'s what led me to start Coursiq, and it\'s what pulls me toward design, AI, and a few creative habits I never gave up. I\'m not that attached to the "founder" label. I just notice when something\'s more complicated than it needs to be, and I can\'t leave it alone until it isn\'t.',
  },
  selectedWork: {
    eyebrow: 'Selected Work',
    heading: "What I'm building",
  },
  howIThink: {
    eyebrow: 'How I Think',
    heading: 'Four things I keep coming back to.',
    lead: 'Just the patterns I keep coming back to when I build, decide, or judge my own work.',
    principles: [
      { num: '01', title: 'Ambition', desc: "I'd rather aim too high and miss than play it safe." },
      {
        num: '02',
        title: 'Taste',
        desc: "Small details aren't decoration. They're usually the whole difference between something that works and something that feels right.",
      },
      {
        num: '03',
        title: 'Execution',
        desc: 'Ideas are cheap. What matters is what actually gets built and used.',
      },
      {
        num: '04',
        title: 'Independence',
        desc: "I'd rather be wrong my own way than right because I copied someone else.",
      },
    ],
  },
  beyondTechnology: {
    eyebrow: 'Beyond Technology',
    heading: "What I do when I'm not building.",
    panels: [
      {
        key: 'music',
        title: 'Music Production',
        frameLabel: 'Opening soon',
        desc: "Guitar and piano got me into production. Most of what I make never leaves my own speakers, that's just how I learn something new.",
      },
      {
        key: 'photography',
        title: 'Photography',
        frameLabel: 'Opening soon',
        desc: "I notice light and framing more than I used to. What I shoot is still just for me, for now. This'll be where it lives once it's ready.",
      },
    ],
  },
  connect: {
    eyebrow: 'Connect',
    heading: "Let's talk.",
    sub: "Building something, hiring, or just want to think out loud about an idea? I'd like to hear about it.",
  },
  about: {
    eyebrow: 'About',
    heading: 'Nice to meet you.',
    paragraphs: [
      "I started coding at eleven, stopped, and came back at sixteen because I couldn't stay away from building things. Picking something apart, learning how it actually works, and making it better is basically the same instinct that led me to start Coursiq.",
      "I'm strongest where design and engineering overlap. I'd rather spend an extra hour on how something feels than ship something merely functional. In 2024 I interned at End Space MENA and trained formally through Zero to Mastery's web development program. It was useful groundwork, but most of what I actually use I picked up by building things nobody asked for.",
      "Outside of Coursiq, most of my attention goes to product design and AI, plus two habits I never gave up: making music and taking photos. Different materials, same process. Notice what's off, keep adjusting.",
    ],
  },
  contact: {
    eyebrow: 'Connect',
    heading: 'Start a conversation.',
    lead: 'Building something, hiring, or just want to think out loud about an idea? Tell me about it.',
    directLabel: 'Or reach out directly',
    successMessage: "Thanks, I'll get back to you soon.",
    errorMessage: 'Something went wrong. Please try again, or email me directly.',
  },
  work: {
    eyebrow: 'Work',
    heading: 'Chapters, not just a company.',
    lead: "Coursiq is the first thing I've built that I'd put my name on. This page is built to grow with whatever comes after it.",
    emptyEyebrow: 'More chapters, in time',
    emptyLine:
      "This space is built to grow. New products, businesses, and experiments will live here as they're ready to be shown.",
  },
  site: {
    name: 'Ethan Chbat',
    footerTagline: 'Making complex ideas feel simple.',
    footerNote: 'Designed & built by hand',
    email: 'info@ethanchbat.com',
    linkedin: 'https://linkedin.com/in/ethan-chbat-42052434b',
    github: 'https://github.com/ethanchbat',
    url: 'https://ethanchbat.com',
    description:
      'Ethan Chbat is a founder and builder working at the intersection of technology, design, and entrepreneurship.',
    navItems: [
      { label: 'Home', to: '/' },
      { label: 'Work', to: '/work' },
      { label: 'About', to: '/about' },
      { label: 'Connect', to: '/contact' },
    ],
  },
}

// Default projects list — seeds the `works` Firestore collection.
export const defaultWorks = [
  {
    slug: 'coursiq',
    name: 'Coursiq',
    tagline: 'Turning fragmented information into structured, personalized learning.',
    status: 'In development',
    year: '2025–',
    role: 'Founder',
    url: 'https://coursiq.ai',
    featured: true,
    order: 0,
    imageUrl: '',
    summary:
      "Coursiq started from a frustration I kept running into. The material to learn almost anything well already exists, it's just scattered across videos, notes, and courses that were never built to work together. I'm building it to turn that scatter into something structured enough to actually learn from.",
    note: "It isn't public yet, so there's not much to show here. It's real, it's active, and it's the project that best represents how I think about learning and software right now.",
  },
]
