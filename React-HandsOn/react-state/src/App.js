import "./App.css";
import Message from "./components/ClassState";
import FunctionState from "./components/FunctionState";
import Register from "./components/Register";

function App() {
  return (
    <div className="container">
      <h1>App Component</h1>
      <Message />
      {/* <FunctionState /> */}
      {/* <Register /> */}
    </div>
  );
}

export default App;
