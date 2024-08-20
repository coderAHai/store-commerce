<template>
  <CommonContainer>
    <!-- Title -->
    <HomeProductTitle :name="'Trending Products'"></HomeProductTitle>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <!-- Offer Product -->
      <HomeProductOffer :data="offerProduct" />
      <div class="grid lg:col-span-2 grid-cols-1 sm:grid-cols-2 gap-4 mx-4 lg:mx-0">
        <template v-for="(item, index) of cardProduct" :key="index">
          <HomeProductCard :data="item" />
        </template>
      </div>
    </div>
  </CommonContainer>
</template>

<script setup lang="ts">
  import type { IProduct } from '~/types/product';

  const offerProduct: IProduct = {
    name: 'Happy Salied Womens Summer Boho Fioral',
    price: 129.99,
    discountPrice: 189.99,
    discount: 31,
    image: '/products/apparel4.jpg',
    like: true,
    attention: false,
    share: false,
    star: 5,
    ratingNum: 2548,
    stock: 107,
    sold: 3459,
    title: 'Offer ends at',
    date: new Date(new Date().getTime() + 36 * 60 * 60 * 1000)
  };

  const cardProduct: Array<IProduct> = [
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
      image: '/products/apparel6.jpg',
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
      image: '/products/electronic1.jpg',
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
      image: '/products/electronic2.jpg',
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
      image: '/products/electronic3.jpg',
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
