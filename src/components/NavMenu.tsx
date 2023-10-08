import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { navLinks } from "../data/NavData";
import { useState } from "react";
import NavItem from "./NavItem";

function NavMenu() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <div onClick={handleNav} className="mobileNavigationMenu">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={!nav ? "fixed left-[-100%]" : "mobileNavigationMenuItems"}
      >
        {navLinks.map((dataItem, index) => (
          <NavItem
            key={index}
            id={dataItem.id}
            link={dataItem.link}
            name={dataItem.name}
          />
        ))}
      </div>
    </div>
  );
}

export default NavMenu;
