// get logged in user
export default defineEventHandler(async (event) => {
  const query = getQuery(event)

  const user = event.context.user as any

  const profile = await cybandyClient(event).profile.findUniqueOrThrow(
    {
      where: {
        id: user.id
      },
      include: {
        followers: true,
        likes: true,
        following: true
      }
    }
  )

  return profile
})
