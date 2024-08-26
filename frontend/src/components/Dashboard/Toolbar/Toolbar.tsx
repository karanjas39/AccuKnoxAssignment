import AddWidget from "../Widgets/Widgets";

function Toolbar() {
  return (
    <div className="flex items-center justify-between mt-3 px-3">
      <p className="font-bold text-sm">CNAPP Dashboard</p>
      <AddWidget />
    </div>
  );
}

export default Toolbar;
