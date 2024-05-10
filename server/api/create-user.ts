import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const res = await prisma.users.create({
    data: {
      email: body.email,
      username: body.username,
      password: body.password,
      userType: body.userType,
    }
  })
  return res;
})