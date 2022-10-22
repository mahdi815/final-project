import React, {useState, useEffect} from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { addCart } from '../redux/action';



const Product = () => {

    const {id} = useParams();
    const [product, setProduct] = useState([]);


    const dispatch = useDispatch();
    const addProduct = (product) => {
        console.log(product)
        dispatch(addCart(product))
    }

    useEffect(() => {
        const getProduct = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            console.log(response);
            setProduct(await response.json());
        }
        getProduct();
    },[]);

   

    const ShowProduct = () => {
        return(
            <>
                <div className="col-md-6 ">
                    <img className="my-5" src={product.image} alt={product.title} height="400px" width="400px" />
                </div>
                <div className="col-md-6 my-5">
                <h4 className="text-uppercase text-black-50">
                    {product.category}
                </h4>
                <h1 className="display-5">{product.title}</h1>
                <p className="lead fw-bolder">
                    Rating {product.rating && product.rating.rate}
                    <i className="fa fa-star"></i>
                </p>
                <h3 className="display-6 fw-bold my-4">$ {product.price}</h3>
                <p className="lead">{product.description}</p>
                <button className="btn btn-outline-dark px-4 py-2" onClick={()=>addProduct(product)}>add to card</button>
                <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">Go To Cart</NavLink>

                </div>
            </>
        )
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <ShowProduct/>
                </div>
            </div>
        </div>
    );
}

export default Product;