import { Link } from "react-router-dom";
import SideMenu from "../SideMenu/SideMenu";

function Home() {
  return (
    <div>
      <SideMenu />
      <Link to="/login">Go to Login</Link>
    </div>
  );
}

export default Home;
