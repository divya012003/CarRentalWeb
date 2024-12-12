import React from "react";
import { NavLink } from "react-router-dom";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar=()=>{

    return(
        <>
        <nav className='navbar navbar-expand-lg navbar-light '>
         {/* <div><FontAwesomeIcon icon="fa-solid fa-car" /></div> */}
        <div className="text-danger fw-bold display-6 mx-5"><i className="fa-solid fa-car mx-3" style={{color: "#e60f0f"}}></i>Cental</div>
< ul className='navbar-nav m-auto fw-bold'>
    <li className='nav-item mx-4'>     
        <NavLink to='/' className="nav-link text-danger "> Home </NavLink >
    </li>

    <li className='nav-item mx-4'>
        <NavLink to="/about" className="nav-link text-dark">About </NavLink>
    </li>


    <li className='nav-item mx-4'>
        <NavLink to="/contact" className="nav-link text-dark">Contact</NavLink>
    </li>


    <li className='nav-item mx-4'>
         <NavLink to="/services" className="nav-link  text-dark">Services</NavLink>
    </li>

    <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Pages
          </NavLink>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><NavLink className="dropdown-item" href="#">Action</NavLink></li>
            <li><NavLink className="dropdown-item" href="#">Another action</NavLink></li>
            <li><hr className="dropdown-divider"/></li>
            <li><NavLink className="dropdown-item" href="#">Something else here</NavLink></li>
          </ul>
        </li>

    <li className='nav-item mx-4'>
        <NavLink to="/blog" className="nav-link text-dark">Blog</NavLink>
    </li>
</ul>
<button type="button" className="btn btn-danger mx-4 ">Get Started</button>
</nav>


        </>
    )

}

export default Navbar