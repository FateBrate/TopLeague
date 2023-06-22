import { Link } from "react-router-dom";

function Home() {
  const user = localStorage.getItem("user");

  return (
    <div>
      <h5>Hello {user}</h5>
      <Link to="/login">Go to Login</Link>
    </div>
  );
}

export default Home;
