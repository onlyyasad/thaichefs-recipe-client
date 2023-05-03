import React from 'react';
import { Link } from 'react-router-dom';

const ChefCard = ({ chef }) => {
    const { id, name, image_url, bio, years_of_experience, likes, num_of_recipes } = chef;
    return (
        <div className="card rounded-none w-full bg-base-100 border">
            <figure className='pt-4 bg-gray-100'><img className='max-h-64' src={image_url} alt="chef" /></figure>
            <div className="card-body">
                <h2 className="card-title font-normal font-serif">{name}</h2>
                <p>{years_of_experience} Years of Experience</p>
                <div className='flex justify-between'>
                    <p>Recipes: {num_of_recipes}</p>
                    <p>Likes: {likes}</p>
                </div>
                <div className="card-actions ">
                <Link to={`/chefs/${id}`}><button className="btn w-full btn-primary">View Recipes</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;