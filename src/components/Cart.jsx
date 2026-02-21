import React from 'react'
import { useSelector } from 'react-redux'
import ItemList from './ItemList';

const Cart = () => {
    const cartItems = useSelector((store)=>store.cart.items);
  return (
    <div className='text-center  w-3/4 p-10'>
        <h1 className='text-2xl font-bold'>Cart</h1>
        <div>
            {(!cartItems.length)?(
              <h2>Cart is Empty</h2>
            ):(<ItemList data={cartItems} />)}
            
        </div>
    </div>
  )
}

export default Cart