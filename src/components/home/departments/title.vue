<template>
  <div
    class="hover:text-primary flex items-center text-sm cursor-pointer border-b border-border py-1 pl-6"
    @mouseenter="handleChangeDepartmen(data.title)"
  >
    <CommonIcon :icon="data.icon" class="mr-4 mt-1" />
    <p class="flex-1">{{ data.title }}</p>
    <CommonIcon v-if="data.children" icon="ri:arrow-right-s-line" class="mr-4 mt-1"></CommonIcon>
  </div>
</template>

<script setup lang="ts">
  import type { IPrimary } from '~/types/department';

  const model = defineModel();

  const { data } = defineProps({
    data: {
      type: Object as PropType<IPrimary>,
      required: true
    }
  });

  const handleChangeDepartmen = (value: string) => {
    model.value = value;
  };
</script>

<style scoped></style>
