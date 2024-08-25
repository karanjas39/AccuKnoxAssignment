import { Context } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { z_categoryCreate } from "@singhjaskaran/accuknox-common";

export async function CreateCategory(c: Context) {
  const userId: string = c.get("userId");
  const body = await c.req.json();
  const { success, data } = z_categoryCreate.safeParse(body);

  if (!success) {
    return c.json({
      success: false,
      status: 404,
      message: "Invalid inputs are passed.",
    });
  }

  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const newCategory = await prisma.category.create({
      data: {
        name: data.name,
      },
    });
  } catch (error) {
    const err = error as Error;
    return c.json({
      success: false,
      status: 400,
      message: err.message ? err.message : "Error while creating category.",
    });
  }
}
