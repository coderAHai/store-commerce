import type { INavigation } from '~/types/navigation.js';

export const useNavigation = defineStore('navigation', () => {
  const navigation: Array<INavigation> = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'Shop',
      path: '/'
    },
    {
      name: 'Women',
      path: '/',
      image: '/products/apparel4.jpg',
      children: [
        {
          title: "Women's Clothing",
          list: [
            { name: 'Dresses', path: '/' },
            { name: 'Tops & Tees', path: '/' },
            { name: 'Jackets & Coats', path: '/' },
            { name: 'Pants & Capris', path: '/' },
            { name: 'Sweaters', path: '/' },
            { name: 'Costumes', path: '/' },
            { name: 'Hoodies & Sweatshirts', path: '/' },
            { name: 'Pajamas & Robes', path: '/' },
            { name: 'Shorts', path: '/' },
            { name: 'Swimwear', path: '/' }
          ]
        },
        {
          title: 'Jewelry',
          list: [
            { name: 'Accessories', path: '/' },
            { name: 'Bags & Purses', path: '/' },
            { name: 'Necklaces', path: '/' },
            { name: 'Rings', path: '/' },
            { name: 'Earrings', path: '/' },
            { name: 'Bracelets', path: '/' },
            { name: 'Body Jewelry', path: '/' }
          ]
        },
        {
          title: 'Beauty',
          list: [
            { name: 'Bath Accessories', path: '/' },
            { name: 'Makeup & Cosmetics', path: '/' },
            { name: 'Skin Care', path: '/' },
            { name: 'Hair Care', path: '/' },
            { name: 'Essential Oils', path: '/' },
            { name: 'Fragrances', path: '/' },
            { name: 'Soaps & Bath Bombs', path: '/' },
            { name: 'Face Masks & Coverings', path: '/' },
            { name: 'Spa Kits & Gifts', path: '/' }
          ]
        },
        {
          title: 'Top Brands',
          list: [
            { name: 'Nike', path: '/' },
            { name: 'Louis Vuitton', path: '/' },
            { name: 'Hermes', path: '/' },
            { name: 'Gucci', path: '/' },
            { name: 'Zalando', path: '/' },
            { name: 'Tiffany & Co.', path: '/' },
            { name: 'Zare', path: '/' },
            { name: 'H&M', path: '/' },
            { name: 'Cartier', path: '/' },
            { name: 'Chanel', path: '/' },
            { name: 'Hurley', path: '/' }
          ]
        }
      ]
    },
    {
      name: 'Men',
      path: '/'
    },
    {
      name: 'Sports',
      path: '/'
    }
  ];

  return { navigation };
});
