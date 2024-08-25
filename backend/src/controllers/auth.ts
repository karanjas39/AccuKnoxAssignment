import { Context } from "hono";
import { sign } from "hono/jwt";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { compareSync } from "bcrypt-ts";
import { z_userLogin } from "@singhjaskaran/accuknox-common";

export async function Login(c: Context) {
  const body = await c.req.json();
  const { success, data } = z_userLogin.safeParse(body);

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

    const isUserExist = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (!isUserExist) throw new Error("Password or email is incorrect.");

    const isPasswordCorrect = compareSync(data.password, isUserExist.password);

    if (!isPasswordCorrect) throw new Error("Password or email is incorrect.");
    const token = await sign({ userId: isUserExist.id }, c.env.SECRET_KEY);

    return c.json({
      success: true,
      status: 200,
      token,
    });
  } catch (error) {
    const err = error as Error;
    return c.json({
      success: false,
      status: 400,
      message: err.message ? err.message : "Error while logging in right now.",
    });
  }
}
