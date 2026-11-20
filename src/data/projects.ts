export interface Project {
  id: string
  title: string
  tagline: string
  description: string
  problem: string
  solution: string
  contribution: string
  tech: string[]
  challenges: string
  implementation: string
  github?: string
  demo?: string
  status: 'completed' | 'in-progress'
  category: string
  highlight?: string
}

export const projects: Project[] = [
  {
    id: 'socialprotect',
    title: 'SocialProtect',
    tagline: 'AI-assisted scam intelligence & digital safety platform',
    description:
      'SocialProtect is an intelligent platform that helps users identify and avoid digital scams. It leverages Gemini AI for analysis, integrates Bright Data Scraper Studio for real-time web scraping, and provides actionable risk indicators with user guidance.',
    problem:
      'Digital scams have grown exponentially — phishing links, fraudulent e-commerce sites, and social-engineering attacks are increasingly sophisticated. Most users lack technical tools to quickly evaluate whether a URL, message, or digital entity is trustworthy.',
    solution:
      'A web platform where users can submit suspicious links, messages, or social profiles. The platform scrapes public data via Bright Data, passes it through Gemini AI for multi-factor analysis, and returns a structured risk report with confidence scores and guidance.',
    contribution:
      'Full-stack development including Python FastAPI backend, Gemini API integration for semantic scam pattern detection, Bright Data Scraper Studio wiring with retry and fallback scraping logic, and a React + JavaScript frontend for intuitive UX.',
    tech: ['Python', 'FastAPI', 'Gemini API', 'Bright Data', 'React', 'JavaScript'],
    challenges:
      'Scraping reliability was the primary challenge — many scam sites actively block bots. Implemented a multi-layer fallback mechanism using Bright Data\'s residential proxies and introduced retry logic with exponential back-off. Ensuring Gemini\'s analysis stayed focused on structured risk output required careful prompt engineering.',
    implementation:
      'Backend: FastAPI exposes REST endpoints. Each submission triggers an async scraping job via Bright Data API. The scraped HTML and metadata are chunked and sent to Gemini API with a structured prompt requesting JSON risk indicators. The frontend polls for the result and renders an interactive risk card with expandable detail.',
    highlight: 'Into the Scrape-Verse Hackathon',
    status: 'completed',
    category: 'AI · Web · Security',
  },
  {
    id: 'pujago',
    title: 'PujaGo',
    tagline: 'Durga Puja crowd companion — smart festival navigation',
    description:
      'PujaGo is a mobile-first companion application designed to help festival-goers navigate Durga Puja celebrations more effectively. It integrates Map APIs for real-time route planning and focuses on making the festival experience genuinely useful for visitors.',
    problem:
      'Durga Puja in West Bengal brings millions of visitors to cities that temporarily transform into open-air art galleries. Navigation during peak festival hours is chaotic — most mapping tools don\'t account for crowd density, temporary pandal structures, or themed routes.',
    solution:
      'An application that layers crowd intelligence on top of standard map data, allows users to discover pandals by proximity and theme, and provides estimated walking times adjusted for crowd conditions during peak hours.',
    contribution:
      'Map API integration, debugging and optimization of rendering performance for dense POI layers, database design for pandal metadata and user-submitted crowd reports, and overall product thinking for the visitor experience.',
    tech: ['Map API', 'React', 'Firebase', 'JavaScript', 'Node.js'],
    challenges:
      'Managing large amounts of POI (Points of Interest) data without degrading map performance was non-trivial. Implemented clustering and viewport-aware loading. Database schema needed to handle time-sensitive crowd data while remaining queryable in near-real-time.',
    implementation:
      'The app uses a tile-based map layer with custom marker clustering. Pandal data is stored in Firestore with geohash indexing for proximity queries. Crowd density is estimated from user reports aggregated every 15 minutes. The routing engine adjusts suggested paths based on density scores.',
    status: 'completed',
    category: 'Mobile · Maps · Community',
  },
]
