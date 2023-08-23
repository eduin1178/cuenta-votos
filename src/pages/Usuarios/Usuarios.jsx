import { Link } from "react-router-dom"
import Usuario from "./Usuario"

const Usuarios = () => {
  return (
    <div className="box box-success box-solid">
      <div className="box-header">
        <div className="pull-right">
          <Link to="/Home" className="btn btn-defaul">
            <i className="fa fa-reply"></i>
          </Link>
        </div>
        <div className="box-title">
          <h4>Usuarios</h4>
        </div>
      </div>
      <div className="box-body">

      <Usuario name="GUILLERMO CARDONA MORENO"/>
      <Usuario name="MANUEL GALE MORENO"/>
      <Usuario name="EDUIN PEÑATA ROMERO"/>
      <Usuario name="FULANITO DE TAL"/>
     
      </div>
    </div>

  )
}

export default Usuarios