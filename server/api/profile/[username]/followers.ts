export default defineEventHandler(async (event) => {
  const username = getRouterParam(event, 'username')
  const client = cybandyClient(event)
  const followers = client.follow.findMany({ where: { follower: { username: username } } })
  return followers
})
