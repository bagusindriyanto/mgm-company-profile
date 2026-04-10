import {
  VisionMissionSection,
  type Section,
} from '@/components/about/profile/vision-mission';

const sections: Section[] = [
  {
    subtitle: 'Our Vision',
    title:
      'To be the Best Sport Glove Manufacturer with Blessing for All People Involved',
    description:
      'Menjadi Perusahaan Sarung Tangan Olahraga Terbaik dengan Berkat bagi Semua Pihak yang Terlibat.',
    image: '/images/ilustration/1.jpeg',
    layout: 'centered',
  },
  {
    subtitle: 'Our Mission',
    title:
      'To Provide Best Products Experiences for the User through Commitment on the Value',
    description:
      'Menyediakan Pengalaman Produk Terbaik bagi Pengguna melalui Komitmen terhadap Nilai',
    image: '/images/ilustration/2.jpeg',
    layout: 'centered',
  },
  {
    subtitle: 'Corporate Values',
    title: 'Business Philosophy of MGM',
    description:
      '1. Quality\n2. Innovation\n3. Teamwork\n4. Customer Satisfaction',
    image: '/images/ilustration/4.jpeg',
    layout: 'split',
  },
];

export default function ProfilePage() {
  return <VisionMissionSection sections={sections} />;
}
