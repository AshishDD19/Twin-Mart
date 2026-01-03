import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const WishlistContext = createContext(null);

export const WishlistProvider = ({children})  => {

    const [wishlistItem, setWishlistItem] = useState(() =>{
        try{

            const saved = localStorage.getItem("wishlist");
            return saved ? JSON.parse(saved) : [];

        }catch(error){
            console.log("Error getting wishlist details", error);
            return [];
            
        }
    });

    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlistItem));
    },[wishlistItem]);


    const genrateKey = (item) =>{
        return `${item.category}-${item.id}`
    }

    const addToWishList = (item) => {
        const key = genrateKey(item);

        const exists = wishlistItem.find((item) => item.key === key )

        if(!exists){
            setWishlistItem([...wishlistItem, {...item,key}])
        } 
        toast.success("Added to Wishlist");  
    }


    const removeFromWishList = (productId,category) => {
        const key = `${category}-${productId}`
        setWishlistItem(
            wishlistItem.filter((item)=> item.key !== key)
        )
        toast.success("Removed from Wishlist");
    }

    const isWishlisted = (productId,category) => {
        const key = `${category}-${productId}`
        return wishlistItem.some((item)=> item.key === key)
    }


    return(
        <WishlistContext.Provider  
            value = {{wishlistItem,addToWishList,removeFromWishList,isWishlisted}}
        >
            {children}
        </WishlistContext.Provider>
    )

}

export const useWishlist = () => useContext(WishlistContext)
