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
    image: '/ilustration/1.jpeg',
    layout: 'centered',
  },
  {
    subtitle: 'Our Mission',
    title: 'Our Strategic Commitment to Excellence and Impact',
    description:
      '1. Global Leadership\n2. Integrated Supply Chain\n3. Human Empowerment\n4. Social Impact',
    image: '/ilustration/2.jpeg',
    layout: 'split',
  },
  {
    subtitle: 'Corporate Values',
    title: 'Business Philosophy of MGM',
    description:
      '1. Quality\n2. Innovation\n3. Teamwork\n4. Customer Satisfaction',
    image: '/ilustration/4.jpeg',
    layout: 'split',
  },
];

export default function ProfilePage() {
  return <VisionMissionScroll sections={sections} />;
}
