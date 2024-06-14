<script lang="ts" setup>

</script>

<template>
  <div>
    <header class="h-[102px] md:h-[74px] sticky top-0 z-[3]">
      <TemplateHeaderNotLoggedIn />
    </header>
    <div>
      <slot />
    </div>
    <footer />
  </div>
</template>

<style scoped></style>
