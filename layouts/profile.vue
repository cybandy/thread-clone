<script setup lang='ts'>

const userStore = useUserStore()
const { user } = storeToRefs(userStore)

</script>

<template>
  <TemplateSectionContent>
    <template #header>
      <div class="hidden md:grid place-content-center h-full ">
        <span class="cursor-pointer">Profile</span>
      </div>

    </template>
    <div class="w-full h-full">
      <div class="pt-4 pb-2 5 px-3 md:px-6">
        <div class="grid grid-cols-[minmax(0,1fr)_64px] items-center">
          <div>
            <h2 class="font-bold text-2xl leading-tight break-words overflow-visible max-w-full relative">{{ user.name
              }}
            </h2>
            <div class="mt1"><span class="w-full flex items-center">{{ user.username }}</span></div>
          </div>
          <div>
            <UAvatar :src="user.avatar_url || '/dp_placeholder.jpg'" :alt="user.name || ''" aria-label="profile picture"
              size="2xl" />
          </div>
        </div>
        <div class="mt-3 flex items-center gap-2">
          <div class="flex gap-2 flex-grow">
            <span class="break-words overflow-visible text-wrap dark:text-gray-400">{{ user.followers }}
              followers</span>
          </div>
          <div>
            <ULink to="https://instagram.com" target="_break">
              <UIcon name="ph:instagram-logo-light" class="w-9 h-9 cursor-pointer" />
            </ULink>
          </div>
        </div>
      </div>
      <div class="pt-4 pb-2 5 px-3 md:px-6 w-full">
        <UButton label="Edit Profile" color="gray" variant="outline" size="lg" block :ui="{ rounded: 'rounded-xl' }" />
      </div>
      <div class="mb-4">
        <ProfileTab />
      </div>
      <div>
        <slot />
      </div>
    </div>
  </TemplateSectionContent>
</template>
