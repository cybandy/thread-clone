export default defineEventHandler(async (event) => {
  const username = getRouterParam(event, 'username')
  const body = await readBody(event)
  const client = cybandyClient(event)

  // return body

  const profile = await client.profile.update({
    where: {
      id: event.context.user.id
    },
    data: {
      name: body.name,
      description: body.description

    }
  })

  return profile
})
