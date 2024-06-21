// import { serverSupabaseUser } from '#supabase/server'
// import { CybandyPrismaServer } from '#imports'
export default defineEventHandler(async (event) => {
  const client = cybandyClient(event)
  const user_ = event.context.user
  if (!user_) throw createError('unauthorized')
  const res = await client.profile.upsert({
    where: { id: user_.id },
    update: {},
    create: {
      name: user_.user_metadata.full_name,
      avatar_url: user_.user_metadata.avatar_url,
      username: user_.user_metadata.preferred_username
    },
  })
  return res
  // const cybandy = new CybandyPrismaServer(event)
  // const my_user = cybandy.user
  // console.log(my_user.id);


  // let status = false

  // if (my_user) {
  //   try {
  //     const res = await cybandy.client.profile.upsert({
  //       where: {
  //         id: my_user.id
  //       },
  //       update: {
  //         name: my_user.user_metadata.full_name,
  //         avatar_url: my_user.user_metadata.avatar_url,
  //       },
  //       create: {
  //         username: my_user.user_metadata.preferred_username,
  //         name: my_user.user_metadata.name,
  //         avatar_url: my_user.user_metadata.avatar_url,
  //       }
  //     })

  //     status = true
  //   } catch (error) {
  //     console.log(error);
  //   }

  // }

  // return status
})
