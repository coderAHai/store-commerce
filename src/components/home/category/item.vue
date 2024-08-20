<template>
  <div class="relative w-full aspect-[16/8] border border-border rounded">
    <img :src="data.background" :alt="data.category" class="w-full h-full rounded object-cover" />
    <div class="absolute left-8 top-1/2 -translate-y-1/2">
      <h6 class="text-xl mb-4">{{ data.title }}</h6>
      <div class="font-bold text-light-text">{{ data.descript }}</div>
      <div class="font-bold">{{ data.category }}</div>
      <button class="primary-button px-4 py-2 rounded-full text-sm mt-2">{{ data.button }}</button>
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
