import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  let users = await prisma.users.findMany({
    orderBy: { id: 'desc' },
    include: { points: true }
  })
  return users;
})