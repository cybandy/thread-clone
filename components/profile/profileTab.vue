<script setup lang='ts'>
const userStore = useUserStore()
const { user } = storeToRefs(userStore)
const links = [
  {
    label: 'Threads',
    to: '/@' + user.value.username
  },
  {
    label: 'Replies',
    to: '/@' + user.value.username + '/replies'
  },
  {
    label: 'Reposts',
    to: '/@' + user.value.username + '/reposts'
  },
]
</script>

<template>

  <UHorizontalNavigation :links="links"
    :ui="{ base: 'font-semibold justify-center', active: 'dark:after:bg-white', container: 'grid grid-cols-3 w-full', inner: 'block', inactive: 'dark:after:bg-gray-700', after: 'after:inset-x-0' }" />


</template>
