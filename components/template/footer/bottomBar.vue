<script setup lang='ts'>
const userStore = useUserStore()
const { user } = storeToRefs(userStore)
const links = computed(() => [
  {
    icon: 'ph:house',
    activeIcon: 'ph:house-fill',
    to: '/',
    // label:'Home'
  },
  {
    icon: 'ph:magnifying-glass',
    activeIcon: 'ph:magnifying-glass-bold',
    to: '/search',

  },
  {
    icon: 'ph:plus',
    activeIcon: 'ph:plus-bold',
    click: () => {
      const { isNewPost } = storeToRefs(usePostStore())
      isNewPost.value = true
    }
  },
  {
    icon: 'ph:heart',
    activeIcon: 'ph:heart-fill',
    to: '/activities'
  },
  {
    icon: 'i-heroicons-user',
    activeIcon: 'i-heroicons-user-20-solid',
    to: `/@${user.value ? user.value.username : ''}`
  }
])
</script>

<template>
  <div id="bottomNav" class="fixed z-10 bottom-0 flex w-full h-[70px] border-t-gray-700 bg-gray-950 mx-auto">

    <UHorizontalNavigation :links="(links as any)"
      :ui="{ container: 'min-w-full', inner: 'min-w-0 flex-grow', base: 'justify-center', after: '', icon: { base: 'w-[26px] h-[26px]' } }">

      <template #icon="{ link, isActive }">
        <UIcon :name="isActive ? link.activeIcon : link.icon" class="w-6 h-6" />
      </template>

    </UHorizontalNavigation>
  </div>
</template>
