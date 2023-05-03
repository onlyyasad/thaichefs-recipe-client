import React, { useState } from 'react';
import Header from '../pages/Shared/Header';
import Footer from '../pages/Shared/Footer';
import { Outlet } from 'react-router-dom';
import { SyncLoader } from 'react-spinners';

const Main = () => {
    const [loading, setLoading] = useState(true);
    setTimeout(() =>{
        setLoading(false)
    }, 1000)

    if(loading){
        return <div className='h-screen flex justify-center items-center'><SyncLoader color="#134E4A" /></div>
    }
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;