export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Cakes' | 'Cupcakes' | 'Special Orders' | 'Cookies';
  image: string;
  tags?: string[];
}

export type Page = 'home' | 'menu' | 'about' | 'contact' | 'order';
