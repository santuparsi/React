import { useState } from 'react';
function Demo2() {
    const [color, setColor] = useState('Red')
    const handler = () => {
        if (color == 'Red')
            setColor('Green') 
        else
            setColor('Red')
    }
    return (
        <>
            <h1 style={{ color: color }}>My Favourite Color:{color}</h1>
            <button onClick={handler}>Change</button>
        </>
    )
}
export default Demo2;