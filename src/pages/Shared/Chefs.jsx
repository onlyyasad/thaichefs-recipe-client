import React from 'react';
import ChefCard from './ChefCard';

const Chefs = ({ chefs }) => {

    return (
        <div className='py-8'>
            <h4 className='font-serif text-3xl text-center '>Learn with our Master Chef's</h4>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-8'>
                {
                    chefs.map(chef => <ChefCard key={chef.id} chef={chef}></ChefCard>)
                }
            </div>
        </div>
    );
};

export default Chefs;