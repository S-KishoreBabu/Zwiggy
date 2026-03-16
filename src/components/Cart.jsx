import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Stepper from './Stepper';
import nonveg from '../assets/nonveg.png'
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    
    // Bill Calculations
    const itemTotal = cartItems.reduce((acc, item) => {
        const price = item.dData.card.info.price || item.dData.card.info.defaultPrice;
        return acc + (price / 100) * item.quantity;
    }, 0);
    
    const deliveryFee = itemTotal > 0 ? 49 : 0;
    const gstAndCharges = itemTotal > 0 ? (itemTotal * 0.05) : 0; // rough 5% assumption
    const toPay = itemTotal + deliveryFee + gstAndCharges;

    if (!cartItems.length) {
        return (
            <div className='flex flex-col items-center justify-center min-h-[60vh]'>
                <h2 className='text-3xl font-bold text-[#535665] mt-6'>Your cart is empty</h2>
                <p className='text-[#7e808c] mt-2'>You can go to home page to view more restaurants</p>
            </div>
        );
    }

    return (
        <div className='flex justify-center bg-[#e9ecee] min-h-screen py-10'>
            <div className='w-full max-w-3xl flex flex-col gap-6'>
                {/* Header / Clear Cart */}
                <div className='bg-white p-6 shadow-sm flex justify-between items-center'>
                    <h1 className='text-2xl font-bold text-[#282c3f]'>Secure Checkout</h1>
                    <button 
                        onClick={() => dispatch(clearCart())}
                        className='text-[#60b246] font-bold border border-[#60b246] px-4 py-1.5 hover:bg-[#60b246] hover:text-white transition-colors cursor-pointer'>
                        Clear Cart
                    </button>
                </div>

                {/* Items List */}
                <div className='bg-white p-6 shadow-sm'>
                    <div className='flex flex-col gap-5'>
                        {cartItems.map((item) => {
                            const info = item.dData.card.info;
                            const price = (info.price || info.defaultPrice) / 100;

                            return (
                                <div key={info.id} className='flex justify-between items-center py-2'>
                                    <div className='flex items-center gap-3 w-1/3'>
                                        {info.itemAttribute?.vegClassifier === 'NONVEG' && (
                                            <img src={nonveg} className="w-4 h-4" alt="nonveg" />
                                        )}
                                        <p className='text-sm text-[#3e4152] line-clamp-2'>{info.name}</p>
                                    </div>

                                    {/* Stepper controls quantity locally in Cart page too */}
                                    <div className='w-max mt-4'>
                                        <Stepper dData={item.dData} />
                                    </div>

                                    <div className='w-1/6 text-right'>
                                        <p className='text-[#535665] text-sm'>₹{price * item.quantity}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    
                    {/* Add Cooking Instructions (dummy UI element) */}
                    <div className='mt-6 py-4 border-t border-[#e9ecee]'>
                        <input type="text" placeholder="Any suggestions? We will pass it on..." className='w-full bg-[#f9f9f9] border-none p-4 text-sm outline-none' />
                    </div>
                </div>

                {/* Bill Details */}
                <div className='bg-white p-6 shadow-sm'>
                    <h3 className='font-bold text-[#3e4152] mb-4'>Bill Details</h3>
                    <div className='flex flex-col gap-2 text-sm text-[#686b78]'>
                        <div className='flex justify-between'>
                            <p>Item Total</p>
                            <p>₹{itemTotal.toFixed(2)}</p>
                        </div>
                        <div className='flex justify-between'>
                            <p>Delivery Fee</p>
                            <p>₹{deliveryFee.toFixed(2)}</p>
                        </div>
                        <div className='flex justify-between pt-4 border-t border-[#e9ecee] mt-2'>
                            <p>GST and Restaurant Charges</p>
                            <p>₹{gstAndCharges.toFixed(2)}</p>
                        </div>
                    </div>
                    
                    <div className='flex justify-between font-bold text-[#3e4152] pt-4 mt-4 border-t-2 border-black'>
                        <p>TO PAY</p>
                        <p>₹{toPay.toFixed(2)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart