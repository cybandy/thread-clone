<script lang="ts" setup>
useHead({
  title: 'Threads Clone'
})
// let posts = ref([])
// let isPosts = ref(true)
// let isLoading = ref(false)

// console.log(useNuxtApp().$notMobile.value);

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
      <div class="grid">
        <div class="w-full border-b-[0.5px] border-gray-700/80">
          <Posts />
        </div>
        <div class="w-full border-b-[0.5px] border-gray-700/80">
          <Posts />
        </div>
        <div class="w-full border-b-[0.5px] border-gray-700/80">
          <Posts />
        </div>
        <div class="w-full border-b-[0.5px] border-gray-700/80">
          <Posts />
        </div>
      </div>

    </div>
  </TemplateSectionContent>
</template>

<style scoped></style>
