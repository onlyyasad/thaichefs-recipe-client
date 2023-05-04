import React from 'react';
import ChefCard from './ChefCard';

const Chefs = ({ chefs }) => {

    return (
        <div className='container mx-auto px-4 my-28'>
            <h4 className='font-serif text-teal-900 mb-16 text-3xl text-center '>Learn with our Master Chefs</h4>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    chefs.map(chef => <ChefCard key={chef.id} chef={chef}></ChefCard>)
                }
            </div>
        </div>
    );
};

export default Chefs;