import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="Marvel Collectibles" />
                <p>Marvel Collectibles</p>
            </div>
            <ul className="nav-menu"> 
                <li onClick={() => setMenu("shop")}>
                    <Link style={{textDecoration: 'none'}} to='/'>Shop</Link> {menu === "shop" && <hr />}
                </li>
                <li onClick={() => setMenu("avengers")}>
                    <Link style={{textDecoration: 'none'}} to='/avengers'>Avengers</Link> {menu === "avengers" && <hr />}
                </li>
                <li onClick={() => setMenu("loki")}>
                    <Link style={{textDecoration: 'none'}} to='/loki'>Loki</Link> {menu === "loki" && <hr />}
                </li>
                <li onClick={() => setMenu("x-men")}>
                    <Link style={{textDecoration: 'none'}} to='/x-men'>X-men</Link> {menu === "x-men" && <hr />}
                </li>
                <li onClick={() => setMenu("venom")}>
                    <Link style={{textDecoration: 'none'}} to='/venom'>Venom</Link> {menu === "venom" && <hr />}
                </li>
                <li onClick={() => setMenu("captain-america")}>
                    <Link style={{textDecoration: 'none'}} to='/captain-america'>Captain America</Link> {menu === "captain-america" && <hr />}
                </li>
                <li onClick={() => setMenu("spider-man")}>
                    <Link style={{textDecoration: 'none'}} to='/spider-man'>Spider-Man</Link> {menu === "spider-man" && <hr />}
                </li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'>
                    <button>Login</button>
                </Link>
                <Link to='/signup'>
                    <button>Signup</button>
                </Link>
                <Link to='/cart'>
                    <div className="cart-wrapper">
                        <img src={cart_icon} alt="Cart" />
                        <div className="nav-cart-count">0</div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
