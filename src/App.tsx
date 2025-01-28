import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <h1 className="text-red-500 text-3xl">Hello</h1>
      <Button>Hi</Button>
    </div>
  );
}

export default App;
