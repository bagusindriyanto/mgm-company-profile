import {
  VisionMissionScroll,
  type Section,
} from '@/components/vision-mission-scroll';

const sections: Section[] = [
  {
    subtitle: 'Our Vision',
    title:
      'To be the Best Glove Manufacturer with Blessing for People Involved',
    description:
      'Menjadi Perusahaan Sarung Tangan Terbaik dengan Berkah bagi Semua Pihak yang Terlibat.',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000',
    layout: 'centered',
  },
  {
    subtitle: 'Our Mission',
    title: '',
    description:
      '1. Global Leadership\n2. Integrated Supply Chain\n3. Human Empowerment\n4. Social Impact',
    image:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000',
    layout: 'split',
  },
  {
    subtitle: 'Corporate Values',
    title: 'Business Philosophy of MGM',
    description:
      '1. Quality\n2. Innovation\n3. Teamwork\n4. Customer Satisfaction',
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2000',
    layout: 'split',
  },
];

export default function ProfilePage() {
  return <VisionMissionScroll sections={sections} />;
}
