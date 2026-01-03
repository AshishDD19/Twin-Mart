import React from 'react'
import { useWishlist } from '../../context/WishListContext';
import { useNavigate } from 'react-router-dom';
import { FaRegTrashAlt } from 'react-icons/fa';

function WishlistPage() {
    const { wishlistItem, removeFromWishList } = useWishlist();
    const navigate = useNavigate()
    const deleteButtonStyle = "rounded-full p-2 relative text-orange-400 overflow-hidden transition-colors duration-700 before:content-[''] before:absolute before:inset-0 before:bg-orange-400/20 before:scale-x-0 before:origin-left before:transition-transform before:duration-500 hover:before:scale-x-100 hover:text-black  cursor-pointer";


    return (
        <div className='mt-10 max-w-6xl mx-auto mb-5'>
            {
                wishlistItem.length > 0 ?
                    <>
                        <div className="flex justify-center items-center">
                            <h1 className='font-bold text-2xl'>My Wishlist ({wishlistItem.length})</h1>
                        </div>


                        <div className="mt-10">
                            {wishlistItem.map((item) => {
                                return <div key={item.id} className='bg-white p-5 rounded-2xl flex items-center justify-between mt-3 w-full shadow-2xl'>
                                    <div className="flex items-center gap-4">
                                        <img src={item.image} alt={item.name} className='w-25 h-20 rounded-full' />
                                        <div className="">
                                            <h1 className='w-[300px] line-clamp-2'>{item.name}</h1>
                                            <p className='font-semibold text-lg'>₹ {item.price}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
      
                                        <span className={deleteButtonStyle} onClick={() => removeFromWishList(item.id, item.category)}>
                                            <FaRegTrashAlt className='text-orange-500 text-xl cursor-pointer' />
                                        </span>

                                    </div>

                                </div>
                            })}
                        </div>


                    </>

                    :

                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-5xl text-muted font-bold text-orange-600">Oh no! Your wishlist is empty</h1>
                        <img src="/images/empty-wishlist.png" alt="" className='w-[400px]' />
                        <button onClick={() => navigate('/')} className=' bg-orange-500 w-[200px] text-white px-3 py-2 rounded-md mt-3 cursor-pointer hover:bg-orange-700'>Continue Shopping</button>
                    </div>
            }


        </div>
    )
}

export default WishlistPage
