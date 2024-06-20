<script lang="ts" setup>
const props = defineProps({
  url: String,
  modelValue: Boolean
})
const emits = defineEmits(['update:modelValue', 'update:url', 'selected'])

const modelValue = computed({
  get: () => props.modelValue,
  set: (val) => emits('update:modelValue', val)
})
const url = computed({
  get: () => props.url,
  set: (val) => emits('update:url', val)
})

const notMobile = useNuxtApp().$notMobile
</script>

<template>
  <UModal v-model="modelValue">
    <div>

    </div>
  </UModal>
</template>

<style scoped></style>
