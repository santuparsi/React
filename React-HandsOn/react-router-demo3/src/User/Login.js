import { useState } from "react";
import { useNavigate } from "react-router-dom";
const users = [
  { username: "Rahin", password: "12345", role: "student" },
  { username: "Faris", password: "12345", role: "admin" },
  { username: "Priya", password: "12345", role: "admin" },
  { username: "Reshma", password: "12345", role: "student" },
  { username: "Sanu", password: "12345", role: "teacher" },
];
const Login = (e) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ username: "", password: "" });
  const [err, setErr] = useState("");
  const Validate = (e) => {
    e.preventDefault();

    let validUser = users.find(
      (u) => u.username === user.username && u.password === user.password
    );
    if (validUser != null) {
      //set username in sessionstorage
      sessionStorage.setItem("uname",
        user.username);
      let name = user.username;
      if (validUser.role === "admin") {
        navigate("/admin-dashboard/" + name);
      } else if (validUser.role === "student") {
        navigate("/student-dashboard/" + name);
      } else {
        navigate("/teacher-dashboard/" + name);
      }

      //setErr("Valid Credentials");
    } else {
      setErr("Invalid User Credentials");
    }
  };
  return (
    <div className="container">
      <form onSubmit={Validate}>
        <table className="table table-bordered">
          <tr>
            <td>UserName</td>
            <td>
              <input
                type="text"
                value={user.username}
                onChange={(e) =>
                  setUser((prevstate) => ({
                    ...prevstate,
                    username: e.target.value,
                  }))
                }
              />
            </td>
          </tr>
          <tr>
            <td>Password</td>
            <td>
              <input
                type="password"
                value={user.password}
                onChange={(e) =>
                  setUser((prevstate) => ({
                    ...prevstate,
                    password: e.target.value,
                  }))
                }
              />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button type="submit">Login</button>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <span className="text-warning">{err}</span>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};
export default Login;
