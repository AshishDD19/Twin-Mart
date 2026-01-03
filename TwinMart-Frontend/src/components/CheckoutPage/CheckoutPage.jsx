import React from 'react'

function CheckoutPage({location, getLocation}) {
    return (
        <div className='px-20'>
            <div className="bg-white rounded-2xl p-7 mt-4 space-y-2 shadow-2xl">
                <h1 className='text-center font-bold text-xl'>Delivery Info</h1>
                <div className="flex flex-col space-y-1">
                    <label htmlFor="">Full Name</label>
                    <input type="text" placeholder='Enter your full name' className='p-2 rounded-md bg-blue-100/60' />

                </div>
                <div className="flex flex-col space-y-1">
                    <label htmlFor="">Address</label>
                    <input type="text" placeholder='Enter your address' className='p-2 rounded-md bg-blue-100/60' value={location?.city} />

                </div>
                <div className="flex w-full gap-5">
                    <div className="flex flex-col space-y-1 w-full">
                        <label htmlFor="">State</label>
                        <input type="text" placeholder='Enter your state' className='p-2 rounded-md w-full bg-blue-100/60' value={location?.state} />
                    </div>
                    <div className="flex flex-col space-y-1 w-full">
                        <label htmlFor="">Pincode</label>
                        <input type="text" placeholder='Enter your pincode' className='p-2 rounded-md w-full bg-blue-100/60' value={location?.postcode} />
                    </div>
                </div>

                <div className="flex w-full gap-5">
                    <div className="flex flex-col space-y-1 w-full">
                        <label htmlFor="">Country</label>
                        <input type="text" placeholder='Enter your country' className='p-2 rounded-md w-full bg-blue-100/60' value={location?.country} />
                    </div>
                    <div className="flex flex-col space-y-1 w-full">
                        <label htmlFor="">Phone Number</label>
                        <input type="text" placeholder='Enter your phone number' className='p-2 rounded-md w-full bg-blue-100/60' />
                    </div>
                </div>

                <div className="flex  flex-col justify-center items-center gap-2">
                    <button className='bg-orange-500 w-30 text-white px-3 py-2 rounded-md mt-3 cursor-pointer hover:bg-orange-700'>Submit</button>
                    <div className="flex justify-center w-full text-gray-700">--------------- OR ----------------</div>
                    <button onClick={getLocation} className='bg-orange-500 w-40 text-white px-3 py-2 rounded-md mt-3 cursor-pointer hover:bg-orange-700'>Detect Location</button>
                </div>
            </div>

        </div>
    )
}

export default CheckoutPage
