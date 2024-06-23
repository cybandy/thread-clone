/**
 * Api route to follow other profile(user)
 * @body = {
 *  id = string // username of the user to follow
 * }
 */
export default defineEventHandler(async (event) => {
  // checks if user is logged in
  await authRequired(event)

  const client = cybandyClient(event)
  const query = getQuery(event)
  const ff_id = query.id as string | undefined // username you are ff
  if (!ff_id) throw createError('username required')

  const res_ = await client.follow.create({
    data: {
      followedId: ff_id,
    }
  })

  return res_

})
