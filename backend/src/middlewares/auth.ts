import { Context, Next } from "hono";
import { verify } from "hono/jwt";

export async function authMiddleware(c: Context, next: Next) {
  try {
    const jwt = c.req.header("Authorization");

    if (!jwt) {
      return c.json({
        success: false,
        status: 400,
        message: "User is unauthorized.",
      });
    }

    const token = jwt.split(" ")[1];
    const payload = await verify(token, c.env.SECRET_KEY);

    if (!payload) {
      return c.json({
        success: false,
        status: 400,
        message: "User is unauthorized.",
      });
    }
    c.set("userId", payload.userId);
    await next();
  } catch (error) {
    return c.json({
      success: false,
      status: 400,
      message: "User is unauthorized.",
    });
  }
}
