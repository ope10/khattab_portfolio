import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "safe-haven-mobile",
    title: "Safe Haven MFB",
    subTitle:
      "Safe Haven Microfinance Bank Limited (SafeHaven MFB) is a licensed, tech-driven microfinance bank based in Abuja, Nigeria. As a digital-first financial institution, it provides tailored retail and business banking solutions for individuals, businesses, and fintech companies.",
    subtitle:
      "Safe Haven Microfinance Bank Limited (SafeHaven MFB) is a licensed, technology-driven microfinance bank headquartered in Abuja, Nigeria. Functioning as a digital-first financial institution and open-banking core infrastructure provider, SafeHaven delivers retail and business banking solutions tailored for individuals, businesses, and fintech companies.",
    badge: "Mobile App",
    client: "Sudo Africa",
    industry: "Fintech",
    year: "2025",
    role: "Product Designer",
    duration: "3 months",
    platform: "iOS & Android",
    overview:
      "Safe Haven MFB is a microfinance banking application designed to make financial services accessible to underserved communities in Nigeria. The app provides savings accounts, loans, and money transfers with a simple, trust-building interface.",

    // Updated Problem text from Figma
    problem:
      "The mobile app appeared outdated and lacked a cohesive, polished experience across different screens. Some screens failed to provide adequate context for users, while others overwhelmed them with excessive information. Additionally, the layout sometimes obscured key actions, impacting usability. Moreover, there was a disconnect in how users interacted with the app.",

    // Updated Solution & Features from Figma
    solution:
      "I redesigned the mobile app to create a more cohesive and structured experience with clearer hierarchy and improved visual consistency.\n\nAs part of the redesign, I also add new features:",
    solutionFeatures: [
      "Functioning Design System",
      "Fixed Deposit",
      "Salaray Plus",
      "Reward System",
      "Credit Report",
      "Term Loan and Overdraft",
    ],

    // Updated Design Process from Figma
    designProcess: {
      intro:
        "I began by analyzing the current mobile app to see how effectively they conveyed information and facilitated user interactions.",
      focusAreasIntro: "My focus areas included:",
      focusAreas: [
        "Redesigning essential screens for better clarity and visual hierarchy",
        "Restructuring content to ensure each page delivers the appropriate amount of information",
        "Establishing a more uniform UI system throughout the app",
        "Introducing new features to enhance the platform’s ecosystem",
        "Making sure both new and existing features adhered to the same design principles",
      ],
      outro:
        "Every design choice aimed to boost readability, minimize confusion, and create a seamless transition between pages.",
    },

    keyFeatures: [
      "Frictionless KYC onboarding in under 3 minutes",
      "Savings goals with visual progress tracking",
      "Instant peer-to-peer transfers",
      "In-app loan application and management",
      "Transaction history with spending insights",
      "Biometric authentication",
    ],
    tools: ["Figma", "FigJam", "Maze", "Lottie"],
    outcome:
      "The app launched to 10,000+ users within the first month with a 4.7-star rating on the App Store. User onboarding completion rate improved by 62% compared to the previous version.",
    coverImage:
      "/images/profile/419179864_71c3d216-08d2-469e-a150-649a5e4048ca 1 (1).svg",
    heroImage: "/images/projects/safe-haven-mobile/hero.png",
    gallery: [
      {
        label: "Onboarding",
        images: [
          "/images/projects/safe-haven-mobile/onboarding-1.png",
          "/images/projects/safe-haven-mobile/onboarding-2.png",
          "/images/projects/safe-haven-mobile/onboarding-3.png",
        ],
      },
      {
        label: "Design System",
        images: ["/images/projects/safe-haven-mobile/design-system.png"],
        caption: "Component library and design tokens",
      },
      {
        label: "UI Screens",
        images: [
          "/images/projects/safe-haven-mobile/ui-1.png",
          "/images/projects/safe-haven-mobile/ui-2.png",
          "/images/projects/safe-haven-mobile/ui-3.png",
          "/images/projects/safe-haven-mobile/ui-4.png",
          "/images/projects/safe-haven-mobile/ui-5.png",
          "/images/projects/safe-haven-mobile/ui-6.png",
        ],
      },
    ],
    prevSlug: "agrinecta",
    nextSlug: "safe-haven-web",
    card: {
      width: 1300,
      height: 808,
      artClassName: "md:right-[-6.7%] md:top-[17%] md:w-[65%]",
      mobileArtClassName: "right-[-55px] top-[78px] w-[450px]",
      copyClassName: "md:left-[6%] md:w-[36%]",
    },
  },
  {
    slug: "safe-haven-web",
    title: "Safe Haven MFB",
    subTitle:
      "Safe Haven Microfinance Bank Limited (SafeHaven MFB) is a licensed, tech-driven microfinance bank based in Abuja, Nigeria. As a digital-first financial institution, it provides tailored retail and business banking solutions for individuals, businesses, and fintech companies.",
    subtitle:
      "Safe Haven Microfinance Bank Limited (SafeHaven MFB) is a licensed, technology-driven microfinance bank headquartered in Abuja, Nigeria. Functioning as a digital-first financial institution and open-banking core infrastructure provider, SafeHaven delivers retail and business banking solutions tailored for individuals, businesses, and fintech companies.",
    badge: "Web App",
    year: "2026",
    client: "Sudo Africa",
    industry: "Fintech",
    role: "Product Designer",
    duration: "2 months",
    platform: "Web",
    overview:
      "The web counterpart to the Safe Haven mobile app, designed for power users and business accounts. Features a comprehensive dashboard for financial management, reporting, and team access controls.",

    // Updated Problem text
    problem:
      "The web app appeared outdated and lacked a cohesive, polished experience across different screens. Some screens failed to provide adequate context for users, while others overwhelmed them with excessive information. Additionally, the layout sometimes obscured key actions, impacting usability.\nMoreover, there was a disconnect in how users interacted with the app",

    // Updated Solution text & features
    solution:
      "I redesigned the web app to create a more cohesive and structured experience with clearer hierarchy and improved visual consistency.\n\nAs part of the redesign, I also add new features:",
    solutionFeatures: [
      "Functioning Design System",
      "Fixed Deposit",
      "Salaray Plus",
      "Reward System",
      "Credit Report",
      "Term Loan and Overdraft",
    ],

    // Updated Design Process structure
    designProcess: {
      intro:
        "I began by analyzing the current web app to see how effectively they conveyed information and facilitated user interactions.",
      focusAreasIntro: "My focus areas included:",
      focusAreas: [
        "Redesigning essential screens for better clarity and visual hierarchy",
        "Restructuring content to ensure each page delivers the appropriate amount of information",
        "Establishing a more uniform UI system throughout the app",
        "Introducing new features to enhance the platform’s ecosystem",
        "Making sure both new and existing features adhered to the same design principles",
      ],
      outro:
        "Every design choice aimed to boost readability, minimize confusion, and create a seamless transition between pages.",
    },

    keyFeatures: [
      "Real-time financial dashboard with charts and trends",
      "Bulk payment processing",
      "Team member roles and permissions",
      "Exportable transaction reports (PDF, CSV)",
      "API key management for integrations",
      "Audit trail and compliance logs",
    ],
    tools: ["Figma", "FigJam", "Lookback"],
    outcome:
      "Business account signups increased 45% post-launch. Average session time increased from 4 minutes to 12 minutes, indicating higher engagement with the analytics features.",
    coverImage: "/images/profile/Mokker.svg",
    heroImage: "/images/projects/safe-haven-web/hero.png",
    gallery: [
      {
        label: "Dashboard",
        images: [
          "/images/projects/safe-haven-web/dashboard-1.png",
          "/images/projects/safe-haven-web/dashboard-2.png",
        ],
      },
      {
        label: "Design System",
        images: ["/images/projects/safe-haven-web/design-system.png"],
      },
      {
        label: "UI Screens",
        images: [
          "/images/projects/safe-haven-web/ui-1.png",
          "/images/projects/safe-haven-web/ui-2.png",
          "/images/projects/safe-haven-web/ui-3.png",
        ],
      },
    ],
    prevSlug: "safe-haven-mobile",
    nextSlug: "detraveller",
    card: {
      width: 1300,
      height: 893,
      artClassName: "md:top-auto md:bottom-0 md:left-[4.3%] md:w-[54%]",
      mobileArtClassName: "left-[-4px] top-[16px] w-[370px]",
      copyClassName: "md:left-[62.5%] md:w-[32%]",
      reverse: true,
    },
  },
  {
    slug: "detraveller",
    title: "DeTraveller",
    subTitle:
      "DeTraveller is a travel finance and planning platform built to help people travel smarter whether you are an international visitor arriving in Nigeria or a Nigerian planning a trip anywhere in the country or across the world.",
    subtitle:
      "DeTraveller is a travel finance and planning platform built to help people travel smarter whether you are an international visitor arriving in Nigeria or a Nigerian planning a trip anywhere in the country or across the world. The platform combines a multi-currency digital wallet, physical and virtual debit cards, crypto funding, a global eSIM, KYC-verified identity, goal-based savings with interest accrual, travel credit, a trip planner, and an exclusive destination deals marketplace all in one application.",
    badge: "Mobile App",
    client: "DeTraveller",
    industry: "Fintech",
    role: "Product Designer",
    year: "2026",
    duration: "4 months",
    platform: "iOS & Android",
    overview:
      "DeTraveller is a travel super-app that aggregates flights, hotels, and experiences tailored for African travelers. It addresses the unique challenges of booking travel within and from Africa.",

    // Updated Problem text matching design
    problem:
      "Travellers often have to use multiple platforms to manage different parts of a trip, including currency exchange, payments, savings, cards, eSIMs, travel planning, and destination discovery. This makes it difficult to have a clear view of the total cost of a trip and manage the financial and practical requirements from one place.\n\nFor international visitors to Nigeria, managing money can also involve different services for funding, holding currencies, making payments, and accessing local financial services. At the same time, Nigerian travellers may struggle to prepare financially for trips because savings can be unstructured and the actual cost of travelling can be difficult to estimate.\n\nTrip planning creates another challenge because travellers need to research destinations, estimate costs, find deals, calculate their personal share, and understand how much they need to save. Staying connected can also require a separate eSIM service for selecting data plans, activating the eSIM, tracking usage, and topping up while travelling.",

    // Updated Solutions text matching design
    solution:
      "DeTraveller offers a multi-currency wallet for holding fiat and crypto assets, with funding options via bank transfers, cards, and dedicated foreign currency accounts. Users can convert currencies at live exchange rates with transparent fees and manage virtual and physical cards for everyday spending, online payments, ATM withdrawals, and travel expenses.\n\nThe platform features a global eSIM covering over 190 countries, enabling users to select data plans, receive activation details, track usage, and top up directly from the app, ensuring connectivity without physical SIM cards or costly roaming.\n\nDeTraveller also aids financial preparation for trips through Travel Goals, allowing users to set targets, choose travel dates, contribute regularly, and earn interest. Group Travel Goals enable saving together with friends or family while tracking contributions.\n\nIf savings fall short, eligible users can apply for Travel Credit, with a clear repayment plan provided before acceptance, detailing monthly payments and completion dates. The platform combines financial planning with travel discovery through a curated marketplace and Trip Planner, helping users explore destinations, view guides, estimate costs, and understand savings needs. The planner displays existing savings, funding gaps, required contributions, and potential travel credit.\n\nLastly, DeTraveller ensures identity verification and security through KYC and facial checks, along with 24/7 in-app support and a referral program for inviting travel companions and earning rewards.",

    // Goals text matching design
    goals:
      "The primary goal of DeTraveller is to create a single platform where travellers can prepare financially, plan their trips, manage their money, stay connected, and access travel-related services. The product is designed to connect the journey from discovering a destination and estimating its cost to saving, funding, spending, and travelling.\n\nFor users, the goal is to make travel preparation more structured by helping them understand what a trip will cost, save towards that cost, manage different currencies, access payment tools, and identify ways to cover potential funding gaps. For the business, the product brings together financial services and travel services across wallet funding, FX, cards, savings, credit, eSIM, destination deals, and referrals.\n\nUltimately, DeTraveller aims to connect travel discovery, financial preparation, trip planning, payments, connectivity, and travel support into one experience, giving users a clearer way to prepare for and manage their journeys.",

    // Design Process matching design
    designProcess: {
      intro:
        "I approached the product from a journey-first perspective rather than a feature-first perspective. Instead of starting with individual screens, I first mapped the user’s larger travel journey and identified what the user needs at each stage.",
      focusAreasIntro: "My focus areas included:",
      focusAreas: [
        "Understand the product ecosystem",
        "Map the user journey",
        "Define the product architecture",
        "Design the critical flows",
        "Define system states",
      ],
    },

    // UX Challenges matching design
    uxChallenges: [
      {
        title: "Making a complex product feel simple:",
        description:
          "DeTraveller contains many products under one platform. The challenge was preventing the experience from feeling like several unrelated apps combined together. The solution was to organise the experience around user intentions and travel stages instead of exposing every capability equally.",
      },
      {
        title: "Connecting travel and finance:",
        description:
          "Savings, credit, wallet, destinations, and trip planning should not operate independently. The Trip Planner can lead to a Travel Goal, the Travel Goal can lead to Credit, and the financial plan can connect back to the trip.",
      },
      {
        title: "Designing for financial trust:",
        description:
          "Users are trusting the platform with money, identity information, cards, and financial decisions. This means important information such as balances, fees, rates, repayment schedules, transaction status, and verification states must be clear and predictable.",
      },
      {
        title: "Handling complex states:",
        description:
          'A financial action is rarely just "success" or "failure." Payments can be pending, KYC can be under review, cards can be frozen, recurring contributions can fail, and eSIMs can be purchased but not yet activated. These states need to be designed as part of the core experience.',
      },
    ],

    // Conclusion text matching design
    conclusion:
      "DeTraveller challenged me to turn a complex product vision into a clear and connected MVP experience. I contributed to the product structure, user flows, information architecture, key screens, interactions, and states across the core travel and financial experiences.\n\nDespite working within time constraints and assumptions that still needed validation, I was able to deliver and hand off the MVP designs covering the agreed product scope. The next phase would have involved user testing and iteration.\n\nOverall, the project strengthened my ability to simplify complex requirements, connect multiple product experiences, and design a cohesive product within real-world constraints.",

    keyFeatures: [
      "Aggregated flight search across 50+ African airlines",
      "Hotel and experience discovery with local recommendations",
      "Multi-currency payment support including mobile money",
      "Itinerary management and trip sharing",
      "Visa requirement checker by route",
      "Offline access to bookings",
    ],
    tools: ["Figma", "Maze", "Miro", "Lottie"],
    outcome:
      "Won 2nd place at the Lagos Tech Hackathon. Prototype tested with 30 users achieved a 92% task completion rate for the core booking flow.",
    coverImage: "/images/profile/Mokker%20(1).svg",
    heroImage: "/images/projects/detraveller/hero.png",
    gallery: [
      {
        label: "Screens",
        images: ["/images/projects/detraveller/screen-1.png"],
      },
    ],
    prevSlug: "safe-haven-web",
    nextSlug: "agrinecta",
    card: {
      width: 1300,
      height: 669,
      artClassName:
        "md:bottom-[-6%] md:left-[8%] md:w-[51.7%] lg:left-[12%] lg:bottom-[-10%] xl:left-[14%] xl:w-[48%]",
      mobileArtClassName: "bottom-[-8px] left-[-20px] w-[410px]",
      copyClassName: "md:left-[59.6%] md:w-[32%]",
      reverse: true,
    },
  },
  {
    slug: "agrinecta",
    title: "AgriNecta",
    subTitle: "AgriNecta is a multi-role agricultural marketplace designed to connect smallholder farmers, agents, vendors, and delivery drivers through a single digital platform.",
    subtitle:
      "AgriNecta is a multi-role agricultural marketplace designed to connect smallholder farmers, agents, vendors, and delivery drivers through a single digital platform.\n\nThe platform enables agents to represent farmers and manage their produce, allows vendors to discover and purchase produce, gives drivers tools to manage deliveries, and provides administrators with a central dashboard for managing the ecosystem.",
    badge: "Web App",
    client: "Agrinecta",
    industry: "Agritech",
    role: "Product Designer",
    year: "2025",
    duration: "3 months",
    platform: "Web & Mobile App",
    overview:
      "AgriNecta is an agricultural marketplace connecting smallholder farmers, agents, vendors, and delivery drivers across a unified ecosystem.",

    // Problem text matching design
    problem:
      "Agricultural commerce involves multiple participants, from farmers and agents to buyers and delivery operators.\n\nAgriNecta needed a way to bring these participants into one connected workflow. The key challenge was not simply creating a marketplace. The product needed to coordinate the entire transaction journey:\n\nProduce listing → Discovery → Purchase → Delivery → Completion → Commission\n\nAt the same time, each participant had different responsibilities and information needs.\n\nThe product therefore needed to provide a unified platform without creating a confusing experience for users with different roles.",

    // Challenges section matching design
    challenges:
      "The challenge was particularly important because the product uses a single mobile application for multiple roles.\nAgents should not see the same experience as vendors.\nDrivers should not see marketplace functionality.\nAdmins require an entirely different web-based operational experience.\nThe solution therefore needed a strong role-based architecture.",

    // Solutions section matching design
    solution:
      "I approached the product around four connected experiences:\n\nAgent\n→ Manage farmers and produce\n\nVendor\n→ Discover and purchase produce\n\nDriver\n→ Manage deliveries\n\nAdmin\n→ Manage the ecosystem\n\nRather than designing four disconnected products, the experience was structured around one shared platform with role-specific workflows.\nThe PRD explicitly defines this as a single Flutter app with role detection after login.",

    // Landing Page description matching design
    landingPageIntro:
      "Welcome to the AgriNecta homepage! Here, users can discover everything about our platform and kickstart their onboarding journey.",

    // Conclusion text matching design
    conclusion:
      "AgriNecta presented an opportunity to design beyond a traditional marketplace and create a connected agricultural ecosystem.\n\nThe design focused on simplifying each participant’s core task while connecting their actions into one end-to-end journey, from farmer onboarding and produce listing to purchasing, delivery, completion, and commission management.",

    keyFeatures: [
      "Multi-role access (Agent, Vendor, Driver, Admin)",
      "Real-time produce discovery & marketplace",
      "Farmer onboarding & management by agents",
      "Order fulfillment & delivery coordination for drivers",
      "Commission tracking & admin ecosystem dashboard",
    ],
    tools: ["Figma", "Notion", "FigJam"],
    outcome:
      "Successfully created a cohesive multi-role design system and web/mobile platform supporting end-to-end produce transaction workflows.",
    coverImage: "/images/profile/Mokker copy.svg",
    heroImage: "/images/projects/cropxchange/hero.png",
    gallery: [
      {
        label: "Landing Page",
        images: ["/images/projects/cropxchange/landing-page.png"],
      },
      {
        label: "UI Screens",
        images: [
          "/images/projects/cropxchange/ui-1.png",
          "/images/projects/cropxchange/ui-2.png",
          "/images/projects/cropxchange/ui-3.png",
          "/images/projects/cropxchange/ui-4.png",
          "/images/projects/cropxchange/ui-5.png",
        ],
      },
    ],
    prevSlug: "detraveller",
    nextSlug: "safe-haven-mobile",
    card: {
      width: 1300,
      height: 669,
      artClassName: "md:bottom-[3.2%] md:right-[-4%] md:w-[68.3%]",
      mobileArtClassName: "bottom-[-32px] right-[-98px] w-[500px]",
      copyClassName: "md:left-[6%] md:w-[32.5%]",
    },
  },
];
