import React from 'react';
import Banner from '../Shared/Banner';
import { useLoaderData } from 'react-router-dom';
import Chefs from '../Shared/Chefs';
import WhyLearn from '../Shared/WhyLearn';

const Home = () => {
    const chefs = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Chefs chefs={chefs}></Chefs>
            <WhyLearn></WhyLearn>
        </div>
    );
};

export default Home;