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
    following: (state) => state.user?.following.map((x) => x.followedId)
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
      try {
        const data = await $fetch('/api/profile/id', { method: 'GET' })
        this.user = data as any
      } catch (error) {
        this.user = null
      }
    },

    deleteFollowing(id: number) {
      if (this.user) {
        this.user.following = this.user.following.filter((x) => x.id !== id)
      }
    }
  },
  persist: {
    paths: ['redirectTo']
  }
})
