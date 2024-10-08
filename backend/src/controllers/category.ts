import { Context } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import {
  z_categoryCreate,
  z_deleteCategory,
} from "@singhjaskaran/accuknox-common";

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
        userId,
      },
    });
    if (!newCategory) throw new Error("Failed to create new category.");
    return c.json({
      success: true,
      status: 200,
      message: "New category is created successfuly.",
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

export async function DeleteCategory(c: Context) {
  const userId: string = c.get("userId");
  const body = await c.req.json();
  const { success, data } = z_deleteCategory.safeParse(body);

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

    await prisma.widget.deleteMany({
      where: {
        categoryId: data.id,
      },
    });

    await prisma.category.delete({
      where: {
        id: data.id,
        userId,
      },
    });
    return c.json({
      success: true,
      status: 200,
      message: "Category is deleted successfuly.",
    });
  } catch (error) {
    const err = error as Error;
    return c.json({
      success: false,
      status: 400,
      message: err.message ? err.message : "Error while deleting category.",
    });
  }
}
