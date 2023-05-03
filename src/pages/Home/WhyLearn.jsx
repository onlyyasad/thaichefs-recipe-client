import React from 'react';
import WhyLearnCard from './WhyLearnCard';
import { GiCampCookingPot, GiCook } from "react-icons/gi";
import { RiProfileFill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";

const WhyLearn = () => {
    const firstTitle = "15 Live Cooking Sessions";
    const secondTitle = "Master Chef's as Mentor";
    const thirdTitle = "Career Opportunity";
    const firstInfo = "You will get well organized up to 15 live cooking sessions so that you can make your cooking skill strong after learning.";
    const secondInfo = "From the beginning, our expert master chef's will be your mentor and they will teach you how to become a pro chef."
    const thirdInfo = "After successfully completing our course, we will refer you to the best restaurants in the country for your intern!"
    return (
        <div>
            <div className='my-28'>
                <h4 className='font-serif text-3xl text-center text-teal-950'>Why Learn with Us?</h4>
                <div className='grid lg:grid-cols-3'>
                    <WhyLearnCard title={firstTitle} info={firstInfo}>
                        <GiCampCookingPot className='text-7xl text-teal-950' />
                    </WhyLearnCard>
                    <WhyLearnCard title={secondTitle} info={secondInfo}>
                        <GiCook className='text-7xl text-teal-950' />
                    </WhyLearnCard>
                    <WhyLearnCard title={thirdTitle} info={thirdInfo}>
                        <RiProfileFill className='text-7xl text-teal-950' />
                    </WhyLearnCard>
                </div>
                <div className='flex justify-center'>
                    <button className='font-serif inline-flex items-center text-xl text-center border border-white  hover:border-teal-950 py-2 px-4 duration-500 text-teal-950'>Book Your Session Now<IoIosArrowForward /> </button>
                </div>
            </div>
        </div>
    );
};

export default WhyLearn;