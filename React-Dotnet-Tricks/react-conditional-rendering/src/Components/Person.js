import React from 'react';
const Person=()=>{
    const names=["Rohan","Rajiv","Mona","Jak","Joy"];
    return(
       <div>
           <ul className='text-info'>
               {/* <li>{names[0]}</li>
               <li>{names[1]}</li>
               <li>{names[2]}</li>
               <li>{names[3]}</li> */}
               {
                   names.map(item=><li>{item}</li>)
               }
           </ul>
       </div>
    )
}
export default Person;