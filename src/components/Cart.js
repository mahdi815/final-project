import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { deleteItem } from '../redux/action/index'



const Cart = () => {
    const state = useSelector((state)=> state.handleCart)
    const dispatch = useDispatch()

    const handleClose = (item) => {
        dispatch(deleteItem(item))
    }

    const cartItem = (cartItem) =>{
        return(
            <div key={cartItem.id}>
            <div className='px-4 my-5 bg-light rounded-3' >
                <div className='container py-4'>
                    <button onClick={()=>handleClose(cartItem)}   className='btn-close float-end' aria-label="close"></button>
                    <div className='row justify-content-center'>
                        <div className='col-md-6'>
                            <img src={cartItem.image} alt={cartItem.title} height="200px" width="200px"></img>
                        </div>                
                        <div className='col-md-4'>
                            <h3>{cartItem.title}</h3>
                            <p className='lead fw-bold'>${cartItem.price * cartItem.qty}</p>
                            <label className='lead fw-bold' >Quantity:  </label>
                            <input readOnly className='lead fw-bold col-md-2' type="number" id="Quantity" value= {cartItem.qty}></input>

                        </div>
                    </div>
                </div>
        </div>

            </div>
            
            
        )
    }

  const emptyCart= () => {
    return (
        <div className='px-4 my-5 bg-light rounded-3'>
            <div className='container py-4'>
                <div >
                    <h3>Your Cart is Empty</h3>
                </div>            
            </div>
        </div>
    );
  }

  const button = () => {
    return(
        <div className='container'>
            <div className='row'>
                <NavLink to="/checkout" className='btn btn-outline-dark mb-5 w-25 mx-auto  '>Proceed To Checckout</NavLink>
            </div>
        </div>
    );
  }
 
  return (
    <>
        {state.length === 0 && emptyCart()}
        {state.length !== 0 && state.map(cartItem)}
        {state.length !== 0 && button()}
    </>
  )
}

export default Cart