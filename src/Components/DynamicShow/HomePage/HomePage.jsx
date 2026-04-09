import React from 'react';
import Banner from '../Banner/Banner';
import Rating from '../Rating/Rating';
import TrendingApps from '../TrendingApps/TrendingApps';

const HomePage = () => {
    return (
        <div>
            <Banner/>
            <Rating/>
            <TrendingApps/>
        </div>
    );
};

export default HomePage;