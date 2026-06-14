// app/data/blogData.ts
// Add new posts here — the index and article pages pick them up automatically.
// Posts are rendered newest-first; add new entries anywhere in the array.

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readingTime: number;
  coverImage: string;
  coverAlt: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  body: BlogBlock[];
}

// ─── Body block types ──────────────────────────────────────────
export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "image"; src: string; alt: string; caption?: string };

// ─── Author ────────────────────────────────────────────────────
const HYLTON = {
  name: "Hylton Denton",
  role: "Operations Lead",
  avatar: "/images/people/caro.jpg",
};

// ─── Posts ────────────────────────────────────────────────────
// Declaration order doesn't matter — BlogGrid and helpers sort by publishedAt.
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-to-paint-a-house-sunshine-coast",
    title: "The Sunshine Coast Painter's Guide to Getting It Right",
    excerpt:
      "A quality paint job on the Sunshine Coast lives or dies on what happens before the first coat. Surface prep, product selection, timing and precision — here's what you can't afford to skip.",
    category: "Painting",
    publishedAt: "2025-05-26",
    readingTime: 6,
    coverImage: "/images/projects/1.jpeg",
    coverAlt:
      "Rope access painter preparing a Sunshine Coast building facade for repainting",
    author: HYLTON,
    body: [
      {
        type: "p",
        text: "Thinking about painting your home or commercial property on the Sunshine Coast? Before you pick up a brush or call in the pros, know this: the quality of your paint job depends on what happens before the first coat. Whether it's a house, apartment, strata complex or business, professional results start with surface prep, product choice, timing and attention to detail.",
      },
      {
        type: "p",
        text: "If you want a finish that lasts in our coastal climate — with salt, sun and humidity pushing every material to its limit — these are the steps you can't afford to skip.",
      },
      {
        type: "h2",
        text: "Surface Preparation Is Everything",
      },
      {
        type: "p",
        text: "Paint won't stick to a surface that's dirty, flaky, or damaged. Every job starts with a thorough high-pressure wash — removing dirt, dust, salt residue, mould and anything else that could interfere with adhesion. On the Sunshine Coast, where exterior surfaces take a daily beating from the coastal environment, this step isn't optional.",
      },
      {
        type: "p",
        text: "Once the surface is clean, every crack, dent or hole gets patched or rendered properly before priming. Skip this and you'll end up with uneven textures and shadows that only show up after the final coat — especially in full coastal sun.",
      },
      {
        type: "h2",
        text: "Primer Is Not Optional",
      },
      {
        type: "p",
        text: "A quality primer seals the surface, improves topcoat adhesion, and in many cases provides the first layer of mould and moisture resistance. On the Sunshine Coast, a primer with anti-fungal properties isn't a luxury — it's a necessity. We specify primers based on the substrate: bare timber, repainted surfaces, render, masonry and metal all require different primer systems.",
      },
      {
        type: "h2",
        text: "Product Selection for the Coastal Climate",
      },
      {
        type: "p",
        text: "Not every paint performs the same in coastal conditions. We specify products proven to handle UV intensity, salt air and high humidity. For exterior work, that typically means a premium acrylic with a 10-year weathering guarantee — not the builder's grade product from the local hardware store.",
      },
      {
        type: "ul",
        items: [
          "Dulux Weathershield or equivalent for exterior masonry and render",
          "Two-pack epoxy systems for high-traffic floors and wet areas",
          "Low-sheen or flat finishes for interior ceilings — never semi-gloss",
          "UV-stable colours — darker shades absorb more heat and cycle harder",
        ],
      },
      {
        type: "h2",
        text: "Timing Around the Weather",
      },
      {
        type: "p",
        text: "On the Sunshine Coast, you're working around afternoon storms from November through March. Paint applied in humid conditions or washed by rain before it cures will peel within months. Professional painters plan around the forecast — early starts, morning sessions, and staged drying cycles between coats.",
      },
      {
        type: "h2",
        text: "Working With Strata Managers and Body Corporate Committees",
      },
      {
        type: "p",
        text: "We understand how strata decisions get made. We present to committees in plain language. We provide written proposals with complete product schedules, staging plans and resident communication strategies. We issue condition reports formatted for sinking fund forecasts under the BCCM Act. We handle all resident notifications during works. And we back every job with a written warranty, lodged in ROCO at handover.",
      },
      {
        type: "p",
        text: "If your building is on the Sunshine Coast and you are looking for a single partner who can manage the full maintenance picture, we would be glad to have that conversation.",
      },
    ],
  },

  {
    slug: "why-exterior-building-cleaning-matters",
    title: "Why Exterior Building Cleaning Is About More Than Appearances",
    excerpt:
      "Most people clean the inside of their building and neglect the outside. On the Sunshine Coast, that's an expensive mistake. Here are four reasons exterior cleaning is essential maintenance, not cosmetic.",
    category: "Cleaning",
    publishedAt: "2025-01-11",
    readingTime: 5,
    coverImage: "/images/projects/1.jpeg",
    coverAlt:
      "Rope access technician performing exterior building cleaning on the Sunshine Coast",
    author: HYLTON,
    body: [
      {
        type: "p",
        text: "When people talk about cleaning their property, they almost always mean the interior — the kitchen, living room and bathroom get plenty of attention while the exterior walls and roof sit neglected. It's understandable, but it's a mistake that can cost thousands.",
      },
      {
        type: "p",
        text: "The importance of exterior cleaning lies not only in improving aesthetics but in ensuring you stay ahead of problems before they escalate. Here are four reasons to prioritise exterior cleaning if you want to protect the look, appeal and long-term value of your property.",
      },
      {
        type: "h2",
        text: "1. The Exterior Is Your Building's First Line of Defence",
      },
      {
        type: "p",
        text: "You can replace interior items — sinks, taps, shelves — without too much trouble. But when it comes to repairing the exterior of a building, costs escalate quickly. The exterior is the skeleton of your property, and without a solid skeleton, everything can fall apart.",
      },
      {
        type: "p",
        text: "Most people act on exterior repairs only when they see a visible problem — that's when it becomes urgent and expensive. Exterior cleaning shifts you from reactive to preventive, catching surface degradation before it becomes a structural issue.",
      },
      {
        type: "h2",
        text: "2. Elemental Wear and Tear Adds Up",
      },
      {
        type: "p",
        text: "You might not always see the elements doing damage, but you can be assured they are. Every day your building is exposed to wind, rain, UV, humidity and — on the Sunshine Coast — salt air. Exterior cleaning removes the build-up of damaging contaminants that eat into your building's external surfaces over time.",
      },
      {
        type: "ul",
        items: [
          "Salt deposits — accelerate corrosion of fixings, flashings and cladding within 5km of the coast",
          "Biological growth — algae, lichen and moss retain moisture and degrade coatings",
          "Pollution and dust — block weep holes and drainage channels, causing water ingress",
          "UV degradation — accelerated by dirty surfaces that trap heat against the substrate",
        ],
      },
      {
        type: "h2",
        text: "3. Exterior Presentation Directly Affects Property Value",
      },
      {
        type: "p",
        text: "If you're looking to sell or rent your property, there is no better first impression than a clean, inviting exterior. That's what prospective buyers see from the street — and it's often what makes or breaks their initial impression before they've even walked inside.",
      },
      {
        type: "p",
        text: "For strata buildings and body corporates, a well-maintained exterior protects the collective asset value of every lot in the building. A neglected facade doesn't just affect the sale price of one unit — it affects all of them.",
      },
      {
        type: "h2",
        text: "4. Prevention Is Always Cheaper Than Cure",
      },
      {
        type: "p",
        text: "Much like a regular building inspection or maintenance program, exterior cleaning provides essential peace of mind. For most property owners, their building is their most significant asset. Regular professional cleaning is the lowest-cost intervention available to protect it.",
      },
      {
        type: "p",
        text: "The cost of a professional facade wash and window clean is a fraction of the cost of render repairs, membrane replacement or facade remediation caused by years of unchecked surface degradation. Prevention is always cheaper than cure — especially on the Sunshine Coast, where the coastal environment accelerates every failure mode.",
      },
    ],
  },

  {
    slug: "rope-access-vs-scaffold-sunshine-coast",
    title: "Rope Access vs Scaffold: What's the Right Call for Your Building?",
    excerpt:
      "Scaffold means days of setup, lost car parks, and unhappy residents. Here's why Sunshine Coast building managers are switching to rope access — and when scaffold is still the right tool.",
    category: "Rope Access",
    publishedAt: "2025-05-20",
    readingTime: 5,
    // Fixed: was /images/projects/rope-access.png which does not exist on disk
    coverImage: "/images/projects/2.jpeg",
    coverAlt:
      "IRATA-certified rope access technician on a Sunshine Coast high-rise",
    author: HYLTON,
    body: [
      {
        type: "p",
        text: "If you manage a strata building or commercial property on the Sunshine Coast, you've probably been quoted scaffold for a job and wondered whether there's a better way. There usually is.",
      },
      {
        type: "h2",
        text: "The real cost of scaffold",
      },
      {
        type: "p",
        text: "Scaffold isn't just expensive to hire — it's expensive in every direction. A typical mid-rise building on the Coast can take two to three days to fully scaffold, and another day to strike. That's the better part of a week where your car parks are blocked, residents are navigating around steel tubes, and nothing is getting done on the building itself.",
      },
      {
        type: "ul",
        items: [
          "2–3 days erection, 1 day strike — minimum 4 lost days",
          "Car park blockages trigger strata disputes",
          "Council permits required for street-side scaffold in most areas",
          "Minimum hire periods apply regardless of job length",
        ],
      },
      {
        type: "h2",
        text: "What rope access changes",
      },
      {
        type: "p",
        text: "Our IRATA-certified technicians can be on ropes and working within hours of arriving on site. No permits, no footprint, no disruption to ground-level traffic. For buildings over 4 storeys, rope access typically saves 40–60% on access costs versus full scaffold.",
      },
      {
        type: "h2",
        text: "When scaffold is still the right call",
      },
      {
        type: "p",
        text: "Rope access isn't always the answer. For large-volume work at a fixed height — say, a full render replacement on a podium level — scaffold provides a stable working platform that's faster for that specific scope. We'll tell you honestly which method makes sense for your job.",
      },
    ],
  },

  {
    slug: "building-maintenance-plan-sunshine-coast",
    title:
      "How to Build a 10-Year Maintenance Plan for Your Sunshine Coast Strata",
    excerpt:
      "A sinking fund forecast without a maintenance plan behind it is guesswork. Here's how body corporates on the Sunshine Coast can build one that actually holds up.",
    category: "Maintenance",
    publishedAt: "2025-04-08",
    readingTime: 6,
    coverImage: "/images/projects/2.jpeg",
    coverAlt:
      "Building condition inspection for a Sunshine Coast strata maintenance plan",
    author: HYLTON,
    body: [
      {
        type: "p",
        text: "Under the Body Corporate and Community Management Act 1997, every Queensland body corporate is required to maintain a 10-year sinking fund forecast. But a forecast is only as accurate as the condition data behind it — and most bodies corporate are working from estimates that are years out of date.",
      },
      {
        type: "h2",
        text: "Start with a condition assessment",
      },
      {
        type: "p",
        text: "The foundation of any maintenance plan is an accurate picture of your building's current condition. That means a physical inspection — not a desktop estimate. A rope access facade inspection combined with a thermal imaging survey will identify defects that a ground-level inspection misses entirely.",
      },
      {
        type: "h2",
        text: "Categorise by priority and timeline",
      },
      {
        type: "p",
        text: "Not everything needs to happen at once. A good condition report categorises findings into Priority 1 (immediate), Priority 2 (within 12 months) and Priority 3 (monitor and plan). This gives your committee a defensible basis for staging expenditure across sinking fund cycles.",
      },
      {
        type: "ul",
        items: [
          "Priority 1 — safety-critical or actively causing damage. Budget in current cycle.",
          "Priority 2 — deteriorating but not yet critical. Budget in next 1–2 cycles.",
          "Priority 3 — early-stage deterioration. Include in long-range forecast.",
        ],
      },
      {
        type: "h2",
        text: "Build the schedule around your building's actual cycles",
      },
      {
        type: "p",
        text: "Exterior painting on a coastal Sunshine Coast building typically cycles every 8–12 years. Balcony membrane replacement every 10–15 years. Height safety recertification annually. Facade wash every 6–12 months. These are the inputs your 10-year forecast needs — and they should come from a contractor who knows your building, not a generic industry table.",
      },
      {
        type: "h3",
        text: "Why one contractor makes financial sense",
      },
      {
        type: "p",
        text: "When you use three separate contractors for painting, cleaning, and maintenance, you pay for three mobilisations, three sets of insurances, and three different schedules that never quite align. A single-contractor plan eliminates that overhead and gives your committee a single point of accountability.",
      },
    ],
  },

  {
    slug: "waterproofing-sunshine-coast-buildings",
    title: "Waterproofing on the Sunshine Coast: What Fails and Why",
    excerpt:
      "The Coast's UV intensity and humidity cycle creates specific failure patterns in waterproofing membranes. Here's what to look for before the water gets in.",
    category: "Waterproofing",
    publishedAt: "2025-02-14",
    readingTime: 4,
    coverImage: "/images/projects/1.jpeg",
    coverAlt: "Waterproofing membrane inspection on a Sunshine Coast balcony",
    author: HYLTON,
    body: [
      {
        type: "p",
        text: "Waterproofing failures are the most expensive building defects we deal with — and they're almost always preventable. The Sunshine Coast climate is particularly hard on membranes: extreme UV from October through March accelerates oxidation, while the high humidity cycle forces constant expansion and contraction in the substrate.",
      },
      {
        type: "h2",
        text: "The three most common failure points",
      },
      {
        type: "ul",
        items: [
          "Balcony membrane edge terminations — most common failure on buildings 10+ years old",
          "Upstand height — inadequate height allows water pooling against the building substrate",
          "Penetrations — plumbing and drainage penetrations that weren't properly sealed at installation",
        ],
      },
      {
        type: "h2",
        text: "Inspection without disruption",
      },
      {
        type: "p",
        text: "The good news is that a proper membrane inspection doesn't require scaffolding or resident disruption. Our rope access team can inspect and document every balcony on a 20-storey building in a single day, with a full photographic condition report by end of week.",
      },
      {
        type: "h2",
        text: "When to act",
      },
      {
        type: "p",
        text: "If your building is more than 10 years old and you haven't had a waterproofing inspection since original construction, you're overdue. The cost of a rope access inspection is a fraction of what you'll spend on remediation once water is already moving through the structure.",
      },
    ],
  },
];

// ─── Helpers ───────────────────────────────────────────────────

/** Newest post first — used by BlogGrid and anywhere posts need ordering. */
export function getSortedPosts(): BlogPost[] {
  return [...BLOG_POSTS].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

/** Returns `count` related posts sorted newest-first, excluding current slug. */
export function getRelatedPosts(slug: string, count = 2): BlogPost[] {
  return getSortedPosts()
    .filter((p) => p.slug !== slug)
    .slice(0, count);
}

export const BLOG_CATEGORIES = [...new Set(BLOG_POSTS.map((p) => p.category))];
