<template>
  <div>
    <!-- product -->
    <div class="product mb-4 w-full max-h-[480px] relative group overflow-hidden">
      <!-- product image -->
      <div class="cursor-pointer w-full">
        <img
          :src="data.image"
          alt=""
          class="transition-transform object-cover w-full aspect-[1/1.5] duration-500 block group-hover:scale-110"
        />
      </div>
      <!-- product icon -->
      <div class="absolute top-0 right-0">
        <ul class="list-icon">
          <li class="icon" :class="data.like ? 'text-primary' : 'icon-inactive'">
            <Icon name="ri:heart-line"></Icon>
          </li>
          <li class="icon" :class="data.attention ? 'text-primary' : 'icon-inactive'">
            <Icon name="ri:eye-line"></Icon>
          </li>
          <li class="icon" :class="data.share ? 'text-primary' : 'icon-inactive'">
            <Icon name="ri:shuffle-line"></Icon>
          </li>
        </ul>
      </div>
      <!-- product discount -->
      <div class="flex justify-center items-center w-7 h-7 absolute bottom-2 right-1 bg-secondary-dark/60 rounded-full">
        <span class="text-[10px] text-white">{{ data.discount }}%</span>
      </div>
    </div>
    <!-- content -->
    <div class="flex flex-col gap-4">
      <div class="flex items-center">
        <!-- stars -->
        <template v-for="item of data.star" :key="item">
          <Icon name="ri:star-s-fill" class="text-[#e8bb02] text-xl"></Icon>
        </template>
        <span class="text-light-text text-xs ml-2">({{ data.ratingNum }})</span>
      </div>
      <h3 class="line-clamp-2 text-lg leading-6">{{ data.name }}</h3>
      <div>
        <span class="text-primary text-xl font-bold mr-2">${{ data.price }}</span>
        <span class="text-light-text text-xs line-through">${{ data.discountPrice }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { IProduct } from '~/types/product';

  const { data } = defineProps({
    data: {
      type: Object as PropType<IProduct>,
      required: true
    }
  });

  const { days, hours, minutes, seconds } = formatTime(data.date ? data.date : new Date());
  const progress = computed(() => ((data.stock / data.sold) * 100).toFixed(0));
</script>

<style scoped>
  .time-list .time:not(:last-child)::before {
    content: ':';
    position: absolute;
    right: -0.6rem;
    @apply text-light-text;
  }

  .time {
    @apply relative w-8 h-8 p-2 text-secondary-dark rounded-md bg-light-bg;
    line-height: 100%;
  }

  .icon {
    @apply cursor-pointer flex justify-center items-center w-7 h-7 p-1 m-1 rounded-full leading-4 bg-white  transition duration-300;
  }

  .icon-inactive {
    @apply translate-x-full group-hover:translate-x-0 opacity-0 group-hover:opacity-100 bg-white/50;
  }
</style>
