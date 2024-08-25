"use client";

import { ThemeToggler } from "@/components/Theme/ThemeToggler";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Infinity } from "lucide-react";
import { Profile } from "./Profile";

function Navbar() {
  const { token } = useSelector((state: RootState) => state.auth);

  return (
    <div className="p-2 flex items-center justify-between">
      {token ? (
        <>
          <div className="flex items-center gap-2 text-sm font-bold">
            <span className="text-muted-foreground">Home {">"}</span>
            <span>Dashboard</span>
          </div>
          <div className="flex items-center gap-3">
            <Profile />
            <ThemeToggler />
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center gap-1">
            <Infinity className="w-[30px]" />
            <p className="text-2xl font-bold">CNAPP</p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/">
              <Button variant="secondary">Login</Button>
            </Link>
            <ThemeToggler />
          </div>
        </>
      )}
    </div>
  );
}

export default Navbar;
