import React, { useState } from 'react'
import { FaCaretDown } from 'react-icons/fa'
import { RiMapPinLine } from 'react-icons/ri'
import { IoMdClose } from "react-icons/io";

function Location({location,getLocation}) {
    const [dropdown , setDropdown] = useState(false);

    const toggleLocation = () =>{
        setDropdown(!dropdown)
    }
    return (
        <div>
            <div className="flex gap-2 items-center border border-orange-400 px-3 py-1 rounded-full ">
                <RiMapPinLine className="text-3xl text-orange-400 mx-auto" />
                <span className="text-sm text-gray-600">{location ?
                    <div><p>{location.city}</p></div>
                    : "Deliver to..."}</span>
                <FaCaretDown className="text-gray-600 cursor-pointer"  onClick={toggleLocation}/>

                {dropdown ? <div className="text-center w-[190px] h-max shadow-2xl z-50 bg-white fixed top-16 left-51
                border-2 p-5 border-gray-100 rounded-md">
                    <span onClick={toggleLocation} className= 'absolute top-1.5 left-[165px] cursor-pointer'><IoMdClose/>  </span>

                    <div className='font-semibold mb-4  text-[15px]'>Change Location</div>
                    <button className='rounded-2xl p-2 font-semibold text-[15px]   bg-orange-400  text-white hover:bg-amber-600 cursor-pointer' onClick={getLocation}>Detect Location</button>
                </div> : null
                }
            </div>
        </div>
    )
}

export default Location
