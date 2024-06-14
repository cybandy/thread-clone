<script lang="ts" setup>
const userStore = useUserStore()
const { isLoggedIn } = storeToRefs(userStore)
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout :name="isLoggedIn ? 'login-default' : 'logout-default'">
      <NuxtLoadingIndicator />
      <NuxtPage />
      <UNotifications />
      <UModals />
    </NuxtLayout>
  </div>
</template>
