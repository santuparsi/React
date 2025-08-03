import React from "react";
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => <li>{number}</li>);
  return (
    <>
      <ul>
        {numbers.map((n) => (
          <li>{n}</li>
        ))}
      </ul>
    </>
    // <ul>{listItems}</ul>
  );
}
export default NumberList;

//Test
// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(
//   <NumberList numbers={numbers} />,
//   document.getElementById('root')
// );
