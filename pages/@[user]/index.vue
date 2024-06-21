<script setup lang='ts'>


const userStore = useUserStore()
const { user } = storeToRefs(userStore)
useHead({
  title: user.value?.name
})
const postStore = usePostStore()
const { posts } = storeToRefs(postStore)
</script>

<template>
  <NuxtLayout name="profile">
    <template v-if="posts.length === 0">
      <div class="w-full flex items-center justify-center text-gray-500">
        No threads yet
      </div>
    </template>

    <template v-else>

    </template>

  </NuxtLayout>
</template>
