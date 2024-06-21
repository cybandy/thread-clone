<script lang="ts" setup>

</script>

<template>
  <div class="relative h-screen overflow-y-auto">
    <header class="h-[102px] md:h-[74px] sticky top-0 z-[3]">
      <TemplateHeaderNotLoggedIn />
    </header>
    <div class="min-h-[calc(100vh-102px)] md:min-h-[calc(100vh-74px)]">
      <slot />
    </div>
    <footer />
  </div>
</template>

<style scoped></style>
