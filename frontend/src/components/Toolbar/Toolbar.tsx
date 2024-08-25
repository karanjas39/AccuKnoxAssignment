import { Button } from "@/components/ui/button";
import { RefreshCw, Plus } from "lucide-react";

function Toolbar() {
  return (
    <div className="w-full flex items-center justify-between p-3">
      <h2 className="text-lg font-bold uppercase">cnapp dashboard</h2>
      <div className="flex items-center gap-2">
        <Button className="flex items-center gap-1 text-sm" variant="outline">
          <span>Add widget</span>
          <Plus className="w-[18px]" />
        </Button>
        <Button variant="ghost">
          <RefreshCw className="w-4" />
        </Button>
      </div>
    </div>
  );
}

export default Toolbar;
