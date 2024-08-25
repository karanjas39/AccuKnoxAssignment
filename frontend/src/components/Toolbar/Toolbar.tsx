import { Button } from "../ui/button";

function Toolbar() {
  return (
    <div className="flex items-center justify-between mt-3 px-3">
      <p className="font-bold text-sm">CNAPP Dashboard</p>
      <Button variant="outline">Add widget</Button>
    </div>
  );
}

export default Toolbar;
