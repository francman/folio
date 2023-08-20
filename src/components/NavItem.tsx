import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

interface Props {
  id: string;
  link: string;
  name: string;
}

function NavItem(props: Props) {
  return (
    <BrowserRouter>
      <li id={props.id + "NavDiv"} className="nav-li">
        <Link
          id={props.id + "NavLink"}
          className="navitem-anchor"
          to={props.link}
        >
          {props.name}
        </Link>
      </li>
    </BrowserRouter>
  );
}

export default NavItem;
