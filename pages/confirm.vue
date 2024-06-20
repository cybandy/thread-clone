<script setup lang="ts">
const user = useSupabaseUser()
const userStore = useUserStore()

defineRouteRules({
  ssr: false
})

// function to upsert user's profile
async function inUpdateProfile() {
  const d = await $fetch('/api/profile', {
    method: 'patch',
    headers: useRequestHeaders(['cookie'])
  })
}

watch(user, async () => {
  if (user.value) {
    userStore.isLoggedIn = true

    await inUpdateProfile()
    // userStore.myProfile()

    // Redirect to protected page
    return navigateTo('/')
  } else {
    userStore.isLoggedIn = false
  }
}, { immediate: true })
</script>

<template>
  <div>Waiting for login...</div>
</template>
