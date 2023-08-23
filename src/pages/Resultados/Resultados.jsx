import { Link } from "react-router-dom";
import PuestoMesa from "./PuestoMesa";
import Resultado from "./Resultado";
import user8 from "../../assets/img/user8-128x128.jpg"
import user2 from "../../assets/img/user2-160x160.jpg"
import user3 from "../../assets/img/user3-128x128.jpg"
import user6 from "../../assets/img/user6-128x128.jpg"
import def from "../../assets/img/default-50x50.gif"


const Resultados = () => {
  return (
    <div className="box box-success box-solid">
      <div className="box-header">
        <div className="pull-right">
          <Link to="/Home" className="btn btn-defaul">
            <i className="fa fa-reply"></i>
          </Link>
        </div>
        <div className="box-title">
          <h4>Resultados</h4>
        </div>
      </div>
      <div className="box-body">
        <PuestoMesa />
        <hr />
        <Resultado name="Guillermo Cardona Moreno" image={user8} />
        <Resultado name="Walter Miert" image={user2}/>
        <Resultado name="Teresa me Interesa" image={user3}/>
        <Resultado name="Marin" image={user6}/>
        <Resultado name="Voto en blanco" image={def} />
        <Resultado name="Votos nulos" image={def} />
        <Resultado name="Votos no marcados" image={def} />
        <div className="list-group-item">

        <div className="row">
          <div className="col-xs-8">
            <h4>TOTAL VOTOS</h4>
          </div>
          <div className="col-xs-4">
            <h4>124</h4>
          </div>
        </div>
        </div>
        <div className="list-group-item">
            <button className="btn btn-success btn-block">
              <i className="fa fa-send"></i> Evniar Resultados
            </button>
        </div>
      </div>
    </div>
  );
};

export default Resultados;
