import React from "react";
import { NavLink } from 'react-router-dom';


function Fromtheblog () {
    return (
        <div >
        
        <h2 className="ftbtitle"> FORM THE BLOG</h2>

            <div className="container">
                <div className="row">

                    <div className="col upstairs ">
                        <img src="/photos/testi2.jpg" className="relimg" alt="Contac tUs"  height="260px" width="400px"></img>
                        <div className="alpha">
                            <h5>Men's clothing</h5> 
                            <p>Nulla vitae elit libero, a pharetra vitae elit libero augue mollis interdum.Nulla Nulla vitae elit libero;Nulla vitae elit libero, a pharetra vitae elit libero augue mollis interdum.Nulla Nulla vitae elit libero</p>
                            <NavLink to="/Products" className="btn btn-dark px-3">MORE</NavLink>
                        </div>
                    </div>

                    <div className="col upstairs" >
                        <img src="/photos/testi2.jpg" className="relimg"  alt="Contac tUs"  height="260px" width="400px"></img>
                        <div className="alpha">
                            <h5>Women's clothing</h5> 
                            <p>Nulla vitae elit libero, a pharetra vitae elit libero augue mollis interdum.Nulla Nulla vitae elit libero;Nulla vitae elit libero, a pharetra vitae elit libero augue mollis interdum.Nulla Nulla vitae elit libero</p>
                            <NavLink to="/Products" className="btn btn-dark px-3">MORE</NavLink>
                        </div>
                    </div>

                    <div className="col upstairs" >
                        <img src="/photos/testi2.jpg" className="relimg"  alt="Contac tUs" height="260px" width="400px"></img>
                        <div className="alpha"> 
                            <h5>Jewelery</h5>
                            <p>Nulla vitae elit libero, a pharetra vitae elit libero augue mollis interdum.Nulla Nulla vitae elit libero;Nulla vitae elit libero, a pharetra vitae elit libero augue mollis interdum.Nulla Nulla vitae elit libero</p>
                            <NavLink to="/Products" className="btn btn-dark px-3">MORE</NavLink>
                        </div>
                    </div>

                </div>
        </div>

        </div>
        
    )
}

export default Fromtheblog;