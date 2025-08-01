import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";
export default function Navbar(props) {

  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.AboutText}</Link>
              </li>
            </ul>
            {/* <div className="d-flex">
              <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}}style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
              <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}}style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
              <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}}style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
              <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}}style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
            </div> */}
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-primary" type="submit">Search</button>
            </form>
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} mx-1`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault"/>
                <label className="form-check-label" htmlFor="switchCheckDefault">Enable {props.mode}-Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  AboutText: PropTypes.string
}
