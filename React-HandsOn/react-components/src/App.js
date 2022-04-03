import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';

function App() {
  return (
 <div>
     <Welcome name='Sachin'/>
   <Welcome name='Rahul'/>
   <Welcome name='Dhoni'/>
   <Welcome name='Shewag'/>
   <Welcome name='Kohli'/>
 </div>
  );
}

export default App;
