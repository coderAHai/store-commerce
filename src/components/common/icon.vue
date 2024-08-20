<template>
  <div>
    <NuxtLink :to="props.path" class="relative">
      <template v-if="$slots.label">
        <slot name="label"></slot>
      </template>
      <Icon :name="props.icon" class="text-2xl"></Icon>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    icon: {
      type: String,
      required: true
    },
    path: {
      type: String,
      default: ''
    }
  });
</script>

<style scoped></style>
