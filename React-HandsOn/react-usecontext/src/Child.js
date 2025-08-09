import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
//Consume Context Value (Child Component)
function Child() {
    const theme = useContext(ThemeContext);

    return <h1>Current Theme: {theme}</h1>;
}

export default Child;
