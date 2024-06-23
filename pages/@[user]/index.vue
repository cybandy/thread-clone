<script setup lang='ts'>
import type { Thread } from '@prisma/client';

definePageMeta({
  middleware: [
    (from, to) => {
      if (to.params['user'].length == 0) {
        return navigateTo('/')
      }
    }
  ]
})


const username = useRoute().params['user'] as string

useHead({
  title: '@' + username || 'Profile'
})
const posts = [] as Thread[]
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
