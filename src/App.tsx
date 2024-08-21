import { ThemeToggler } from "@/components/Theme/ThemeToggler";
import { Button } from "@/components/ui/button";

function App() {
  return (
    <div className="p-8">
      <Button variant="default">Hey there</Button>
      <ThemeToggler />
    </div>
  );
}

export default App;
