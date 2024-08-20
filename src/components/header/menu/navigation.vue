<template>
  <div class="mb-4">
    <!-- 标题 -->
    <div>
      <input hidden type="checkbox" :id="data.name" v-model="checked" />
      <label :for="data.name">
        <HeaderMenuTitle :name="data.name">
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
        <div class="min-h-0">
          <div v-for="item of data.children" :key="item.title" class="leading-8 pl-8">
            <h4 class="my-2">{{ item.title }}</h4>
            <div v-for="child of item.list">
              <NuxtLink :to="child.path" class="hover:text-primary">{{ child.name }}</NuxtLink>
            </div>
          </div>
          <div class="flex items-center mt-2 cursor-pointer gap-1 hover:text-primary pl-8">
            <span>View all brands</span>
            <Icon name="ri:arrow-right-line" class="mt-[2px]"></Icon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { INavigation } from '~/types/navigation';

  const checked = ref(false);

  const { data } = defineProps({
    data: {
      type: Object as PropType<INavigation>,
      required: true
    }
  });
</script>

<style scoped></style>
