import React from 'react';
import Banner from '../Shared/Banner';
import { useLoaderData } from 'react-router-dom';
import Chefs from '../Shared/Chefs';

const Home = () => {
    const chefs = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Chefs chefs={chefs}></Chefs>
        </div>
    );
};

export default Home;