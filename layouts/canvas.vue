<script lang="ts" setup>

</script>

<template>
  <div class="relative h-screen">
    <div ref="header" class="my-5 p-5 grid place-content-center">
      <ULink to="/">
        <UIcon name="ph:threads-logo-bold" class="w-8 h-8 md:w-10 md:h-10 cursor-pointer" />
      </ULink>
    </div>

    <slot />

  </div>
</template>

<style scoped></style>
