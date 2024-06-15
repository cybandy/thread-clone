<script lang="ts" setup>
useHead({
  title: 'Threads Clone'
})
// let posts = ref([])
// let isPosts = ref(true)
// let isLoading = ref(false)
</script>

<template>
  <TemplateSectionContent>
    <template #header>
      <div class="hidden md:block">
        <SelectMenu />
      </div>
      <div class="md:hidden">
        <SelectMenuMobile />
      </div>
    </template>
    <div id="IndexPage" class="w-full">
      <div id="Posts" class="px-4">
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
      </div>

    </div>
  </TemplateSectionContent>
</template>

<style scoped></style>
