import NavItem from "./NavItem";
import { navLinks } from "../data/NavData";
import NavLogo from "./NavLogo";

function Navbar() {
  return (
    <div className="navbar">
      <NavLogo></NavLogo>
      <nav className="navigationLinks">
        <ul className="nav-ul">
          {navLinks.map((data, idx) => (
            <NavItem
              key={idx}
              id={data.id}
              link={data.link}
              name={data.name}
            ></NavItem>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
