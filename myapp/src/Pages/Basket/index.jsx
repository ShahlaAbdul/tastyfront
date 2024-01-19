import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async';
import "./style.scss"
import { BasketContext } from '../../context/BasketContext';

function Basket() {
   const  {basket,addBasket,increaseCount,decreaseCount,removeBasket}= useContext(BasketContext)
    return (
        <div>
            <Helmet>
                <title>Basket Page</title>
            </Helmet>
            {basket.map((x) => (
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
                            <span>+</span> <span>{x.count}</span> <span>-</span>
                        </li>
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default Basket