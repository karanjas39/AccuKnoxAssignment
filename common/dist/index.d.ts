import { z } from "zod";
export declare const z_userLogin: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export declare const z_widgetCreate: z.ZodObject<{
    name: z.ZodString;
    text: z.ZodString;
    userId: z.ZodString;
    categoryId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    text: string;
    userId: string;
    categoryId: string;
}, {
    name: string;
    text: string;
    userId: string;
    categoryId: string;
}>;
export declare const z_widgetUpdate: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    text: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    categoryId: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string;
    name?: string | undefined;
    text?: string | undefined;
    userId?: string | undefined;
    categoryId?: string | undefined;
}, {
    id: string;
    name?: string | undefined;
    text?: string | undefined;
    userId?: string | undefined;
    categoryId?: string | undefined;
}>;
export declare const z_categoryCreate: z.ZodObject<{
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
}, {
    name: string;
}>;
export declare const z_categoryUpdate: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string;
    name?: string | undefined;
}, {
    id: string;
    name?: string | undefined;
}>;
export declare const z_deleteWidget: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export declare const z_deleteCategory: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export type z_userLogin_type = z.infer<typeof z_userLogin>;
export type z_widgetCreate_type = z.infer<typeof z_widgetCreate>;
export type z_widgetUpdate_type = z.infer<typeof z_widgetUpdate>;
export type z_categoryCreate_type = z.infer<typeof z_categoryCreate>;
export type z_categoryUpdate_type = z.infer<typeof z_categoryUpdate>;
export type z_deleteWidget_type = z.infer<typeof z_deleteWidget>;
export type z_deleteCategory_type = z.infer<typeof z_deleteCategory>;
