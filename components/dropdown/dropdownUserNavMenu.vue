<script lang="ts" setup>
import { defaultDocument } from "@vueuse/core";

defineProps({
  icon: {
    type: String,
    default: 'i-heroicons-bars-3-bottom-right'
  }
})

const toasts = useToast()
const menu_items = [
  [
    {
      label: 'Appearance',
      icon: 'i-heroicons-chevron-right',
      click: async () => {

      }
    },
    {
      label: 'Settings',
      click: async () => {
      },
    },
    {
      label: 'Saved',
      click: async () => {
      },
    },
    {
      label: 'Your files',
      click: async () => {
      },
    },
    {
      label: 'Report a problem',
      click: async () => {
      },
    },
    {
      label: 'Log out',
      click: async () => {
      },
    },
  ]
]
</script>

<template>
  <UDropdown :items="menu_items">
    <UTooltip text="More">
      <UButton :icon="icon" color="gray" variant="ghost" />
    </UTooltip>
    <template #item="{ item }">
      <span class="truncate">{{ item.label }}</span>

      <UIcon :name="item.icon" class="flex-shrink-0 h-5 w-5 ms-auto" />
    </template>
  </UDropdown>
</template>

<style scoped></style>
