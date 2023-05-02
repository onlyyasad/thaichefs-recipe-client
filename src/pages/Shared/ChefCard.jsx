import React from 'react';

const ChefCard = ({chef}) => {
    const {id, name, image_url, bio, years_of_experience, likes, num_of_recipes} = chef;
    return (
        <div className="card rounded-none w-full glass">
            <figure className='pt-4'><img className='max-h-80' src={image_url} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title font-serif">{name}</h2>
                <p>Years of Experience: {years_of_experience}</p>
                <p>Recipes: {num_of_recipes}</p>
                <p>Likes: {likes}</p>
                <div className="card-actions ">
                    <button className="btn w-full btn-primary">View Recipes</button>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;