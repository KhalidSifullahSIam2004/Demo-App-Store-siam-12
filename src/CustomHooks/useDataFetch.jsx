import React, { use } from 'react';

const fetchAppsData = async() => {
    const res = await fetch('/data.json');
    return res.json();
}

const appsDataPromise = fetchAppsData();


const useDataFetch = () => {
    const appsData = use(appsDataPromise);
    return (
        appsData
    );
};

export default useDataFetch;