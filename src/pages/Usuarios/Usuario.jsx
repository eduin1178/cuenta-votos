import { Link } from "react-router-dom"
import imgUser from "../../assets/img/user2-160x160.jpg"

const Usuario = ({name}) => {
  return (
    <div className="user-panel">
    <div className="pull-left image">
      <img src={imgUser} className="img-circle" alt="User Image" />
    </div>
    <div className="pull-right">
      <Link to="/Usuario/Mesa">
      <i className="fa fa-angle-right"></i>
      </Link>
    </div>
    <div className="pull-left info">
      <p>{name}</p>
      <small><i className="fa fa-envelope"></i> email@example.com</small>
    </div>
  </div>
  )
}

export default Usuario