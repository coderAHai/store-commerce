<template>
  <div class="py-12 mb-20 lg:mb-0">
    <CommonContainer>
      <div class="flex flex-col items-center">
        <NuxtLink to="/" class="nav-title">.Store</NuxtLink>
        <div class="flex justify-center gap-4 my-4">
          <NuxtLink
            v-for="(item, index) of socials"
            :key="index"
            :to="item.path"
            class="flex justify-center items-center w-8 h-8 rounded-full bg-light-bg text-lg hover:text-primary"
          >
            <Icon :name="item.icon"></Icon>
          </NuxtLink>
        </div>
        <div class="text-xs text-light-text">Copyright 2024 © .Store All right reserved.</div>
      </div>
    </CommonContainer>
  </div>
</template>

<script setup lang="ts">
  const socials = [
    {
      icon: 'ri:twitter-line',
      path: '/'
    },
    {
      icon: 'ri:facebook-fill',
      path: '/'
    },
    {
      icon: 'ri:instagram-line',
      path: '/'
    },
    {
      icon: 'ri:linkedin-line',
      path: '/'
    },
    {
      icon: 'ri:youtube-line',
      path: '/'
    }
  ];
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
