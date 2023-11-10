import React, { useContext } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import AlertContext from '../context/alerts/AlertContext';
const Navbar = () => {
  const { showAlert } = useContext(AlertContext)
  let location = useLocation();
  const navigate = useNavigate();

  const handleLogout = ()=>{
    localStorage.clear('token')
    navigate('/');
    showAlert('Logout Successfully', 'success')
  }
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="#">iNotebook</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className={`nav-link ${location.pathname==='/'?'active': ''}`} aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className={`nav-link ${location.pathname==='/about'?'active': ''}`} to="/about">About</Link>
                </li>
            </ul>
                {!localStorage.getItem('token')? <div><Link type="button" to='/login' className=" mx-2 btn btn-outline-info">Login</Link>
                <Link type="button" to='/signup' className="mx-2 btn btn-outline-info">Sign up</Link></div>: <div><button type="button" className="mx-2 btn btn-outline-info" onClick={handleLogout}>Log Out</button></div>}
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
