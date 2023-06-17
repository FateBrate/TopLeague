import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  function Login() {
    localStorage.setItem("user", name);
    navigate("/");
  }
  return (
    <>
      <br />
      <label id="loginLabel">Your Name: </label>
      <input
        className="form-control control"
        placeholder="Your name"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button className="btn btn-primary" onClick={Login}>
        Login
      </button>
    </>
  );
}
export default Login;
