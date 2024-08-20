<template>
  <CommonContainer>
    <div class="flex justify-around flex-wrap mt-8">
      <div v-for="item of brands" :key="item.name" class="transition-opacity opacity-25 hover:opacity-100">
        <NuxtLink :to="item.path">
          <img :src="item.image" :alt="item.name" />
        </NuxtLink>
      </div>
    </div>
  </CommonContainer>
</template>

<script setup lang="ts">
  import zaraImage from '~/assets/images/brands/zara.png';
  import samsungImage from '~/assets/images/brands/samsung.png';
  import oppoImage from '~/assets/images/brands/oppo.png';
  import asusImage from '~/assets/images/brands/asus.png';
  import hurleyImage from '~/assets/images/brands/hurley.png';
  import dngImage from '~/assets/images/brands/dng.png';

  const brands = [
    {
      name: 'zara',
      image: zaraImage,
      path: '/'
    },
    {
      name: 'samsung',
      image: samsungImage,
      path: '/'
    },
    {
      name: 'oppo',
      image: oppoImage,
      path: '/'
    },
    {
      name: 'asus',
      image: asusImage,
      path: '/'
    },
    {
      name: 'hurley',
      image: hurleyImage,
      path: '/'
    },
    {
      name: 'dng',
      image: dngImage,
      path: '/'
    }
  ];
</script>

<style scoped></style>
