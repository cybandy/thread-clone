<script setup lang='ts'>
const props = defineProps({
  thread_text: {
    type: String,
    default: ''
  },
  username: {
    type: String,
    default: 'boatinquami'
  },
  dp: String,
  isAddThread: Boolean,
  ind: {
    type: Number,
    required: true
  },
  imgFile: File

})

const emits = defineEmits(['update:thread_text', 'update:isAddThread', 'addNewThread', 'deleteThread', 'update:imgFile'])


const thread_text = computed({
  get: () => props.thread_text,
  set: (val) => emits('update:thread_text', val)
})
const isAddThread = computed({
  get: () => props.isAddThread,
  set: (val) => emits('update:isAddThread', val)
})

function addNewThreadFunc() {
  console.log('add new thread from child component');


  emits('addNewThread', props.ind)
  isAddThread.value = true
}

function deleteThreadFunc() {
  emits('deleteThread')
}
// disable add thread button if no img is selected or if 
// there is no text
const disable_add_thread = computed(() => thread_text.value.length == 0 && typeof imgFile.value === 'undefined')

/**
 * Handling image file upload
 */
const imgFile = computed({
  set: (val) => emits('update:imgFile', val),
  get: () => props.imgFile
})
const tempImgUrl = ref('')
// vueUse useFileDialog
const { files, open: hookImageFile, reset, onChange } = useFileDialog({ accept: 'image/*' })

onChange((files) => {
  if (files) {
    imgFile.value = files[0]
    tempImgUrl.value = URL.createObjectURL(files[0])
    console.log(files);
    console.log(imgFile.value)
  }
})
// show img element
const showImageMedia = computed(() => tempImgUrl.value.length > 0)
// remove image
function removeImage() {
  tempImgUrl.value = ''
  imgFile.value = undefined
}
</script>

<template>
  <div class="h-full grid grid-cols-[48px_minmax(0,1fr)]"
    :class="[isAddThread ? 'grid-rows-[21px_19px_auto]' : 'grid-rows-[21px_19px_auto_31px]']">
    <!-- profile picture -->
    <div class="row-start-1 row-span-2 col-start-1 mt-2">
      <UAvatar :src="dp || '/dp_placeholder.jpg'" :alt="username" />
    </div>
    <!-- username -->
    <div class="col-start-2 row-start-1 flex items-center">
      <span class="flex-grow font-semibold text-wrap overflow-visible">
        {{ username }}
      </span>
      <UIcon v-if="ind !== 0" name="i-heroicons-x-mark-20-solid" class="w-4 h-4 text-gray-400 cursor-pointer"
        @click="() => deleteThreadFunc()" />
    </div>
    <!-- text & icons-->
    <div class="col-start-2 row-start-2 row-span-2">
      <UTextarea v-model="thread_text" variant="none" :rows="1"
        :placeholder="ind > 0 ? 'Say more...' : 'Start a thread...'" autoresize :ui="{ padding: { sm: 'sm:px-0' } }" />

      <!-- media -->
      <div v-if="showImageMedia" class="relative">
        <UButton @click="removeImage" class="absolute top-2.5 right-2.5" icon="i-heroicons-x-mark-20-solid" color="gray"
          :ui="{ rounded: 'rounded-full', color: { gray: { solid: 'dark:bg-gray-500/50 backdrop-blur-xl dark:ring-gray-500' } } }" />

        <UButton class="absolute bottom-2.5 left-2.5" label="Alt" color="gray"
          :ui="{ rounded: 'rounded-full', color: { gray: { solid: 'dark:bg-gray-500/50 backdrop-blur-xl dark:ring-gray-500' } } }" />

        <NuxtImg :src="tempImgUrl"
          class="max-w-full max-h-full rounded-lg box-border pointer-events-none outline-offset-1 outline-1 border-0 aspect-postImg object-cover" />
      </div>
      <div />

      <div class="mt-2 ml-2 w-full flex items-center text-gray-500">
        <button class="flex items-center justify-center w-9 h-9" @click="() => hookImageFile()">
          <UIcon name="ion:md-images" class="w-5 h-5" />
        </button>
        <button class="flex items-center justify-center w-9 h-9">
          <UIcon name="hugeicons:gif-01" class="w-5 h-5" />
        </button>
        <button class="flex items-center justify-center w-9 h-9">
          <UIcon name="ph:hash" class="w-5 h-5" />
        </button>
        <button class="flex items-center justify-center w-9 h-9">
          <UIcon name="heroicons:bars-3-bottom-left" class="w-5 h-5 scale-x-100 -scale-y-100" />
        </button>
      </div>
    </div>


    <!-- vertical line -->
    <div class="flex h-full col-start-1 row-start-3 relative pt-2.5 pr-3">
      <div class="absolute left-[17px] h-[calc(100%-10px)]">
        <div class="w-0.5 absolute h-full rounded-sm bg-gray-600" />
      </div>
    </div>

    <!-- add thread -->
    <div v-if="!isAddThread" class="pt-2.5 col-start-1 row-start-4 col-span-full flex items-center">
      <div class="w-12 pl-2.5">
        <UAvatar :src="dp || '/dp_placeholder.jpg'" :alt="username" size="3xs" />
      </div>

      <div class="flex items-stretch">
        <button :disabled="disable_add_thread" :class="disable_add_thread ? 'cursor-not-allowed' : 'cursor-pointer'"
          class="text-gray-500" @click="addNewThreadFunc">Add to
          thread</button>
      </div>
    </div>
  </div>
</template>
