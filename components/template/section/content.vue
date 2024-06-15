<script setup lang='ts'>
// const { width } = useWindowSize()
const notMobile = useNuxtApp().$notMobile
</script>

<template>
  <div>
    <div
      class="w-full md:min-w-[590px] md:max-w-[640px] lg:min-w-[640px] px-2 sm:px-4 md:px-0 mx-auto h-full flex flex-col gap-0 relative">
      <div v-if="notMobile"
        class="hidden md:flex items-center justify-center w-full min-h-[60px] h-fit sticky top-0 z-[1] bg-gray-950">
        <div class="absolute w-full h-9 top-12 overflow-clip">
          <div class="w-full h-full z-[1] flex justify-between overflow-hidden">
            <div class="w-9 h-9 bg-gray-950 absolute -left-[35px] top-3" />
            <div class="w-9 h-9 bg-gray-950 absolute -right-[35px] top-3" />
          </div>
          <div class="w-full h-12 absolute top-3 rounded-t-xl border-[0.5px] border-gray-700/50" />
        </div>

        <div>
          <slot name="header" />
        </div>
      </div>
      <div v-else>
        <slot name="header" />
      </div>
      <!-- page content -->
      <div id="content_container"
        class="relative w-full h-full flex-grow overflow-x-hidden overflow-y-auto border-[0.5px] border-gray-700/50 rounded-t-xl box-border bg-gray-900 pt-2 overscroll-y-auto  will-change-[transform,scroll-position] z-0">

        <slot />
      </div>
    </div>
  </div>
</template>
