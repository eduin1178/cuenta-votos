import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div class="jumbotron">
        <h2>Conteo de votos 2023</h2>
        <h5>Respetado usuario, cuando se cumpla el horario de cierre de elecciones se podrá registrar resultados</h5>
        <p>
          <Link class="btn btn-primary" to="/Home">
            Actualizar
          </Link>
        </p>
      </div>
      <Link to="/" className="list-group-item">
        <div className="user-panel">
          <div className="pull-left image">
            <i className="fa fa-key fa-2x img-ricle text-primary"></i>
          </div>
          <div className="pull-right">
            <span>
              <i className="fa fa-angle-right"></i>
            </span>
          </div>
          <div className="pull-left info">
            <p>Iniciar sesión</p>
          </div>
        </div>
      </Link>

      {/* <Link to="/Usuarios" className="list-group-item">
        <div className="user-panel">
          <div className="pull-left image">
            <i className="fa fa-users fa-2x img-ricle text-primary"></i>
          </div>
          <div className="pull-right">
            <span>
              <i className="fa fa-angle-right"></i>
            </span>
          </div>
          <div className="pull-left info">
            <p>Usuarios</p>
          </div>
        </div>
      </Link> */}

      <Link to="/Resultados" className="list-group-item">
        <div className="user-panel">
          <div className="pull-left image">
            <i className="fa fa-list fa-2x img-ricle text-primary"></i>
          </div>
          <div className="pull-right">
            <span>
              <i className="fa fa-angle-right"></i>
            </span>
          </div>
          <div className="pull-left info">
            <p>Resultados</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Home;
