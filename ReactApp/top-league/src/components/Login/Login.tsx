import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
function Login() {
  const [name, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  function login() {
    localStorage.setItem("user", name);
    navigate("/");
  }
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
        <button className="btn btn-primary" onClick={login}>
          Login
        </button>
      </form>
    </div>
  );
}
export default Login;
