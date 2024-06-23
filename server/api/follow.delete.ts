/**
 * Un-follow a user
 * @query = {id:number}
 */
export default defineEventHandler(async (event) => {
  // checks if user is logged in
  await authRequired(event)

  const query = getQuery(event)
  const id = query.id as number | undefined
  if (!id) throw createError('query not provided')

  const client = cybandyClient(event)

  // const following = await client.profile.findUniqueOrThrow({where:{
  //   username:ff_username
  // }})

  const res = await client.follow.delete({
    where: {
      id: Number(id)
    }
  })

  return {
    deleted: true
  }
})
