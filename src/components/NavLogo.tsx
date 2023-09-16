import { navLogo } from "../data/NavData";
import { Link } from "react-router-dom";
// import { HashLink as Link } from "react-router-hash-link";

function NavLogo() {
  return (
      <Link id={navLogo.id} to={navLogo.link} className="text-logo">
        {navLogo.text.toUpperCase()}
      </Link>
  );
}

export default NavLogo;
