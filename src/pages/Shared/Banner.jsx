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

                <img src={sixth} className="max-w-sm rounded-lg shadow-2xl" />

                <div className='lg:w-1/2'>
                    <h1 className="text-5xl font-serif font-bold">Learn cooking with our Master Chef's!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;