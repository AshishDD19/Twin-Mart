
import { createContext, useContext, useEffect, useState } from "react";
import { allProducts } from "../assets/products";

const ProductDataContext = createContext();

export const ProductProvider = ({ children }) => {
    const [productsByCategory, setProductsByCategory] = useState({});
    const [activeCategory, setActiveCategory] = useState("fruitsVegetables");

    useEffect(() =>{
        setProductsByCategory(allProducts)
    },[]);

    const getProducts = (category) =>{
        return productsByCategory[category] || [];
    }

    return(
        <ProductDataContext.Provider value={{productsByCategory,activeCategory,setActiveCategory,getProducts}}>
            {children}
        </ProductDataContext.Provider>
    );
}

export const useProducts = () => useContext(ProductDataContext);
