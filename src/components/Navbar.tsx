import NavItem from "./NavItem";
import { navLinks } from "../data/NavData";

function Navbar() {
  return (
    <nav className="navbar">
      <></>
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
  );
}

export default Navbar;
