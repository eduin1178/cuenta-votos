
const Resultado = ({ name, image }) => {
  return (
    <div className="list-group-item">
    <div className="row">
      <div className="col-xs-8">
        <div className="user-panel">
          <div className="pull-left image" style={{marginRight:"5px", marginLeft:"-10px"}}>
            <img src={image} className="img-circle" alt="User Image" />
          </div>
          <h5>
            {name}
          </h5>
        </div>
      </div>
      <div className="col-xs-4">
        <span>Votos</span>
        <input type="number" className="form-control" defaultValue={0} />
      </div>
    </div>
    </div>
  );
};

export default Resultado;
