import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/authService";
import "./Login.css";
import { log } from "console";
function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <div className="container">
      <form className="login-form">
        <br />
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          className="form-control control"
          placeholder="Username"
          onChange={(e) => setUserName(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          className="form-control control"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <a href="">Forgot password ?</a>
        <button className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
  function handleLogin() {
    login(userName, password)
      .then((data) => {
        if (!!data) {
          console.log("Uspjesan login");
          console.log(data);
          localStorage.setItem("user", userName);
          navigate("/home");

          console.log("otiso home");
          return;
        }
      })
      .catch((error: any) => {
        console.error("Login failed:", error);
        alert("Neuspjesan login");
      });
  }
}
export default Login;
