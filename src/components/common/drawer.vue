<template>
  <div class="relative group">
    <!-- name -->
    <NuxtLink class="flexitem gap-1 cursor-pointer">
      <span>{{ name }}</span>
      <slot name="icon"></slot>
    </NuxtLink>
    <!-- content -->
    <ul class="absolute -left-4 border border-border bg-white hidden group-hover:block z-30">
      <li v-for="(item, index) of props.content" :key="index" class="leading-8 hover:bg-light-bg">
        <NuxtLink
          class="cursor-pointer px-4 py-1"
          :class="[name === item ? 'text-primary' : '']"
          @click="handleChangeName(item as string)"
          >{{ item }}</NuxtLink
        >
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    content: {
      type: Array,
      default: () => []
    }
  });
  const name = defineModel();
  const handleChangeName = (data: string) => {
    name.value = data;
  };
</script>

<style scoped></style>
