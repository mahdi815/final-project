import React from 'react';
import Home from './Home';
import {Routes,Route} from "react-router-dom"
import Products from './Products';
import Product from './Product';



const Store = () => {


    return (
        <div>
        <Routes>
            <Route  path='/' element={<Home/>}/>
            <Route  path='/Products' element={<Products/>}/>
            <Route  path='/products/:id' element={<Product/>}/>

        </Routes>
        
        </div>
    )
}


export default Store;