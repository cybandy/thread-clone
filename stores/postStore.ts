import { defineStore } from 'pinia'
import type { Posts, FeedOption } from '#cy/types'

export const usePostStore = defineStore({
  id: 'PostStoreStore',
  state: () => ({
    posts: [] as Posts[],
    feedOptions: [
      {
        id: 1, name: 'For you'
      },
      {
        id: 2, name: 'Following'
      },
      {
        id: 3, name: 'Liked'
      },
      {
        id: 4, name: 'Saved'
      },

    ] as FeedOption[],
    selectedFeed: {} as FeedOption,
    isNewPost: false,
  }),
  getters: {
    isPosts: (state) => state.posts.length > 0
  },
  actions: {
    async feedChangedAction(data: FeedOption) {
      console.log(data.name);

    }
  }
})
