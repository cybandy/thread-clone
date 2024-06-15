<script setup lang="ts">
const postStore = usePostStore()
const { feedOptions: options, selectedFeed: selected } = storeToRefs(postStore)

onMounted(() => {
  selected.value = options.value[0]
})


// const options = [
//   {
//     id: 1, name: 'For you', click: (data: any) => {
//       console.log(data.name);

//     }
//   },
//   {
//     id: 2, name: 'Following', click: (data: any) => {
//       console.log(data.name);

//     }
//   },
//   {
//     id: 3, name: 'Liked', click: (data: any) => {
//       console.log(data.name);

//     }
//   },
//   {
//     id: 4, name: 'Saved', click: (data: any) => {
//       console.log(data.name);

//     }
//   },

// ]

// const selected = ref(options[1])
</script>

<template>
  <USelectMenu v-model="selected" :options="options" option-attribute="name" color="gray" variant="none"
    :ui-menu="{ width: 'w-60', option: { padding: 'px-3 py-3' } }" :popper="{ placement: 'bottom-start' }">
    <template #option="{ option: item }">
      <button class="w-full h-full" @click="() => postStore.feedChangedAction(item)">{{ item.name }}</button>
    </template>
  </USelectMenu>
</template>
