function Product({ name, price, stock }) {
    return (
        <div>
            <h1>Product Details</h1>
            <h3>Name:{name}</h3>
            <h3>Price:{price}</h3>
            <h3>Stock:{stock}</h3>
        </div>
    )
}
function Shop(props) {
    let product = { name: 'Apple', price: 40, stock: 10 }
    return (
        <div>
            <Product name='Mouse' price={500} stock={10} />
            <Product name={product.name} stock={product.stock} price={product.price} />
            <Product name={props.name} stock={props.stock} price={props.price} />
        </div>
    )
}
export default Shop;