import { Hono } from "hono";
import { GetUser, GetUserCategories } from "../controllers/user";

const user = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  };
  Variables: {
    userId: string;
  };
}>();

user.get("/detail", GetUser);
user.get("/categories", GetUserCategories);

export default user;
