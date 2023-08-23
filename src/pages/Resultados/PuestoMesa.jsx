
import { Link } from "react-router-dom";
import imgUser from "../../assets/img/photo2.png"

const PuestoMesa = () => {

  return (
    <>
      <div className="user-panel">
        <div className="pull-left image">
          <img src={imgUser} className="img-circle" />
        </div>
        <div className="info">
          <p>
            <b>Puesto: 1 - Necoclí</b>
          </p>
          <p>
            <i className="fa fa-table"></i> Mesa: 21

          </p>
          
        </div>
      </div>
    </>
  );
};

export default PuestoMesa;
