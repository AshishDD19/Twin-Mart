import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { IoMdSearch } from 'react-icons/io'
import { RiShoppingCartLine } from 'react-icons/ri';
import { FaCaretDown, FaRegHeart } from 'react-icons/fa';
import { RiMapPinLine } from 'react-icons/ri';
import ProfileDropdown from '../ProfileDown/ProfileDown';
function Header() {
    const buttonStyle = "rounded-full p-2 relative text-orange-400 overflow-hidden transition-colors duration-700  before:content-[''] before:absolute before:inset-0 before:bg-orange-400/20 before:scale-x-0 before:origin-left before:transition-transform before:duration-500 hover:before:scale-x-100 hover:text-black hover:font-bold"

    return (
        <div>
            <div className="navbar">
                <div className="head-logo  mr-7">
                    <Link to="/">
                        <img src="/images/cartLogo.png" alt="TwinCart Logo" className="border-2 border-black " />
                    </Link>
                    {/* <h2>TwinCart</h2> */}

                </div>


                <div className="flex w-full justify-between items-center gap-6">
                    <div className="flex gap-2 items-center border border-orange-400 px-3 py-1 rounded-full cursor-pointer ">
                        <RiMapPinLine className='text-3xl text-orange-400 mx-auto' />
                        <span className='text-sm text-gray-600'>Deliver to . . .</span>
                        <FaCaretDown className='text-gray-600' />
                    </div>
                    <div className="group relative hidden sm:block">
                        <input type="text" placeholder='Search Products . . .'
                            className='h-[50px] w-[200px] sm:w-[200px] 
                        group-hover:w-[300px] transition-all duration-300
                        rounded-full border
                        border-orange-300 px-2 py-1
                        focus:outline-none focus:border-2
                        focus:border-primary' />
                        <IoMdSearch className='text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3 text-2xl' />
                    </div>
                    <div className="flex gap-4">
                        <div className={buttonStyle}>
                            <FaRegHeart className='text-2xl' />
                        </div>
                        <div className={buttonStyle}>
                            <RiShoppingCartLine className="text-2xl" />

                        </div>
                        <ProfileDropdown />

                    </div>

                </div>


            </div>
        </div>
    )
}

export default Header
