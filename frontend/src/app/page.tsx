import { ThemeToggler } from "@/components/Theme/ThemeToggler";

export default function Home() {
  return (
    <div className="flex items-center w-full justify-between">
      <ThemeToggler />
      <p>Hello</p>
    </div>
  );
}
