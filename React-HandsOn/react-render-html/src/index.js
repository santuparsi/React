import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
const myElement = <h1>Hello World!!!</h1>;
const myTable = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elsa</td>
    </tr>
  </table>
);
// ReactDOM.render(<p>Hello</p>, document.getElementById("root"));
ReactDOM.render(myTable, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
