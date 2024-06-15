<script lang="ts" setup>
const { isNewPost } = storeToRefs(usePostStore())

const viewItems = [
  {
    label: 'Anyone',
    value: 'any',
    msg: 'Anyone can reply & quote'
  },
  {
    label: 'Profiles you follow',
    value: 'following',
    msg: 'Profiles you follow can reply & quote'
  },
  {
    label: 'Mentioned only',
    value: 'tagged',
    msg: 'Profiles you mention can reply & quote'
  },
]
const selectedViewers = ref(0)
const thread_text = ref('')
</script>

<template>
  <UModal v-model="isNewPost"
    :ui="{ width: 'w-[620px] sm:max-w-[926px]', rounded: '', background: 'dark:bg-transparent' }">
    <div class="flex flex-col items-center justify-center scale-95 duration-200">
      <div class="py-4 grid grid-cols-7">
        <div class="col-span-5 col-start-2">
          <span class="relative text-center text-wrap font-semibold text-base block min-w-0 max-w-full">
            New thread
          </span>
        </div>
      </div>
      <div class="mt-2 mb-4 pb-6 px-6 relative w-full">
        <UCard :ui="{
          rounded: 'rounded-2xl',
          footer: {
            base: 'flex items-center justify-between w-full',
            padding: 'sm:py-6'
          },
          base: 'w-full',
          body: {
            base: 'w-full',
            padding: 'sm:py-6'
          }
        }">

          <div class="grid grid-cols-[48px_minmax(0,1fr)] grid-rows-[21px_minmax(19px,1fr)_42px_1fr]">
            <!-- profile picture -->
            <div class="row-start-1 row-end-2 col-start-1 mt-2">
              <UAvatar src="/dp_placeholder.jpg" alt="username" />
            </div>
            <!-- username -->
            <div class="col-start-2 row-start-1 flex items-center">
              <span class="font-semibold text-wrap overflow-visible">
                boatinquami
              </span>
            </div>
            <!-- text & icons-->
            <div class="col-start-2 row-start-2">
              <UTextarea v-model="thread_text" variant="none" :rows="1" placeholder="Start a thread..." autoresize
                :ui="{ padding: { sm: 'sm:px-0' } }" />

              <div class="mt-2 ml-2 w-full flex items-center">
                <button class="flex items-center justify-center w-9 h-9">

                </button>
              </div>
            </div>

            <!-- add thread -->
          </div>

          <template #footer>
            <UDropdown :items="(viewItems as any)" :popper="{ placement: 'bottom' }">
              <span class="block cursor-pointer text-gray-500 relative">
                {{ viewItems[selectedViewers || 0].msg }}
              </span>
            </UDropdown>

            <UButton :disabled="thread_text.length == 0" label="Post" variant="outline" color="gray" :ui="{
              font: 'font-semibold',
              padding: {
                sm: 'px-4',
              },
              rounded: 'rounded-[10px]'
            }" />
          </template>
        </UCard>
      </div>
    </div>
  </UModal>
</template>
