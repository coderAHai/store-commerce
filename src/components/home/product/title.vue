<template>
  <div class="flex justify-between items-center border-b border-border pb-2 my-8 mx-4 lg:mx-0">
    <div class="flex items-center">
      <div class="bg-secondary w-[20px] h-[20px] rounded-full opacity-40 mr-2"></div>
      <h2 class="text-2xl font-bold">{{ name }}</h2>
    </div>
    <slot name="more"></slot>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    name: {
      type: String,
      required: true
    }
  });
</script>

<style scoped></style>
