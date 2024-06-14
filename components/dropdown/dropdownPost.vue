<script lang="ts" setup>

import { defaultDocument } from "@vueuse/core";
const toasts = useToast()
const menu_items = [
  [
    {
      label: 'Copy link',
      icon: 'ph:link-simple',
      click: async () => {
        const source = ref(defaultDocument?.URL as string)
        const { copy } = useClipboard({ source })
        await copy()
        toasts.add({ title: 'Link copied', icon: 'i-heroicons-check-badge', color: 'primary', timeout: 1000 })
      }
    },
    {
      label: 'Get embed code',
      icon: 'tabler:code-dots',
      click: async () => {
        // const source = ref(defaultDocument?.URL as string)
        // const { copy } = useClipboard({ source })
        // await copy()
        // toasts.add({ title: 'Link copied', icon: 'i-heroicons-check-badge', color: 'primary', timeout: 1000 })
      }
    },
  ],
  [
    {
      label: 'Mute',
      icon: 'ic:outline-person-off',
      class: 'dark:text-rose-600 text-rose-500',
      iconClass: 'dark:text-rose-400 text-rose-500',
      click: async () => {
        // const source = ref(defaultDocument?.URL as string)
        // const { copy } = useClipboard({ source })
        // await copy()
        // toasts.add({ title: 'Link copied', icon: 'i-heroicons-check-badge', color: 'primary', timeout: 1000 })
      }
    },
    {
      label: 'Report',
      icon: 'tabler:message-report',
      class: 'dark:text-rose-600 text-rose-500',
      iconClass: 'dark:text-rose-400 text-rose-500',
      click: async () => {
        // const source = ref(defaultDocument?.URL as string)
        // const { copy } = useClipboard({ source })
        // await copy()
        // toasts.add({ title: 'Link copied', icon: 'i-heroicons-check-badge', color: 'primary', timeout: 1000 })
      }
    },
  ]
]
</script>

<template>
  <UDropdown :items="menu_items">
    <UButton icon="i-heroicons-ellipsis-horizontal-20-solid" color="gray" variant="ghost"
      :ui="{ rounded: 'rounded-full', color: { gray: { ghost: 'dark:hover:bg-gray-900/60' } } }" />
    <template #item="{ item }">
      <span class="truncate">{{ item.label }}</span>

      <UIcon :name="item.icon" class="flex-shrink-0 h-5 w-5 ms-auto" />
    </template>
  </UDropdown>
</template>

<style scoped></style>
