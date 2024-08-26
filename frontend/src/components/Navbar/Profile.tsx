"use client";
import { LogOut, Code } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { userApi } from "@/store/api/userApi";
import { useDispatch } from "react-redux";
import { clearToken } from "@/store/slices/authSlice";
import { authApi } from "@/store/api/authApi";
import { getFirstLetterOfEmail } from "@/utils/helpers";
import { categoriesApi } from "@/store/api/categories";

export function Profile() {
  const { data, isLoading } = userApi.useFetchUserQuery();
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(clearToken());
    dispatch(authApi.util.resetApiState());
    dispatch(userApi.util.resetApiState());
    dispatch(categoriesApi.util.resetApiState());
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarFallback className="uppercase">
            {!isLoading && data ? getFirstLetterOfEmail(data.user.email) : "A"}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[50px]">
        <DropdownMenuItem>
          <Code className="mr-2 h-4 w-4" />
          <a
            href="https://github.com/karanjas39/AccuKnoxAssignment"
            target="_blank"
          >
            Code
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          <span onClick={handleLogout}>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
