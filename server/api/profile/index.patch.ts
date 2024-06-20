import { serverSupabaseUser } from '#supabase/server'
import { CybandyPrismaServer } from '#imports'
export default defineEventHandler(async (event) => {
  // const user = event.context.user // from auth middleware
  const my_user = await serverSupabaseUser(event)

  const cybandy = new CybandyPrismaServer(event)

  let status = false

  if (my_user) {
    try {
      const res = await cybandy.client.profile.upsert({
        where: {
          id: my_user.id
        },
        update: {
          name: my_user.user_metadata.full_name,
          avatar_url: my_user.user_metadata.avatar_url,
        },
        create: {
          username: my_user.user_metadata.preferred_username,
          name: my_user.user_metadata.name,
          avatar_url: my_user.user_metadata.avatar_url,
        }
      })

      status = true
    } catch (error) {
      console.log(error);
    }

  }

  return status
})
