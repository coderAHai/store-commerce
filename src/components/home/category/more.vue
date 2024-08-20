<template>
  <div class="flex border border-border">
    <img :src="data.image" :alt="data.title" class="w-1/2 aspect-[1/1.5]" />
    <div class="flex flex-col w-1/2 p-4">
      <h6 class="font-bold">{{ data.title }}</h6>
      <div class="flex flex-col flex-1 gap-2 my-4 text-sm text-light-text">
        <template v-for="item of data.children" :key="item.name">
          <NuxtLink :to="item.path" class="hover:text-primary">{{ item.name }}</NuxtLink>
        </template>
      </div>
      <div class="flex justify-end items-center text-sm text-light-text hover:text-primary cursor-pointer">
        <span>View all</span>
        <Icon name="ri:arrow-right-line" class="ml-2"></Icon>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    data: {
      type: Object,
      required: true
    }
  });
</script>

<style scoped></style>
