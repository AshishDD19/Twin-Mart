import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';


const users = [
    {
        id: 1,
        name: "John Doe",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed at velit ac purus tristique placerat.",
        img: "https://picsum.photos/101/101"
    },
    {
        id: 2,
        name: "Jane Smith",
        text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
        img: "https://picsum.photos/102/102"

    },
    {
        id: 3,
        name: "Michael Lee",
        text: "Curabitur at felis vel velit consequat gravida. Integer vel nulla sit amet sem cursus hendrerit.",
        img: "https://picsum.photos/103/103"

    },
    {
        id: 4,
        name: "Sara Williams",
        text: "Aliquam erat volutpat. Nam fermentum, felis a pretium interdum, justo risus consequat risus, a mattis arcu neque a felis.",
        img: "https://picsum.photos/104/104"

    }
];

function Testimonials() {
    
    const settings = {
        dots: true,
        arrow: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };




    return (
        <div className='py-10 ' style={{backgroundColor:"#F8F3CE"}}>
            <div className="container">
                {/* header section */}

                <div className="text-center mb-10 max-w-[500px] mx-auto">
                    <p  className='text-sm text-orange-300'>
                        What out customers are saying
                    </p>

                    <h1  className='text-3xl font-bold'>
                        Testimonials
                    </h1>

                    <p  className='text-xs text-gray-400'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dicta ullam quis illum aliquam nam! Deserunt quasi consequatur
                        illum voluptatem praesentium voluptatum corporis delectus.
                    </p>
                </div>
                {/* testimonials card */}

                <div>
                    <Slider {...settings}>{
                        users.map((data) => (
                            <div className="my-6">
                                <div key={data.id}
                                    className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-amber-50'>

                                    <div className='mb-4 mx-auto'>
                                        <img src={data.img} alt=""
                                            className='rounded-full w-30 h-30' />
                                    </div>
                                    <div className="flex flex-col items-center gap-4">
                                        <div className='space-y-3'>
                                            <p className='text-xs text-gray-500'>{data.text}</p>
                                            <h1 className='text-xl font-bold text-black/80 dark:text-light'>{data.name}</h1>


                                        </div>
                                    {/* <p className='text-black text-9xl absolute' >,,</p> */}

                                    </div>
                                </div>
                            </div>

                        ))
                    }</Slider>
                </div>
            </div>

        </div>
    )
}

export default Testimonials
