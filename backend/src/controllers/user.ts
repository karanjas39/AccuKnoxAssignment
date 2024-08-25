import { Context } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

export async function GetUser(c: Context) {
  const userId: string = c.get("userId");

  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        email: true,
      },
    });

    if (!user) throw new Error("No such user found.");

    return c.json({
      success: true,
      status: 200,
      user,
    });
  } catch (error) {
    const err = error as Error;
    return c.json({
      success: false,
      status: 400,
      message: err.message ? err.message : "Error while getting user.",
    });
  }
}

export async function GetUserCategories(c: Context) {
  const userId: string = c.get("userId");

  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const categories = await prisma.category.findMany({
      where: {
        userId,
      },
      select: {
        id: true,
        name: true,
        widgets: {
          select: {
            id: true,
            name: true,
            text: true,
          },
        },
      },
    });

    return c.json({
      success: true,
      status: 200,
      categories,
    });
  } catch (error) {
    const err = error as Error;
    return c.json({
      success: false,
      status: 400,
      message: err.message ? err.message : "Error while getting categories.",
    });
  }
}
