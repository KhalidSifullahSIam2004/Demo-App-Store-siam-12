import React, { Suspense } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div>
            <Navbar/>
            <Suspense fallback={<div className='flex justify-center py-16'><span className="loading loading-spinner loading-xl"></span></div>}>
                <Outlet/>
            </Suspense>
            <Footer/>

        </div>
    );
};

export default Root;
