<script setup lang='ts'>
import type { Follow } from '@prisma/client';
import type { userProfile } from '~/types';
const userStore = useUserStore()
const { following: followingProfiles } = storeToRefs(userStore)
const username = useRoute().params['user'] as string
const user = ref({} as userProfile)
const loading = ref(true)

const isLoggedInProfile = computed(() => userStore.user ? userStore.user.username === username : false)

// determine if loggedIn user is ff current user
const isFollowing = computed(() => followingProfiles.value?.includes(user.value.id))

// get profile
async function getProfile() {
  const d = await userStore.getProfile(username)
  if (d) {
    user.value = d
    loading.value = false
  }
}

onMounted(async () => await getProfile())

const findIndex = (data: Follow[]) => {
  return data.find((x) => x.followingId == userStore.user?.id && x.followedId == user.value.id)
}

async function followUser() {
  try {
    //un-follower
    if (isFollowing.value && user.value && userStore.user) {
      const followActive = findIndex(user.value.followers)
      if (followActive) {
        const d = await useCybandyPrisma().unFollowProfile(followActive.id)
        userStore.deleteFollowing(followActive.id)
        user.value.followers = user.value.followers.filter((x) => x.id != followActive.id)
      }
    }
    //follow
    else {
      const d = await useCybandyPrisma().followProfile(user.value.id)

      if (userStore.user) userStore.user.following.push(d)
      user.value.followers.push(d)
    }
  } catch (error) {
    //
  }
}
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
            <USkeleton v-if="loading" class="h-3 w-[150px]" />
            <h2 v-else class="font-bold text-2xl leading-tight break-words overflow-visible max-w-full relative">{{
              user.name
            }}
            </h2>
            <div class="mt1">
              <USkeleton v-if="loading" class="h-3 w-[100px]" />
              <span v-else class="w-full flex items-center">
                {{ user.username }}
              </span>
            </div>
          </div>
          <div>
            <USkeleton v-if="loading" class="h-16 w-16" :ui="{ rounded: 'rounded-full' }" />
            <UAvatar v-else :src="user.avatar_url || '/dp_placeholder.jpg'" :alt="user.name || ''"
              aria-label="profile picture" size="2xl" />
          </div>
        </div>
        <div class="mt-3 flex items-center gap-2">
          <div class="flex gap-2 flex-grow">
            <USkeleton v-if="loading" class="h-3 w-[100px]" />
            <span v-else class="break-words overflow-visible text-wrap dark:text-gray-400">{{ user.followers.length }}
              {{ user.followers.length > 1 ? 'followers' : 'follower' }}</span>
          </div>
          <div>
            <ULink to="https://instagram.com" target="_break">
              <UIcon name="ph:instagram-logo-light" class="w-9 h-9 cursor-pointer" />
            </ULink>
          </div>
        </div>
      </div>
      <div class="pt-4 pb-2 5 px-3 md:px-6 w-full">
        <USkeleton v-if="loading" class="h-11 w-full" />
        <div v-else>
          <UButton v-if="isLoggedInProfile" label="Edit Profile" color="gray" variant="outline" size="lg" block
            :ui="{ rounded: 'rounded-xl' }" />
          <div v-else class="grid grid-cols-2 gap-2">
            <div>
              <UButton :label="isFollowing ? 'Following' : 'Follow'" :color="isFollowing ? 'gray' : 'black'"
                :variant="isFollowing ? 'outline' : 'solid'" size="lg" block :ui="{ rounded: 'rounded-xl' }"
                @click="followUser" />
            </div>
            <div>
              <UButton label="Mention" color="gray" variant="outline" size="lg" block :ui="{ rounded: 'rounded-xl' }" />
            </div>


          </div>
        </div>

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
