'use client';

import AnimatedSection from '@/components/animated-section';
import WorldMap from '@/components/ui/aceternity/world-map';

const marketData = [
  {
    region: 'Europe',
    percentage: 55,
    color: '#3b82f6',
    // Frankfurt, Germany center
    dot: { lat: 51.1657, lng: 10.4515 },
  },
  {
    region: 'USA',
    percentage: 25,
    color: '#10b981',
    // Center of continental US
    dot: { lat: 39.5, lng: -98.35 },
  },
  {
    region: 'Japan',
    percentage: 15,
    color: '#f59e0b',
    // Tokyo
    dot: { lat: 35.6762, lng: 139.6503 },
  },
  {
    region: 'Others',
    percentage: 5,
    color: '#8b5cf6',
    // Indonesia (as MGM is based there)
    dot: { lat: -0.7893, lng: 113.9213 },
  },
];

// Build dot pairs: each region connects to the "others" anchor (Indonesia)
const mapDots = [
  {
    start: { lat: 51.1657, lng: 10.4515, label: 'Europe' },
    end: { lat: 39.5, lng: -98.35, label: 'USA' },
  },
  {
    start: { lat: 51.1657, lng: 10.4515, label: 'Europe' },
    end: { lat: 35.6762, lng: 139.6503, label: 'Japan' },
  },
  {
    start: { lat: 39.5, lng: -98.35, label: 'USA' },
    end: { lat: -0.7893, lng: 113.9213, label: 'Indonesia' },
  },
  {
    start: { lat: 35.6762, lng: 139.6503, label: 'Japan' },
    end: { lat: -0.7893, lng: 113.9213, label: 'Indonesia' },
  },
];

export default function MarketShareSection() {
  return (
    <section className="container px-6 mx-auto">
      {/* Header */}
      <AnimatedSection direction="up" className="mb-12 text-center">
        <p className="mb-3 text-sm font-semibold tracking-widest uppercase text-primary">
          Global Presence
        </p>
        <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl md:text-5xl">
          Our Market Share
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-secondary-foreground">
          MGM products reach elite athletes and teams across the globe.
          Here&apos;s where our impact is felt most.
        </p>
        <div className="mx-auto mt-4 w-20 h-1 rounded-full bg-primary" />
      </AnimatedSection>

      {/* Layout: Map + Stats */}
      <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-3">
        {/* Stat Cards — Left */}
        <AnimatedSection
          direction="right"
          className="flex flex-col order-2 gap-4 lg:order-1"
        >
          {marketData.map((item, idx) => (
            <div
              key={idx}
              className="group flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 bg-card border-border hover:shadow-lg hover:-translate-y-0.5"
              style={{ borderLeftColor: item.color, borderLeftWidth: '3px' }}
            >
              {/* Donut mini */}
              <div className="relative w-14 h-14 shrink-0">
                <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                  <circle
                    cx="18"
                    cy="18"
                    r="15.9"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    className="text-muted"
                  />
                  <circle
                    cx="18"
                    cy="18"
                    r="15.9"
                    fill="none"
                    stroke={item.color}
                    strokeWidth="3"
                    strokeDasharray={`${item.percentage} ${100 - item.percentage}`}
                    strokeLinecap="round"
                  />
                </svg>
                <span
                  className="flex absolute inset-0 justify-center items-center text-xs font-bold"
                  style={{ color: item.color }}
                >
                  {item.percentage}%
                </span>
              </div>

              <div>
                <h4 className="text-lg font-bold">{item.region}</h4>
                <p className="text-sm text-secondary-foreground">
                  {item.percentage}% of total exports
                </p>
              </div>
            </div>
          ))}
        </AnimatedSection>

        {/* World Map — Right (spans 2 cols) */}
        <AnimatedSection
          direction="left"
          delay={0.2}
          className="order-1 lg:col-span-2 lg:order-2"
        >
          <div className="overflow-hidden relative p-4 rounded-3xl border border-border bg-card">
            <WorldMap dots={mapDots} lineColor="#3b82f6" />

            {/* Legend */}
            <div className="flex flex-wrap gap-4 justify-center pb-1 mt-4">
              {marketData.map((item) => (
                <div key={item.region} className="flex items-center gap-1.5">
                  <span
                    className="inline-block w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-xs text-secondary-foreground">
                    {item.region}{' '}
                    <strong className="text-foreground">
                      {item.percentage}%
                    </strong>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
