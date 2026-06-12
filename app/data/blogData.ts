// app/data/blogData.ts
// Add new posts here — the index and article pages pick them up automatically.

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
        text: "Once the surface is clean, every crack, dent or hole gets patched or rendered properly before priming. Skip this and you'll end up with uneven textures and shadows that only show up after the final coat — especially in full coastal sun. Most repainting jobs around here are dealing with sun-damaged, flaky paint. That means sanding down to a sound base.",
      },
      {
        type: "p",
        text: "Then comes priming — just as important as the paint itself. The right base coat sets the tone for the final finish. If the base isn't clean and prepped, even the best paint will look average. We spend more time preparing than painting, and there's a good reason for it.",
      },
      {
        type: "h2",
        text: "The Right Paint System for the Right Job",
      },
      {
        type: "p",
        text: "Not all paint is made to handle the Sunshine Coast. What works in Brisbane or down south often doesn't cut it here. We see it regularly — well-known brands peeling off after a year because the wrong product was used in the wrong environment.",
      },
      {
        type: "p",
        text: "For exteriors, we look for strong UV resistance, flexibility and weatherproofing. Bathrooms, ceilings and eaves need moisture-resistant coatings. Render needs something different to timber. Metal, brick and fibre cement each have their own requirements. It's not about picking a brand name — it's about matching the system to the substrate and the exposure so it holds up over time.",
      },
      {
        type: "ul",
        items: [
          "Coastal exteriors within 5km of the ocean — salt-bonded primer and elastomeric topcoat as standard",
          "Rendered walls — flexible acrylic systems that accommodate thermal movement",
          "Timber — penetrating oil or UV-stable varnish, not film-forming coatings that trap moisture",
          "Wet areas and eaves — moisture-resistant coatings rated for high-humidity environments",
        ],
      },
      {
        type: "h2",
        text: "Edge Work and Precision",
      },
      {
        type: "p",
        text: "Clean, straight edges. No bleed lines. Perfect cutting-in where wall meets ceiling. This is the craftsmanship that separates a professional result from a rushed one — and it's the part most people don't notice until they do. Everything gets masked and protected properly. Floors, windows, fixtures — nothing is left to chance.",
      },
      {
        type: "h2",
        text: "Timing and the Sunshine Coast Climate",
      },
      {
        type: "p",
        text: "Even the best surface preparation and paint won't deliver a lasting finish if applied in the wrong conditions. Humidity affects how paint cures. Heat can make it dry too fast. Cold slows everything down. We monitor forecasts and adjust schedules to get the best result — some jobs take a little longer because of this, but that's the point. You're not hiring us for a rushed finish.",
      },
      {
        type: "h2",
        text: "Why This Matters More for Commercial and Strata Buildings",
      },
      {
        type: "p",
        text: "On a commercial or strata building, a bad paint job doesn't just fade — it costs money. Water infiltration, increased maintenance, unhappy tenants and owners. We bring IRATA rope access capability for high-rise sites, QBCC-licensed crews, and full compliance with body corporate and building management requirements. A good paint job protects your asset and keeps your maintenance budget in check.",
      },
      {
        type: "p",
        text: "We work right across the Sunshine Coast — from Noosa to Caloundra — handling everything from family homes to commercial premises and strata properties.",
      },
    ],
  },

  {
    slug: "strata-managers-guide-to-maintaining-property-value",
    title:
      "5 Ways Strata Managers Can Maintain Property Value on the Sunshine Coast",
    excerpt:
      "Painting, cleaning, height safety, waterproofing and maintenance — the five areas where proactive decisions protect your building's value and keep residents happy.",
    category: "Strata",
    publishedAt: "2025-03-12",
    readingTime: 7,
    coverImage: "/images/projects/2.jpeg",
    coverAlt:
      "Strata building maintenance and painting on the Sunshine Coast by RAS-VERTEX",
    author: HYLTON,
    body: [
      {
        type: "p",
        text: "As a strata manager on the Sunshine Coast, you're the guardian of property value and safety — ensuring everything remains secure and stress-free for lot owners and residents. From the harsh coastal climate to everyday wear and tear, you're on the front lines dealing with challenges that demand a proactive approach.",
      },
      {
        type: "p",
        text: "At RAS-VERTEX, we've spent over a decade working with strata properties across Queensland. Here's what we've learned about keeping buildings in top condition.",
      },
      {
        type: "h2",
        text: "1. Painting: More Than Kerb Appeal",
      },
      {
        type: "p",
        text: "A fresh coat of paint is often the first thing people notice about a property — but it's also one of the most important protective measures you can apply to a building's exterior. The right paint system shields against salt exposure, UV damage and moisture infiltration that lead to costly structural repairs if left unchecked.",
      },
      {
        type: "ul",
        items: [
          "Schedule regular painting maintenance to prevent moisture infiltration and surface deterioration",
          "Specify high-quality, UV-resistant, moisture-resistant coatings designed for coastal Queensland conditions",
          "Address minor wear early — it extends asset life and reduces the frequency and cost of full repaints",
        ],
      },
      {
        type: "h2",
        text: "2. Cleaning: Protecting the Asset, Not Just the Appearance",
      },
      {
        type: "p",
        text: "Windows accumulate dirt, hard water stains and salt residue that cause etching and reduced visibility if left untreated. Exterior surfaces — walls, facades and roofs — are prone to mould, mildew and corrosion in the Sunshine Coast's high-humidity environment. Consistent professional cleaning prevents this long-term damage.",
      },
      {
        type: "p",
        text: "Different materials require different techniques. Glass needs streak-free, mineral deposit-resistant cleaning. Painted surfaces need low-pressure washing. High-rise buildings benefit from rope access cleaning — thorough, safe and efficient without disruptive scaffolding.",
      },
      {
        type: "h2",
        text: "3. Height Safety: Non-Negotiable Compliance",
      },
      {
        type: "p",
        text: "Strata managers face the challenge of managing maintenance tasks that require working at height — window cleaning, painting, roof inspections. Without correct safety systems in place, these tasks pose significant risks and expose the body corporate to direct legal liability under the Work Health and Safety Act 2011.",
      },
      {
        type: "ul",
        items: [
          "All work at height must comply with AS/NZS 1891 Australian Standards",
          "Anchor points and static lines require annual inspection and recertification",
          "Detailed inspection and compliance records protect the body corporate from liability",
        ],
      },
      {
        type: "h2",
        text: "4. Waterproofing: Catch It Early",
      },
      {
        type: "p",
        text: "Water damage is one of the most expensive and disruptive issues for strata properties. Leaks, dampness and poor drainage lead to structural deterioration, mould growth and significant financial liability. Proactive waterproofing inspection is the most cost-effective protection available.",
      },
      {
        type: "p",
        text: "Not all waterproofing solutions are equal. Balconies and rooftops require flexible, UV-resistant membranes. Basements and below-ground structures need heavy-duty sealants. External walls benefit from hydrophobic coatings. Thermal imaging leak detection identifies problems before they become structural issues.",
      },
      {
        type: "h2",
        text: "5. Maintenance: Preventing the Expensive Repairs",
      },
      {
        type: "p",
        text: "Regular maintenance is the foundation of building upkeep. Without it, small issues quickly become expensive repairs. Proactively addressing wear and tear — repainting weathered surfaces, sealing cracks, reinforcing waterproofing in high-risk areas — keeps your building safe, functional and compliant with Queensland regulations.",
      },
      {
        type: "p",
        text: "The most effective strata managers work with a single trusted contractor who can execute across all maintenance categories. It eliminates multiple mobilisations, competing schedules and the coordination overhead of managing separate trades for painting, cleaning, waterproofing and height safety.",
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
    coverImage: "/nav/cleaning.png",
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
    coverImage: "/nav/maintenance.png",
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
      {
        type: "h2",
        text: "When to act",
      },
      {
        type: "p",
        text: "If your building is more than 10 years old and the original membrane hasn't been inspected, the time to act is now — before you start seeing water staining on ceilings below balconies. By the time visible damage appears, the membrane has typically been failing for months and remediation costs increase significantly.",
      },
    ],
  },
  {
    slug: "what-to-ask-before-hiring-a-painter-for-your-body-corporate",
    title:
      "What to Ask Before Hiring a Painter for Your Sunshine Coast Body Corporate",
    excerpt:
      "Most strata committees approve a painting contractor without asking the right questions. Here's what separates a professional body corporate painter from one who'll cause headaches for your residents.",
    category: "Strata",
    publishedAt: "2025-06-03",
    readingTime: 6,
    coverImage: "/images/projects/2.jpeg",
    coverAlt:
      "Body corporate building repaint on the Sunshine Coast by RAS-VERTEX",
    author: HYLTON,
    body: [
      {
        type: "p",
        text: "Getting a strata building painted is one of the largest discretionary expenditures a body corporate committee will make in any given year. Yet most committees approve a contractor based on price alone, without asking the questions that actually predict whether the job will go well.",
      },
      {
        type: "p",
        text: "After 25 years of painting body corporate buildings on the Sunshine Coast, here's what we'd ask if we were on the other side of the table.",
      },
      {
        type: "h2",
        text: "Are they QBCC licensed for painting?",
      },
      {
        type: "p",
        text: "Painting is a licensed trade in Queensland. Your contractor must hold a current QBCC licence and carry a minimum of $50,000 public liability insurance — though reputable contractors carry significantly more. Ask for a certificate of currency at quote stage. If they hesitate, that's your answer.",
      },
      {
        type: "h2",
        text: "What paint system are they specifying, and why?",
      },
      {
        type: "p",
        text: "A professional contractor will specify a complete system — primer, intermediate coat and topcoat — matched to your building's substrate, exposure and proximity to the ocean. If a painter quotes without asking about your building's coating history, distance from the coast or substrate type, they're not specifying for your building. They're quoting a generic system and hoping it sticks.",
      },
      {
        type: "ul",
        items: [
          "Buildings within 5km of the coast require salt-bonded primers and elastomeric topcoats as a minimum",
          "Rendered surfaces need flexible systems that accommodate thermal movement",
          "Ask specifically: what primer, what intermediate coat, what topcoat, and what DFT (dry film thickness) are they applying",
          "If they can't answer those questions at quote stage, they won't be able to answer them on site either",
        ],
      },
      {
        type: "h2",
        text: "How will they manage residents during the work?",
      },
      {
        type: "p",
        text: "This is where most strata painting jobs fall apart. A contractor who has never worked in an occupied building will underestimate how much communication matters. Before you sign anything, ask for their resident communication plan. How much notice do they give before working on a resident's face? How do they handle car park access? What are their noise hours?",
      },
      {
        type: "p",
        text: "The best contractors handle resident communication end to end, distribute notices on your behalf, and stage the job zone by zone so no resident's area is disrupted for more than a week at a time.",
      },
      {
        type: "h2",
        text: "Do they use rope access or scaffold, and does it matter?",
      },
      {
        type: "p",
        text: "For buildings over four storeys, rope access is significantly faster and cheaper than scaffold — and far less disruptive. IRATA-certified technicians can be working within hours of arriving on site with no car park blockages and no council permits. On a typical 10-storey building, rope access can save the body corporate 40 to 60 per cent on access costs compared with full scaffold.",
      },
      {
        type: "p",
        text: "That said, rope access isn't appropriate for every scope. A contractor who always uses one or always uses the other isn't thinking about your building. Ask which they recommend and why.",
      },
      {
        type: "h2",
        text: "What does the warranty actually cover?",
      },
      {
        type: "p",
        text: "A verbal warranty is worth nothing. Ask for the warranty in writing, understand what it covers (workmanship only, or product as well), how long it runs, and whether it's lodged anywhere formal. Reputable contractors issue a written workmanship warranty at handover and can arrange manufacturer warranties on qualifying systems to be registered in the body corporate's name.",
      },
      {
        type: "h2",
        text: "Who will actually be on site?",
      },
      {
        type: "p",
        text: "Ask directly whether they use their own employed crew or subcontractors. The answer matters more than most committees realise. A subcontracted crew has no direct relationship with the contractor quoting the job, no investment in the standard, and often no knowledge of the specification they're supposed to be applying. The best body corporate painters are fully employed operators who know your building from day one.",
      },
    ],
  },

  {
    slug: "ras-vertex-sunshine-coast-building-services",
    title:
      "RAS-VERTEX: The Sunshine Coast's Full-Service Building Partner for Body Corporates and Strata",
    excerpt:
      "One team for painting, maintenance, waterproofing, cleaning, height safety and building inspections. Here's how RAS-VERTEX became the Sunshine Coast's most trusted partner for body corporates and strata managers.",
    category: "Strata",
    publishedAt: "2026-06-12",
    readingTime: 5,
    coverImage: "/images/projects/1.jpeg",
    coverAlt:
      "RAS-VERTEX team performing building maintenance on the Sunshine Coast",
    author: HYLTON,
    body: [
      {
        type: "p",
        text: "Managing a strata building or body corporate on the Sunshine Coast means dealing with a lot of moving parts. Painting programs, balcony membrane replacements, annual height safety inspections, facade washes, building condition reports for the AGM. Most committees juggle three or four different contractors to cover all of it, each with their own schedule, their own mobilisation cost and their own set of things they won't quite take responsibility for.",
      },
      {
        type: "p",
        text: "RAS-VERTEX was built around a different idea. One team, one project manager, one phone number. Across every service a Sunshine Coast building needs.",
      },
      {
        type: "h2",
        text: "What We Do",
      },
      {
        type: "p",
        text: "We cover painting, building maintenance, waterproofing, window and external cleaning, height safety installation and certification, and building inspections. All delivered by our own employed team of IRATA-certified rope access technicians and QBCC-licensed tradespeople. No subcontractors, no handoffs to people who weren't involved in the quote.",
      },
      {
        type: "p",
        text: "For body corporates and strata managers, that means you can bring us in for a painting program and we can also handle the facade wash beforehand, replace the failed balcony membranes we identify during prep, install and certify the anchor points needed for ongoing maintenance, and provide the condition report your committee needs for the sinking fund forecast. One scope, one contractor, one accountability.",
      },
      {
        type: "h2",
        text: "25 Years on the Sunshine Coast",
      },
      {
        type: "p",
        text: "We have been maintaining buildings on the Sunshine Coast since before half the foreshore developments were built. That experience matters in practical terms. We know how salt air behaves differently in Mooloolaba compared to Noosa. We know which paint systems fail on north-facing rendered walls in Caloundra and which hold up. We know the body corporate managers, the strata professionals and the committee chairs who run the buildings we work on.",
      },
      {
        type: "p",
        text: "That local knowledge is built into everything we specify and everything we recommend. It is not the kind of thing you get from a contractor based in Brisbane sending a crew up the highway.",
      },
      {
        type: "h2",
        text: "The Rope Access Difference",
      },
      {
        type: "p",
        text: "Every service we deliver at height uses IRATA-certified rope access. That means no scaffolding disrupting your car parks and common areas, faster mobilisation on every job, and access to areas of your building that scaffold simply cannot reach. For strata buildings on the Sunshine Coast, that translates to lower costs, less resident disruption and better outcomes across painting, cleaning, waterproofing, inspections and height safety work.",
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
];

// ─── Helpers ───────────────────────────────────────────────────
export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, count = 2): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, count);
}

export const BLOG_CATEGORIES = [...new Set(BLOG_POSTS.map((p) => p.category))];
