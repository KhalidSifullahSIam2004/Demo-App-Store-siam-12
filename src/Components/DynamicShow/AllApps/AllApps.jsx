import React from 'react';
import useDataFetch from '../../../CustomHooks/useDataFetch';
import SingleApp from './SingleApp';

const AllApps = () => {
    const appsData = useDataFetch();
    return (
            <div className="my-20">
      <h1 className="font-bold text-5xl text-center mb-4">Our All Applications</h1>
      <p className="text-xl text-[#627382] text-center mb-10">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 container mx-auto gap-4 rounded-sm mb-12">

        {appsData.map((appData) => (
          <SingleApp key={appData.id} appData={appData} />
        ))}

      </div>

    </div>
    );
};

export default AllApps;