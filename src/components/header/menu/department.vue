<template>
  <div class="mb-4">
    <!-- 标题 -->
    <div>
      <input hidden type="checkbox" :id="data.title" v-model="checked" />
      <label :for="data.title">
        <HeaderMenuTitle :name="data.title">
          <template #left>
            <CommonIcon :icon="data.icon" />
          </template>
          <template #right v-if="data.children">
            <CommonIcon
              :icon="'ri:arrow-right-s-line'"
              class="transition-all"
              :class="checked ? 'rotate-90' : 'rotate-0'"
              style="line-height: 100%"
            />
          </template>
        </HeaderMenuTitle>
      </label>
    </div>
    <!-- 下拉内容 -->
    <div v-if="data.children && data.children?.length">
      <div
        class="grid overflow-hidden transition-all text-sm"
        :style="checked ? 'grid-template-rows: 1fr;' : 'grid-template-rows: 0fr;'"
      >
        <div class="min-h-0 pl-8">
          <HeaderMenuRecursion :children="data.children" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { IPrimary } from '~/types/department';

  const checked = ref(false);

  const { data } = defineProps({
    data: {
      type: Object as PropType<IPrimary>,
      required: true
    }
  });
</script>

<style scoped></style>
