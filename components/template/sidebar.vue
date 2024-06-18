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
  <div class="flex flex-col items-center h-full">
    <div class="py-4">
      <ULink to="/">
        <UIcon name="ph:threads-logo" class="w-8 h-8" />
      </ULink>
    </div>
    <div class="flex-grow flex flex-col items-center justify-center">
      <UVerticalNavigation :links="(links as any)"
        :ui="{ base: 'gap-0', padding: 'p-[18px]', icon: { base: 'w-6 h-6' }, active: 'dark:before:bg-transparent dark:hover:before:bg-gray-800/50' }">
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
