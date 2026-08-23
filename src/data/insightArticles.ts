// ─────────────────────────────────────────────────────────────
// insightArticles.ts
// Structured content for the ESSGEE Projects Insights Series.
// Every word from the three source presentations is preserved.
// ─────────────────────────────────────────────────────────────

/* ── Interfaces ────────────────────────────────────────────── */

export interface ArticleStat {
  value: string;
  description: string;
  source: string;
}

export interface ArticleSection {
  number: string;        // "01", "02", etc.
  label?: string;        // "THE PROBLEM", "THE DISCIPLINES", etc.
  title: string;
  intro?: string;        // Introductory paragraph for the section
  points?: { title: string; description: string }[];
  callout?: string;      // Pull-quote or key takeaway
  calloutItems?: string[]; // Multiple callout lines
  stats?: ArticleStat[];
  footnote?: string;     // Source citations

  // Extended fields — used to capture specialised slide content
  maturityLevels?: { code: string; name: string; description: string }[];
  quadrants?: { title: string; description: string }[];
  seriesArc?: { number: string; title: string }[];
  contact?: { label: string; detail: string }[];
  closingNote?: string;
}

export interface ArticleReference {
  number: string;
  text: string;
}

export interface InsightArticle {
  slug: string;
  number: string;
  seriesLabel: string;
  title: string;
  subtitle: string;
  author: string;
  credentials: string;
  readTime: string;
  date: string;
  /** ISO 8601 publish date e.g. "2026-07-05" — used in Article JSON-LD schema */
  datePublished: string;
  /** ISO 8601 modified date — used in Article JSON-LD schema */
  dateModified: string;
  /** Keyword array for Article schema and topical authority signals */
  keywords: string[];
  accentColor: 'azure' | 'teal' | 'amber';
  authorBio?: string;
  authorRole?: string;
  tagline?: string;
  coverStats?: { value: string; label: string }[];
  sections: ArticleSection[];
  references: ArticleReference[];
  furtherReading?: string[];
  disclaimer?: string;
}

/* ── Article data ──────────────────────────────────────────── */

export const insightArticles: InsightArticle[] = [
  // ═══════════════════════════════════════════════════════════
  // ARTICLE 1 — Bridging Strategy, Governance & Delivery
  // ═══════════════════════════════════════════════════════════
  {
    slug: 'bridging-strategy-governance-and-delivery',
    number: '01',
    seriesLabel: 'SUSTAINABILITY THROUGH STRATEGY',
    title: 'Bridging Strategy, Governance and Delivery',
    subtitle:
      'Why organisations deliver better outcomes when strategy, governance and delivery work together — not in isolation.',
    author: 'Satya Gady',
    credentials: 'MBA, MGPM, CMgr, CPPM, FIML',
    authorRole: 'Founder & Principal Consultant, ESSGEE Projects',
    readTime: '15 MIN READ',
    date: 'ARTICLE · 15 MIN READ',
    datePublished: '2026-07-05',
    dateModified: '2026-08-23',
    keywords: ['strategy governance delivery', 'project governance framework', 'strategic advisory Australia', 'PMO establishment', 'project management advisory', 'governance framework', 'delivery leadership', 'infrastructure advisory'],
    accentColor: 'azure',
    coverStats: [
      { value: '30+', label: 'YEARS' },
      { value: 'AUD 2.7B+', label: 'PORTFOLIO' },
      { value: '35+', label: 'MAJOR PROJECTS' },
    ],
    authorBio:
      'Satya Gady — MBA, MGPM, CMgr, CPPM, FIML — Founder & Principal Consultant. A Chartered Manager, Certified Practising Project Manager and Fellow of the Institute of Managers and Leaders, he has led strategy, governance and delivery across infrastructure, construction, property, energy and major projects.',

    sections: [
      // ── INTRODUCTION ──────────────────────────────────────
      {
        number: '00',
        label: 'INTRODUCTION',
        title: 'Three functions, one outcome',
        intro:
          'In most organisations, strategy, governance and delivery live in different rooms — executives set strategy, corporate functions own governance, and operational teams are handed delivery. Each is good at its part, yet projects still overrun and investments underdeliver.',
        callout:
          'Worked in isolation, decisions fragment and accountability blurs. The ESSGEE Projects philosophy is simple: lasting performance comes from running the three as one operating model, not three.',
        closingNote:
          'Treated this way, the disciplines reinforce one another — building organisations resilient enough to navigate complexity, manage risk and create value that lasts.',
      },

      // ── 01 THE PROBLEM ────────────────────────────────────
      {
        number: '01',
        label: 'THE PROBLEM',
        title: 'The cost of disconnection',
        intro:
          'A bold strategy is signed off, then never quite reaches the teams doing the work. Governance shows up late, treated as a gate to clear rather than a guide. Delivery stays busy and on schedule while quietly losing sight of the outcome.',
        callout:
          'On its own, none of this looks like a crisis. Together, it drains value — projects overrun, growth stalls, and investments underdeliver because funding, accountability and outcome were never linked up front.',
        closingNote:
          'The problem is rarely a lack of talent. It lives in the space between intent, assurance and execution — exactly where value quietly leaks away.',
        calloutItems: [
          'Strategy that never reaches the work is just aspiration.',
          'Governance bolted on after the decision is just friction.',
          'Delivery measured only by activity is motion without progress.',
        ],
        footnote:
          '1 PMI, Pulse of the Profession (2018). 2 Flyvbjerg, The Iron Law of Megaprojects (2017).',
      },

      // ── 02 THE DISCIPLINES ────────────────────────────────
      {
        number: '02',
        label: 'THE DISCIPLINES',
        title: 'Three disciplines, one purpose',
        intro:
          'Before joining them up, it helps to be precise about what each one brings. Each is necessary; none is enough alone.',
        points: [
          {
            title: 'Strategy — Why and where',
            description:
              'Sets direction, the choices you\'ll make and the value you mean to create. Names the priorities — and what you won\'t do.',
          },
          {
            title: 'Governance — Within what limits',
            description:
              'Gives confidence that decisions are sound, risks understood and someone owns the outcome. Not a brake — what lets you take considered risks.',
          },
          {
            title: 'Delivery — How and how well',
            description:
              'Turns intent into something real through execution, capability and pace. Stays disciplined about outcomes, not just outputs.',
          },
        ],
        callout:
          'Strategy without delivery is rhetoric. Delivery without strategy is activity. Governance without either is bureaucracy.',
      },

      // ── 03 THE INTEGRATION ────────────────────────────────
      {
        number: '03',
        label: 'THE INTEGRATION',
        title: 'From silos to a single operating model',
        intro:
          'Bridging the three doesn\'t mean merging teams or blurring accountability. It means designing the organisation so they share information, decisions and accountability through one operating model.',
        callout:
          'Strategy is shaped with a clear-eyed view of what can be delivered. Governance comes in early, shaping decisions while they can still be influenced. Delivery stays wired to strategic intent, so priorities reset on purpose rather than drift.',
        closingNote:
          'Trade-offs between cost, risk, time and benefit are made openly, at the right level. Information moves both ways — and the organisation starts to learn while it is still moving. It is an operating discipline, not a document.',
      },

      // ── 04 THE VALUE ──────────────────────────────────────
      {
        number: '04',
        label: 'THE VALUE',
        title: 'Why alignment matters',
        intro:
          'When strategy, governance and delivery pull in the same direction, the benefits compound — and show up in three places.',
        points: [
          {
            title: 'Resilience — Absorbs change without losing direction',
            description:
              'A market shift is met with a deliberate adjustment rather than a scramble, because everyone shares the same view of what matters most.',
          },
          {
            title: 'Risk — Taken knowingly, surfaced sooner',
            description:
              'Governance sets the guardrails; delivery sends the early signals. Assurance turns from a backward-looking check into a forward-looking capability.',
          },
          {
            title: 'Value — Compounds instead of leaking away',
            description:
              'Every initiative has a clear outcome and a clear owner, so investment compounds — built on consistency, not the occasional flash of brilliance.',
          },
        ],
        callout:
          'For portfolio and PMO leaders, the edge comes from holding all three together — so intent, assurance and execution move as one.',
        footnote:
          '3 PMI, Step Up: Redefining the Path to Project Success (2025). 4 PMI, Governance of Portfolios, Programs & Projects (2015).',
      },

      // ── CONCLUSION ────────────────────────────────────────
      {
        number: '05',
        label: 'CONCLUSION',
        title: 'The bridge is the work',
        intro:
          'Too often the three sit in separate corners, held together by little more than goodwill. The organisations that keep growing, governing well and delivering are the ones that close those gaps — pulling the three into one operating model where each makes the others stronger.',
        callout:
          'That is the idea at the heart of ESSGEE Projects: lasting performance comes not from any single discipline, but from the bridges you build between them.',
      },
    ],

    references: [
      {
        number: '1',
        text: 'PMI — Pulse of the Profession (2018) — Organisations waste roughly 9.9% of every dollar — about US$2 trillion a year — through poor project performance; strategy design and delivery too often go unbridged.',
      },
      {
        number: '2',
        text: 'Flyvbjerg — The Iron Law of Megaprojects (2017) — Nine in ten large projects run over budget; cost overruns and benefit shortfalls persist across sectors and decades.',
      },
      {
        number: '3',
        text: 'PMI — Step Up: Path to Project Success (2025) — Only about half of projects fully succeed; the top barrier to reinvention, cited by 35% of executives, is a disconnect between planning and execution.',
      },
      {
        number: '4',
        text: 'PMI — Governance of Portfolios, Programs & Projects (2015) — Effective governance directly shapes the success of strategic initiatives, portfolios, programs and projects.',
      },
    ],
    furtherReading: [
      'Standish Group, CHAOS Report (2020)',
      'Flyvbjerg & Gardner, How Big Things Get Done (2023)',
    ],
    disclaimer:
      'Figures are published industry benchmarks, cited to illustrate common patterns — not ESSGEE Projects client data.',
  },

  // ═══════════════════════════════════════════════════════════
  // ARTICLE 2 — Sustainability Through Strategy
  // ═══════════════════════════════════════════════════════════
  {
    slug: 'sustainability-through-strategy',
    number: '02',
    seriesLabel: 'ESSGEE PROJECTS · INSIGHTS SERIES / ARTICLE 02',
    title: 'Sustainability Through Strategy',
    subtitle:
      'In complex programs, enduring value is never a delivery afterthought — it is a strategic choice, governed from the very first decision.',
    author: 'Satya Gady',
    credentials: 'ESSGEE Projects',
    authorRole: 'Perspective by Satya Gady · ESSGEE Projects',
    tagline:
      'A thought-leadership perspective on strategy, governance and delivery.',
    readTime: '10 MIN READ',
    date: 'ARTICLE 02',
    datePublished: '2026-07-12',
    dateModified: '2026-08-23',
    keywords: ['sustainability through strategy', 'sustainable project outcomes', 'value creation', 'governance model', 'project lifecycle management', 'sustainable advisory Australia'],
    accentColor: 'teal',

    sections: [
      // ── Three Moves That Make It Endure ───────────────────
      {
        number: '01',
        label: 'THREE MOVES',
        title: 'Three Moves That Make It Endure',
        intro:
          'Sustainable outcomes are built, not bolted on. Three connected moves carry intent through to lasting value.',
        points: [
          {
            title: 'STRATEGY',
            description:
              'Frame sustainability as long-term value rather than compliance, and set clear direction before delivery begins.',
          },
          {
            title: 'GOVERNANCE',
            description:
              'Design practical frameworks that embed sustainable choices into every decision, mandate and line of accountability.',
          },
          {
            title: 'DELIVERY',
            description:
              'Deploy project systems that measure, protect and evidence long-term outcomes across the whole program lifecycle.',
          },
        ],
        callout:
          'One thread ties them together: strategy sets the direction — and delivery and operations turn it into lasting value.',
        footnote:
          'Sources: [2] UN SDGs · [3] ISO 21502:2020 · [4] PMI Pulse of the Profession',
      },

      // ── Business Delivery & Operations ────────────────────
      {
        number: '02',
        label: 'BUSINESS DELIVERY',
        title: 'Business Delivery & Operations',
        intro:
          'A repeatable, high-level process that carries strategy into steady-state performance — and keeps improving it.',
        points: [
          {
            title: 'MOBILISE',
            description:
              'Stand up governance, delivery systems and the team; lock scope, controls and success measures.',
          },
          {
            title: 'DELIVER',
            description:
              'Execute with disciplined reporting, risk and change management across the program.',
          },
          {
            title: 'OPERATE',
            description:
              'Transition to reliable operations, maintenance and sustained asset performance.',
          },
          {
            title: 'IMPROVE',
            description:
              'Measure outcomes, capture lessons and feed value back into strategy.',
          },
        ],
        callout:
          'Feedback loop — the Improve stage informs the next Strategy cycle.',
        footnote:
          'Sources: [1] ESSGEE Insights · [3] ISO 21502 · [4] PMI',
      },

      // ── Strategy Sets the Direction ───────────────────────
      {
        number: '03',
        label: 'STRATEGY',
        title: 'Strategy Sets the Direction',
        intro:
          'Sustainability begins as a strategic choice, long before delivery starts. Strategy defines what enduring value means for the organisation and commits to it as direction — not a box to tick later. Governance, the frameworks that hold this in place, is detailed in Article 1.',
        callout:
          'Set the direction first: enduring value is chosen at the strategy table, not recovered on site.',
        points: [
          {
            title: '01',
            description:
              'Define enduring value in business terms, not compliance.',
          },
          {
            title: '02',
            description:
              'Set direction early, before delivery locks choices in.',
          },
          {
            title: '03',
            description:
              'Align outcomes to recognised sustainability frameworks.',
          },
        ],
        closingNote:
          'One thread ties them together: strategy sets the direction — and delivery and operations turn it into lasting value.',
        footnote:
          'Sources: [1] ESSGEE Insights · [2] UN SDGs · [4] PMI · [5] ISC',
      },

      // ── One Model, Measurable Value ───────────────────────
      {
        number: '04',
        label: 'MEASURABLE VALUE',
        title: 'One Model, Measurable Value',
        intro:
          'Strategy, governance and delivery run as one continuous loop — and the market now rewards it with evidence.',
        callout:
          'A closed loop: strategy sets direction, governance holds it true, delivery and operations realise it — and improvement feeds the next cycle.',
        stats: [
          {
            value: '90%',
            description:
              'of large companies now report sustainability using the GRI Standards.',
            source: 'KPMG Survey of Sustainability Reporting, 2024',
          },
          {
            value: 'US$4T',
            description:
              'annual SDG investment gap in developing economies — capital waiting on credible delivery.',
            source: 'UNCTAD, 2024',
          },
          {
            value: '29',
            description:
              "major projects earned verified IS 'As Built' sustainability ratings in FY25.",
            source: 'Infrastructure Sustainability Council',
          },
        ],
        footnote:
          'Sources: [5] GRI / KPMG (2024) · UNCTAD (2024) · Infrastructure Sustainability Council (FY25)',
      },
    ],

    references: [
      {
        number: '1',
        text: 'ESSGEE Projects — Insights: Bridging Strategy, Governance & Delivery. essgee.pro/insights',
      },
      {
        number: '2',
        text: 'United Nations — Sustainable Development Goals (SDGs). sdgs.un.org',
      },
      {
        number: '3',
        text: 'ISO 21502:2020 — Project, programme and portfolio management: Guidance on project management.',
      },
      {
        number: '4',
        text: 'Project Management Institute — Pulse of the Profession. pmi.org',
      },
      {
        number: '5',
        text: 'Infrastructure Sustainability Council — IS Rating Scheme (FY25 certified projects). iscouncil.org',
      },
      {
        number: '6',
        text: 'Global Reporting Initiative — GRI Standards. globalreporting.org',
      },
      {
        number: '7',
        text: 'KPMG — Survey of Sustainability Reporting 2024. kpmg.com',
      },
      {
        number: '8',
        text: 'UNCTAD — World Investment Report 2024 (SDG investment gap). unctad.org',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // ARTICLE 3 — Systems & Compliance Through Effective Delivery
  // ═══════════════════════════════════════════════════════════
  {
    slug: 'systems-and-compliance-through-effective-delivery',
    number: '03',
    seriesLabel: 'ESSGEE PROJECTS · INSIGHTS SERIES / ARTICLE 03',
    title: 'Systems & Compliance Through Effective Delivery',
    subtitle:
      'Strategy sets direction and governance builds confidence — but value is proven in the systems that carry decisions into delivery.',
    author: 'Satya Gady',
    credentials: 'ESSGEE Projects',
    authorRole: 'Perspective by Satya Gady · ESSGEE Projects',
    tagline:
      'A thought-leadership perspective on strategy, governance and delivery.',
    readTime: '10 MIN READ',
    date: 'ARTICLE 03',
    datePublished: '2026-07-19',
    dateModified: '2026-08-23',
    keywords: ['project delivery systems', 'compliance framework', 'project controls', 'effective delivery', 'system implementation', 'management advisory Sydney'],
    accentColor: 'amber',

    sections: [
      // ── Three truths about delivery systems ───────────────
      {
        number: '01',
        label: 'THREE TRUTHS',
        title: 'Three truths about delivery systems',
        intro:
          'Compliance is not a checkpoint bolted on at the end — it is the evidence that well-run systems leave behind.',
        points: [
          {
            title: 'SYSTEMS',
            description:
              'Well-designed project systems lift reporting quality, risk visibility and performance across complex programs.',
          },
          {
            title: 'ASSURANCE',
            description:
              'Governance and assurance are embedded in delivery workflows, so accountability is built in — not bolted on.',
          },
          {
            title: 'CAPABILITY',
            description:
              'Mature PMO and PfMO functions turn governance intent into repeatable, confident delivery.',
          },
        ],
        callout:
          'One thread ties them together: systems make good delivery repeatable — and compliance provable.',
        footnote:
          'Sources: [2] ISO 21502:2020 · [3] PMI Pulse of the Profession 2024 · [1] ESSGEE Insights',
      },

      // ── The delivery-system maturity model ────────────────
      {
        number: '02',
        label: 'MATURITY MODEL',
        title: 'The delivery-system maturity model',
        intro:
          'Five levels chart the journey from reactive delivery to systems that improve themselves — and make compliance continuous.',
        maturityLevels: [
          {
            code: 'L1',
            name: 'AD HOC',
            description:
              'Manual, reactive delivery; compliance is retrospective and person-dependent.',
          },
          {
            code: 'L2',
            name: 'REPEATABLE',
            description:
              'Basic systems and reporting exist, but practice varies team to team.',
          },
          {
            code: 'L3',
            name: 'DEFINED',
            description:
              'Standardised project systems, controls and assurance across the program.',
          },
          {
            code: 'L4',
            name: 'MANAGED',
            description:
              'Performance and compliance measured quantitatively; risk visible in real time.',
          },
          {
            code: 'L5',
            name: 'OPTIMISING',
            description:
              'Systems self-improve; compliance is continuous, predictive and audit-ready.',
          },
        ],
        footnote:
          'Sources: [4] AXELOS P3M3 · [5] CMMI Institute · [6] ISO 37301:2021',
      },

      // ── Anatomy of a delivery system ──────────────────────
      {
        number: '03',
        label: 'ANATOMY',
        title: 'Anatomy of a delivery system',
        intro:
          'Four quadrants of a delivery system:',
        quadrants: [
          {
            title: 'Governance & decision rights',
            description: 'Clear accountability and frameworks.',
          },
          {
            title: 'Reporting & controls',
            description: 'Milestones, performance and risk visibility.',
          },
          {
            title: 'Data & single source of truth',
            description: 'Trusted, connected project information.',
          },
          {
            title: 'Assurance & compliance',
            description: 'Embedded checks — evidence, not audits.',
          },
        ],
        footnote:
          'Sources: [1] ESSGEE Insights · [2] ISO 21502:2020 · [6] ISO 37301:2021',
      },

      // ── From insight to delivery ──────────────────────────
      {
        number: '04',
        label: 'INSIGHT TO DELIVERY',
        title: 'From insight to delivery',
        intro:
          'Across three insights the arc closes: strategy sets direction, governance builds confidence, and systems turn both into dependable delivery. The next step is putting the system to work on your program.',
        seriesArc: [
          { number: '01', title: 'Governance Builds Confidence' },
          { number: '02', title: 'Sustainability Through Strategy' },
          { number: '03', title: 'Systems & Compliance in Delivery' },
        ],
        contact: [
          { label: 'Web', detail: 'essgee.pro' },
          { label: 'Email', detail: 'satya.gady@essgee.pro' },
          { label: 'Location', detail: 'Perth, Western Australia' },
        ],
        callout:
          'Discuss your delivery systems.',
      },
    ],

    references: [
      {
        number: '1',
        text: 'ESSGEE Projects — Insights: Bridging Strategy, Governance & Delivery. essgee.pro/insights',
      },
      {
        number: '2',
        text: 'ISO 21502:2020 — Project, programme and portfolio management: Guidance on project management.',
      },
      {
        number: '3',
        text: 'PMI — Pulse of the Profession 2024: The Future of Project Work. pmi.org',
      },
      {
        number: '4',
        text: 'AXELOS — P3M3: Portfolio, Programme & Project Management Maturity Model. axelos.com',
      },
      {
        number: '5',
        text: 'CMMI Institute (ISACA) — Capability Maturity Model Integration. cmmiinstitute.com',
      },
      {
        number: '6',
        text: 'ISO 37301:2021 — Compliance management systems: Requirements with guidance for use.',
      },
    ],
  },
];
