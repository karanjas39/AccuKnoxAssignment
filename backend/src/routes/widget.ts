import { Hono } from "hono";

const widget = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  };
  Variables: {
    userId: string;
  };
}>();

export default widget;
