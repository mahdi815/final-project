import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from "react-router-dom";


const Home = () => {
    return (

        
        
        <div>
            <div className="card text-bg-dark border-0 my-5  ">
                <img src="/photos/pic2.jpg" className="card-img" alt="background" height="600px"></img>
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                        <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
                    </div>
                </div>
            </div>
            <div>
                <Container className="my-4 ">
                    <Row >
                        <Col className="new-arrivals text-center my-4  ">
                            <h2 className="fw-bold my-4">New Arrivals</h2>
                            <p className="p-box">lorem Reet rt ee SRM er ae adie bt eS ests elit. Nemo molestiae earum rem doloremque, nihil delectus ullam error consectetur? Dicta, non see lel um ad eo la voluptate laudantium aliquam, officiis perspiciatis molestias reiciendis consequuntur ullam perferendis velit blanditiis distinctio assumenda a maxime reprehenderit atque. Nam eius rerum distinctio, a illo earum, optio molestias nostrum maxime quibusdam delectus, adipisci impedit? Nam corporis reiciendis minus quod eaque</p>
                            <NavLink className="btn btn-outline-dark my-3" to="/Productscomponent">SEE MORE</NavLink>
                        </Col>
                        
                        <Col className="a-client text-center my-4">
                            <h2 className="fw-bold my-4">Sign Up As a Client</h2>
                            <p className="p-box">lorem Reet rt ee SRM er ae adie bt eS ests elit. Nemo molestiae earum rem doloremque, nihil delectus ullam error consectetur? Dicta, non see lel um ad eo la voluptate laudantium aliquam, officiis perspiciatis molestias reiciendis consequuntur ullam perferendis velit blanditiis distinctio assumenda a maxime reprehenderit atque. Nam eius rerum distinctio, a illo earum, optio molestias nostrum maxime quibusdam delectus, adipisci impedit? Nam corporis reiciendis minus quod eaque</p>
                            <NavLink to="/login" className="btn btn-outline-dark my-3">SEE MORE</NavLink>        
                        </Col>

                        <Col className="shop-us text-center my-4">
                            <h2 className="fw-bold my-4">Shop With Us</h2>
                            <p className="p-box">lorem Reet rt ee SRM er ae adie bt eS ests elit. Nemo molestiae earum rem doloremque, nihil delectus ullam error consectetur? Dicta, non see lel um ad eo la voluptate laudantium aliquam, officiis perspiciatis molestias reiciendis consequuntur ullam perferendis velit blanditiis distinctio assumenda a maxime reprehenderit atque. Nam eius rerum distinctio, a illo earum, optio molestias nostrum maxime quibusdam delectus, adipisci impedit? Nam corporis reiciendis minus quod eaque</p>
                            <NavLink className="btn btn-outline-dark my-3" to="/Productscomponent">SEE MORE</NavLink>
                        </Col>
                    </Row>
            </Container>
            </div>
        </div>

    );
};

export default Home;