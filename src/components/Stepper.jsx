import React, { useContext, useState } from 'react'
import { addItems } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';
import { cartContext } from '../utils/UserContext';
import Modal from './Modal';
const Stepper = ({dData}) => {
    const [count,setCount] = useState(0);
    const [showPopup,setShowPopup] = useState(false);
    const dispatch = useDispatch()
    const {cartCount,setCartCount} = useContext(cartContext)
    const increment = (payload) =>{
        if(count==0){
            dispatch(addItems(payload))
        }
        setCartCount(cartCount+1);
        // window.alert(payload)
        setCount(count+1);
        setShowPopup(true);
        setTimeout(()=>{
            setShowPopup(false);
        },1000)
    }
    const decrement = () =>{
        setCount(count-1);
        setCartCount(cartCount-1);
    }
    return (
        <div className='relative bottom-5 text-[#1ba672] bg-white border border-[#ccc] rounded-md'>
            {(!count)?(<button  className=' w-30 h-11 0  px-5 font-bold  py-1  cursor-pointer hover:bg-[#c7c7c7]'  onClick={()=>{increment(dData.card.info.name)}}>ADD</button>):    
            (<div className='flex  items-center   w-30  h-11 font-bold text-2xl text-center '>
                <button className='w-1/3 h-full cursor-pointer hover:bg-[#c7c7c7]' onClick={()=>{decrement()}}>-</button>
                <div className="display w-1/3 h-full flex justify-center items-center cursor-default">
                    <p>{count}</p>
                </div>
                <button className='w-1/3 h-full cursor-pointer hover:bg-[#c7c7c7]' onClick={()=>{increment(dData.card.info.name)}} >+</button>
            </div>)}
            {showPopup && (<Modal><h1>{dData.card.info.name} is added to the cart!</h1></Modal>)}

        </div>

  )
}

export default Stepper