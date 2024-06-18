import { defineStore } from 'pinia'
import type { Database } from '~/types/supabase'
export const useUserStore = defineStore({
  id: 'UserStoreStore',
  state: () => ({
    // posts: [],
    isMenuOverlay: false,
    isLogoutOverlay: false,
    isSearchOverlay: false,
    user: {} as Database['public']['Tables']['thread_profiles']['Row'],
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
    async getProfile(id: string) {
      const supaClient = useSupabaseClient<Database>()
      const { data, error } = await supaClient.from('thread_profiles').select('*').eq('user_id', id)
      if (!error) {
        return data
      }
    },
    async myProfile() {
      const id = useSupabaseUser().value?.id
      if (id) {
        const data = await this.getProfile(id)
        if (data) {
          this.user = data[0]

        }
      }
    }
  },
  persist: {
    paths: ['redirectTo']
  }
})
