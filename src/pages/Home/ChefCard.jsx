import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillLike } from "react-icons/ai";

const ChefCard = ({ chef }) => {
    const { id, name, image_url, bio, years_of_experience, likes, num_of_recipes } = chef;
    return (
        <div className="card rounded-none w-full bg-base-100 border">
            <figure className='pt-4 bg-gray-100'><img className='max-h-64' src={image_url} alt="chef" /></figure>
            <div className="card-body">
                <h2 className="card-title font-normal font-serif">{name}</h2>
                <div className='flex justify-between'>
                    <p><span className='font-bold'>{years_of_experience}</span> Years of Experience</p>
                    <p className='text-end'><span className='font-bold'>{num_of_recipes}</span> Recipes</p>
                </div>
                <div className="flex mt-4 justify-between items-center">
                    <div>
                        <Link to={`/chefs/${id}`}><button className='font-serif inline-flex items-center text-center border border-teal-950  hover:bg-teal-950 hover:text-white py-2 px-4 duration-500 text-teal-950'>View Recipes</button></Link>
                    </div>
                    <div>
                        <p className='text-end flex items-center gap-2'><AiFillLike title='Likes' />{likes}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;