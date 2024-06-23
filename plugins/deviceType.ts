export default defineNuxtPlugin((nuxtApp) => {

  return {
    provide: {
      notMobile: computed(() => {
        if (import.meta.client) {
          const { width } = useWindowSize()
          return width.value >= 768
        }
        const { isMobile } = useDevice()
        return !isMobile //width.value >= 768 || 
      })
    }
  }
})
