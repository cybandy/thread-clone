<script setup lang='ts'>
const postStore = usePostStore()
const { feedOptions, selectedFeed: selected } = storeToRefs(postStore)

const options = ref(feedOptions.value.slice(0, 2))

onMounted(() => {
  selected.value = options.value[0]
})
</script>

<template>
  <div class="grid grid-cols-2">
    <div class="border-b py-4" :class="[selected.id == options[0].id ? 'border-b-white' : 'border-b-gray-700/85']">
      <ULink to="/" class="flex items-center justify-center relative">
        <span class="text-wrap overflow-visible break-words font-semibold block cursor-pointer">{{ options[0].name
          }}</span>
      </ULink>
    </div>
    <div class="border-b py-4" :class="[selected.id == options[1].id ? 'border-b-white' : 'border-b-gray-700/85']">
      <ULink to="/following" class="flex items-center justify-center relative">
        <span class="text-wrap overflow-visible break-words font-semibold block cursor-pointer">{{ options[1].name
          }}</span>
      </ULink>
    </div>
  </div>
</template>
