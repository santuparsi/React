import React from 'react'

function NameList() {
    const names=['Rohan','Jeson','Robert']
    const nameList=names.map(name=><h2>{name}</h2>)
    return <div>{nameList}</div>
        // <div>
        //     {
        //         names.map(name=><h2>{name}</h2>)
        //     }
        // </div>
    
}

export default NameList
