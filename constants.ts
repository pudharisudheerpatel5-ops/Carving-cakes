import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Chocolate Truffle Cake',
    description: 'Rich, dark chocolate ganache layered with moist chocolate sponge.',
    price: 850,
    category: 'Cakes',
    image: 'https://picsum.photos/seed/chocolate-cake/600/400',
    tags: ['Best Seller', 'Eggless Available']
  },
  {
    id: '2',
    name: 'Red Velvet Cake',
    description: 'Classic red velvet sponge with velvety cream cheese frosting.',
    price: 950,
    category: 'Cakes',
    image: 'https://picsum.photos/seed/red-velvet/600/400',
    tags: ['Popular']
  },
  {
    id: '3',
    name: 'Vanilla Cupcakes',
    description: 'Light and fluffy vanilla cupcakes topped with buttercream swirls.',
    price: 60,
    category: 'Cupcakes',
    image: 'https://picsum.photos/seed/vanilla-cupcake/600/400',
    tags: ['Student Favorite']
  },
  {
    id: '4',
    name: 'Choco-chip Cupcakes',
    description: 'Double chocolate cupcakes loaded with premium chocolate chips.',
    price: 75,
    category: 'Cupcakes',
    image: 'https://picsum.photos/seed/choco-cupcake/600/400'
  },
  {
    id: '5',
    name: 'Theme Cakes',
    description: 'Customized cakes for your favorite cartoon or anime characters.',
    price: 1500,
    category: 'Special Orders',
    image: 'https://picsum.photos/seed/theme-cake/600/400',
    tags: ['Customizable']
  },
  {
    id: '6',
    name: 'Wedding Cakes',
    description: 'Elegant multi-tier cakes designed to make your special day perfect.',
    price: 5000,
    category: 'Special Orders',
    image: 'https://picsum.photos/seed/wedding-cake/600/400',
    tags: ['Premium']
  },
  {
    id: '7',
    name: 'Assorted Cookies',
    description: 'A box of 12 handmade cookies in various flavors.',
    price: 350,
    category: 'Cookies',
    image: 'https://picsum.photos/seed/cookies/600/400',
    tags: ['Gift Box']
  },
  {
    id: '8',
    name: 'Photo Cakes',
    description: 'Edible photo prints on your choice of cake flavor.',
    price: 1100,
    category: 'Cakes',
    image: 'https://picsum.photos/seed/photo-cake/600/400'
  }
];
