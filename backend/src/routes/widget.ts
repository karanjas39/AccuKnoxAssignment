import { Hono } from "hono";
import { CreateWidget, DeleteWidget } from "../controllers/widget";

const widget = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  };
  Variables: {
    userId: string;
  };
}>();

widget.post("/create", CreateWidget);
widget.delete("/delete", DeleteWidget);

export default widget;
