import { PrismaClient } from '@prisma/client'
import { enhance } from '@zenstackhq/runtime'
import type { H3Event } from 'h3'

export const prisma = new PrismaClient();




export const cybandyClient = (event: H3Event) => {
  const user_ = event.context.user
  return enhance(prisma, {
    user: user_ ? { id: user_.id } : undefined
  })
}
