import logo from './logo.svg';
import './App.css';
import Demo1 from './Demo1';
import { messageContext } from './MyContexts';
import Demo2 from './Demo2';
function App() {
  return (
    <div className="App">
      <Demo1 />
      <messageContext.Provider 
      value='GoodEvening User'>
        <Demo2 />
      </messageContext.Provider>
    </div>
  );
}

export default App;
