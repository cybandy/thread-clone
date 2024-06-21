<script setup lang="ts">
const user = useSupabaseUser()
const userStore = useUserStore()

defineRouteRules({
  ssr: false
})

// function to upsert user's profile
async function inUpdateProfile() {
  const d = await $fetch('/api/profile/confirm', {
    method: 'post',
    headers: useRequestHeaders(['cookie']),
    retry: 3,
    retryDelay: 500
  })
  if (d) userStore.user = d as any
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
  <div class="w-full h-full">
    <TemplateSectionContent>
      <div class="w-full h-full grid place-content-center">
        <div class="flex items-center w-fit gap-1">
          <UIcon name="i-heroicons-arrow-path-rounded-square" class="w-9 h-9 animate-spin duration-100" />
          <span class="text-base font-semibold">Loading...</span>
        </div>
      </div>
    </TemplateSectionContent>
  </div>
</template>
