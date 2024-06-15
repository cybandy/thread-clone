<script setup lang='ts'>
const { isSearchOverlay } = storeToRefs(useUserStore())

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
]
const { width } = useWindowSize()
const { x, y } = useWindowScroll()
</script>

<template>
  <UContainer
    class="flex flex-col md:grid md:justify-center grid-cols-[1fr_186px_1fr] border-1 md:border-0 border-b-gray-700 backdrop-blur-xl bg-gray-950/90 py-3 gap-3">
    <Transition name="fade">
      <div v-show="y <= 50 || width >= 768" class="flex items-center justify-center md:justify-start w-full md:p-0">
        <ULink class="w-fit h-fit" to="/">
          <UIcon name="ph:threads-logo" class="w-8 h-8" />
        </ULink>
      </div>
    </Transition>

    <div class="hidden md:block">
      <UHorizontalNavigation :links="(links as any)"
        :ui="{ base: 'px-8 py-5 gap-0', icon: { base: 'w-6 h-6' }, after: '' }">
        <template #icon="{ link, isActive }">
          <UIcon class="w-6 h-6" :name="!isActive ? link.icon : link.activeIcon" />
        </template>
      </UHorizontalNavigation>
    </div>

    <div class="flex-grow w-full flex gap-3 items-center md:justify-end">
      <div class="flex-grow md:flex-grow-0">
        <ClientOnly>
          <UButton color="black" :variant="width < 768 ? 'outline' : 'solid'" label="Log in" to="/login"
            :block="width < 768" :ui="{ variant: { outline: 'ring-current' } }" />
          <template #fallback>
            <span class="w-full h-full inline-block" />
          </template>
        </ClientOnly>
      </div>
      <div class="flex-grow md:hidden">
        <UButton label="Get app" to="/get-app" color="black" variant="solid" block />

      </div>
    </div>
  </UContainer>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
