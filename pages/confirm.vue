<script setup lang="ts">
const user = useSupabaseUser()
const userStore = useUserStore()

defineRouteRules({
  ssr: false
})

watch(user, () => {
  if (user.value) {
    userStore.isLoggedIn = true
    console.log(user.value);
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
