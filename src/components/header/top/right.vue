<template>
  <div class="flexitem gap-8">
    <NuxtLink to="/">Sign up</NuxtLink>
    <NuxtLink to="/">My Account</NuxtLink>
    <NuxtLink to="/">Order Tracking</NuxtLink>
    <CommonDrawer v-model="menuStore.currency" :content="currencyList">
      <template #icon>
        <Icon name="ri:arrow-down-s-line"></Icon>
      </template>
    </CommonDrawer>
    <CommonDrawer v-model="menuStore.lang" :content="langList">
      <template #icon>
        <Icon name="ri:arrow-down-s-line"></Icon>
      </template>
    </CommonDrawer>
  </div>
</template>

<script setup lang="ts">
  import { useMenu } from '~/store/menu';

  const menuStore = useMenu();
  const currencyList = ['USD', 'EURO', 'GBP', 'IDR'];
  const langList = ['English', 'German', 'Spanish', 'Bahasa'];
</script>

<style scoped></style>
