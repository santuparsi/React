import { useState } from "react";

function Demo4() {
    const [item, setItem] = useState({
        id: 1,
        name: 'Keyboard',
        price: 400,
        stock: 10
    });
    const updateItem = () => {
        // setItem({
        //     price: 500,
        //     stock: 100
        // })
        setItem((prevState) => ({
            ...prevState,
            price: 500,
            stock: 100,
           
        }))
    }
    return (
        <>
            <h3>ID:{item.id}</h3>
            <h3>Name:{item.name}</h3>
            <h3>Price:{item.price}</h3>
            <h3>Stock:{item.stock}</h3>
            <button onClick={updateItem}>Update</button>
        </>
    )
}
export default Demo4;