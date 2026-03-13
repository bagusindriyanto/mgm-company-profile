import { Award, FileCheck, Camera } from 'lucide-react';
import AnimatedSection from '@/components/animated-section';
import SectionHeader from '@/components/section-header';
import Image from 'next/image';

const achievements = [
  {
    year: '2024',
    title: 'Manufacturer of the Year',
    org: 'International Sports Gear Union',
    desc: 'Awarded for exceptional innovation in protective athletic gear.',
  },
  {
    year: '2023',
    title: 'Sustainable Enterprise Award',
    org: 'Green Earth Council',
    desc: 'Recognition for 40% reduction in manufacturing carbon footprint.',
  },
  {
    year: '2022',
    title: 'Excellence in Design',
    org: 'Asian Textile Federation',
    desc: "Voted #1 for the ergonomic design of the 'Pro-Fit' glove series.",
  },
];

const certificates = [
  'ISO 9001:2015 Quality Management',
  'ISO 14001:2015 Environmental System',
  'WRAP Worldwide Responsible Production',
  'Oeko-Tex Standard 100 Textile Certification',
  'BSCI Code of Conduct Compliance',
];

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=70&w=800',
    title: 'Testing Lab',
  },
  {
    url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=70&w=800',
    title: 'Automated Looming',
  },
  {
    url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=70&w=800',
    title: 'Showroom Display',
  },
  {
    url: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=70&w=1200',
    title: 'Athlete Focus Group',
  },
  {
    url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=70&w=800',
    title: 'Quality Audit',
  },
  {
    url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=70&w=800',
    title: 'Global Summit 2024',
  },
];

export default function AchievementsPage() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Header */}
      <section className="bg-primary/5 py-24">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Achievements & Recognition"
            subtitle="Our commitment to excellence is reflected in our awards and certifications."
          />
        </div>
      </section>

      {/* Awards Section */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-extrabold flex items-center gap-3 mb-6">
              <Award className="text-primary" size={40} /> Awards
            </h3>
            <p className="text-secondary-foreground leading-relaxed mb-8">
              MGM has been recognized by industry leaders for our innovation,
              quality standards, and commitment to environmental sustainability.
            </p>
          </div>
          <div className="lg:col-span-2 space-y-6">
            {achievements.map((award, idx) => (
              <AnimatedSection
                key={idx}
                direction="right"
                delay={idx * 0.1}
                className="bg-card border border-border rounded-2xl p-6 flex gap-6 items-start hover:border-primary/50 transition-colors group"
              >
                <div className="bg-muted text-primary px-4 py-2 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  {award.year}
                </div>
                <div>
                  <h4 className="text-xl mb-1">{award.title}</h4>
                  <p className="text-primary text-sm  mb-2">{award.org}</p>
                  <p className="text-secondary-foreground text-sm leading-relaxed">
                    {award.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="bg-muted/50 py-24">
        <div className="container mx-auto px-6">
          <SectionHeader title="Global Certifications" centered />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, idx) => (
              <AnimatedSection
                key={idx}
                delay={idx * 0.05}
                className="flex h-full"
              >
                <div className="bg-background border border-border h-full w-full rounded-2xl p-6 flex items-center gap-4 hover:scale-[1.02] transition-transform cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                    <FileCheck className="text-emerald-600" size={20} />
                  </div>
                  <span className="text-foreground leading-tight">{cert}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Activity Documentation */}
      <section className="container mx-auto px-6">
        <SectionHeader
          title="Activity Documentation"
          subtitle="A visual journey through our facilities, events, and collaborative summits."
          centered
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((img, idx) => (
            <AnimatedSection
              key={idx}
              delay={idx * 0.05}
              className="group relative aspect-square overflow-hidden rounded-3xl bg-muted"
            >
              <Image
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                src={img.url}
                alt={img.title}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <div className="flex items-center gap-2 text-white mb-2">
                  <Camera size={18} />
                  <span className="text-xs uppercase">Live Action</span>
                </div>
                <h4 className="text-xl text-white">{img.title}</h4>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
}
