<template>
  <CommonContainer>
    <div class="grid grid-cols-1 md:grid-cols-2 my-8 mx-4 gap-4 lg:mx-0 lg:gap-8">
      <template v-for="(item, index) of categorys" :key="index">
        <HomeCategoryItem :data="item" />
      </template>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mx-4 lg:mx-0">
      <template v-for="(item, index) of moreCategory" :key="index">
        <HomeCategoryMore :data="item" />
      </template>
    </div>
  </CommonContainer>
</template>

<script setup lang="ts">
  const categorys = [
    {
      title: 'Brutal Sale!',
      descript: 'Get the deal in here',
      category: 'Living Room Chair',
      button: 'Shop Now',
      background: '/banner/banner1.jpg'
    },
    {
      title: 'Brutal Sale!',
      descript: 'Discount everyday',
      category: 'Office Outfit',
      button: 'Shop Now',
      background: '/banner/banner2.jpg'
    }
  ];
  const moreCategory = [
    {
      title: 'Beauty',
      image: '/banner/procat1.jpg',
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
        }
      ]
    },
    {
      title: 'Gatdets',
      image: '/banner/procat2.jpg',
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
        }
      ]
    },
    {
      title: 'Home Decor',
      image: '/banner/procat3.jpg',
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
    }
  ];
</script>

<style scoped></style>
