import React from "react";
import { NavLink } from "react-router-dom";
import Hcarousel from  './Hcarousel'
import OurService from "./ourService";
import Testimonail from "./testimonail";
import App from "./App";
import Fromtheblog from "./Fromtheblog";





const Home = () => {
    return (

        
        
        <div>


            <App/>



            <div className=" py-5 my-5 home-container ">
                <div className="row ">

                    <div className="home-pict col-md-6 d-flex justify-content-center">
                        <img className="home-pict" src="/photos/photohome2.jpg" alt="About Us" height="400px" width="500px" ></img>
                    </div>


                    <div className="col-md-6  ">
                        <h1 className="home-txt display-6 fw-bolder mb-0 my-2  "> New Collection</h1>
                        <p className="lead mb-4 home-txt-t my-5 ">
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
                        <NavLink to="/Products" className="btn btn-light px-3">MORE</NavLink>
                    </div>
                    
                </div>
            </div>



            <div>
                <Hcarousel/>
            </div>

            <div>
                <OurService/>
            </div>

            <div>
                <Testimonail/>
            </div>
            
            <div>
                <Fromtheblog/>
            </div>
            
            

        </div>
        

    );
};

export default Home;