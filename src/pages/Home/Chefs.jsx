import React from 'react';
import ChefCard from './ChefCard';

const Chefs = ({ chefs }) => {

    return (
        <div className='my-28'>
            <h4 className='font-serif text-teal-950 mb-10 text-3xl text-center '>Learn with our Master Chefs</h4>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-8'>
                {
                    chefs.map(chef => <ChefCard key={chef.id} chef={chef}></ChefCard>)
                }
            </div>
        </div>
    );
};

export default Chefs;