import { ThemeToggler } from "../Theme/ThemeToggler";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

function Navbar() {
  return (
    <nav className="p-2 flex items-center justify-between w-full">
      <div className="flex items-center gap-2 font-bold text-sm">
        <div className="text-muted-foreground">Home {">"}</div>
        <div>Dashboard V2</div>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <Input placeholder="Search anything..." className="pl-10" />
          <Search
            className="absolute left-3 top-2.5 text-muted-foreground"
            size={16}
          />
        </div>
        <ThemeToggler />
      </div>
    </nav>
  );
}

export default Navbar;
