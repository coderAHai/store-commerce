<template>
  <div class="flex flex-col relative flex-1">
    <div>
      <img class="h-[400px] object-cover" :src="props.image" alt="products" />
    </div>
    <div class="flex flex-col justify-center items-center absolute bottom-16 w-full">
      <h4 class="text-2xl text-center uppercase font-extrabold text-secondary-dark">{{ props.title }}</h4>
      <NuxtLink to="/" class="primary-button mt-2 rounded-3xl px-4">{{ props.button }}</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    image: {
      type: String,
      required: true
    },
    title: {
      type: String
    },
    button: {
      type: String
    }
  });
</script>

<style scoped></style>
