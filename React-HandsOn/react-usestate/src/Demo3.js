import { useState } from "react";

function Demo3() {
    const [cities, setCities] = useState(['Chicago', 'Newyork', 'Tokyo', 'Delhi']);
    const [city, setCity] = useState('');
    const handler = () => {
        //setCities([...cities, 'London'])
        setCities([...cities, city])
    }
    return (
        <>
            <table border={1}>
                <tr>
                    <th>City</th>
                </tr>
                {
                    cities.map((city) => (
                        <tr>
                            <td>{city}</td>
                        </tr>
                    ))
                }
                <tr>

                    <td>
                        Enter City:<input type="text" 
                        onChange={(e) => setCity(e.target.value)} />
                        <button onClick={handler}>Click</button>
                    </td>
                </tr>
            </table>
        </>
    )
}
export default Demo3;