<script lang="ts" setup>
// import type { Provider } from '@nuxtjs/supabase'
import { defaultWindow } from '@vueuse/core';
definePageMeta({
  layout: 'canvas',
})
useHead({
  title: 'Login'
})
const email = ref('')
const password = ref('')
const notMobile = useNuxtApp().$notMobile

const supaClient = useSupabaseClient()
const loginOauth = async (prov: any) => {
  const cypath = useUserStore().redirectTo

  const { data, error } = await supaClient.auth.
    signInWithOAuth({
      provider: prov,
      options: {
        redirectTo: defaultWindow?.location.origin + `/confirm`
      }

    })
  // console.log(data);

}

onMounted(() => {
  // console.log(useRoute().query);

})
</script>

<template>
  <UContainer class="w-full h-full space-y-10">
    <div class="">
      <h1 class="text-lg font-semibold leading-tight text-center">
        Log in / Sign up
      </h1>
      <p class="text-gray-500" />
    </div>
    <div class="flex items-center justify-center">
      <UButton @click="() => loginOauth('github')" color="black" label="GitHub" icon="i-simple-icons-github" block />
      <!-- <UButton color="black" label="Login with Google" icon="i-simple-icons-google" block /> -->

    </div>
    <!-- <div class="w-full flex flex-col gap-y-4">
      <UCard v-if="notMobile" :ui="{ body: { base: 'grid grid-cols-3' } }">
        <FormsLogin v-model:email="email" v-model:password="password" />

        <UDivider label="OR" orientation="vertical" />

        <div class="space-y-4 flex flex-col justify-center">
          <UButton @click="() => loginOauth('github')" color="black" label="GitHub" icon="i-simple-icons-github"
            block />
        </div>
      </UCard>

      <UCard v-else :ui="{ body: { base: 'space-y-10' } }">
        <FormsLogin v-model:email="email" v-model:password="password" />
        <UDivider label="OR" />

        <div class="space-y-4 flex flex-col justify-center">
          <UButton @click="() => loginOauth('github')" color="black" label="GitHub" icon="i-simple-icons-github"
            block />
        </div>
      </UCard>
    </div> -->
  </UContainer>
</template>

<style scoped></style>
