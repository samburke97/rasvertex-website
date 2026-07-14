// app/data/blogData.ts
// Add new posts here — the index and article pages pick them up automatically.
// Posts are rendered newest-first; add new entries anywhere in the array.

import { cld } from "../lib/cloudinary";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readingTime: number;
  coverImage: string;
  coverAlt: string;
  /** Thumbnail shown on the blog listing/related cards — falls back to coverImage */
  previewImage?: string;
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
    slug: "sunshine-coast-painting-guide",
    title: "The Sunshine Coast Painter's Guide to Getting It Right",
    excerpt:
      "A quality paint job on the Sunshine Coast really comes down to what happens before the first coat goes on. Surface preparation, product selection, timing and precision are all things you genuinely cannot afford to skip.",
    category: "Painting",
    publishedAt: "2025-05-26",
    readingTime: 6,
    coverImage: cld("blog_1", { width: 1600 }),
    coverAlt:
      "Rope access painter preparing a Sunshine Coast building facade for repainting",
    author: HYLTON,
    body: [
      {
        type: "p",
        text: "Thinking about painting your home or commercial property on the Sunshine Coast? Before you pick up a brush or call in the professionals, it helps to know this. The quality of your paint job depends almost entirely on what happens before the first coat goes on. Whether it is a house, an apartment, a strata complex or a business, professional results start with proper surface preparation, the right product choice, good timing and genuine attention to detail.",
      },
      {
        type: "p",
        text: "If you want a finish that actually lasts in our coastal climate, where salt, sun and humidity push every material to its limit, these are the steps you genuinely cannot afford to skip.",
      },
      {
        type: "h2",
        text: "Surface Preparation Is Everything",
      },
      {
        type: "p",
        text: "Paint will not stick to a surface that is dirty, flaky or damaged. Every job starts with a thorough pressure wash that removes dirt, dust, salt residue, mould and anything else that could interfere with adhesion. On the Sunshine Coast, where exterior surfaces take a daily beating from the coastal environment, this step is never optional.",
      },
      {
        type: "p",
        text: "Once the surface is clean, every crack, dent or hole gets patched or rendered properly before priming begins. Skip this step and you will end up with uneven textures and shadows that only show up after the final coat, especially once the full coastal sun hits the wall.",
      },
      {
        type: "h2",
        text: "Primer Is Not Optional",
      },
      {
        type: "p",
        text: "A quality primer seals the surface, improves topcoat adhesion and, in many cases, provides the first layer of mould and moisture resistance. On the Sunshine Coast, a primer with anti fungal properties is not a luxury, it is a necessity. We specify primers based on the substrate, since bare timber, repainted surfaces, render, masonry and metal all need a different primer system.",
      },
      {
        type: "h2",
        text: "Product Selection for the Coastal Climate",
      },
      {
        type: "p",
        text: "Not every paint performs the same way in coastal conditions. We specify products proven to handle UV intensity, salt air and high humidity, and for exterior work that typically means a premium acrylic backed by a ten year weathering guarantee, not a builder's grade product picked up from the local hardware store.",
      },
      {
        type: "ul",
        items: [
          "A premium coating system tailored to our coastal climate for exterior masonry and render",
          "Durable epoxy coatings for high traffic floors and wet areas",
          "Low sheen or flat finishes for interior ceilings, never semi gloss",
          "UV stable colours, since darker shades absorb more heat and cycle harder over time",
        ],
      },
      {
        type: "h2",
        text: "Timing Around the Weather",
      },
      {
        type: "p",
        text: "On the Sunshine Coast, you are working around afternoon storms from November through March. Paint applied in humid conditions, or washed by rain before it has cured, will peel within months. Professional painters plan around the forecast with early starts, morning sessions and staged drying cycles between coats.",
      },
      {
        type: "h2",
        text: "Working With Strata Managers and Body Corporate Committees",
      },
      {
        type: "p",
        text: "We understand how strata decisions actually get made. We present to committees in plain language, provide written proposals with complete product schedules, staging plans and resident communication strategies, and issue condition reports formatted for sinking fund forecasts under the BCCM Act. We handle every resident notification during the works, and we back every job with a written warranty issued at handover.",
      },
      {
        type: "p",
        text: "If your building is on the Sunshine Coast and you are looking for a single partner who can manage the full maintenance picture, we would be glad to have that conversation.",
      },
    ],
  },

  {
    slug: "how-exterior-cleaning-how-exterior-cleaning-will-improve-the-look-and-value-of-your-property",
    title: "Why Exterior Building Cleaning Is About More Than Appearances",
    excerpt:
      "Most people clean the inside of their building and neglect the outside, and on the Sunshine Coast that is an expensive mistake to make. Here are four reasons exterior building cleaning counts as essential maintenance rather than something cosmetic.",
    category: "Cleaning",
    publishedAt: "2025-01-11",
    readingTime: 5,
    coverImage: cld("clear-communication", { width: 1600 }),
    coverAlt:
      "Rope access technician performing exterior building cleaning on the Sunshine Coast",
    previewImage: cld("minimal-disruption", { width: 800 }),
    author: HYLTON,
    body: [
      {
        type: "p",
        text: "When people talk about cleaning their property, they almost always mean the interior. The kitchen, living room and bathroom get plenty of attention while the exterior walls and roof sit neglected. It is understandable, but it is also a mistake that can end up costing thousands.",
      },
      {
        type: "p",
        text: "The value of exterior cleaning lies not only in improving how a building looks, but in helping you stay ahead of problems before they escalate. Here are four reasons to prioritise exterior building cleaning if you want to protect the look, appeal and long term value of your property.",
      },
      {
        type: "h2",
        text: "1. The Exterior Is Your Building's First Line of Defence",
      },
      {
        type: "p",
        text: "You can replace interior items like sinks, taps and shelves without too much trouble, but when it comes to repairing the exterior of a building, costs escalate quickly. The exterior is really the skeleton of your property, and without a solid skeleton, everything else can fall apart around it.",
      },
      {
        type: "p",
        text: "Most people only act on exterior repairs once they see a visible problem, and by then it has usually become urgent and expensive. Regular exterior cleaning shifts you from reactive to preventive, catching surface degradation well before it turns into a structural issue.",
      },
      {
        type: "h2",
        text: "2. Elemental Wear and Tear Adds Up",
      },
      {
        type: "p",
        text: "You might not always see the elements doing damage, but rest assured they are. Every single day your building is exposed to wind, rain, UV, humidity and, here on the Sunshine Coast, salt air as well. Exterior cleaning removes the buildup of damaging contaminants that eat into your building's external surfaces over time.",
      },
      {
        type: "ul",
        items: [
          "Salt deposits: speed up corrosion of fixings, flashings and cladding within about five kilometres of the coast",
          "Biological growth: algae, lichen and moss hold moisture against the surface and degrade coatings over time",
          "Pollution and dust: block weep holes and drainage channels, which leads to water ingress",
          "UV degradation: sped up by dirty surfaces that trap heat against the substrate underneath",
        ],
      },
      {
        type: "h2",
        text: "3. Exterior Presentation Directly Affects Property Value",
      },
      {
        type: "p",
        text: "If you are looking to sell or rent your property, there is no better first impression than a clean, inviting exterior. That is what prospective buyers see from the street first, and it often makes or breaks their impression before they have even walked inside the door.",
      },
      {
        type: "p",
        text: "For strata buildings and body corporates, a well maintained exterior protects the collective asset value of every lot in the building. A neglected facade does not just affect the sale price of one unit, it affects every single one of them.",
      },
      {
        type: "h2",
        text: "4. Prevention Is Always Cheaper Than Cure",
      },
      {
        type: "p",
        text: "Much like a regular building inspection or maintenance program, exterior cleaning provides real peace of mind. For most property owners, their building is their single biggest asset, and regular professional cleaning is the lowest cost intervention available to protect it.",
      },
      {
        type: "p",
        text: "The cost of a professional facade wash and window clean is a fraction of what you would spend on render repairs, membrane replacement or facade remediation caused by years of unchecked surface degradation. Prevention is always cheaper than cure, especially here on the Sunshine Coast, where the coastal environment speeds up every possible failure mode.",
      },
    ],
  },

  {
    slug: "choosing-a-rope-access-partner",
    title: "Rope Access vs Scaffold: What's the Right Call for Your Building?",
    excerpt:
      "Scaffold means extra setup time and lost car park space. Here is why Sunshine Coast building managers are switching to rope access, and when scaffold is still genuinely the right tool for the job.",
    category: "Rope Access",
    publishedAt: "2025-05-20",
    readingTime: 5,
    coverImage: cld("blog_3", { width: 1600 }),
    coverAlt:
      "IRATA certified rope access technician on a Sunshine Coast high rise building",
    author: HYLTON,
    body: [
      {
        type: "p",
        text: "If you manage a strata building or commercial property on the Sunshine Coast, you have probably been quoted scaffold for a job at some point and wondered whether there is a better way. There usually is.",
      },
      {
        type: "h2",
        text: "The real cost of scaffold",
      },
      {
        type: "p",
        text: "Scaffold hire is only part of the cost. A typical mid rise building on the Coast can take two to three days to fully scaffold, plus another day to strike it all back down. That is the better part of a week where car parks stay blocked and residents need to work around it, before any real work begins on the building itself.",
      },
      {
        type: "ul",
        items: [
          "Two to three days to erect, plus one day to strike, so at least four lost days before any real work begins",
          "Car park blockages that often trigger strata disputes",
          "Council permits required for street side scaffold in most areas",
          "Minimum hire periods that apply regardless of how long the job actually takes",
        ],
      },
      {
        type: "h2",
        text: "What rope access changes",
      },
      {
        type: "p",
        text: "Our IRATA certified technicians can be on ropes and working within hours of arriving on site. There are no permits, no footprint and no disruption to ground level traffic. For buildings over four storeys, rope access typically saves 40 to 60 percent on access costs compared with a full scaffold.",
      },
      {
        type: "h2",
        text: "When scaffold is still the right call",
      },
      {
        type: "p",
        text: "Rope access is not always the answer. For large volume work at a fixed height, a full render replacement on a podium level for example, scaffold provides a stable working platform that is genuinely faster for that specific scope. We will always tell you honestly which method makes the most sense for your job.",
      },
    ],
  },

  {
    slug: "5-ways-strata-managers-can-effortlessly-maintain-property-value",
    title:
      "How to Build a 10 Year Maintenance Plan for Your Sunshine Coast Strata",
    excerpt:
      "A sinking fund forecast without a proper maintenance plan behind it is really just guesswork. Here is how body corporates on the Sunshine Coast can build one that actually holds up over time.",
    category: "Maintenance",
    publishedAt: "2025-04-08",
    readingTime: 6,
    coverImage: cld("archers-reports", { width: 1600 }),
    coverAlt:
      "Building condition inspection for a Sunshine Coast strata maintenance plan",
    author: HYLTON,
    body: [
      {
        type: "p",
        text: "Under the Body Corporate and Community Management Act 1997, every Queensland body corporate is required to maintain a ten year sinking fund forecast. A forecast is only ever as accurate as the condition data behind it though, and most bodies corporate are working from estimates that are years out of date.",
      },
      {
        type: "h2",
        text: "Start with a condition assessment",
      },
      {
        type: "p",
        text: "The foundation of any maintenance plan is an accurate picture of your building's current condition, and that means a genuine physical inspection rather than a desktop estimate. A rope access facade inspection combined with a thermal imaging survey will identify defects that a ground level inspection misses entirely.",
      },
      {
        type: "h2",
        text: "Categorise by priority and timeline",
      },
      {
        type: "p",
        text: "Not everything needs to happen at once. A good condition report categorises findings into priority one for immediate action, priority two for within twelve months, and priority three for ongoing monitoring. That gives your committee a defensible basis for staging expenditure across sinking fund cycles.",
      },
      {
        type: "ul",
        items: [
          "Priority one: safety critical or actively causing damage, budgeted for in the current cycle",
          "Priority two: deteriorating but not yet critical, budgeted for in the next one to two cycles",
          "Priority three: early stage deterioration, included in the long range forecast",
        ],
      },
      {
        type: "h2",
        text: "Build the schedule around your building's actual cycles",
      },
      {
        type: "p",
        text: "Exterior painting on a coastal Sunshine Coast building typically cycles every eight to twelve years, balcony membrane replacement every ten to fifteen years, height safety recertification comes around annually, and a facade wash is usually needed every six to twelve months. These are the real inputs your ten year forecast needs, and they should come from a contractor who actually knows your building, not a generic industry table.",
      },
      {
        type: "h3",
        text: "Why one contractor makes financial sense",
      },
      {
        type: "p",
        text: "When you use three separate contractors for painting, cleaning and maintenance, you end up paying for three mobilisations, three sets of insurances and three different schedules that never quite line up. A single contractor plan removes that overhead entirely and gives your committee one clear point of accountability.",
      },
    ],
  },

  {
    slug: "protect-your-building-from-the-sunshine-coasts-elements",
    title: "Waterproofing on the Sunshine Coast: What Fails and Why",
    excerpt:
      "The Coast's UV intensity and humidity cycle create specific failure patterns in waterproofing membranes. Here is what to look for before the water actually gets in.",
    category: "Waterproofing",
    publishedAt: "2025-02-14",
    readingTime: 4,
    coverImage: cld("blog_5", { width: 1600 }),
    coverAlt: "Waterproofing membrane inspection on a Sunshine Coast balcony",
    author: HYLTON,
    body: [
      {
        type: "p",
        text: "Waterproofing failures are some of the most expensive building defects we deal with, and they are almost always preventable. The Sunshine Coast climate is particularly hard on membranes, since extreme UV from October through March speeds up oxidation, while the high humidity cycle forces constant expansion and contraction in the substrate underneath.",
      },
      {
        type: "h2",
        text: "The three most common failure points",
      },
      {
        type: "ul",
        items: [
          "Balcony membrane edge terminations: the most common failure point on buildings over ten years old",
          "Upstand height: an inadequate height allows water to pool against the building substrate",
          "Penetrations: plumbing and drainage penetrations that were never properly sealed at installation",
        ],
      },
      {
        type: "h2",
        text: "Inspection without disruption",
      },
      {
        type: "p",
        text: "The good news is that a proper membrane inspection does not require scaffolding or any disruption to residents. Our rope access team can inspect and document every balcony on a twenty storey building in a single day, with a full photographic condition report ready by the end of the week.",
      },
      {
        type: "h2",
        text: "When to act",
      },
      {
        type: "p",
        text: "If your building is more than ten years old and has not had a waterproofing inspection since original construction, you are overdue for one. The cost of a rope access inspection is a fraction of what you will spend on remediation once water is already moving through the structure.",
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
export function getRelatedPosts(slug: string, count = 3): BlogPost[] {
  return getSortedPosts()
    .filter((p) => p.slug !== slug)
    .slice(0, count);
}

export const BLOG_CATEGORIES = [...new Set(BLOG_POSTS.map((p) => p.category))];
