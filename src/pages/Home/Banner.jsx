import React from 'react';

import first from "../../assets/images/first.webp"
import second from "../../assets/images/second.webp"
import third from "../../assets/images/third.webp"
import fourth from "../../assets/images/fourth.webp"
import fifth from "../../assets/images/fifth.webp"
import sixth from "../../assets/images/sixth.webp"

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <img src={sixth} className="lg:max-w-sm w-full rounded-lg shadow-2xl" />

                <div className='lg:w-1/2 lg:pr-6'>
                    <h1 className="text-5xl font-serif">Authentic Thai Recipes from Top Chefs</h1>
                    <p className="py-6">Indulge in authentic Thai recipes from 6 top chefs. From fragrant soups to fiery curries, our carefully crafted dishes are a tribute to Thailand's rich culinary heritage. With easy-to-follow instructions, you can create the perfect Thai meal whether you're a novice cook or an experienced chef. Let's explore the tantalizing flavors of Thailand together!</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;