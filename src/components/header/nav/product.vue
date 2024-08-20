<template>
  <div class="flex-1 pr-10 mb-6">
    <h4 class="text-sm uppercase mb-2">{{ props.title }}</h4>
    <div class="flex flex-col text-small flex-wrap max-w-[180px]">
      <NuxtLink
        v-for="(item, index) of props.list"
        :key="index"
        :to="item.path"
        class="min-w-20 hover:text-secondary"
        >{{ item.name }}</NuxtLink
      >
      <div v-if="props.title === 'Top Brands'" class="flex items-center mt-2 cursor-pointer gap-1 hover:text-secondary">
        <span>View all brands</span>
        <Icon name="ri:arrow-right-line" class="mt-[2px]"></Icon>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { INavigation } from '~/types/navigation';

  const props = defineProps({
    title: {
      type: String,
      required: true
    },
    list: {
      type: Array<INavigation>,
      required: true,
      default: () => []
    }
  });
</script>

<style scoped></style>
