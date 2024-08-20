<template>
  <div
    class="absolute left-0 right-0 w-full top-full border rounded-b-lg z-40 bg-white"
    @mouseleave="handleChangeDepartmen('')"
  >
    <div class="relative">
      <!-- Departments Title -->
      <div>
        <template v-for="item of departmentStore.departmentList" :key="item.title">
          <HomeDepartmentsTitle :data="item" v-model="department" />
        </template>
      </div>
      <!-- Departments Menu -->
      <div
        v-if="currentDepartment?.children"
        class="absolute top-0 left-full h-full bg-no-repeat bg-cover p-4 px-8"
        :class="[currentDepartment.title === 'Home & Kitchen' ? 'min-w-[40rem]' : 'min-w-80']"
        :style="`background-image: url(${currentDepartment.background});`"
      >
        <HomeDepartmentsRecursion :children="currentDepartment?.children" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useDepartment } from '~/store/department';

  const departmentStore = useDepartment();
  const department = ref('');
  const handleChangeDepartmen = (value: string) => {
    department.value = value;
  };
  const currentDepartment = computed(() =>
    departmentStore.departmentList.find(item => item.title === department.value)
  );
</script>

<style scoped></style>
