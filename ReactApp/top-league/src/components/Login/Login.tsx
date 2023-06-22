import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { login } from "../../services/authService";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin(event: any) {
    event.preventDefault(); // Prevent form submission

    login(username, password)
      .then((response) => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Login failed:", error);
      });
  }

  return (
    <div className="container">
      <form className="login-form" onSubmit={handleLogin}>
        <br />
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          className="form-control control"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          className="form-control control"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <a href="">Forgot password?</a>
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
