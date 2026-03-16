import { VisionMissionScroll, type Section } from '@/components/vision-mission-scroll';

const sections: Section[] = [
  {
    navLabel: 'OUR DNA',
    subtitle: 'Our Purpose',
    title: 'Bring people together through excellence in manufacturing',
    description: 'To be the Best Glove Manufacturer with Blessing for People Involved.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000',
    layout: 'centered',
  },
  {
    navLabel: 'VISION 2030',
    subtitle: 'Vision 2030',
    title: 'Positively impact lives through safety & protection',
    description: 'Protecting hands globally while empowering local communities.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000',
    layout: 'centered',
  },
  {
    navLabel: 'STRATEGY',
    subtitle: 'Our Strategy',
    title: 'One Team, One Goal, One Vision',
    description: 'One Billion hands protected\nAll as One Team\nBy 2030',
    image: 'https://images.unsplash.com/photo-1542332155-236b28399e69?auto=format&fit=crop&q=80&w=2000',
    layout: 'centered',
  },
  {
    navLabel: 'CORE VALUES',
    subtitle: 'Our Pillars',
    title: 'The Foundation of MGM',
    description: 'Global Leadership\nIntegrated Supply Chain\nHuman Empowerment\nSocial Impact',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2000',
    layout: 'split',
  },
];

export default function VisionMissionPage() {
  return (
    <main>
      <VisionMissionScroll sections={sections} />
      
      {/* Optional: Add a footer or next section to allow scrolling past the storytelling */}
      <section className="bg-white py-24 dark:bg-neutral-950">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold">Discover More About Us</h3>
          <p className="mt-4 text-muted-foreground">
            Continue exploring our journey and the team behind MGM.
          </p>
        </div>
      </section>
    </main>
  );
}
