import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({recipe}) => {
    console.log(recipe)
    const {id, chef_id, recipe_name, image_url, ingredients, cooking_method, rating} = recipe;
    return (
        <div className="card rounded-none w-full bg-base-100 border">
            <figure className=''><img className='' src={image_url} alt="chef" /></figure>
            <div className="card-body">
                <h2 className="card-title font-serif">{recipe_name}</h2>
                <p>Ingredients: {ingredients.length <250? ingredients : <>{ingredients.slice(0,250)}... </> }</p>
                <p>Cooking Method: {cooking_method.length <250? cooking_method : <>{cooking_method.slice(0, 250)}...</> }</p>
                <div className='flex justify-between'>
                    <p>Rating: {rating} </p>
                    <p>Favorite</p>
                </div>
                <div className="card-actions ">
                    <Link><button className="btn w-full btn-primary">View Full Recipe</button></Link>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;