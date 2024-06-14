<script setup lang='ts'>
const userStore = useUserStore()
const links = [
  {
    icon: 'ph:house',
    to: '/',
    // label:'Home'
  },
  {
    icon: 'ph:magnifying-glass-bold',
    click: () => {
      console.log('search clicked');

    },
  },
  {
    icon: 'ph:plus-bold',
  },
  {
    icon: 'ph:heart'
  },
  {
    icon: 'i-heroicons-user'
  }
]
</script>

<template>
  <div id="bottomNav" class="fixed z-10 bottom-0 flex w-full h-[70px] border-t-gray-700 bg-gray-950 mx-auto">

    <UHorizontalNavigation :links="(links as any)"
      :ui="{ container: 'min-w-full', inner: 'min-w-0 flex-grow', base: 'justify-center', after: '', icon: { base: 'w-[35px] h-[35px]' } }" />
  </div>
</template>
