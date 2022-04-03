import react from "react";
import Product from "./Product";
const ProductList=()=>{
    return(
        <div>
       <table className="table table-bordered">
           <thead className="thead-dark">
               <tr>
                   <th>PID</th>
                   <th>Name</th>
                   <th>Price</th>
                   <th>Stock</th>
               </tr>
           </thead>
       <tbody>
          <Product pid='1' name='keyboar' price='200' stock='10' />
          <Product pid='2' name='Mouse' price='400' stock='10' />
          <Product pid='3' name='Pendrive' price='600' stock='10' />
       </tbody>

       </table>
        </div>
    )
}
export default ProductList;