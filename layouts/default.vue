<script lang="ts" setup>

</script>

<template>
  <UContainer class="relative h-screen">
    <TemplateHeaderTopMenu />
    <div class="h-full">
      <slot />
    </div>
    <TemplateFooterBottomBar />
  </UContainer>
</template>

<style scoped></style>
