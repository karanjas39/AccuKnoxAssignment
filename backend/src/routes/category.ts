import { Hono } from "hono";

const category = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  };
  Variables: {
    userId: string;
  };
}>();

export default category;
