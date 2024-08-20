<template>
  <div class="flex items-start gap-2 cursor-pointer">
    <slot name="left"></slot>
    <div class="font-bold flex-1">{{ props.name }}</div>
    <slot name="right"></slot>
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
