import { z } from "zod";

// SCHEMAS
export const z_userLogin = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const z_widgetCreate = z.object({
  name: z.string().min(1),
  text: z.string().min(1),
  categoryId: z.string().cuid(),
});

export const z_categoryCreate = z.object({
  name: z.string().min(1),
});

export const z_deleteWidget = z.object({
  id: z.string().cuid(),
});

export const z_deleteCategory = z.object({
  id: z.string().cuid(),
});

// TYPES
export type z_userLogin_type = z.infer<typeof z_userLogin>;
export type z_widgetCreate_type = z.infer<typeof z_widgetCreate>;
export type z_categoryCreate_type = z.infer<typeof z_categoryCreate>;
export type z_deleteWidget_type = z.infer<typeof z_deleteWidget>;
export type z_deleteCategory_type = z.infer<typeof z_deleteCategory>;
