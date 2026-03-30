export interface Programs {
  id: string;
  slug: string;
  title: string;
  paragraph?: string;
  images?: string[];
}

export const programs: Programs[] = [
  {
    id: '1',
    slug: 'penyerahan-bingkisan-lebaran-kepada-warga-desa-samban',
    title: 'MGM Peduli - Penyerahan Bingkisan Lebaran kepada Warga Desa Samban',
    paragraph: 'Next.js adalah framework React yang powerful...',
    images: [
      '/program/mgm-peduli/1.webp',
      '/program/mgm-peduli/2.webp',
      '/program/mgm-peduli/3.webp',
      '/program/mgm-peduli/4.webp',
      '/program/mgm-peduli/5.webp',
    ],
  },
  {
    id: '2',
    slug: 'bantuan-pembangunan-lapangan-voli-desa-samban',
    title: 'MGM Peduli - Bantuan Pembangunan Lapangan Voli Desa Samban',
    paragraph: 'TypeScript membantu kamu menulis kode yang lebih aman...',
    images: [
      '/program/pembangunan-voli/1.jpeg',
      '/program/pembangunan-voli/2.jpeg',
    ],
  },
];
