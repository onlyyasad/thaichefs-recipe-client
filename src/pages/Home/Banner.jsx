import React from 'react';
import image from "../../assets/images/banner1.png"
import sixth from "../../assets/images/sixth.webp"

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={image} className="lg:w-1/2 w-full rounded-lg mb-8 lg:mb-0" />
                <div className='lg:w-1/2 lg:pr-6'>
                    <h1 className="text-5xl text-teal-900 font-serif">Authentic Thai Recipes from Top Chefs</h1>
                    <p className="py-6">Indulge in authentic Thai recipes from 6 top chefs. From fragrant soups to fiery curries, our carefully crafted dishes are a tribute to Thailand's rich culinary heritage. With easy-to-follow instructions, you can create the perfect Thai meal whether you're a novice cook or an experienced chef. Let's explore the tantalizing flavors of Thailand together!</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;