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

watch(isNewPost, () => {
  if (!isNewPost.value) {
    threads.value = [
      {
        thread_text: '',
        isAddThread: false,
        ind: threads.value.length,
        imgFiles: undefined
      }
    ]
  }
})

/**
 * Mobile view
 */
const notMobile = useNuxtApp().$notMobile

const userStore = useUserStore()
const { user } = storeToRefs(userStore)
</script>

<template>
  <Modal v-model="isNewPost">
    <template #title>
      Cybandy
    </template>

    <div class="space-y-1.5">
      <FormsNewThreadsDesktop v-for="(data, ind) of threads" :key="ind" v-model:thread_text="data.thread_text"
        :dp="user.avatar_url || '/dp_placeholder.jpg'" :username="user.username || ''"
        v-model:is-add-thread="data.isAddThread" v-model:img-files="data.imgFiles" :ind="ind"
        @add-new-thread="addThreadFunc" @delete-thread="() => deleteThreadFunc(ind)" />
    </div>

    <template #footer>

      <USelectMenu v-model="selectedViewers" variant="none" color="gray" :options="viewItems" option-attribute="label"
        :ui="{ background: 'dark:bg-gray-900' }">
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


  </Modal>
</template>
