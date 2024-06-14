<script setup lang="ts">
const options = [
  {
    id: 1, name: 'For you', click: (data: any) => {
      console.log(data.name);

    }
  },
  {
    id: 2, name: 'Following', click: (data: any) => {
      console.log(data.name);

    }
  },
  {
    id: 3, name: 'Liked', click: (data: any) => {
      console.log(data.name);

    }
  },
  {
    id: 4, name: 'Saved', click: (data: any) => {
      console.log(data.name);

    }
  },

]

const selected = ref(options[1])
</script>

<template>
  <USelectMenu v-model="selected" :options="options" option-attribute="name" color="gray" variant="none">
    <template #option="{ option: item }">
      <button class="w-full h-full" @click="() => item.click(item)">{{ item.name }}</button>
    </template>
  </USelectMenu>
</template>
