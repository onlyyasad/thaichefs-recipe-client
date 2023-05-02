import React from 'react';
import ChefCard from './ChefCard';

const Chefs = ({chefs}) => {

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 p-8'>
            {
                chefs.map(chef => <ChefCard key={chef.id} chef={chef}></ChefCard>)
            }
        </div>
    );
};

export default Chefs;