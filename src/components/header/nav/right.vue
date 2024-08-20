import { CommonLabel } from '../../../../.nuxt/components';
<template>
  <div class="flexitem gap-4">
    <CommonIcon :icon="'ri:heart-line'" :path="'/'" class="mt-2">
      <template #label>
        <CommonLabel :content="0" class="absolute -top-3 -right-1 z-20" />
      </template>
    </CommonIcon>
    <CommonIcon :icon="'ri:shopping-cart-line'" :path="'/'" class="mt-2">
      <template #label>
        <CommonLabel :content="0" class="absolute -top-3 -right-1 z-20" />
      </template>
    </CommonIcon>
    <div class="flex flex-col justify-center items-center text-sm">
      <p>Total</p>
      <p>$0.00</p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
