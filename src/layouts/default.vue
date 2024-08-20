<template>
  <HeaderTop />
  <HeaderNav />
  <Transition>
    <template v-if="menuStore.show">
      <HeaderMenu />
    </template>
  </Transition>
  <slot></slot>
  <FooterRelation />
  <FooterNav />
  <FooterInfo />
  <FooterMenu />
</template>

<script setup lang="ts">
  import { useMenu } from '~/store/menu';

  const menuStore = useMenu();
</script>

<style scoped>
  .v-enter-active,
  .v-leave-active {
    transition: all 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    transform: translateX(-100%);
  }

  .v-enter-to,
  .v-leave-from {
    transform: translateX(0%);
  }
</style>
