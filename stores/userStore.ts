import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'UserStoreStore',
  state: () => ({
    // posts: [],
    isMenuOverlay: false,
    isLogoutOverlay: false,
    isSearchOverlay: false,
    // user: {},
    isLoggedIn: false,
    redirectTo: '/'
  }),
  getters: {
    // isPosts: (state) => state.posts.length > 0
    // isLoggedIn: (state) => Boolean(0)
  },
  actions: {
    navTo(path: string | null = null) {
      const temp = path ?? this.redirectTo
      this.redirectTo = '/'
      navigateTo(temp)
    }
  },
  persist: {
    paths: ['redirectTo']
  }
})
