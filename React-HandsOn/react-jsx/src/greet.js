import React from 'react'
function Greet()
{
    return(
        // <div id='div1'>
        //     <h1 style="color:red"> I am Santhosh Parsi</h1>
        // </div>
        React.createElement('div',
        {id:'div1',className:'dummyclass'},
        React.createElement('h1',
        {style:{color:'red'}}
        ,'I am Santhosh Parsi'))
    )
}
export default Greet;