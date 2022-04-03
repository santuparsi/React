import logo from './logo.svg';
import './App.css';
import Person from './Component/Person';
import Employee from './Component/Employee';
import ProductList from './Component/ProductList';

function App() {
  return (
    <div className="App">
     <h1>App Component</h1>
     {/* <Person name='San' age='30' />
     <Person name="Paul" age='40' />
     <Person name='Watson' age='50' /> */}
     {/* <Employee name="Mark" city="New York" />
     <Employee name="Paul" city="London" />
     <Employee name="Watson" city="Spain" /> */}
   <ProductList />
    </div>
  );
}

export default App;
