import Carousel from 'react-bootstrap/Carousel';
import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom';



function UncontrolledExample() {

    const [data,setdata] = useState([]);

    const [filter, setFilter] = useState([data]);
    
    const [index, setIndex] = useState(1);

    const handleSelect = (selectedIndex, e) => {
        console.log(index,selectedIndex)
        if(index === 4 && selectedIndex === 0 ){
            setIndex(1);
        }
        else if (index === 0 && selectedIndex === 1 ){
            setIndex(1);
        } else{
            setIndex(selectedIndex)
        }
        

      
    };
  
    useEffect(() => {
        const getProducts = async () => {

            const response = await fetch("https://fakestoreapi.com/products")
            setdata(await response.clone().json());
        
    }

    if(data.length === 0){
        getProducts();
    }
    
    },[]);
    

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className='swucont bg-light text-center  '>
        <h1 className='display-4 fw-bolder text-center '> SHOP WITH US</h1>
      <Carousel.Item>
      <div className='norvege'>
        <div  className=" product d-flex product-lpd " >
            { filter.length > 0 && data.slice(1, 4).map( (product,index) => {
                return(
                    <div key={index} className='product-cnt'>
                        <div  >
                            <div  >
                                <div className="card h-100 text-center p-4" key={product.id} >
                                    <img  style={{ width: "140px", height: "140px" }}  src={product.image} className="card-img-top piccard" alt={product.title}    />
                                    <div className="card-body">
                                        <h5 className="sizing card-title mb-0"> {product && product.title}...</h5>
                                        <p className="card-text lead fw-bold">{product.price}$ </p>
                                        <NavLink to={`/products/${product.id}`} className="btn btn-dark">Buy Now</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                })
            }
        </div>
        </div>
      </Carousel.Item>



      <Carousel.Item>
      <div className='norvege'>
      <div  className=" product d-flex product-lpd " >
          { filter.length > 0 && data.slice(15, 18).map( (product,index) => {
              return(
                  <div key={index} className='product-cnt'>
                      <div  >
                          <div  >
                              <div className="card h-100 text-center p-4" key={product.id} >
                                  <img  style={{ width: "140px", height: "140px" }}  src={product.image} className="card-img-top piccard" alt={product.title}    />
                                  <div className="card-body">
                                      <h5 className="sizing card-title mb-0 "> {product && product.title}...</h5>
                                      <p className="card-text lead fw-bold">{product.price}$ </p>
                                      <NavLink to={`/products/${product.id}`} className="btn btn-dark">Buy Now</NavLink>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              )
              })
          }
      </div>
      </div>
      </Carousel.Item>



      <Carousel.Item>
      <div className='norvege'>
      <div  className=" product d-flex product-lpd " >
          { filter.length > 0 && data.slice(5, 8).map( (product,index) => {
              return(
                  <div key={index} className='product-cnt'>
                      <div  >
                          <div  >
                              <div className="card h-100 text-center p-4" key={product.id} >
                                  <img  style={{ width: "140px", height: "140px" }}  src={product.image} className="card-img-top piccard" alt={product.title}    />
                                  <div className="card-body">
                                      <h5 className="sizing card-title mb-0"> {product && product.title}...</h5>
                                      <p className="card-text lead fw-bold">{product.price}$ </p>
                                      <NavLink to={`/products/${product.id}`} className="btn btn-dark">Buy Now</NavLink>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              )
              })
          }
      </div>
      </div>
      </Carousel.Item>



      <Carousel.Item>
      <div className='norvege'>
      <div  className=" product d-flex product-lpd " >
          { filter.length > 0 && data.slice(10, 13).map( (product,index) => {
              return(
                  <div key={index} className='product-cnt'>
                      <div  >
                          <div  >
                              <div className="card h-100 text-center p-4" key={product.id} >
                                  <img  style={{ width: "140px", height: "140px" }}  src={product.image} className="card-img-top piccard" alt={product.title}    />
                                  <div className="card-body">
                                      <h5 className="sizing card-title mb-0"> {product && product.title}...</h5>
                                      <p className="card-text lead fw-bold">{product.price}$ </p>
                                      <NavLink to={`/products/${product.id}`} className="btn btn-dark">Buy Now</NavLink>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              )
              })
          }
      </div>
      </div>
      </Carousel.Item>


      
    </Carousel>
  );
}

export default UncontrolledExample;