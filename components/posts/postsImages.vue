<script setup lang='ts'>
import type { ThreadFormImage, PostImage } from '#cy/types'

const props = defineProps({
  images: {
    type: Array<ThreadFormImage | PostImage>,
    required: true
  },
  isForm: Boolean
})

const emits = defineEmits(['removeImage', 'addAlt', 'update:images'])

const images = computed({
  set: (val) => emits('update:images', val),
  get: () => props.images
})


</script>

<template>

  <div>
    <UCarousel v-slot="{ item, index: ind }" v-model:items="images"
      :ui="{ container: 'gap-1.5', item: images.length == 1 && 'basis-full' || 'basis-full md:basis-1/2 snap-none' }">
      <div class="relative w-full">

        <UButton class="absolute top-2.5 right-2.5" icon="i-heroicons-x-mark-20-solid" color="gray"
          :ui="{ rounded: 'rounded-full', color: { gray: { solid: 'dark:bg-gray-500/50 backdrop-blur-xl dark:ring-gray-500' } } }"
          @click="() => emits('removeImage', ind)" />

        <UButton class="absolute bottom-2.5 left-2.5" label="Alt" color="gray"
          :ui="{ rounded: 'rounded-full', color: { gray: { solid: 'dark:bg-gray-500/50 backdrop-blur-xl dark:ring-gray-500' } } }"
          @click="() => emits('addAlt', ind)" />

        <NuxtImg :src="item.src" :alt="item.alt"
          class="w-full h-full rounded-lg box-border pointer-events-none outline-offset-1 outline-1 border-0 aspect-postImg object-cover"
          draggable="false" />

      </div>
    </UCarousel>
  </div>
  <!-- <div class="overflow-x-visible">
    <div class="w-full relative">
      <div class="overflow-hidden w-full">
        <div id="imgCont" class="flex gap-1.5  overflow-x-auto cursor-grab translate-x-0 w-fit">
          <div v-for="({ src, alt }, ind) of images" :key="ind" class="relative">

            <UButton class="absolute top-2.5 right-2.5" icon="i-heroicons-x-mark-20-solid" color="gray"
              :ui="{ rounded: 'rounded-full', color: { gray: { solid: 'dark:bg-gray-500/50 backdrop-blur-xl dark:ring-gray-500' } } }"
              @click="() => emits('removeImage', ind)" />

            <UButton class="absolute bottom-2.5 left-2.5" label="Alt" color="gray"
              :ui="{ rounded: 'rounded-full', color: { gray: { solid: 'dark:bg-gray-500/50 backdrop-blur-xl dark:ring-gray-500' } } }"
              @click="() => emits('addAlt', ind)" />

            <NuxtImg :src="src" :alt="alt"
              class="max-w-full max-h-full rounded-lg box-border pointer-events-none outline-offset-1 outline-1 border-0 aspect-postImg object-cover" />

          </div>

        </div>
      </div>
    </div>
  </div> -->

</template>


<style scoped>
/*#imgCont {
  scrollbar-width: none;
}*/

/* img {
  overflow-clip-margin: 'content-box'
} */
</style>
