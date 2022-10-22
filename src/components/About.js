import React from "react";
import { NavLink } from "react-router-dom";


const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className=" fw-bold mb-4">About Us</h1>
                        <p className="lead mb-4">
                            lorem Reet rt ee SRM er ae adie bt eS ests
                            elit. Nemo molestiae earum rem doloremque, nihil
                            delectus ullam error consectetur? Dicta, non
                            see lel um ad eo la
                            voluptate laudantium aliquam, officiis perspiciatis
                            molestias reiciendis consequuntur ullam perferendis
                            velit blanditiis distinctio assumenda a maxime
                            reprehenderit atque. Nam eius rerum distinctio, a
                            illo earum, optio molestias nostrum maxime quibusdam
                            delectus, adipisci impedit? Nam corporis reiciendis
                            minus quod eaque, laborum veritatis voluptatibus id
                            maiores tempore accusantium recusandae.
                            
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-dark px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/photos/aboutus.jpg" alt="About Us" height="400px" width="500px" ></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;