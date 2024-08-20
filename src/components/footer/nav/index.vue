<template>
  <div class="bg-light-bg py-8 mt-4 lg:my-0">
    <CommonContainer>
      <div class="grid grid-cols-2 lg:grid-cols-4 mx-4 lg:mx-0">
        <div v-for="item of footerNav" :key="item.title" class="mb-4">
          <h6 class="font-bold mb-4">{{ item.title }}</h6>
          <div class="flex flex-col text-sm text-light-text gap-2">
            <NuxtLink
              class="hover:text-primary"
              v-for="children of item.children"
              :key="children.name"
              :to="children.path"
            >
              {{ children.name }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </CommonContainer>
  </div>
</template>

<script setup lang="ts">
  const footerNav = [
    {
      title: 'Help & Contact',
      children: [
        {
          name: 'Your Account',
          path: '/'
        },
        {
          name: 'Your Orders',
          path: '/'
        },
        {
          name: 'Shopping Rates',
          path: '/'
        },
        {
          name: 'Returns',
          path: '/'
        },
        {
          name: 'Assistant',
          path: '/'
        },
        {
          name: 'Help',
          path: '/'
        },
        {
          name: 'Contact us',
          path: '/'
        }
      ]
    },
    {
      title: 'Product Categories',
      children: [
        {
          name: 'Beauty',
          path: '/'
        },
        {
          name: 'Electronic',
          path: '/'
        },
        {
          name: "Women's Fashion",
          path: '/'
        },
        {
          name: "Men's Fashion",
          path: '/'
        },
        {
          name: "Girl's Fashion",
          path: '/'
        },
        {
          name: "Boy's Fashion",
          path: '/'
        },
        {
          name: 'Health & Household',
          path: '/'
        },
        {
          name: 'Home & Kitchen',
          path: '/'
        },
        {
          name: 'Pet Supplles',
          path: '/'
        },
        {
          name: 'Sports',
          path: '/'
        }
      ]
    },
    {
      title: 'Payment Info',
      children: [
        {
          name: 'Bussiness Card',
          path: '/'
        },
        {
          name: 'Shop with Points',
          path: '/'
        },
        {
          name: 'Reload Your Balance',
          path: '/'
        },
        {
          name: 'Paypal',
          path: '/'
        }
      ]
    },
    {
      title: 'About Us',
      children: [
        {
          name: 'Company Info',
          path: '/'
        },
        {
          name: 'News',
          path: '/'
        },
        {
          name: 'Investors',
          path: '/'
        },
        {
          name: 'Careers',
          path: '/'
        },
        {
          name: 'Policies',
          path: '/'
        },
        {
          name: 'Customer reviews',
          path: '/'
        }
      ]
    }
  ];
</script>

<style scoped></style>
