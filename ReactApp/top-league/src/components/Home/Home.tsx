import { Link } from "react-router-dom";
import SideMenu from "../SideMenu/SideMenu";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div>
      <SideMenu />
      <Link to="/login">Go to Login</Link>
      <Footer />
    </div>
  );
}

export default Home;
