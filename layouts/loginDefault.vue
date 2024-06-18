<script lang="ts" setup>
import { ModalNewPostDesktop } from "#components"
const { isNewPost } = storeToRefs(usePostStore())

const modal = useModal()
function openNewPostModal() {
  // modal.open(ModalNewPostDesktop, {

  // })
  isNewPost.value = true
}

const notMobile = useNuxtApp().$notMobile



</script>

<template>
  <div>
    <!-- tablet,desktop -->
    <div v-if="notMobile" class="">
      <!-- sidebar -->
      <div class="fixed top-0 min-h-[480px] h-screen w-[76px] backdrop-blur-lg bg-gray-900/10 z-[1]">
        <TemplateSidebar />
      </div>

      <!-- content -->
      <div class="px-5 w-full">
        <div class="flex flex-col items-center w-full min-h-screen h-screen">
          <slot />
        </div>
      </div>

      <!-- add posts fixed button -->
      <button @click="openNewPostModal"
        class="w-[82px] h-[68px] fixed flex items-center justify-center m-0 p-0 bottom-6 right-6 rounded-2xl border-[0.5px] border-gray-700 box-border bg-gray-900">
        <UIcon name="i-heroicons-plus-20-solid" class="w-6 h-6" />
      </button>
    </div>

    <!-- mobile -->
    <div v-else class="h-screen min-h-screen">

      <TemplateHeaderLoggedIn />

      <div class="h-full w-full">
        <slot />
      </div>

      <TemplateFooterBottomBar />
    </div>
    <ModalNewPostDesktop />
  </div>
</template>

<style scoped>
#content_container {
  perspective: 1px;
  perspective-origin: right top;
  transform-style: preserve-3d;
  scrollbar-width: none;

}
</style>
