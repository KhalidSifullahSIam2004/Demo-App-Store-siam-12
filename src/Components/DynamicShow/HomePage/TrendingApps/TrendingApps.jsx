import React from "react";
import useDataFetch from "../../../../CustomHooks/useDataFetch";
import TrendingApp from "./TrendingApp";
import { NavLink } from "react-router";

const TrendingApps = () => {
  const appsData = useDataFetch();

  return (
    <div className="my-20">
      <h1 className="font-bold text-5xl text-center mb-4">Trending Apps</h1>
      <p className="text-xl text-[#627382] text-center mb-10">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 container mx-auto gap-4 rounded-sm mb-12">

        {appsData.slice(0, 8).map((appData) => (
          <TrendingApp key={appData.id} appData={appData} />
        ))}

      </div>

      <div className="flex justify-center">
      <NavLink to={'/allapps'} className={'font-semibold text-white py-3 px-10 bg-linear-to-r from-[#632ee3] to-[#9f62f2] rounded-sm'}>View All</NavLink>
      </div>

    </div>
  );
};

export default TrendingApps;
