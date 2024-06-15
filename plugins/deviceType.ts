export default defineNuxtPlugin((nuxtApp) => {

  return {
    provide: {
      notMobile: computed(() => {
        // const { width } = useWindowSize()
        const { isMobile } = useDevice()
        return !isMobile //width.value >= 768 || 
      })
    }
  }
})
