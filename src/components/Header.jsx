import { useSelector } from 'react-redux';
import logo from '../assets/logo.png'
import { NavLink,Link } from 'react-router-dom';

let Header = () => {
    const cart = useSelector((store)=>store.cart.items);

    return (
        <header className="sticky top-0  flex justify-between items-center w-auto shadow-2xl  px-10 backdrop-blur z-10 "> 
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
                    <NavLink to="/cart">Cart ({cart.length})</NavLink>
                </div>
            </div>
        </header>
    )
};

export default Header