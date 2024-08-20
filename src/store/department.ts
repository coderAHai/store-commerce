import type { IPrimary } from '~/types/department';

export const useDepartment = defineStore('department', () => {
  const departmentList: Array<IPrimary> = [
    {
      title: 'Beauty',
      icon: 'ri:bear-smile-line',
      background: '/menu/menu_bg1.jpg',
      children: [
        {
          name: 'Makeup',
          path: '/'
        },
        {
          name: 'Skin Care',
          path: '/'
        },
        {
          name: 'Hair Care',
          path: '/'
        },
        {
          name: 'Fragrance',
          path: '/'
        },
        {
          name: 'Foot & Hand Care',
          path: '/'
        },
        {
          name: 'Tools & Accessories',
          path: '/'
        },
        {
          name: 'Shave & Hair Removal',
          path: '/'
        },
        {
          name: 'Personal Care',
          path: '/'
        }
      ]
    },
    {
      title: 'Electronic',
      icon: 'ri:bluetooth-connect-line',
      background: '/menu/menu_bg2.jpg',
      children: [
        {
          name: 'Camera',
          path: '/'
        },
        {
          name: 'Cell Phones',
          path: '/'
        },
        {
          name: 'Computers',
          path: '/'
        },
        {
          name: 'GPS & Navigation',
          path: '/'
        },
        {
          name: 'Headphones',
          path: '/'
        },
        {
          name: 'Home Audio',
          path: '/'
        },
        {
          name: 'Television',
          path: '/'
        },
        {
          name: 'Video Projectors',
          path: '/'
        },
        {
          name: 'Wearable Technology',
          path: '/'
        }
      ]
    },
    {
      title: "Woman's Fashion",
      icon: 'ri:t-shirt-air-line',
      background: '/menu/menu_bg3.jpg',
      children: [
        {
          name: 'Clothing',
          path: '/'
        },
        {
          name: 'Shoes',
          path: '/'
        },
        {
          name: 'Jewelry',
          path: '/'
        },
        {
          name: 'Watches',
          path: '/'
        },
        {
          name: 'Handbags',
          path: '/'
        },
        {
          name: 'Accessories',
          path: '/'
        }
      ]
    },
    {
      title: "Men's Fashion",
      icon: 'ri:shirt-line'
    },
    {
      title: "Girl's Fashion",
      icon: 'ri:user-5-line'
    },
    {
      title: "Boy's Fashion",
      icon: 'ri:user-6-line'
    },
    {
      title: 'Health & Household',
      icon: 'ri:heart-pulse-line'
    },
    {
      title: 'Home & Kitchen',
      icon: 'ri:home-8-line',
      background: '/menu/menu_bg4.jpg',
      children: [
        {
          title: 'Kitchen & Dining',
          children: [
            {
              name: 'Kitchen',
              path: '/'
            },
            {
              name: 'Dining Room',
              path: '/'
            },
            {
              name: 'Pantry',
              path: '/'
            },
            {
              name: 'Great Room',
              path: '/'
            },
            {
              name: 'Breakfast Nook',
              path: '/'
            }
          ]
        },
        {
          title: 'Living',
          children: [
            {
              name: 'Living Room',
              path: '/'
            },
            {
              name: 'Family Room',
              path: '/'
            },
            {
              name: 'Runroom',
              path: '/'
            }
          ]
        },
        {
          title: 'Bed & Bath',
          children: [
            {
              name: 'Bath Room',
              path: '/'
            },
            {
              name: 'Powder Room',
              path: '/'
            },
            {
              name: 'Bed Room',
              path: '/'
            },
            {
              name: 'Storage & Closet',
              path: '/'
            },
            {
              name: 'Bady & Kids',
              path: '/'
            }
          ]
        },
        {
          title: 'Utility',
          children: [
            {
              name: 'Laundry',
              path: '/'
            },
            {
              name: 'Garage',
              path: '/'
            },
            {
              name: 'Mud Room',
              path: '/'
            }
          ]
        },
        {
          title: 'Outdoor',
          children: [
            {
              name: 'Landscape',
              path: '/'
            },
            {
              name: 'Patio',
              path: '/'
            },
            {
              name: 'Deck',
              path: '/'
            },
            {
              name: 'Pool',
              path: '/'
            },
            {
              name: 'Backyard',
              path: '/'
            },
            {
              name: 'Porch',
              path: '/'
            },
            {
              name: 'Exterior',
              path: '/'
            },
            {
              name: 'Outdoor Kitchen',
              path: '/'
            },
            {
              name: 'Front Yard',
              path: '/'
            },
            {
              name: 'Driveway',
              path: '/'
            },
            {
              name: 'Poolhouse',
              path: '/'
            }
          ]
        }
      ]
    },
    {
      title: 'Pet Suppline',
      icon: 'ri:android-line'
    },
    {
      title: 'Sports',
      icon: 'ri:basketball-line'
    },
    {
      title: 'Best Seller',
      icon: 'ri:shield-star-line'
    }
  ];

  return { departmentList };
});
