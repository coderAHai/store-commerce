<template>
  <div class="fixed bottom-0 w-full lg:hidden border-t border-border">
    <!-- email -->
    <div class="bg-secondary-dark py-8 px-6 relative" v-if="store.footerShow">
      <div class="relative">
        <Icon name="ri:mail-line" class="absolute m-3"></Icon>
        <input class="w-full h-10 pl-10 outline-none rounded-lg" type="text" placeholder="Your email address" />
        <button class="primary-button absolute right-0 bg-primary h-10 rounded-r px-4 text-white">Sign up</button>
      </div>
      <div
        class="top-0 right-4 -translate-y-1/2 absolute flex justify-center items-center w-6 h-6 rounded-full bg-secondary-dark text-white border border-light-bg cursor-pointer"
        @click="store.handleChangeFooter(false)"
      >
        <Icon name="ri:close-fill"></Icon>
      </div>
    </div>
    <!-- menu -->
    <div class="flex justify-around items-center bg-white py-2">
      <NuxtLink
        v-for="item of menu"
        :key="item.path"
        :to="item.path"
        class="flex flex-col justify-center items-center"
        :class="route.path === item.path ? 'text-primary' : 'text-light-text'"
      >
        <Icon :name="item.icon" class="text-xl"></Icon>
        <span class="text-sm">{{ item.name }}</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useMenu } from '~/store/menu';

  const route = useRoute();
  const store = useMenu();
  const menu = [
    {
      name: 'Home',
      icon: 'ri:home-3-line',
      path: '/'
    },
    {
      name: 'Search',
      icon: 'ri:search-line',
      path: '/search'
    },
    {
      name: 'Wishlist',
      icon: 'ri:heart-line',
      path: '/wishlist'
    },
    {
      name: 'Account',
      icon: 'ri:user-3-line',
      path: '/account'
    }
  ];
</script>

<style scoped></style>
