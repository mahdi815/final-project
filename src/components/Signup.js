import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import SIgn_img from "./SIgn_img";
import {NavLink} from 'react-router-dom'



const Signup = () => {

    const [inpval,setInpval] = useState({
        name:"",
        email:"",
        date:"",
        password:""
    })

    const [data,setData] = useState([]);


    const getdata = (e) => {
         //console.log(e.target.value);

         const {value,name} = e.target;
         //console.log(value,name);

         setInpval(()=>{
            return {
                ...inpval,
                [name]:value
            }
         })

    }

    const addData = (e)=>{
        e.preventDefault();

        const {name,email,date,password} = inpval;

        if(name === ""){
            alert("name field is requred")
        }else if(email === ""){
            alert("email field is requred")
        }else if(!email.includes("@")){
            alert("plz enter valid email adress")
        }else if(date === ""){
            alert("date field is requred")
        }else if(password === ""){
            alert("password field is requred")
        }else if(password.length < 5){
            alert("password length greater five")
        }else{
            alert("account created successfully");

            localStorage.setItem("client",JSON.stringify([...data,inpval]));

        }


    }


    return (
        <>
            <div className="container mt-3">
                <section className="d-flex justify-content-between">
                    <div className="left mt-3 p-3" style={{width:"100%"}}>
                        <h3 className="text-center col-lg-6 my-4">Sign Up</h3>

                            <Form>
                              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                              <Form.Control type="text" name="name" onChange={getdata} placeholder="Enter Your Name" />
                              </Form.Group>

                              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                              <Form.Control type="email" name="email" onChange={getdata} placeholder="Enter email" />
                              </Form.Group>

                              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                              <Form.Control onChange={getdata} name="date" type="date" />
                              </Form.Group>
                        
                              <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                              <Form.Control type="password" name="password" onChange={getdata} placeholder="Password" />
                              </Form.Group>
                              <Button variant="primary" className="col-lg-6" onClick={addData} style={{background:"rgb(67,185,127)"}} type="submit">
                                Submit
                              </Button>
                            </Form>
                        <p className=" mt-3">Already Have an Account <span><NavLink to={"/login"}>SignIn</NavLink></span></p>


                    </div>
                    <SIgn_img/>
                </section>
            </div>
        </>
    )
}

export default Signup