import "./App.css";
import Person from "./components/Person";
import Employee from "./components/Employee";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="container">
      <h1>App Component</h1>
      {/* <Person name="Mark" age="30" />
      <Person name="Paul" age="40"/>
      <Person name="Watson" age="50"/> */}

      {/* <Employee name="Mark" email="m@gmail.com" />
      <Employee name="John" email="j@gmail.com" />
      <Employee name="Stacy" email="s@gmail.com" /> */}

      <ProductList />
    </div>
  );
}

export default App;
