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

const open = ref(false)
</script>

<template>
  <UTooltip text="More" :prevent="open">
    <UDropdown :open="open" :items="menu_items">

      <UButton :icon="icon" color="gray" variant="ghost" />

      <template #item="{ item }">
        <span class="truncate">{{ item.label }}</span>

        <UIcon v-if="item.icon" :name="item.icon ?? ''" class="flex-shrink-0 h-5 w-5 ms-auto" />
      </template>
    </UDropdown>
  </UTooltip>
</template>

<style scoped></style>
