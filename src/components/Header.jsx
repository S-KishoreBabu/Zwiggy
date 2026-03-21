import { useSelector } from 'react-redux';
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom';

let Header = () => {
    const cartItems = useSelector((store)=>store.cart.items);
    
    // Sum up the quantities of all items in the cart
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <header className="sticky top-0 bg-[rgba(255,255,255,0.9)] dark:bg-[#0000009e] dark:text-white text-black flex justify-between items-center w-auto shadow-lg  px-10 backdrop-blur z-10 "> 
            <NavLink  to="/">
                <div className="logo hover:cursor-pointer ">
                    <img src={logo} className='h-25' alt="logo" />
                </div>
            </NavLink>
            <div className="nav flex gap-10">
                <div className="linkBox">
                    <NavLink to="/react">React Practice</NavLink>
                </div>
                <div className="linkBox">
                    <NavLink to="/test">Test</NavLink>
                </div>
                <div className="linkBox">
                    <NavLink to="/about">About us</NavLink>
                </div>
                <div className="linkBox">
                    <a href="#">Notification</a>
                </div>
                <div className="linkBox mr-3 font-bold">
                    <NavLink to="/cart">Cart ({totalItems})</NavLink>
                </div>
            </div>
        </header>
    )
};

export default Header