<template>
  <div class="leading-8">
    <div v-for="item of children" :key="item.name">
      <h4 v-if="item.title" class="my-2">{{ item.title }}</h4>
      <NuxtLink :to="item.path" class="hover:text-primary">{{ item.name }}</NuxtLink>
      <div v-if="item.children && item.children.length">
        <HeaderMenuRecursion :children="item.children" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { IChildren } from '~/types/department';

  const { children } = defineProps({
    children: {
      type: Array as PropType<Array<IChildren>>,
      default: () => []
    }
  });
</script>

<style scoped></style>
