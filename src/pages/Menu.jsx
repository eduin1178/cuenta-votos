import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">        
        <Link className="navbar-brand" to="/Home">Inico</Link>
      </div>
    </div>
  </nav>
  );
};

export default Menu;
