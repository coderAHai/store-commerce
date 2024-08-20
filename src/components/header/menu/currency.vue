<template>
  <div class="border-b border-border mb-4 flex gap-2">
    <div
      v-for="(item, index) of currencyList"
      :key="index"
      class="cursor-pointer border border-light-text mb-4 px-2 py-1 text-xs"
      :class="[menuStore.currency == item ? 'bg-primary text-white border border-transparent' : '']"
      @click="menuStore.handleChangeCurrency(item)"
    >
      {{ item }}
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useMenu } from '~/store/menu';

  const currencyList = ['USD', 'EURO', 'GBP', 'IDR'];
  const menuStore = useMenu();
</script>

<style scoped></style>
