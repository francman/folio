import { navLogo } from "../data/NavData";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

function NavLogo() {
  return (
    <BrowserRouter>
      <Link id={navLogo.id} to={navLogo.link} className="text-logo">
        {navLogo.text.toUpperCase()}
      </Link>
    </BrowserRouter>
  );
}

export default NavLogo;
