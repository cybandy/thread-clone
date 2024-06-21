import { defineStore } from 'pinia'
import type { userProfile } from '~/types'
export const useUserStore = defineStore({
  id: 'UserStoreStore',
  state: () => ({
    // posts: [],
    isMenuOverlay: false,
    isLogoutOverlay: false,
    isSearchOverlay: false,
    user: {} as userProfile | null,
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
    },
    async getProfile(username: string) {
      const d = await $fetch(`/api/profile/${username}`, {
        method: 'GET',
        headers: useRequestHeaders(['cookie']),
      })
      return d as userProfile | null
    },
    async myProfile() {
      if (!this.user?.username) return
      const d = await this.getProfile(this.user.username)
      if (d) this.user = d
    }
  },
  persist: {
    paths: ['redirectTo']
  }
})
