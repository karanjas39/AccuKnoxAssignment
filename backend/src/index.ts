import { Hono } from "hono";
import { cors } from "hono/cors";
import category from "./routes/category";
import { authMiddleware } from "./middlewares/auth";
import widget from "./routes/widget";
import auth from "./routes/auth";
import user from "./routes/user";

const app = new Hono();

app.use("*", cors());
app.use("/api/v1/user/*", authMiddleware);

app.route("/api/v1/auth", auth);
app.route("/api/v1/user", user);
app.route("/api/v1/user/category", category);
app.route("/api/v1/user/widget", widget);

app.all("*", async (c) => {
  return c.json({
    success: true,
    statue: 200,
    message: "Hello from accuknox assignment backend :)",
  });
});

export default app;
