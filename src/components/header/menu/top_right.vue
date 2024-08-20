<template>
  <div class="border-b border-border mb-4">
    <div class="mb-4" v-for="item of data" :key="item.name">
      <NuxtLink :to="item.path">
        <HeaderMenuTitle :name="item.name"></HeaderMenuTitle>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
  const data = [
    {
      name: 'Sign Up',
      path: '/'
    },
    {
      name: 'My Account',
      path: '/'
    },
    {
      name: 'Order Tracking',
      path: '/'
    }
  ];
</script>

<style scoped></style>
