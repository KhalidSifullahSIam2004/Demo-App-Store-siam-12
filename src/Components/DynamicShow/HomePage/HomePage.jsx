import React, { Suspense } from 'react';
import Banner from './Banner/Banner';
import Rating from './Rating/Rating';
import TrendingApps from './TrendingApps/TrendingApps';
import { HashLoader } from 'react-spinners';


const HomePage = () => {
    return (
        <div>
            <Banner/>
            <Rating/>
            <Suspense fallback={<div className='flex justify-center'><HashLoader color='#ad46ff' /></div>}>
            <TrendingApps/>
            </Suspense>
         
        </div>
    );
};

export default HomePage;