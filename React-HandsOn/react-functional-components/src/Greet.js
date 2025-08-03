// function Greet() {
//     let name = 'Virat';
//     let a=10;
//     let b=30;
//     return (
//         <>
//             <h1>Hello {name}</h1>
//             <h4>Sum:{a+b}</h4>
//         </>
//     )
// }
function Greet(props) {
    return (
        <div>
            <h2>Hello {props.name}</h2>
            <h3>My Favorite Sport {props.sport}</h3>
            <h3>You are {props.age} years old</h3>
        </div>
    )
}
export default Greet;