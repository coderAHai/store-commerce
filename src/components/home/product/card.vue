<template>
  <div class="flex gap-4 w-full h-[168px] overflow-hidden border border-border rounded cursor-pointer">
    <!-- product -->
    <div class="product mb-4 w-[130px] h-[168px] relative group overflow-hidden">
      <!-- product image -->
      <div class="cursor-pointer">
        <img
          :src="data.image"
          alt=""
          class="object-cover transition-transform duration-500 block w-full h-full group-hover:scale-110"
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
    <div class="flex flex-col gap-2 flex-1 py-1">
      <h3 class="line-clamp-2 text-sm leading-6">{{ data.name }}</h3>
      <div class="flex items-center">
        <!-- stars -->
        <template v-for="item of data.star" :key="item">
          <Icon name="ri:star-s-fill" class="text-[#e8bb02] text-base"></Icon>
        </template>
        <span class="text-light-text text-xs ml-2">({{ data.ratingNum }})</span>
      </div>

      <div>
        <span class="text-primary text-lg font-bold mr-2">${{ data.price }}</span>
        <span class="text-light-text text-xs line-through">${{ data.discountPrice }}</span>
      </div>
      <div class="flex flex-col gap-2 justify-between text-xs text-light-text">
        <div>
          <span>Stock:</span>
          <span class="font-bold">{{ data.stock }}</span>
        </div>
        <div>
          <span>Sold:</span>
          <span class="font-bold">{{ data.sold }}</span>
        </div>
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
