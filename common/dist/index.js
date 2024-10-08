"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.z_deleteCategory = exports.z_deleteWidget = exports.z_categoryCreate = exports.z_widgetCreate = exports.z_userLogin = void 0;
const zod_1 = require("zod");
// SCHEMAS
exports.z_userLogin = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6),
});
exports.z_widgetCreate = zod_1.z.object({
    name: zod_1.z.string().min(1),
    text: zod_1.z.string().min(1),
    categoryId: zod_1.z.string().cuid(),
});
exports.z_categoryCreate = zod_1.z.object({
    name: zod_1.z.string().min(1),
});
exports.z_deleteWidget = zod_1.z.object({
    id: zod_1.z.string().cuid(),
});
exports.z_deleteCategory = zod_1.z.object({
    id: zod_1.z.string().cuid(),
});
