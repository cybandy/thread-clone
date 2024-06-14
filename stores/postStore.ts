import { defineStore } from 'pinia'
import type { Posts } from '#cy/types'

export const usePostStoreStore = defineStore({
  id: 'PostStoreStore',
  state: () => ({
    posts: [] as Posts[]
  }),
  getters: {
    isPosts: (state) => state.posts.length > 0
  },
  actions: {}
})
