<script setup lang='ts'>
const showBackButton = ref(false)
</script>

<template>
  <UContainer class="h-[60px] grid grid-cols-4 w-full sticky top-0 bg-gray-900/85 backdrop:blur-xl z-10">
    <div class="flex items-center">
      <ULink v-show="showBackButton" to="/">
        <UIcon name="i-heroicons-arrow-left" class="w-5 h-5" aria-label="back" />
      </ULink>
    </div>
    <div class="w-full col-span-2 flex items-center justify-center">
      <ULink to="/">
        <UIcon name="ph:threads-logo" class="w-8 h-8" aria-label="Threads" />
      </ULink>
    </div>
    <div class="w-full flex items-center justify-end">
      <DropdownUserNavMenu />
    </div>
  </UContainer>
</template>
