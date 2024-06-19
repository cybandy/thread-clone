<script setup lang='ts'>
import type { Posts } from "#cy/types"
import type { PropType } from "vue";
const { isLoggedIn } = storeToRefs(useUserStore())
const props = defineProps({
  posts: {
    type: Object as PropType<Posts>,
    default: () => ({
      author: {
        name: 'John Doe',
        profile_picture: 'https://placehold.co/100'
      },
      image: 'https://placehold.co/500',

      text: 'Nice application :)',
      time: '9h',
      verified: true,
      comments: 210
    })
  }
})

const emits = defineEmits(['isDeleted'])

const post_buttons = computed(() => (
  [
    {
      icon: 'i-heroicons-heart',
      tooltip: 'Like'
    },
    {
      icon: 'teenyicons:chat-outline',
      tooltip: 'Reply',
      label: props.posts.comments
    },
    {
      icon: 'i-heroicons-arrow-path-rounded-square',
      tooltip: 'Repost'
    },
    {
      icon: 'lucide:send',
      tooltip: 'Share'
    },
  ]
))
</script>

<template>
  <div class="w-full py-3 px-3 md:px-6">
    <div class="w-full grid grid-cols-[48px_minmax(0,1fr)] grid-rows-[21px_19px_max-content_max-content]">

      <div class="pt-1">
        <UAvatar :src="props.posts.author.profile_picture" :alt="props.posts.author.name" />
      </div>

      <div class="flex items-center justify-between">
        <div class="flex-grow flex items-baseline gap-1.5">
          <span class="flex items-center gap-0.5">
            <span class="font-semibold">{{ props.posts.author.name }}</span>
            <UTooltip v-if="props.posts.verified" text="Verified" :popper="{ placement: 'top' }">
              <UIcon class="w-3 h-3 text-primary-600" name="i-heroicons-check-badge-20-solid" />
            </UTooltip>
          </span>
          <UTooltip :text="props.posts.time" :popper="{ placement: 'top' }">
            <span class="min-w-0 flex-shrink-0 text-gray-500">
              {{ props.posts.time }}
            </span>
          </UTooltip>
        </div>
        <DropdownPost />
      </div>

      <div class="row-span-3 col-start-2 space-y-1.5">
        <!-- text -->
        <div v-if="Boolean(props.posts.text)" class="whitespace-pre-wrap">
          {{ props.posts.text }}
        </div>
        <!-- picture -->
        <div class="">
          <NuxtImg :src="props.posts.image"
            class="max-w-full max-h-full rounded-lg box-border pointer-events-none outline-offset-1 outline-1 border-0 aspect-postImg object-cover" />
        </div>
        <!-- buttons -->
        <div v-if="isLoggedIn" class="flex items-center gap-2 py-1">
          <UTooltip v-for="(button, ind) of post_buttons" :key="ind" :text="button.tooltip">
            <UButton :icon="button.icon" :label="`${button.label ?? ''}`" variant="ghost" color="gray"
              :ui="{ rounded: 'rounded-full' }" padded />
          </UTooltip>

        </div>
      </div>
    </div>
  </div>
</template>
