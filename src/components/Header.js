import YarnLogo from "../app/assets/heartneedles.jpg";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem
} from "reactstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar light color sticky="top" >
      <NavbarBrand href="/">
        <img src={YarnLogo} alt="Yarn Logo" />
      </NavbarBrand>
    </Navbar>
  );
};
export default Header;
