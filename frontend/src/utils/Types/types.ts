import { type ReactNode } from "react";

export type ChildrenProp = {
  children: ReactNode;
};

export interface GeneralResponse {
  success: boolean;
  status: number;
  message?: string;
}

export interface Api_LoginResponse extends GeneralResponse {
  token: string;
}

export interface Api_UserDetailResponse extends GeneralResponse {
  user: {
    email: string;
  };
}

export interface Api_UserCategoriesResponse extends GeneralResponse {
  categories: CategoryType[];
}

export interface CategoryType {
  id: string;
  name: string;
  widgets: WidgetType[];
}

export interface WidgetType {
  id: string;
  name: string;
  text: string;
}
