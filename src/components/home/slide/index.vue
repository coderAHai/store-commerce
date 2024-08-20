<template>
  <div class="mt-[72px] lg:mt-0">
    <CommonContainer>
      <Swiper
        :pagination="true"
        :modules="modules"
        class="z-50 relative w-full h-[424px] lg:w-[calc(100%-(300px+2rem))] float-right"
      >
        <template v-for="item of slideList" :key="item.id">
          <SwiperSlide class="w-full h-full">
            <!-- Image -->
            <img :src="item.image" class="w-full h-full block object-cover" />
            <!-- Content -->
            <div class="absolute bottom-[10%] left-[10%]">
              <h4 class="text-sm font-bold py-1 px-3 bg-dark text-white rounded" style="width: fit-content">
                {{ item.label }}
              </h4>
              <h2 class="text-3xl leading-[42px] font-bold my-4 text-secondary-dark">
                <span class="font-normal">{{ item.recommend[0] }}</span>
                <br />
                <span>{{ item.recommend[1] }}</span>
                <br />
              </h2>
              <button class="primary-button px-4 py-2 rounded-full text-sm">{{ item.button }}</button>
            </div>
          </SwiperSlide>
        </template>
      </Swiper>
    </CommonContainer>
  </div>
</template>

<script setup lang="ts">
  import { Pagination } from 'swiper/modules';
  import Slide1 from '~/assets/images/slider/slider0.jpg';
  import Slide2 from '~/assets/images/slider/slider1.jpg';
  import Slide3 from '~/assets/images/slider/slider2.jpg';
  import Slide4 from '~/assets/images/slider/slider3.jpg';
  const modules = [Pagination];
  const slideList = [
    {
      id: 1,
      image: Slide1,
      label: 'Shoes Fashion',
      button: 'Shop Now',
      recommend: ['Come and Get it!', 'Brand New Shoes']
    },
    {
      id: 2,
      image: Slide2,
      label: 'Quick Fashion',
      button: 'Shop Now',
      recommend: ['Fit Your Wardrobe', 'WITH LUXURY ITEMS']
    },
    {
      id: 3,
      image: Slide3,
      label: 'Quick Offer',
      button: 'Shop Now',
      recommend: ['Wooden Minimal Sofa', 'EXTRA 50% OFF']
    },
    {
      id: 4,
      image: Slide4,
      label: 'Best Deals',
      button: 'Shop Now',
      recommend: ['Home Workout Accessories', 'PUSH THE LIMIT']
    }
  ];
</script>

<style scoped>
  :deep(.swiper-pagination-bullet-active) {
    background-color: #ff6b6b !important;
  }
</style>
