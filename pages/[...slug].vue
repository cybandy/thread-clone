<script lang="ts" setup>
import type { ThreadFormProp } from '~/types';

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
const selectedViewers = ref(viewItems[0])
// const thread_text = ref('')

const threads = ref([
  {
    thread_text: '',
    ind: 0,
    isAddThread: false,
    imgFiles: undefined
  }

] as ThreadFormProp[])

function addThreadFunc(data: any) {
  console.log('add new thread from parent component', data)
  threads.value.push({
    thread_text: '',
    isAddThread: false,
    ind: threads.value.length,
    imgFiles: undefined
  })
}

function deleteThreadFunc(ind: number) {
  threads.value[0].isAddThread = false
  threads.value.splice(ind, 1)
}

const disablePostButton = computed(() => threads.value.some((x) => typeof x.thread_text === 'string' && x.thread_text.length === 0))

// submit data
async function submit() {
  console.log(threads.value)
  console.log(selectedViewers.value);

}

async function inUpdateProfile() {
  const d = await $fetch('/api/profile', {
    // query: {
    //   where: {
    //     id: useSupabaseUser().value?.id
    //   }
    // },
    method: 'patch',
    headers: useRequestHeaders(['cookie'])
  })
  console.log(d)
}

// console.log(useSupabaseUser().value);
await $fetch
</script>

<template>
  <div>
    <TemplateSectionContent>
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

            <div class="space-y-1.5">
              <FormsNewThreadsDesktop v-for="(data, ind) of threads" :key="ind" v-model:thread_text="data.thread_text"
                v-model:is-add-thread="data.isAddThread" v-model:img-files="data.imgFiles" :ind="ind"
                @add-new-thread="addThreadFunc" @delete-thread="() => deleteThreadFunc(ind)" />
            </div>

            <template #footer>

              <USelectMenu v-model="selectedViewers" variant="none" color="gray" :options="viewItems"
                option-attribute="label" :ui="{ background: 'dark:bg-gray-900' }">
                <template #default>
                  <span class="text-wrap text-gray-500 cursor-pointer">
                    {{ selectedViewers.msg }}
                  </span>
                </template>


              </USelectMenu>

              <UButton :disabled="disablePostButton" label="Post" variant="outline" color="gray" :ui="{
                font: 'font-semibold',
                padding: {
                  sm: 'px-4',
                },
                rounded: 'rounded-[10px]'
              }" @click="submit" />
            </template>
          </UCard>
        </div>
      </div>

      <div>
        <UButton @click="inUpdateProfile" color='black' label="fetch" />
      </div>
    </TemplateSectionContent>
  </div>

</template>

<style scoped></style>
