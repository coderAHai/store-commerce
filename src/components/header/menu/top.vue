<template>
  <div class="bg-secondary-dark flex justify-between items-center p-6" style="border-bottom-right-radius: 10rem 1.5rem">
    <NuxtLink to="/" class="nav-title text-white">.Store</NuxtLink>
    <div
      class="transition-all duration-500 rounded-full text-white hover:text-secondary-dark bg-secondary-dark hover:bg-white"
      style="line-height: 80%"
      @click="menuStore.handleChangeShow(false)"
    >
      <CommonIcon icon="ri:close-line" class="cursor-pointer" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useMenu } from '~/store/menu';

  const menuStore = useMenu();
</script>

<style scoped>
  .nav-title {
    @apply text-2xl relative font-extrabold;
  }

  .nav-title::before {
    content: '';
    @apply bg-secondary absolute w-[20px] h-[20px] rounded-full opacity-40 -left-2 -top-1;
  }
</style>
