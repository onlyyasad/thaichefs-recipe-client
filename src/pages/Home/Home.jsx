import React from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router-dom';
import Chefs from './Chefs';
import WhyLearn from './WhyLearn';
import LatestRecipes from './LatestRecipes';

const Home = () => {
    const chefs = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Chefs chefs={chefs}></Chefs>
            <LatestRecipes></LatestRecipes>
            <WhyLearn></WhyLearn>
        </div>
    );
};

export default Home;