import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { ThemeContext } from './ThemeContext';
import Profile from './Profile.js';
import UserContext from './UserContext';
import Child from './Child';
function App() {
  // const [theme, setTheme] = useState('light');
  const user = { name: "Alice", role: "Admin" };
  return (
    <UserContext.Provider value={user}>
      <Profile />
    </UserContext.Provider>
    // <ThemeContext.Provider value={theme}>
    //   <div>
    //     <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
    //       Toggle Theme
    //     </button>
    //     <Child />
    //   </div>
    // </ThemeContext.Provider>
  );


}
export default App;
