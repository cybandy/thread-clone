<script setup lang='ts'>


const userStore = useUserStore()
const { user } = storeToRefs(userStore)
useHead({
  title: user.value.name
})
</script>

<template>
  <NuxtLayout name="profile">
    <div class="w-full flex items-center justify-center text-gray-500">
      No replies yet
    </div>
  </NuxtLayout>
</template>
