<template>
  <div class="flexitem">
    <!-- Men -->
    <CommonIcon
      :icon="'ri:menu-line'"
      class="lg:hidden mt-2 mr-4 cursor-pointer"
      @click="menuStore.handleChangeShow(true)"
    ></CommonIcon>
    <!-- title -->
    <NuxtLink to="/" class="nav-title">.Store</NuxtLink>
    <!-- nav -->
    <div class="hidden lg:flex gap-8" @mouseleave="handleChangeNav('')">
      <div v-for="item of navigationStore.navigation" :key="item.name" class="text-base/6 py-2">
        <div class="flex" @mouseenter="handleChangeNav(item.name)">
          <NuxtLink :to="item.path">{{ item.name }}</NuxtLink>
          <CommonIcon
            v-if="item.children && item.children.length"
            :icon="'ri:arrow-down-s-line'"
            style="line-height: 100%"
          />
        </div>
      </div>
      <Transition>
        <div v-if="selectedNav?.children && selectedNav.children.length" class="product-container">
          <template v-for="item of selectedNav.children" :key="item.title">
            <HeaderNavProduct :title="item.title" :list="item.list"></HeaderNavProduct>
          </template>
          <template v-if="selectedNav?.image">
            <HeaderNavProductImage :image="selectedNav.image" :title="'Most Wanted!'" :button="'Order Now'">
            </HeaderNavProductImage>
          </template>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useMenu } from '~/store/menu';
  import { useNavigation } from '~/store/navigation';

  const menuStore = useMenu();
  const navigationStore = useNavigation();
  const currentNav = ref('');
  const handleChangeNav = (value: string) => {
    currentNav.value = value;
  };
  const selectedNav = computed(() => navigationStore.navigation.find(item => item.name === currentNav.value));
</script>

<style scoped>
  .nav-title {
    @apply text-2xl relative font-extrabold mr-8;
  }

  .nav-title::before {
    content: '';
    @apply bg-secondary absolute w-[20px] h-[20px] rounded-full opacity-40 -left-2 -top-1;
  }

  .product-container {
    @apply flex absolute w-full h-auto top-full left-0 right-0 p-10 leading-8 bg-light-bg z-50;
    box-shadow: rgb(0 0 0 / 20%) 0 30px 20px -30px;
  }

  .v-enter-active,
  .v-leave-active {
    transition: all 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>
