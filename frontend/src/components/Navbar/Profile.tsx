"use client";
import { LogOut } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { userApi } from "@/store/api/userApi";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { clearToken } from "@/store/slices/authSlice";
import { authApi } from "@/store/api/authApi";
import { getFirstLetterOfEmail } from "@/utils/helpers";

export function Profile() {
  const { data, isLoading } = userApi.useFetchUserQuery();
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(clearToken());
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarFallback className="capitalize">
            {!isLoading && data ? getFirstLetterOfEmail(data.user.email) : "A"}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[20px]">
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          <Link href="">
            <Button onClick={handleLogout}>Logout</Button>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
