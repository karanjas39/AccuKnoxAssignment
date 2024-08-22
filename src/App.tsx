import Navbar from "./components/Navbar/Navbar";
import Toolbar from "./components/Toolbar/Toolbar";

function App() {
  return (
    <div className="w-full flex flex-col">
      <div className="mb-2 p-1 flex flex-col gap-2">
        <Navbar />
        <hr />
      </div>
      <Toolbar />
    </div>
  );
}

export default App;
