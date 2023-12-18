import { NavLink } from "react-router-dom";

const NavItem = () => {
  return (
    <>
      <li>
        <NavLink
          to="/"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "bold",
              color: isActive ? "#EEFF25" : "white",
            };
          }}
        >
          Home
        </NavLink>
      </li>
      <li className="text-white ">
        <NavLink
          to="/menu"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "bold",
              color: isActive ? "#EEFF25" : "white",
            };
          }}
        >
          Our Menu
        </NavLink>
      </li>
    </>
  );
};

export default NavItem;
