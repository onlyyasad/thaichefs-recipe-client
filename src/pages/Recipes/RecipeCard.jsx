import { Rating } from '@smastrom/react-rating';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '@smastrom/react-rating/style.css'
import { FaArrowRight, FaHeart, FaRegHeart } from 'react-icons/fa';
import { Toaster, toast } from 'react-hot-toast';

const RecipeCard = ({ recipe }) => {
    const [disable, setDisable] = useState(false);

    const { id, chef_id, recipe_name, image_url, ingredients, cooking_method, rating } = recipe;

    const handleAddToFavorite = () => {
        toast.success('Added to your Favorite List');
        setDisable(true)
    }

    return (
        <div className="card rounded-none w-full bg-base-100 border">
            <figure className=''><img className='' src={image_url} alt="chef" /></figure>
            <div className="card-body">
                <h2 className="text-3xl font-serif">{recipe_name}</h2>
                <div className='my-4'>
                    <p className='font-serif'>Ingredients</p>
                    <hr className='my-2' />
                    <p className='text-sm'>{ingredients.length < 2500 ? ingredients : <>{ingredients.slice(0, 250)}... </>}</p>
                </div>
                <div className='flex-grow'>
                    <p className='font-serif'>Cooking Method</p>
                    <hr className='my-2' />
                    <p className='text-sm'>{cooking_method.length < 2500 ? cooking_method : <>{cooking_method.slice(0, 250)}...</>}</p>
                </div>
                <div className='flex mt-4 justify-between'>
                    <div className='flex justify-center items-center gap-1'><Rating
                        style={{ maxWidth: 100 }}
                        value={rating}
                        readOnly
                    /> {rating}
                    </div>

                    <button onClick={handleAddToFavorite} className='flex items-center px-6 py-2 gap-1 hover:border-teal-950 duration-500 border' disabled={disable}>
                        <FaRegHeart title='Add to Favorite' /><span>Favorite</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;