import { NavLink} from "react-router-dom";
// import { HashLink as Link } from "react-router-hash-link";

interface Props {
  id: string;
  link: string;
  name: string;
}

function NavItem(props: Props) {
  return (
      <li id={props.id + "NavDiv"} className="nav-li">
        <NavLink
          id={props.id + "NavLink"}
          className="navitem-anchor"
          to={props.link}
        >
          {props.name}
        </NavLink>
      </li>
  );
}

export default NavItem;
