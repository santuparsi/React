import { useState } from "react";

function Demo2() {
    const [items, setItems] = useState([
        { id: 1, name: 'keyboard', price: 300, stock: 10 },
        { id: 2, name: 'mouse', price: 1300, stock: 20 },
        { id: 3, name: 'keypad', price: 2300, stock: 30 },
        { id: 4, name: 'pendrive', price: 3300, stock: 40 },
        { id: 5, name: 'joystick', price: 4300, stock: 50 },
    ]);
    const [item, setItem] = useState(
        { id: 0, name: '', price: 0, stock: 0 }
    )
    const handler = (e) => {
        e.preventDefault(); //prevent form submission to the server
        setItems([...items, item])
    }
    return (
        <>
            <form onSubmit={handler}>
                <table>
                    <tr>
                        <td>Id</td>
                        <td>
                            <input type="number" onChange={(e) => setItem((prevObj) => ({
                                ...prevObj,
                                id: e.target.value
                            }))} />
                        </td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>
                            <input type="text" onChange={(e) => setItem((prevObj) => ({
                                ...prevObj,
                                name: e.target.value
                            }))} />
                        </td>
                    </tr>
                    <tr>
                        <td>Price</td>
                        <td>
                            <input type="number" onChange={(e) => setItem((prevObj) => ({
                                ...prevObj,
                                price: e.target.value
                            }))} />
                        </td>
                    </tr>
                    <tr>
                        <td>Stock</td>
                        <td>
                            <input type="number" onChange={(e) => setItem((prevObj) => ({
                                ...prevObj,
                                stock: e.target.value
                            }))} />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <input type="submit" value='Submit' />
                        </td>
                    </tr>
                </table>
                <hr />
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Id</th><th>Name</th><th>Price</th><th>Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map((item) => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.stock}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </form>
        </>
    );
}
export default Demo2;