import { Link } from "react-router-dom";

const MenuItems = () => {
  return (
    <>
      <Link className="nav-link" to="/Login">
        Login
      </Link>
      <Link className="nav-link" to="/Usuarios">
        Usuarios
      </Link>
    </>
  );
};

export default MenuItems;
