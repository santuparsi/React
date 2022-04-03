import "./App.css";
import ClassEvent from "./components/ClassEvent";
import FunctionEvent from "./components/FunctionEvent";

function App() {
  return (
    <div className="container">
     <h1>App Component</h1>
     {/* <FunctionEvent /> */}
     <ClassEvent />
    </div>
  );
}

export default App;
