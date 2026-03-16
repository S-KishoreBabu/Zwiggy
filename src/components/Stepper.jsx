import React, { useState } from 'react'
import { addItems, removeItems } from '../utils/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import Modal from './Modal';
const Stepper = ({dData}) => {
    // We now read the true quantity from the Redux store
    const cartItems = useSelector(store => store.cart.items);
    const itemInCart = cartItems.find(i => i.dData.card.info.id === dData.card.info.id);
    const count = itemInCart ? itemInCart.quantity : 0;

    const [showPopup,setShowPopup] = useState(false);
    const dispatch = useDispatch();

    const increment = () =>{
        dispatch(addItems(dData));
        setShowPopup(true);
        setTimeout(()=>{
            setShowPopup(false);
        },1000)
    }

    const decrement = () =>{
        dispatch(removeItems(dData));
    }

    return (
        <div className='relative bottom-5 text-[#1ba672] bg-white border border-[#ccc] rounded-md'>
            {(!count)?(
                <button  className=' w-30 h-11 0  px-5 font-bold  py-1  cursor-pointer hover:bg-[#c7c7c7]'  onClick={increment}>ADD</button>
            ) :    
            (<div className='flex items-center w-30 h-11 font-bold text-2xl text-center'>
                <button className='w-1/3 h-full cursor-pointer hover:bg-[#c7c7c7]' onClick={decrement}>-</button>
                <div className="display w-1/3 h-full flex justify-center items-center cursor-default">
                    <p>{count}</p>
                </div>
                <button className='w-1/3 h-full cursor-pointer hover:bg-[#c7c7c7]' onClick={increment} >+</button>
            </div>)}
            {showPopup && (<Modal><p>{dData.card.info.name} is added to the cart!</p></Modal>)}
        </div>
  )
}

export default Stepper