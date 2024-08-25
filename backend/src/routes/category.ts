import { Hono } from "hono";
import { CreateCategory, DeleteCategory } from "../controllers/category";

const category = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  };
  Variables: {
    userId: string;
  };
}>();

category.post("/create", CreateCategory);
category.delete("/delete", DeleteCategory);

export default category;
