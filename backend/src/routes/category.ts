import { Hono } from "hono";
import { CreateCategory } from "../controllers/category";

const category = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  };
  Variables: {
    userId: string;
  };
}>();

category.post("/create", CreateCategory);

export default category;
