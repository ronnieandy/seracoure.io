/*
  SERACOURE BLOG DATA
  -------------------
  To publish a new post: copy an object below, give it a unique "slug"
  (used in the URL, e.g. blog-post.html?post=your-slug), and fill in the fields.
  Both index.html (blog preview cards) and blog-post.html (full article page)
  read from this single array — nothing else needs to change.

  Fields:
    slug      - unique, URL-safe id, e.g. "why-rebrands-fail"
    title     - headline shown on the card and the article page
    category  - short eyebrow label, e.g. "Strategy"
    readTime  - e.g. "8 min read"
    date      - display string, e.g. "August 12, 2026"
    image     - hero/card image URL
    excerpt   - 1-3 sentence summary shown on the blog card
    body      - array of paragraph strings (each string = one <p>). Use
                { heading: "..." } objects to insert a subheading.
*/

const blogPosts = [
  {
    slug: "why-rebrands-fail",
    title: "Why Most Rebrands Fail Before the Design Even Starts",
    category: "Strategy",
    readTime: "8 min read",
    date: "August 3, 2026",
    image: "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=1200",
    excerpt: "Most rebrand disappointments trace back to the same root cause: a company changed its logo before it changed its answer to \"what do we actually do differently.\" We walk through how to diagnose the real problem before a designer opens a file.",
    body: [
      "Every rebrand we've been called in to fix started the same way: a company felt its old identity no longer matched who it had become, so it commissioned a new logo, a new palette, and a new website. Eighteen months later, the new identity felt exactly as forgettable as the old one.",
      { heading: "The symptom isn't the problem" },
      "A tired-looking logo is a symptom. The actual problem is almost always upstream of design — an unclear answer to what the company does differently than the three competitors sitting in the same prospect's inbox. When that answer is fuzzy, no amount of typography or color theory can make the brand feel distinct, because there is no distinct thing being communicated.",
      "We've started asking a blunt question before any design conversation begins: if you disappeared tomorrow, what would your best customer actually miss? If the internal team can't answer that in one sentence, we stop and do that work first.",
      { heading: "What to fix before you brief a designer" },
      "Positioning, not palette, is the first draft. Write the one sentence explaining who you serve, what problem you solve, and why you're a better fit than the alternative. If that sentence could apply to a competitor by swapping the company name, it isn't ready.",
      "Once that sentence is sharp, the design brief writes itself — and the resulting identity actually has something specific to express, rather than a mood board of colors that felt 'premium' in a meeting."
    ]
  },
  {
    slug: "what-investors-remember",
    title: "What Investors Actually Remember From a Pitch Deck",
    category: "Communication",
    readTime: "6 min read",
    date: "July 22, 2026",
    image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1200",
    excerpt: "After sitting in on dozens of fundraising conversations, a pattern emerges: investors forget your market-size slide almost immediately, and remember exactly one story you told about a customer. Here's how to build a deck around that fact.",
    body: [
      "We've sat in the room — sometimes literally, sometimes just reviewing the recording afterward — for enough fundraising conversations to notice a pattern that surprises most founders: nobody remembers the market-sizing slide. Not because it's wrong, but because a TAM number never sticks in memory the way a specific story does.",
      { heading: "One story beats ten data points" },
      "What investors bring up in the partner meeting after you leave the room is almost always a specific customer moment — the operations manager who used to do something painfully manually and now doesn't, the number that changed for one named account. If your deck doesn't have that story clearly told, on its own slide, in plain language, it's easy to be forgotten between meetings.",
      "This doesn't mean drop the market sizing or the financials. It means treat them as supporting evidence for the story, not the headline. Build the deck's narrative spine around the customer moment first, then let the numbers back it up.",
      { heading: "A simple test" },
      "Before your next pitch, ask someone who wasn't in the room to read the deck cold, then close it and tell you the story back in their own words. If they can't, the deck is optimized for skimming, not remembering — and remembering is what actually moves a partner meeting forward."
    ]
  },
  {
    slug: "brand-guide-no-one-reads",
    title: "The Brand Guide No One Reads (and How to Fix It)",
    category: "Governance",
    readTime: "5 min read",
    date: "July 9, 2026",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200",
    excerpt: "Most style guides are written once, distributed as a PDF, and never opened again. We break down the format changes that turn a brand guide into something a growing team will actually reach for before their next deck or campaign.",
    body: [
      "Almost every brand guide we've inherited from a previous engagement has the same shape: a beautifully designed 40-page PDF, delivered once at the end of a rebrand, opened by the marketing team a handful of times and then quietly forgotten by everyone else.",
      { heading: "The format is the failure" },
      "A PDF is a dead end. It can't be searched easily from Slack, it goes stale the moment a new social platform or slide template appears, and nobody wants to scroll to page 26 to find out if the accent color has a tint rule. The content usually isn't the problem — the format is.",
      "We now deliver brand guidance as a living, linkable page instead: short, task-oriented sections a new hire can find by searching 'email signature' or 'deck template,' with the assets sitting right next to the rule instead of described in prose three pages earlier.",
      { heading: "Write it for the person building the next deck, not the archive" },
      "The best test of a brand guide isn't whether it looks polished — it's whether someone building a slide at 4pm on a Friday can find the answer to their exact question in under thirty seconds. If it takes longer than that, they'll just wing it, and that's how brand consistency quietly erodes one deck at a time."
    ]
  }
];
