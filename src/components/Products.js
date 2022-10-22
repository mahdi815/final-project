import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom';

const Products = () => {

    const [data,setdata] = useState([]);
    const [filter, setFilter] = useState([data]);
    let conponentMounted = true;

    useEffect(() => {
        const getProducts = async () => {

            const response = await fetch("https://fakestoreapi.com/products")
            setdata(await response.clone().json());
            setFilter(await response.json());
        
    }

    if(data.length === 0){
        getProducts();
    }
    
    },[]);

    const filterProduct = (cat) => {
        
        const updatedList = data.filter((x)=>x.category === cat);
        setFilter(updatedList)
    }
   
    
        return (
            <>

                <div> 
                    <div className='container my-4 '>
                        <div className='row'>
                            <div className='col-12 mb-2'>
                                <h1 className='display-6 fw-bolder text-center'>LatestProducts</h1>
                                <hr />
                            </div>
                            </div>
                    </div>
                </div>


                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>All</button>
                <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
                <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("women's clothing")}>Women's Clothing</button>
                <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("jewelery")}>Jewelery </button>
                <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("electronics")}>Electronic</button>
                </div>
                <div  className=" products d-flex flex-wrap" >
                { filter.length > 0 && filter.map( (product,index) => {
                    return(
                        <div key={index} className='product-cnt'>

                            <div  >

                            <div >
                            
                                <div className="card h-100 text-center p-4" key={product.id} >
                                    <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
                                    <div className="card-body">
                                        <h5 className="card-title mb-0"> {product && product.title}...</h5>
                                        <p className="card-text lead fw-bold">{product.price}$ </p>
                                        <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                                    </div>
                                </div>

                            </div>
                        </div>

                        </div>
                        
                    )
                })
                }
                </div>
                

                
            </>

        )
    

}

export default  Products;