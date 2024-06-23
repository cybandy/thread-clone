import type { UseFetchOptions } from "#app"
import type { Follow } from "@prisma/client"
export const useCybandyPrisma = () => {

  const client = async (
    path: string,
    method: string,
    body: object = {},
    query: object = {}) => await $fetch(path, {
      method: method as any,
      query,
      body,
      headers: useRequestHeaders(['cookie'])
    })


  const followProfile = async (id: string) => await client('/api/follow', 'post', {}, { id: id }) as Follow

  const unFollowProfile = async (id: number) => await client('/api/follow', 'delete', {}, { id }) as { deleted: boolean }

  return { followProfile, unFollowProfile }
}
