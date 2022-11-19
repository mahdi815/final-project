import React from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";



const NavBar = () => {

  const state = useSelector((state)=> state.handleCart)

  
  return (
    <div>

    <nav className="  navbar navbar-expand-lg py-3 shadow-sm   p-3 mb-2 bg-dark text-white">
  <div className="container">
    <NavLink className=" navbar-brand ms-2 navbar-brand mx-auto text-light fs-4 " to="/Productscomponent">COLLECTION</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className=" ms-2 navbar-brand mx-auto text-light " aria-current="page" to="/">Home</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className=" ms-2 navbar-brand mx-auto text-light " to="/Productscomponent">Products</NavLink>
          </li>

          <li className="nav-item">
          <NavLink className=" ms-2 navbar-brand mx-auto text-light" to="/about">About</NavLink>
          </li>

          <li className="nav-item">
          <NavLink className=" ms-2 navbar-brand mx-auto text-light" to="/contact">Contact</NavLink>
          </li>

      </ul>
      <div className='buttons'>
        <NavLink to="/login" className="btn btn-light">
          <i className='fa fa-sign-in me-1'></i>login</NavLink>
        <NavLink to="/signup" className="btn btn-light ms-2">
          <i className='fa fa-user-plus me-1'></i>Register</NavLink>
        <NavLink to="/cart" className="btn btn-light ms-2 ">
          <i className='fa fa-shopping-cart me-1'></i>Cart ({state.length})</NavLink>
      </div>
    </div>
  </div>
</nav>

    </div>
  );
};
export default  NavBar;

