import React from 'react';
import error from '../../assets/error.svg'

const ErrorPage = () => {
    return (
        <div className='flex justify-center'>
            <img className='max-h-screen' src={error} alt="" />
        </div>
    );
};

export default ErrorPage;