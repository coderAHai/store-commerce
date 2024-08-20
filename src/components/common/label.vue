<template>
  <div class="w-4 h-4 rounded-full bg-secondary-dark text-white text-xs flexcenter">
    {{ content }}
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    content: {
      type: Number,
      require: true
    }
  });
</script>

<style scoped></style>
