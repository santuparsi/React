import React from 'react'
let name='Mohan'
let n1=10,n2=20
let num=10
//reusable function
function CheckEvenOrOdd(num)
{
    if(num%2==0)
    {
       return <h2>{num} is Even</h2>
    }
    else
    {
        return <h2>{num} is Odd</h2>
    }
}
let color='red';
let colors=['red','green','yeelow']
let users=[{name:'mohan',age:20},
{name:'ram',age:20},
{name:'john',age:20},]
let styleObj={color:'green'}
const App=()=>{
    return <div>
        <h1 style={{fontSize:'20px',color:'red'}}>JSX Examples</h1>
        <h1>My Names is {name}</h1>
        <p>{n1}+{n2}={n1+n2}</p>
        <p>if..else</p>
        {CheckEvenOrOdd(num)}
        {
            //self-executable function
            (()=>{
                if(num%2==0)
                {
                   return <h2>{num} is Even</h2>
                }
                else
                {
                    return <h2>{num} is Odd</h2>
                }
            })()
        }
        <h1>If</h1>
        {
            num%2===0&&<div>Even Number</div>
        }
        <h1 style={styleObj}>ternary operator</h1>
        {
            num%2==0?<div>Even Number</div>:<div>Odd Number</div>
        }
        <h1>Switch</h1>
        {
            (()=>{
switch(color)
{
    case 'red': return<span>Red</span>
    case 'blue': return <span>Blue</span>
}
            })()
        }
        <h1>For Loop</h1>
        <ul>
        {
           
                colors.map((i)=>{
                   return <li key={i}>{i}</li>
                })
        }
        </ul>
        <h1>for loop with object array</h1>
        <ul>
        {
           
                users.map((item)=>{
                   return <li key={item.name}>{item.name},{item.age}</li>
                })
        }
        </ul>
    </div>
}
export default App