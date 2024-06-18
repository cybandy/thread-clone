<script lang="ts" setup>
const userStore = useUserStore()
const { isLoggedIn } = storeToRefs(userStore)
const canvas_path = ['/login', 'canvas']
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator />
    <NuxtLayout v-if="canvas_path.includes($route.path)">
      <NuxtPage />
    </NuxtLayout>

    <NuxtLayout v-else :name="isLoggedIn ? 'login-default' : 'logout-default'">
      <NuxtPage />
    </NuxtLayout>
    <UNotifications />
    <UModals />
  </div>
</template>
