import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigete = useNavigate();
  const handleSubmit = () => {
    console.log("submit")
    navigete("/Home")
  }
  return (
    <>
      <div className="box box-primary box-solid">
        <div className="box-header">
          <div className="box-title">
            <h4>Iniciar sesión</h4>
          </div>
        </div>
        <div className="box-body">
          <form onSubmit={handleSubmit}>
            <div className="row form-group">
              <div className="col-xs-12">
                <span>Correo electrónico</span>
                <input
                  type="email"
                  className="form-control"
                  placeholder="usuario@ejemplo.com"
                  required={true}
                />
              </div>
            </div>
            <div className="row form-group">
              <div className="col-xs-12">
                <span>Contraseña</span>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Contraseña"
                  required={true}
                />
              </div>
            </div>
            <div className="row form-group">
              <div className="col-xs-12">
                <button type="submit"
                  className="btn btn-primary btn-block">
                  <i className="fa fa-key"></i> Iniciar sesión
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
