import { PrismaClient } from '@prisma/client'
import { enhance } from '@zenstackhq/runtime'
import { serverSupabaseUser } from '#supabase/server'
import type { H3Event } from 'h3'
import type { NitroRuntimeConfig } from "nitropack"
// import type { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();



// 
export class CybandyPrismaServer {
  protected config: NitroRuntimeConfig
  client: PrismaClient
  user: any

  constructor(event: H3Event) {
    this.config = useRuntimeConfig(event)
    this.user = event.context.user
    const prisma = new PrismaClient();
    const enhanceClient = enhance(prisma)
    // this.client = enhance(prisma, { user: this.user ? { id: this.user.id } : undefined })
    this.client = enhanceClient
  }

  async getProfile(username: string | null = null) {
    if (!username) throw createError('username required')

  }
}
