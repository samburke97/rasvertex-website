// app/data/blogData.ts
// Add new posts here — the index and article pages pick them up automatically.

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string; // ISO date string: "2025-06-01"
  readingTime: number; // minutes
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
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "rope-access-vs-scaffold-sunshine-coast",
    title: "Rope Access vs Scaffold: What's the Right Call for Your Building?",
    excerpt:
      "Scaffold means days of setup, lost car parks, and unhappy residents. Here's why Sunshine Coast building managers are switching to rope access — and when scaffold is still the right tool.",
    category: "Rope Access",
    publishedAt: "2025-05-20",
    readingTime: 5,
    coverImage: "/images/projects/rope-access.png",
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
        text: "Our IRATA-certified technicians can be on ropes and working within hours of arriving on site. No permits, no footprint, no disruption to ground-level traffic. For facade inspections, painting, high-level cleaning, and sealant work on buildings up to 40+ storeys, rope access is consistently faster and cheaper.",
      },
      {
        type: "h3",
        text: "When scaffold is still the right call",
      },
      {
        type: "p",
        text: "Rope access isn't always the answer. For extended work on horizontal surfaces — large roof replacements, full floor repaint programs — scaffold or an EWP may still make more sense. The honest answer depends on the job scope, not a blanket preference for one method.",
      },
    ],
  },
  {
    slug: "body-corporate-maintenance-plan-guide",
    title: "The Body Corporate Maintenance Plan: What Should Be In It",
    excerpt:
      "A reactive maintenance approach costs strata buildings two to three times more over a decade than a proactive plan. Here's what a proper plan looks like.",
    category: "Maintenance",
    publishedAt: "2025-04-08",
    readingTime: 6,
    coverImage: "/images/projects/2.jpeg",
    coverAlt: "Sunshine Coast strata building exterior maintenance",
    author: HYLTON,
    body: [
      {
        type: "p",
        text: "Most strata committees only call a maintenance contractor when something breaks. By that point, what would have been a $2,000 sealant repair has become a $15,000 water ingress remediation. A proper maintenance plan turns reactive costs into predictable, budgeted line items.",
      },
      {
        type: "h2",
        text: "The six pillars of a Sunshine Coast maintenance plan",
      },
      {
        type: "ul",
        items: [
          "Annual facade and roof inspection — documented with photos",
          "Sealant and caulking program — reapplied every 5–7 years",
          "Painting schedule — exterior repaint every 8–12 years",
          "Waterproofing membrane inspection — balconies, roofs, wet areas",
          "Drainage maintenance — gutters, downpipes, surface drains",
          "Height safety compliance — anchor point certification every 5 years",
        ],
      },
      {
        type: "h2",
        text: "How to structure the budget",
      },
      {
        type: "p",
        text: "The 10-year maintenance plan is the standard framework — most strata managers will be familiar with it. The key is moving from a theoretical document to an active schedule with a single contractor who can execute across all categories.",
      },
      {
        type: "h3",
        text: "Why one contractor makes financial sense",
      },
      {
        type: "p",
        text: "When you use three separate contractors for painting, cleaning, and maintenance, you pay for three mobilisations, three sets of insurances, and three different schedules that never quite align. A single-contractor plan eliminates that overhead.",
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
    coverImage: "/nav/waterproofing.png",
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
    ],
  },
];

// ─── Helpers ───────────────────────────────────────────────────
export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, count = 2): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, count);
}

export const BLOG_CATEGORIES = [...new Set(BLOG_POSTS.map((p) => p.category))];
