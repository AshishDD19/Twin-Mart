import React from 'react'
import { useCart } from '../../context/CartContext'
import { FaBook, FaCartArrowDown, FaRegTrashAlt, FaRupeeSign, FaShoppingBag } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import  toast  from 'react-hot-toast'
import { useAuth } from '../../context/AuthContext'



function CartPage({ location, getLocation }) {
    const { cartItem, updateQuantity, deleteItem } = useCart()
      const { user } = useAuth();
     const loggedIn = !!user;
    const navigate = useNavigate()
    const deleteButtonStyle = "rounded-full p-2 relative text-orange-400 overflow-hidden transition-colors duration-700 before:content-[''] before:absolute before:inset-0 before:bg-orange-400/20 before:scale-x-0 before:origin-left before:transition-transform before:duration-500 hover:before:scale-x-100 hover:text-black  cursor-pointer";

    const totalPrice = cartItem.reduce(
        (total, item) => total + item.price * item.quantity, 0
    );

    const handleCheckout = () => {
        if (loggedIn) {
            navigate("/checkout");
        } else {
            toast.error("Please login to proceed to checkout!")
            navigate("/login")
            
        }
    }

    return (
        <div className='mt-10 max-w-6xl mx-auto mb-5'>
            {
                cartItem.length > 0 ?
                    <>
                        <div className="flex justify-center items-center">
                            <h1 className='font-bold text-2xl'>My Cart ({cartItem.length})</h1>
                        </div>
                        <div className="mt-10">
                            {cartItem.map((item) => {
                                return <div key={item.id} className='bg-white p-5 rounded-2xl flex items-center justify-between mt-3 w-full shadow-2xl'>
                                    <div className="flex items-center gap-4">
                                        <img src={item.image} alt={item.name} className='w-25 h-20 rounded-full' />
                                        <div className="">
                                            <h1 className='w-[300px] line-clamp-2'>{item.name}</h1>
                                            <p className='font-semibold text-lg'>₹ {item.price}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="bg-orange-400  flex gap-4 p-2 rounded-md  text-white text-xl">
                                            <button className='cursor-pointer '
                                                onClick={() => updateQuantity(item.id, item.category, "decrease")}
                                            > - </button>
                                            <span>{item.quantity}</span>
                                            <button className='cursor-pointer'
                                                onClick={() => updateQuantity(item.id, item.category, "increase")}
                                            > + </button>

                                        </div>
                                        <span className={deleteButtonStyle} onClick={() => deleteItem(item.id, item.category)}>
                                            <FaRegTrashAlt className='text-orange-500 text-xl cursor-pointer' />
                                        </span>

                                    </div>

                                </div>
                            })}
                        </div>


                            {/* delivery contact  */}




                            {/* billing  */}

                            <div className="bg-white rounded-2xl p-7 mt-4 space-y-2 shadow-2xl h-max">
                                <h1 className='text-center font-bold text-xl'>Bill Details</h1>
                                <div className="flex justify-between items-center">
                                    <h1 className='flex gap-2 items-center text-gray-700'><span><FaBook /></span>Items total</h1>
                                    <p>₹ {totalPrice}</p>
                                </div>

                                <div className="flex justify-between items-center">
                                    <h1 className='flex gap-2 items-center text-gray-700'><span><FaCartArrowDown /></span>Delivery Charge</h1>
                                    <p className='text-orange-400 font-semibold'><span className='text-gray-500 line-through'>₹25</span> FREE </p>
                                </div>

                                <div className="flex justify-between items-center">
                                    <h1 className='flex gap-2 items-center text-gray-700'><span><FaShoppingBag /></span>Handling Charge</h1>
                                    <p className='text-orange-400 font-semibold'>₹5</p>
                                </div>

                                <hr className='text-gray-200 mt-2' />

                                <div className="flex justify-between items-center">
                                    <h1 className='font-semibold text-lg'>Grand Total</h1>
                                    <p className='font-semibold text-lg'>₹{totalPrice + 5}</p>
                                </div>

                                <div className="">
                                    <h1 className='font-semibold text-gray-700 mb-3 mt-7'>Apply Promo Code</h1>
                                    <div className="flex gap-3">
                                        <input type="text" placeholder='Enter code' className='p-2 rounded-md  bg-blue-100/60' />
                                        <button className='bg-orange-400 text-white border border-gray-200 px-4 cursor-pointer py-1 rounded-md'>Apply</button>
                                    </div>
                                </div>

                                <div className="flex justify-center items-center">
                                    <button className=' bg-orange-500  text-white px-3 py-2 rounded-md mt-3 cursor-pointer hover:bg-orange-700' 
                                    onClick={handleCheckout}>
                                        Proceed to Checkout</button>

                                </div> 

                            </div>



                        


                    </>


                    :
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-5xl text-muted font-bold text-orange-600">Oh no! Your cart is empty</h1>
                        <img src="/images/empty-cart.png" alt="" className='w-[400px]' />
                        <button onClick={() => navigate('/')} className=' bg-orange-500 w-[200px] text-white px-3 py-2 rounded-md mt-3 cursor-pointer hover:bg-orange-700'>Continue Shopping</button>
                    </div>
            }
        </div>
    )
}

export default CartPage
