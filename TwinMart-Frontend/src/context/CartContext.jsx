import { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  // const [cartItem, setCartItem] = useState([])
  const [cartItem, setCartItem] = useState(() => {
    try {
      // Load saved cart from localstorage
      const saved = localStorage.getItem("cart");
      return saved ? JSON.parse(saved) : [];

    } catch (error) {
      console.error("Error getting cart details", error);
      return [];
    }

  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItem));
  }, [cartItem]);

  // Create unique cart key = category + id
  const generateCartKey = (product) => {
    return `${product.category}-${product.id}`;
  };

  // Add product to cart
  const addToCart = (product) => {
    const cartKey = generateCartKey(product);

    const existingItem = cartItem.find((item) => item.cartKey === cartKey);

    if (existingItem) {
      // Increase quantity
      setCartItem((prev) =>
        prev.map((item) =>
          item.cartKey === cartKey
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // Add new product
      setCartItem((prev) => [
        ...prev,
        { ...product, quantity: 1, cartKey } // store unique cartKey
      ]);

      toast.success("Added to Cart");
    }
  };

  // Increase / decrease item quantity
  const updateQuantity = (productId, category, action) => {
    const cartKey = `${category}-${productId}`;

    setCartItem((prev) =>
      prev
        .map((item) => {
          if (item.cartKey === cartKey) {
            let newQty = item.quantity
            if (action === "increase") {
              newQty = newQty + 1;
            }
            else if (action === "decrease") {
              newQty = newQty - 1;
            }

            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(item => item != null) // remove items with qty 0
    );
  };

  // Remove a product from cart
  const deleteItem = (productId, category) => {
    const cartKey = `${category}-${productId}`;
    setCartItem((prev) => prev.filter((item) => item.cartKey !== cartKey));
    toast.success("Removed from Cart");
  };

  const isInCart = (productId,category) =>{ 
    const cartKey = `${category}-${productId}`;
    return cartItem.some(item => item.cartKey === cartKey)
  }

  // Total bill = price * quantity
  //   const totalPrice = cartItem.reduce(
  //     (total, item) => total + item.price * item.quantity,
  //     0
  //   );

  return (
    <CartContext.Provider
      value={{
        cartItem,
        addToCart,
        updateQuantity,
        deleteItem,
        isInCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
