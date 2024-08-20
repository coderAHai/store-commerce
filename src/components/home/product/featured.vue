<template>
  <CommonContainer>
    <!-- Title -->
    <HomeProductTitle :name="'Featured Products'">
      <template #more>
        <NuxtLink to="/" class="flex items-center text-sm text-light-text">
          <span>View all</span>
          <Icon name="ri:arrow-right-line" class="ml-2"></Icon>
        </NuxtLink>
      </template>
    </HomeProductTitle>
    <!-- Product -->
    <div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 mx-4 lg:mx-0">
      <template v-for="(item, index) of products" :key="index">
        <HomeProductItem :data="item" />
      </template>
    </div>
  </CommonContainer>
</template>

<script setup lang="ts">
  import type { IProduct } from '~/types/product';

  const products: Array<IProduct> = [
    {
      name: 'Happy Salied Womens Summer Boho Fioral',
      price: 129.99,
      discountPrice: 189.99,
      discount: 31,
      image: '/products/apparel1.jpg',
      like: true,
      attention: false,
      share: false,
      star: 5,
      ratingNum: 2548,
      stock: 107,
      sold: 3459,
      title: 'Offer ends at',
      date: new Date(new Date().getTime() + 36 * 60 * 60 * 1000)
    },
    {
      name: 'Happy Salied Womens Summer Boho Fioral',
      price: 129.99,
      discountPrice: 189.99,
      discount: 31,
      image: '/products/apparel2.jpg',
      like: true,
      attention: false,
      share: false,
      star: 5,
      ratingNum: 2548,
      stock: 107,
      sold: 3459,
      title: 'Offer ends at',
      date: new Date(new Date().getTime() + 36 * 60 * 60 * 1000)
    },
    {
      name: 'Happy Salied Womens Summer Boho Fioral',
      price: 129.99,
      discountPrice: 189.99,
      discount: 31,
      image: '/products/apparel3.jpg',
      like: true,
      attention: false,
      share: false,
      star: 5,
      ratingNum: 2548,
      stock: 107,
      sold: 3459,
      title: 'Offer ends at',
      date: new Date(new Date().getTime() + 36 * 60 * 60 * 1000)
    },
    {
      name: 'Happy Salied Womens Summer Boho Fioral',
      price: 129.99,
      discountPrice: 189.99,
      discount: 31,
      image: '/products/apparel5.jpg',
      like: true,
      attention: false,
      share: false,
      star: 5,
      ratingNum: 2548,
      stock: 107,
      sold: 3459,
      title: 'Offer ends at',
      date: new Date(new Date().getTime() + 36 * 60 * 60 * 1000)
    },
    {
      name: 'Happy Salied Womens Summer Boho Fioral',
      price: 129.99,
      discountPrice: 189.99,
      discount: 31,
      image: '/products/shoe1.jpg',
      like: true,
      attention: false,
      share: false,
      star: 5,
      ratingNum: 2548,
      stock: 107,
      sold: 3459,
      title: 'Offer ends at',
      date: new Date(new Date().getTime() + 36 * 60 * 60 * 1000)
    },
    {
      name: 'Happy Salied Womens Summer Boho Fioral',
      price: 129.99,
      discountPrice: 189.99,
      discount: 31,
      image: '/products/shoe2.jpg',
      like: true,
      attention: false,
      share: false,
      star: 5,
      ratingNum: 2548,
      stock: 107,
      sold: 3459,
      title: 'Offer ends at',
      date: new Date(new Date().getTime() + 36 * 60 * 60 * 1000)
    },
    {
      name: 'Happy Salied Womens Summer Boho Fioral',
      price: 129.99,
      discountPrice: 189.99,
      discount: 31,
      image: '/products/shoe3.jpg',
      like: true,
      attention: false,
      share: false,
      star: 5,
      ratingNum: 2548,
      stock: 107,
      sold: 3459,
      title: 'Offer ends at',
      date: new Date(new Date().getTime() + 36 * 60 * 60 * 1000)
    },
    {
      name: 'Happy Salied Womens Summer Boho Fioral',
      price: 129.99,
      discountPrice: 189.99,
      discount: 31,
      image: '/products/shoe4.jpg',
      like: true,
      attention: false,
      share: false,
      star: 5,
      ratingNum: 2548,
      stock: 107,
      sold: 3459,
      title: 'Offer ends at',
      date: new Date(new Date().getTime() + 36 * 60 * 60 * 1000)
    }
  ];
</script>

<style scoped></style>
