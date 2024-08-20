<template>
  <div class="bg-black py-8 px-6 mt-12 hidden lg:block">
    <CommonContainer>
      <div class="flex justify-between items-center">
        <div class="text-white">
          <div class="text-xl font-body">Join Our Newsletter</div>
          <div>
            <span>Get E-mail updates about our latest shop and </span>
            <span class="text-primary">special offers</span>
          </div>
        </div>
        <div class="flex-1 relative mx-8">
          <Icon name="ri:mail-line" class="absolute m-3"></Icon>
          <input class="w-full h-10 pl-10 pr-24 outline-none rounded-lg" type="text" placeholder="Your email address" />
          <button class="primary-button absolute right-0 bg-primary h-10 rounded-r px-4 text-white">Sign up</button>
        </div>
      </div>
    </CommonContainer>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
