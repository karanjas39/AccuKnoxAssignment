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
