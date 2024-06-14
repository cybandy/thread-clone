<script lang="ts" setup>
const { width } = useWindowSize()

const selMenu = ['For you']
</script>

<template>
  <div>
    <!-- tablet,desktop -->
    <div v-if="width >= 768" class="">
      <!-- sidebar -->
      <div class="fixed top-0 min-h-[480px] h-screen w-[76px] backdrop-blur-lg bg-gray-900/10">
        <TemplateSidebar />
      </div>

      <!-- posts -->
      <div class="px-5 w-full">
        <div class="flex flex-col items-center w-full min-h-screen">
          <div class="w-[640px] mx-auto h-full flex flex-col gap-2 relative">
            <div class="flex items-center justify-center w-full h-fit">
              <SelectMenu />
            </div>
            <!-- page content -->
            <div
              class="w-full h-full flex-grow overflow-x-hidden overflow-y-auto border-[0.5px] border-gray-700 box-border bg-gray-900 rounded-t-xl px-5 pt-2 overscroll-auto  will-change-[transform,scroll-position]">
              <slot />
            </div>
          </div>
        </div>
      </div>

      <!-- add posts fixed button -->
      <button
        class="w-[82px] h-[68px] fixed flex items-center justify-center m-0 p-0 bottom-6 right-6 rounded-2xl border-[0.5px] border-gray-700 box-border bg-gray-900">
        <UIcon name="i-heroicons-plus-20-solid" class="w-6 h-6" />
      </button>
    </div>

    <!-- mobile -->
    <div v-else class="will-change-auto">
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
