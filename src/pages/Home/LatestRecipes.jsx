import React from 'react';
import first from "../../assets/images/first.webp";
import second from "../../assets/images/second.webp";
import third from "../../assets/images/third.webp";
import { TbChefHat } from "react-icons/tb";
import { BiStopwatch } from "react-icons/bi";
import { IoIosArrowForward } from 'react-icons/io';

const LatestRecipes = () => {
    return (
        <div className='bg-teal-950 my-28'>
            <div className='container pt-20 pb-24 px-4 mx-auto'>
                <h4 className='font-serif text-3xl mb-16 text-center text-white'>Our Latest Recipes!</h4>
                <div className='grid gap-4 mt-4 lg:mt-8 lg:grid-cols-3'>
                    <div className='lg:relative'>
                        <div>
                            <img src={first} alt="" />
                        </div>
                        <div className='bg-base-200 lg:w-3/4 mx-auto lg:absolute left-12 lg:-mt-12 p-4'>
                            <h2 className='text-xl text-center text-teal-900 font-serif'>How to cook Tom Yum Goong?</h2>
                                <hr className='my-2 border border-orange-500' />
                            <div className='flex justify-between mt-2 mx-auto gap-2'>
                                <p className='text-sm inline-flex items-center gap-2'><TbChefHat />Chef Duangporn Songvisava</p> 
                                <p className='text-sm inline-flex items-center gap-2'><BiStopwatch />45 min</p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:relative'>
                        <div>
                            <img src={second} alt="" />
                        </div>
                        <div className='bg-base-200 lg:w-3/4 mx-auto lg:absolute left-12 lg:-mt-12 p-4'>
                            <h2 className='text-xl text-center text-teal-900 font-serif'>Make delicious Pad Thai within 25 Minutes!</h2>
                                <hr className='my-2 border border-orange-500' />
                            <div className='flex justify-between mt-2 mx-auto gap-2'>
                                <p className='text-sm inline-flex items-center gap-2'><TbChefHat />Chef Duangporn Songvisava</p> 
                                <p className='text-sm inline-flex items-center gap-2'><BiStopwatch />25 min</p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:relative'>
                        <div>
                            <img src={third} alt="" />
                        </div>
                        <div className='bg-base-200 lg:w-3/4 mx-auto lg:absolute left-12 lg:-mt-12 p-4'>
                            <h2 className='text-xl text-center text-teal-900 font-serif'>Cook Green Curry like a master chef!</h2>
                                <hr className='my-2 border border-orange-500' />
                            <div className='flex justify-between mt-2 mx-auto gap-2'>
                                <p className='text-sm inline-flex items-center gap-2'><TbChefHat />Chef Duangporn Songvisava</p> 
                                <p className='text-sm inline-flex items-center gap-2'><BiStopwatch />30 min</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='flex mt-8 lg:mt-32 justify-center'>
                    <button className='font-serif inline-flex items-center text-xl text-center border border-teal-950  hover:border-white py-2 px-4 duration-500 text-white'>See All Latest Recipes<IoIosArrowForward /> </button>
                </div>
            </div>
        </div>
    );
};

export default LatestRecipes;