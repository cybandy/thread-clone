export default defineNuxtRouteMiddleware(async (to, from) => {
  const user = useSupabaseUser()
  // redirect from login page if already logged in
  if (to.path === '/login' && user) {
    navigateTo('/')
    return
  }
  useUserStore().isLoggedIn = user.value ? true : false
  return
})
