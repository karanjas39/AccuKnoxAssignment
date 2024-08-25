import { Hono } from "hono";
import { Login } from "../controllers/auth";

const auth = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    SECRET_KEY: string;
  };
}>();

auth.post("/login", Login);

export default auth;
