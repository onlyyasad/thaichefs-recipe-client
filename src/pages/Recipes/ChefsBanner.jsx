import React, { useEffect, useState } from 'react';
import { AiOutlineLike } from "react-icons/ai";

const ChefsBanner = ({ chef }) => {
    console.log(chef)
    if (!chef) {
        return;
    }
    const { id, name, bio, image_url, num_of_recipes, likes, years_of_experience } = chef;
    return (
        <div className="bg-base-200">
            <div className='container pt-8 px-4 mx-auto'>
                <div className="flex flex-col gap-8 lg:flex-row-reverse">
                    <div className='flex justify-center lg:w-1/2'>
                        <img src={image_url} className="h-full" />
                    </div>
                    <div className='flex flex-col mb-8 lg:mb-0 justify-center lg:w-1/2'>
                        <h1 className="text-5xl font-serif text-teal-900">{name}</h1>
                        <p className="py-6">{bio}</p>
                        <hr />
                        <div className='flex mt-6 justify-between gap-4'>
                            <p><span className='font-bold'>{years_of_experience}</span> Years of Experinece</p>
                            <p><span className='font-bold'>{num_of_recipes}</span> Recipes</p>
                            <p className='text-end flex items-center gap-2'><AiOutlineLike title='Likes' />{likes}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefsBanner;