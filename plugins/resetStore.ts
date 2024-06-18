export default defineNuxtPlugin((nuxtApp) => {
  async function resetStores() {
    await Promise.all([
      useUserStore().$reset(),

    ])
  }

  // get user data on reload
  nuxtApp.hook('app:beforeMount', () => {
    useAsyncData(async () => {
      const user = useSupabaseUser()
      if (user) {
        await useUserStore().myProfile()
      }
    })
  })
  return {
    provide: {
      resetStores
    }
  }
})
