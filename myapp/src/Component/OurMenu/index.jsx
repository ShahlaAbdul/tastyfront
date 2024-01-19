import React, { useContext, useEffect, useState } from 'react'
import "./style.scss"
import { SearchContext } from '../../context/useSearchContext'
import { WishlistContext } from '../../context/WishlistContext'
import { NavLink } from 'react-router-dom'
import { BasketContext } from '../../context/BasketContext'

function OurMenu() {
    const [fetchData, setfetchData] = useState([])
    const [sortedProperty, setSortedProperty] = useState("")
    const { handleSearch, search } = useContext(SearchContext)
    const { wishlist, addWishlist, removeWishlist, isWishlist } = useContext(WishlistContext)
    const { addBasket, increaseCount, decreaseCount, removeBasket } = useContext(BasketContext)
    useEffect(() => {
        fetch("http://localhost:3100/")
            .then((res) => res.json())
            .then((data) => setfetchData(data))

    }, [])

    return (
        <section id='ourmenu'>
            <div className="ourmenu">
                <div className="ourmenu_head">
                    <span>
                        OUR MENU
                    </span>
                    <h1>Discover Our Exclusive Menu</h1>
                </div>
                <div className="ourmenu_filter">
                    <input type="text" name="" id="" placeholder='search' onChange={(x) => handleSearch(x)} />
                    <button onClick={() => setSortedProperty({ property: "name", asc: false })}>A-z</button>
                    <button onClick={() => setSortedProperty({ property: "name", asc: true })}>Z-a</button>
                    <button onClick={() => setSortedProperty(null)}>default</button>

                </div>
                <div className="ourmenu_cards">
                    {fetchData
                        .filter((x) => x.name.toLowerCase().includes(search.toLowerCase()))
                        .sort((a, b) => {
                            if (sortedProperty && sortedProperty.asc) {
                                return (a[sortedProperty.property] > b[sortedProperty.property]) ? 1 :
                                    ((b[sortedProperty.property] > a[sortedProperty.property]) ? -1 : 0)
                            } else if (sortedProperty && sortedProperty.asc === false) {
                                return (a[sortedProperty.property] < b[sortedProperty.property]) ? 1 :
                                    ((b[sortedProperty.property] < a[sortedProperty.property]) ? -1 : 0)
                            } else {
                                return 0
                            }
                        })

                        .map((x) => (
                            <div className="ourmenu_card" key={x._id}>
                                <ul>
                                    <li className='img'> <img src={x.image} alt="" /></li>
                                    <li className='name'>
                                        <h2>{x.name}</h2>
                                        <p className=' desc'>{x.description}</p>
                                    </li>
                                    <li className='price'>${x.price}.00</li>
                                    <li className='iconss'>
                                        <i className="fa-solid fa-cart-shopping" onClick={() => addBasket(x)}></i>
                                        
                                        {/* <i className="fa-solid fa-heart " onClick={() => addWishlist(x)} ></i> */}
                                        {wishlist.some((item) => x._id === item._id) ? (
                                            <i className="fa-solid fa-heart  red" onClick={() => removeWishlist(x)}></i>
                                        ) : (
                                            <i className="fa-solid fa-heart  " onClick={() => addWishlist(x)}></i>
                                        )}

                                        <NavLink to={"/detail/" + x._id}><i className="fa-solid fa-eye"></i></NavLink>
                                    </li>
                                </ul>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    )
}

export default OurMenu