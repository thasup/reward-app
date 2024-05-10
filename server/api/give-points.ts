import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const res = await prisma.points.create({
    data: {
      pointsEarned: body.pointsEarned,
      pointsRedeemed: body.pointsRedeemed,
      userId: body.userId,
    }
  })
  return res;
})