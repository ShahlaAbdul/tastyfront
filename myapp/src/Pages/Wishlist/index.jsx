import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async';
import "./style.scss"
import { WishlistContext } from '../../context/WishlistContext';
import { NavLink } from 'react-router-dom';

function Wishlist() {
    const { wishlist, addWishlist, removeWishlist, isWishlist } = useContext(WishlistContext)

    return (
        <div>
            <Helmet>
                <title>Wishlist Page</title>
            </Helmet>
            {wishlist.map((x) => (
                <div className="wishlist_card">
                    <ul>
                        <li className='img'> <img src={x.image} alt="" /></li>
                        <li className='name'>
                            <h2>{x.name}</h2>
                            <p className=' desc'>{x.description}</p>
                        </li>
                        <li className='price'>${x.price}.00</li>
                        <li className='iconss'>
                            <i className="fa-solid fa-cart-shopping"></i>
                            {wishlist.some((item)=>x._id===item._id)? (
                                            <i className="fa-solid fa-heart red " onClick={()=>removeWishlist(x)}></i>
                                        ) :(
                                            <i className="fa-solid fa-heart " onClick={()=>addWishlist(x)}></i>
                                        )}
                            {/* <NavLink to={"/detail/" + x._id}><i className="fa-solid fa-eye"></i></NavLink> */}
                        </li>
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default Wishlist