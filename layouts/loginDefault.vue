<script lang="ts" setup>
const { width } = useWindowSize()

const selMenu = ['For you']
</script>

<template>
  <div class=" px-4">
    <!-- tablet,desktop -->
    <div v-if="width >= 768"
      class="w-screen h-screen grid grid-cols-[74px_minmax(0,1fr)] will-change-auto no-scrollbar">
      <!-- sidebar -->
      <div class="w-full">
        <TemplateSidebar />
      </div>

      <div class="w-[640px] mx-auto min-h-full flex flex-col gap-2 relative">
        <div class="flex items-center justify-center w-full h-fit">
          <SelectMenu />
        </div>
        <!-- page content -->
        <div
          class="w-full h-full flex-grow overflow-x-hidden overflow-y-auto border-[0.5px] border-gray-700 box-border bg-gray-900 rounded-t-xl px-5 pt-2 overscroll-auto  will-change-[transform,scroll-position] no-scrollbar">
          <slot />
        </div>
      </div>

    </div>

    <!-- mobile -->
    <div v-else class="will-change-auto">
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
