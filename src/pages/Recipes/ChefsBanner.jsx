import React, { useEffect, useState } from 'react';

const ChefsBanner = ({ chef }) => {
    console.log(chef)
    if(!chef){
        return;
    }
    const { id, name, bio, image_url, num_of_recipes, likes, years_of_experience } = chef;
    return (
        <div className="pt-8 px-8 bg-base-200">
            <div className="flex flex-col lg:flex-row-reverse">
                <div className='flex justify-center lg:w-1/2'>
                    <img src={image_url} className="h-full" />
                </div>
                <div className='flex flex-col justify-center lg:w-1/2'>
                    <h1 className="text-5xl font-serif font-bold">{name}</h1>
                    <p className="py-6">{bio}</p>
                    <div className='flex justify-between gap-4'>
                        <p>{years_of_experience} Years of Experinece</p>
                        <p>Recipes: {num_of_recipes}</p>
                        <p>Likes: {likes}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefsBanner;