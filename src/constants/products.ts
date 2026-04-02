export interface Products {
  id: string;
  title: string;
  image: string;
  category: string;
  status?: string;
  span?: string;
}

export const products: Products[] = [
  {
    id: '1',
    title: 'Gymnastic',
    category: 'Gloves',
    image: '/images/ilustration/1.jpeg',
  },
  {
    id: '2',
    title: 'Cycling',
    category: 'Gloves',
    image: '/images/ilustration/4.jpeg',
  },
  {
    id: '3',
    title: 'Golf',
    category: 'Gloves',
    image: '/images/ilustration/7.jpeg',
  },
  {
    id: '4',
    title: 'Ski',
    category: 'Gloves',
    image: '/images/ilustration/6.jpeg',
  },
  {
    id: '5',
    title: 'Tracking',
    category: 'Gloves',
    image: '/images/ilustration/5.jpeg',
  },
  {
    id: '6',
    title: 'Cooking',
    category: 'Gloves',
    image: '/images/ilustration/8.jpeg',
  },
];
