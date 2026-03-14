import { VisionMissionScroll } from '@/components/vision-mission-scroll';

const sections = [
  {
    title: 'Our Vision',
    description: 'To be the Best Glove Manufacturer with Blessing for People Involved.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000',
  },
  {
    title: 'Our Mission',
    description: 'Global Leadership, Integrated Supply Chain, Human Empowerment, Social Impact.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000',
  },
  {
    title: 'Excellence in Motion',
    description: 'Bridging the gap between raw power and refined performance since 2011.',
    image: 'https://images.unsplash.com/photo-1542332155-236b28399e69?auto=format&fit=crop&q=80&w=2000',
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
