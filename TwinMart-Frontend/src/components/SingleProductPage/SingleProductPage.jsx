import React from 'react'
import { useParams } from 'react-router-dom'
import { useProducts } from '../../context/ProductDataContext';
import { RiShoppingCartLine } from 'react-icons/ri';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishListContext';
import { FaCheck, FaHeart, FaRegHeart } from 'react-icons/fa';

function SingleProductPage() {
    const { id } = useParams()
    const { getProducts, activeCategory } = useProducts()
    const { addToCart, isInCart, deleteItem } = useCart()
    const { addToWishList, removeFromWishList, isWishlisted } = useWishlist();
    const allProduct = getProducts(activeCategory);
    const product = allProduct.find((item) => item.id === id);
    // console.log(product);

    return (
        <div>
            {
                product ? <div className="px-4 pb-4 md:px-0 ">

                    <div className="max-w-6xl h-[400px] mx-auto md:p-6 grid grid-cols-2  gap-10 bg-white mt-13 rounded-4xl  shadow-xl p-7">


                        <div className=" mx-auto flex justify-center items-center   ">
                            <img src={product.image}
                                alt={product.name}
                                className='rounded-full h-[300px] object-cover border-2 border-orange-500 z-30 shadow-2xl hover:scale-105 transition-all duration-400 cursor-pointer' />
                        </div>
                        <div className="flex flex-col gap-5 items-start justify-start">
                            <button
                                onClick={() =>
                                    isWishlisted(product.id, product.category)
                                        ? removeFromWishList(product.id, product.category)
                                        : addToWishList(product)
                                }
                                className="relative left-120     cursor-pointer mb-1">
                                {isWishlisted(product.id, product.category)
                                    ? <FaHeart className="text-orange-400 text-2xl" />
                                    : <FaRegHeart className="text-orange-400 text-2xl" />

                                }

                            </button>

                            <h1 className='md:text-4xl font-bold text-orange-500'>{product.name}</h1>
                            <div className="text-orange-500">{product.description}</div>
                            <h3 className='md:text-xl font-bold'>₹ {product.price}</h3>

                            {/* <div className="">
                                <label htmlFor="" className='text-sm font-medium text-gray-700 '>Quantity:</label>
                                <input type="number" min={1} value={product.quantity}
                                    className='w-15 border ml-2.5 border-gray-400 rounded-lg px-3 py-1   focus:right-2 focus:ring-orange-500'
                                />
                            </div> */}

                            <button className={`flex  gap-2 justify-center items-center mt-3  px-4 py-2 rounded-full  text-white  cursor-pointer  shadow shadow-black/80
                                           ${isInCart(product.id, product.category)
                                    ? "bg-orange-400/80 hover:bg-orange-500"
                                    : "bg-orange-500 hover:bg-orange-400"
                                }
                                           `}
                                onClick={() =>
                                    isInCart(product.id, product.category)
                                        ? deleteItem(product.id, product.category)
                                        : addToCart(product)
                                }>
                                {isInCart(product.id, product.category) ? <><FaCheck /> <p>Added to Cart</p> </>
                                    : <><RiShoppingCartLine className="text-2xl" /> <p>Add to Cart</p> </>}

                            </button>
                        </div>
                    </div>
                </div>
                    :
                    <div className="text-3xl text-orange-500">Loading..</div>
            }
        </div>
    )
}

export default SingleProductPage
