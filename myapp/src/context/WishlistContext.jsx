import React, { createContext } from 'react'
import useLocalStorage from '../hook/useLocalStorage'
export const WishlistContext = createContext()
function WishlistProvider({ children }) {
    const [wishlist, setWishlist] = useLocalStorage("wishlst", [])

    function addWishlist(item) {
        console.log("sdujhfdkujf",wishlist,item);
        // const index = wishlist.findIndex((x) => x._id === item._id)
        const index = wishlist.findIndex((x) => x._id === item._id)
        if (index === -1) {
            setWishlist([...wishlist, item])
        }
    }
    function removeWishlist(item) {
        setWishlist(wishlist.filter((x) => x._id !== item._id))
    }
    function isWishlist(item) {
        setWishlist(wishlist.findIndex((x) => x._id === item._id))
    }
    return (
        <WishlistContext.Provider value={{ wishlist, addWishlist, removeWishlist, isWishlist }}>
            {children}
        </WishlistContext.Provider>
    )
}

export default WishlistProvider