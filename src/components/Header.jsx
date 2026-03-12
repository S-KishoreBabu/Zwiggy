import { useSelector } from 'react-redux';
import logo from '../assets/logo.png'
import { NavLink,Link } from 'react-router-dom';
import { cartContext } from '../utils/UserContext';
import { useContext } from 'react';
let Header = () => {
    const cartItems = useSelector((store)=>store.cartSlice.items);
    const {cartCount} = useContext(cartContext);
    return (
        <header className="sticky top-0 bg-[rgba(255,255,255,0.9)]  flex justify-between items-center w-auto shadow-lg  px-10 backdrop-blur z-10 "> 
            <NavLink  to="/">
                <div className="logo hover:cursor-pointer ">
                    <img src={logo} className='h-25' alt="logo" />
                </div>
            </NavLink>
            <div className="nav flex gap-10">
                <div className="linkBox">
                    <NavLink to="/about">About us</NavLink>
                </div>
                <div className="linkBox">
                    <a href="#">Notification</a>
                </div>
                <div className="linkBox mr-3 font-bold">
                    <NavLink to="/cart">Cart ({cartItems?.length})[{cartCount}]</NavLink>
                </div>
            </div>
        </header>
    )
};

export default Header