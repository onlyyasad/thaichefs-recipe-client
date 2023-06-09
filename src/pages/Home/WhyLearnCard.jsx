import React from 'react';

const WhyLearnCard = ({title, info, children}) => {
    return (
        <div className="card w-full bg-white">
            <figure className="px-10 pt-10">
                {children}
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title mb-8 font-normal text-teal-900 font-serif">{title}</h2>
                <p>{info}</p>
            </div>
        </div>
    );
};

export default WhyLearnCard;