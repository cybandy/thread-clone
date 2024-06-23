<script setup lang='ts'>
useHead({
  title: 'Search'
})

const q = ref('')
</script>

<template>
  <TemplateSectionContent>
    <template #header>
      <div class="hidden md:block">
        <span class="relative text-center text-wrap font-semibold text-base block min-w-0 max-w-full">
          Search
        </span>
      </div>
      <!-- <div class="md:hidden">
          <SelectMenuMobile />
        </div> -->
    </template>
    <div class="w-full h-full">
      <div class="px-6 pt-[18px] pb-1">
        <UInput v-model="q" placeholder="Search" icon="ph:magnifying-glass" class="" variant="none"
          :ui="{ rounded: 'rounded-2xl ring-1 ring-inset ring-gray-950', padding: { sm: 'px-4 py-3' }, base: 'dark:bg-gray-950' }" />
      </div>
    </div>
  </TemplateSectionContent>

</template>
