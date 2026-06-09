export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  if (!body.email || typeof body.email !== 'string') {
    throw createError({ statusCode: 400, statusMessage: 'Email is required' })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(body.email)) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid email format' })
  }

  const { insert } = useNeonServer()

  const result = await insert({
    table: 'pragvue_newsletter',
    values: {
      email: body.email,
    },
  })

  if (result !== 'OK') {
    console.log(result)
    throw createError({ statusCode: 500, statusMessage: 'Failed to save subscription' })
  }

  return { success: true }
})
