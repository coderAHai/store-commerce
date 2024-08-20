<template>
  <div class="flex-1 w-full overflow-y-auto px-4">
    <!-- Departments -->
    <div class="border-b border-border mb-4">
      <div class="my-4 w-full flex justify-center items-center py-3 font-bold bg-light-bg text-sm">
        <span>All Departments</span>
      </div>
      <div v-for="item of departmentStore.departmentList" :key="item.title">
        <HeaderMenuDepartment :data="item" />
      </div>
    </div>
    <!-- Navigation -->
    <div class="border-b border-border mb-4">
      <div v-for="item of navigationStore.navigation" :key="item.name">
        <HeaderMenuNavigation :data="item" />
      </div>
    </div>
    <!-- Header Top Left -->
    <HeaderMenuTopLeft />
    <!-- Header Top Right -->
    <HeaderMenuTopRight />
    <!-- Currency -->
    <HeaderMenuCurrency />
    <!-- Lang -->
    <HeaderMenuLang />
  </div>
</template>

<script setup lang="ts">
  import { useDepartment } from '~/store/department';
  import { useNavigation } from '~/store/navigation';

  const departmentStore = useDepartment();
  const navigationStore = useNavigation();
</script>

<style scoped></style>
