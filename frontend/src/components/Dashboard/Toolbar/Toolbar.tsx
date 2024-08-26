import AddWidget from "../Widgets/Widgets";
import AddCategory from "./AddCategory/AddCategory";

function Toolbar() {
  return (
    <div className="flex items-center justify-between mt-3 px-3">
      <p className="font-bold text-sm">CNAPP Dashboard</p>
      <div className="flex items-center gap-2">
        {/* <AddWidget /> */}
        <AddCategory />
      </div>
    </div>
  );
}

export default Toolbar;
