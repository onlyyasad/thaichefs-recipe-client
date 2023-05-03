import { Rating } from '@smastrom/react-rating';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '@smastrom/react-rating/style.css'
import { FaArrowRight, FaHeart, FaRegHeart } from 'react-icons/fa';
import { Toaster, toast } from 'react-hot-toast';

const RecipeCard = ({ recipe }) => {
    const [favorite, setFavorite] = useState(false);
    const { id, chef_id, recipe_name, image_url, ingredients, cooking_method, rating } = recipe;

    const handleAddToFavorite = () => {
        toast.success('Added to your Favorite List');
        setFavorite(true)
    }

    const handleRemoveFavorite = () =>{
        toast.success('Removed from your Favorite List');
        setFavorite(false)
    }
    return (
        <div className="card rounded-none w-full bg-base-100 border">
            <figure className=''><img className='' src={image_url} alt="chef" /></figure>
            <div className="card-body">
                <h2 className="card-title font-serif">{recipe_name}</h2>
                <p>Ingredients: {ingredients.length < 250 ? ingredients : <>{ingredients.slice(0, 250)}... </>}</p>
                <p>Cooking Method: {cooking_method.length < 250 ? cooking_method : <>{cooking_method.slice(0, 250)}...</>}</p>
                <div className='flex my-4 justify-between'>
                    <div className='flex justify-center items-center gap-1'><Rating
                        style={{ maxWidth: 100 }}
                        value={rating}
                        readOnly
                    /> {rating}
                    </div>
                    {favorite? <button onClick={handleRemoveFavorite}>
                        <span><FaHeart className='text-red-600' title='Remove from Favorite' /></span>
                    </button>:
                    <button onClick={handleAddToFavorite}>
                        <span><FaRegHeart title='Add to Favorite' /></span>
                    </button>}
                </div>
                <div className="card-actions ">
                    <Link><button className="border flex items-center font-semibold gap-1 px-6 py-2 w-full"><span>View Full Recipe</span> <FaArrowRight /> </button></Link>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default RecipeCard;