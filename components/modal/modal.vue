<script setup lang='ts'>

const props = defineProps({
  modelValue: Boolean
})
const emits = defineEmits(['update:modelValue'])

const modelValue = computed({
  get: () => props.modelValue,
  set: (val) => emits('update:modelValue', val)
})

/**
 * Mobile view
 */
const notMobile = useNuxtApp().$notMobile
</script>

<template>
  <UModal v-model="modelValue" :fullscreen="!notMobile"
    :ui="{ width: 'w-full md:w-[620px] sm:max-w-[926px]', rounded: '', background: notMobile ? 'dark:bg-transparent' : 'dark:bg-gray-900' }">
    <div class="flex flex-col items-center scale-95 duration-200"
      :class="!notMobile ? 'h-full max-h-screen overflow-auto' : 'justify-center'">
      <slot name="header">
        <div class="py-4 grid grid-cols-7" :class="!notMobile && 'w-full px-6'">
          <div v-if="!notMobile">
            <span class="font-semibold cursor-pointer" @click="() => modelValue = false">
              <slot name="cancel">
                Cancel
              </slot>
            </span>

          </div>
          <div class="col-span-5 col-start-2">
            <span class="relative text-center text-wrap font-semibold text-base block min-w-0 max-w-full">
              <slot name="title">
                New thread
              </slot>

            </span>
          </div>
        </div>
      </slot>
      <div :class="!notMobile ? 'flex-grow' : 'mb-4 pb-6 px-6'" class="mt-2 relative w-full">
        <UCard :ui="{
          rounded: 'rounded-2xl',
          footer: {
            base: notMobile ? 'flex items-center justify-between w-full' : 'absolute bottom-0 right-0 left-0 w-full flex items-center justify-between',
            padding: 'sm:py-6',
            background: notMobile ? '' : 'dark:bg-gray-900'
          },
          base: notMobile ? 'w-full' : 'w-full h-full relative',
          body: {
            base: notMobile ? 'w-full' : 'w-full max-h-full',
            padding: 'sm:py-6'
          }
        }">

          <slot />

          <template #footer>

            <slot name="footer" />
          </template>
        </UCard>
      </div>
    </div>
  </UModal>
</template>
