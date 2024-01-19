import React from 'react'
import "./style.scss"
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <div className="navbar">
                <div className="navbar_left">
                    Tasty
                </div>
                <div className="navbar_right">
                    <ul>
                        <li><NavLink to={"/"} className={"page"}>Home</NavLink></li>
                        <li><NavLink to={"/add"} className={"page"}>AddPage</NavLink></li>
                        <li><NavLink to={"/detail/:id"} className={"page"}>Detail</NavLink></li>
                        <li><NavLink to={"/basket"} className={"page"}>Basket</NavLink></li>
                        <li><NavLink to={"/wishlist"} className={"page"}>Wishlist</NavLink></li> 
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar