export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

export const categories = [
  'All',
  'Gym & Fitness',
  'Golf',
  'Cycling',
  'Running',
  'Ski & Winter',
] as const;

export type Category = (typeof categories)[number];

export const products: Product[] = [
  // ── Gym & Fitness ──────────────────────────
  {
    id: '1',
    title: 'FlexGrip Lilac',
    description: 'Breathable half-finger gloves with padded palm.',
    image: '/images/products/1.jpeg',
    category: 'Gym & Fitness',
  },
  {
    id: '2',
    title: 'IronHand Pro',
    description: 'Heavy-duty black training gloves with wrist strap.',
    image: '/images/products/2.jpeg',
    category: 'Gym & Fitness',
  },
  {
    id: '3',
    title: 'PowerLift Elite',
    description: 'Leather-lined fingerless gloves for max grip.',
    image: '/images/products/3.jpeg',
    category: 'Gym & Fitness',
  },
  {
    id: '16',
    title: 'CoreFit Classic',
    description: 'Lightweight cotton half-finger training gloves.',
    image: '/images/products/16.jpeg',
    category: 'Gym & Fitness',
  },

  // ── Cycling ────────────────────────────────
  {
    id: '4',
    title: 'TrailRider Brown',
    description: 'Dual-tone cycling gloves with padded knuckles.',
    image: '/images/products/4.jpeg',
    category: 'Cycling',
  },

  // ── Golf ───────────────────────────────────
  {
    id: '5',
    title: 'AceSwing Tour',
    description: 'Premium leather golf gloves with ventilation.',
    image: '/images/products/5.jpeg',
    category: 'Golf',
  },
  {
    id: '6',
    title: 'ProStroke Classic',
    description: 'All-white cabretta leather golf glove.',
    image: '/images/products/6.jpeg',
    category: 'Golf',
  },
  {
    id: '7',
    title: 'EagleGrip Navy',
    description: 'Contrast navy-white golf gloves with diamond grip.',
    image: '/images/products/7.jpeg',
    category: 'Golf',
  },

  // ── Running ────────────────────────────────
  {
    id: '8',
    title: 'SwiftRun Thermal',
    description: 'Touchscreen-compatible fleece running gloves.',
    image: '/images/products/8.jpeg',
    category: 'Running',
  },
  {
    id: '9',
    title: 'AquaFlex Teal',
    description: 'Moisture-wicking running gloves in vibrant teal.',
    image: '/images/products/9.jpeg',
    category: 'Running',
  },
  {
    id: '10',
    title: 'UrbanRun Heather',
    description: 'Melange knit gloves with silicone grip pattern.',
    image: '/images/products/10.jpeg',
    category: 'Running',
  },
  {
    id: '11',
    title: 'NightRunner Reflect',
    description: 'Black running gloves with reflective strip.',
    image: '/images/products/11.jpeg',
    category: 'Running',
  },

  // ── Ski & Winter ───────────────────────────
  {
    id: '12',
    title: 'AlpineShield Neon',
    description: 'Waterproof ski gloves with wrist leash.',
    image: '/images/products/12.jpeg',
    category: 'Ski & Winter',
  },
  {
    id: '13',
    title: 'FrostGuard Grey',
    description: 'Insulated winter gloves with grip reinforcement.',
    image: '/images/products/13.jpeg',
    category: 'Ski & Winter',
  },
  {
    id: '14',
    title: 'PeakStorm Pro',
    description: 'Triple-layer waterproof all-black ski gloves.',
    image: '/images/products/14.jpeg',
    category: 'Ski & Winter',
  },
  {
    id: '15',
    title: 'ArcticBlast Mitt',
    description: 'Expedition mittens with neon-yellow paneling.',
    image: '/images/products/15.jpeg',
    category: 'Ski & Winter',
  },
  {
    id: '17',
    title: 'WinterPro Stealth',
    description: 'Padded insulated gloves with silicone grip tips.',
    image: '/images/products/17.jpeg',
    category: 'Ski & Winter',
  },
];
