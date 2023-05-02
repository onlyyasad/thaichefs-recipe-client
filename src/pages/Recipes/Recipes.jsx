import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefsBanner from './ChefsBanner';
import RecipeCard from './RecipeCard';

const Recipes = () => {
    const [chefs, setChefs] = useState([]);
    const [chef, setChef] = useState({});
    const [loading, setLoading] = useState(true);

    const recipes = useLoaderData();

    const chefId = recipes[0].chef_id;

    // console.log(chefId)

    useEffect(() =>{
        fetch('https://assignment-10-server-onlyyasad.vercel.app/chefs')
        .then(res => res.json())
        .then(data => {
            setChefs(data)
            setLoading(false)
        })
    }, [])

    useEffect(() =>{
        const chefData = chefs.find(chef => chef.id === chefId)
        setChef(chefData)
        // console.log(chef)
    }, [chefs])

    if(loading){
        return <p>Loading....</p>
    }

    return (
        <div>
            <ChefsBanner chef={chef}></ChefsBanner>
            <div className='grid lg:grid-cols-3'>
                {
                    recipes && recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe}></RecipeCard>)
                }
            </div>
        </div>
    );
};

export default Recipes;