<script lang="ts" setup>
const links = [
  {
    icon: 'ph:house',
    activeIcon: 'ph:house-fill',
    to: '/'
  },
  {
    icon: 'ph:magnifying-glass',
    activeIcon: 'ph:magnifying-glass-bold',
    click: () => {
      alert('searching...')
    },
    to: '/search'
  },
  {
    icon: 'i-heroicons-heart',
    activeIcon: 'i-heroicons-heart-solid',
    click: () => {
    },
    to: '/activities'
  },
  {
    icon: 'i-heroicons-user',
    activeIcon: 'i-heroicons-user-solid',
    click: () => {
    },
    to: '/user'
  },
]
</script>

<template>
  <div
    class="min-h-[480px] overflow-y-visible h-screen w-full backdrop-blur-lg flex flex-col items-center bg-gray-900/50">
    <div class="py-4">
      <ULink to="/">
        <UIcon name="ph:threads-logo" class="w-8 h-8" />
      </ULink>
    </div>
    <div class="flex-grow flex flex-col items-center justify-center">
      <UVerticalNavigation :links="(links as any)"
        :ui="{ base: 'gap-0', padding: 'px-8 py-5', icon: { base: 'w-6 h-6' }, after: '' }">
        <template #icon="{ link, isActive }">
          <UIcon class="w-6 h-6 z-[2]" :name="!isActive ? link.icon : link.activeIcon" />
        </template>
      </UVerticalNavigation>
    </div>

    <div class="mb-[22px] h-fit">
      <DropdownUserNavMenu icon="i-heroicons-bars-3-bottom-left" />
    </div>
  </div>
</template>

<style scoped></style>
