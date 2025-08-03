import logo from "./logo.svg";
import "./App.css";
import Greeting from "./Greeting";
import Sum from "./Sum";

function App() {
  return (
    <div className="App">
      <Greeting name="Virat" />
      <Greeting name={1} />
      <Greeting />
      <Sum a={1} b={2} />
    </div>
  );
}

export default App;
