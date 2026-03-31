export interface Programs {
  id: string;
  slug: string;
  title: string;
  category: string;
  paragraph?: string;
  images?: string[];
}

export const programs: Programs[] = [
  {
    id: '1',
    slug: 'penyerahan-bingkisan-lebaran-kepada-warga-desa-samban',
    title: 'MGM Peduli - Penyerahan Bingkisan Lebaran kepada Warga Desa Samban',
    category: 'CSR',
    paragraph:
      'MGM Peduli is a CSR program from PT Mercindo Global Manufaktur that focuses on community development and social well-being. This program aims to provide assistance and support to local communities in need, as well as to promote sustainable development and social responsibility. In this program, we provide assistance in the form of basic necessities, educational support, and other forms of assistance that can help improve the quality of life of the community. We also conduct various activities that can help improve the skills and knowledge of the community, as well as to promote sustainable development and social responsibility.',
    images: [
      '/images/programs/mgm-peduli/1.webp',
      '/images/programs/mgm-peduli/2.webp',
      '/images/programs/mgm-peduli/3.webp',
      '/images/programs/mgm-peduli/4.webp',
      '/images/programs/mgm-peduli/5.webp',
    ],
  },
  {
    id: '2',
    slug: 'bantuan-pembangunan-lapangan-voli-desa-samban',
    title: 'MGM Peduli - Bantuan Pembangunan Lapangan Voli Desa Samban',
    category: 'CSR',
    paragraph:
      'MGM Peduli is a CSR program from PT Mercindo Global Manufaktur that focuses on community development and social well-being. This program aims to provide assistance and support to local communities in need, as well as to promote sustainable development and social responsibility. In this program, we provide assistance in the form of basic necessities, educational support, and other forms of assistance that can help improve the quality of life of the community. We also conduct various activities that can help improve the skills and knowledge of the community, as well as to promote sustainable development and social responsibility.',
    images: [
      '/images/programs/pembangunan-voli/1.jpeg',
      '/images/programs/pembangunan-voli/2.jpeg',
    ],
  },
  {
    id: '3',
    slug: 'air-bersih-untuk-warga',
    title: 'MGM Peduli - Air Bersih Untuk Warga',
    category: 'CSR',
    paragraph:
      'MGM Peduli is a CSR program from PT Mercindo Global Manufaktur that focuses on community development and social well-being. This program aims to provide assistance and support to local communities in need, as well as to promote sustainable development and social responsibility. In this program, we provide assistance in the form of basic necessities, educational support, and other forms of assistance that can help improve the quality of life of the community. We also conduct various activities that can help improve the skills and knowledge of the community, as well as to promote sustainable development and social responsibility.',
    images: ['/images/programs/air-bersih/1.webp'],
  },
];
