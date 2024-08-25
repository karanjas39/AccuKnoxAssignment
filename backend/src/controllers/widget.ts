import { Context } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { z_deleteWidget, z_widgetCreate } from "@singhjaskaran/accuknox-common";

export async function CreateWidget(c: Context) {
  const userId: string = c.get("userId");
  const body = await c.req.json();
  const { success, data } = z_widgetCreate.safeParse(body);

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

    const newWidget = await prisma.widget.create({
      data: {
        name: data.name,
        text: data.text,
        categoryId: data.categoryId,
      },
    });
    if (!newWidget) throw new Error("Failed to create new widget.");

    return c.json({
      success: true,
      status: 200,
      message: "New widget is created successfuly.",
    });
  } catch (error) {
    const err = error as Error;
    return c.json({
      success: false,
      status: 400,
      message: err.message ? err.message : "Error while creating widget.",
    });
  }
}

export async function DeleteWidget(c: Context) {
  const userId: string = c.get("userId");
  const body = await c.req.json();
  const { success, data } = z_deleteWidget.safeParse(body);

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

    await prisma.widget.delete({
      where: {
        id: data.id,
      },
    });

    return c.json({
      success: true,
      status: 200,
      message: "Widget is deleted successfuly.",
    });
  } catch (error) {
    const err = error as Error;
    return c.json({
      success: false,
      status: 400,
      message: err.message ? err.message : "Error while deleting widget.",
    });
  }
}
