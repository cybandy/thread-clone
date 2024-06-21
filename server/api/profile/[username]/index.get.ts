import { serverSupabaseUser } from '#supabase/server'
export default defineEventHandler(async (event) => {
  const username = getRouterParam(event, 'username')
  const client = cybandyClient(event)
  const profile = client.profile.findUnique({ where: { username }, include: { followers: true, likes: true } })

  return profile
})
