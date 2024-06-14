import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'UserStoreStore',
  state: () => ({
    // posts: [],
    isMenuOverlay: false,
    isLogoutOverlay: false,
    isSearchOverlay: false,
    user: {}
  }),
  getters: {
    // isPosts: (state) => state.posts.length > 0
    isLoggedIn: (state) => Boolean(1)
  },
  actions: {}
})
