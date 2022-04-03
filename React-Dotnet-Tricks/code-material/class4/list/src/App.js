import "./App.css";
import Employees from "./components/Employees";
import Person from "./components/Person";




function App() {
  return (
    <div className="container">
      <h1>App Component</h1>
      {/* <Person /> */}
      <Employees />
    </div>
  );
}

export default App;
