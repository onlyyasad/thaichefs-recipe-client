import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefsBanner from './ChefsBanner';
import RecipeCard from './RecipeCard';
import { SyncLoader } from 'react-spinners';
import { Toaster } from 'react-hot-toast';

const Recipes = () => {
    const [chefs, setChefs] = useState([]);
    const [chef, setChef] = useState({});
    const [loading, setLoading] = useState(true);

    const recipes = useLoaderData();

    const chefId = recipes[0].chef_id;

    // console.log(chefId)

    useEffect(() => {
        fetch('https://assignment-10-server-onlyyasad.vercel.app/chefs')
            .then(res => res.json())
            .then(data => {
                setChefs(data)
                setLoading(false)
            })
    }, [])

    useEffect(() => {
        const chefData = chefs.find(chef => chef.id === chefId)
        setChef(chefData)
        // console.log(chef)
    }, [chefs])

    if (loading) {
        return <div className='h-screen flex justify-center items-center'><SyncLoader color="#134E4A" /></div>
    }

    return (
        <div className=''>
            <ChefsBanner chef={chef}></ChefsBanner>
            <div className='container px-4 mx-auto my-28'>
                <h2 className='font-serif text-teal-900 mb-16 text-3xl text-center '>Top 3 recipies of {chef?.name}</h2>
                <div className='grid lg:grid-cols-3 gap-4'>
                    {
                        recipes && recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe}></RecipeCard>)
                    }
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default Recipes;