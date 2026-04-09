import React, { use, useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { TbDeviceSdCard } from "react-icons/tb";
import useDataFetch from "../../../CustomHooks/useDataFetch";
import { InstalledAppsContext } from "../../../Contexts/InstalledAppsContext";

const InstalledApps = () => {
  const [installedApps, setInstalledApps] = use(InstalledAppsContext);
  const allApps = useDataFetch();
  const [sortBy, setSortBy] = useState("size");

  const normalizedInstalledApps = installedApps.reduce((appsList, installedApp) => {
    const installedAppId =
      typeof installedApp === "object" ? installedApp.id : installedApp;

    if (!installedAppId) {
      return appsList;
    }

    const matchedApp =
      allApps.find((singleApp) => singleApp.id === installedAppId) ??
      (typeof installedApp === "object" ? installedApp : null);

    if (!matchedApp || appsList.some((singleApp) => singleApp.id === matchedApp.id)) {
      return appsList;
    }

    appsList.push(matchedApp);
    return appsList;
  }, []);

  const sortedInstalledApps = [...normalizedInstalledApps].sort((firstApp, secondApp) => {
    if (sortBy === "title") {
      return firstApp.title.localeCompare(secondApp.title);
    }

    if (sortBy === "rating") {
      return secondApp.ratingAvg - firstApp.ratingAvg;
    }

    return secondApp.size - firstApp.size;
  });

  const handleUninstall = (appId) => {
    setInstalledApps(
      installedApps.filter(
        (installedApp) =>
          (typeof installedApp === "object" ? installedApp.id : installedApp) !== appId
      )
    );
  };

  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <div className="rounded-sm bg-white px-4 py-8 shadow-[0_18px_50px_-40px_rgba(15,23,42,0.65)] md:px-8 md:py-10">
        <span className="mx-auto block h-1 w-10 rounded-full bg-[#2f80ff]" />

        <div className="mt-5 text-center">
          <h1 className="text-3xl font-black tracking-tight text-slate-900 md:text-[2.2rem]">
            Your Installed Apps
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-b border-slate-100 pb-4 text-sm md:flex-row md:items-center md:justify-between">
          <p className="font-semibold text-slate-700">
            {sortedInstalledApps.length} Apps Found
          </p>

          <label className="ml-auto flex items-center gap-2 text-xs text-slate-400">
            Sort By
            <select
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
              className="h-8 rounded-sm border border-slate-200 bg-white px-2 text-xs font-medium text-slate-500 outline-none"
            >
              <option value="size">Size</option>
              <option value="title">Title</option>
              <option value="rating">Rating</option>
            </select>
          </label>
        </div>

        {sortedInstalledApps.length ? (
          <div className="mt-4 space-y-3">
            {sortedInstalledApps.map((singleApp) => (
              <article
                key={singleApp.id}
                className="flex flex-col gap-4 rounded-sm border border-slate-100 bg-[#fcfcfc] p-3 shadow-[0_15px_35px_-32px_rgba(15,23,42,0.8)] md:flex-row md:items-center"
              >
                <div className="flex min-w-0 flex-1 items-center gap-3">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-sm bg-white p-2 shadow-sm">
                    <img
                      src={singleApp.image}
                      alt={singleApp.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="min-w-0">
                    <h2 className="truncate text-sm font-semibold text-slate-800 md:text-base">
                      {singleApp.title}
                    </h2>

                    <div className="mt-2 flex flex-wrap items-center gap-3 text-xs">
                      <p className="flex items-center gap-1 text-[#00bf72]">
                        <IoMdDownload />
                        {singleApp.downloads}
                      </p>

                      <p className="flex items-center gap-1 text-[#ff8a00]">
                        <FaRegStar />
                        {singleApp.ratingAvg}
                      </p>

                      <p className="flex items-center gap-1 text-slate-400">
                        <TbDeviceSdCard />
                        {singleApp.size} MB
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleUninstall(singleApp.id)}
                  className="inline-flex h-8 items-center justify-center self-start rounded-sm bg-[#17c964] px-4 text-xs font-semibold text-white transition hover:bg-[#11b458] md:self-center"
                >
                  Uninstall
                </button>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-6 rounded-sm border border-dashed border-slate-200 bg-slate-50 px-6 py-12 text-center">
            <h2 className="text-lg font-semibold text-slate-700">
              No apps installed yet
            </h2>

            <p className="mt-2 text-sm text-slate-400">
              Install any app from the apps page and it will appear here.
            </p>
          </div>
        )}

        <span className="mx-auto mt-10 block h-1 w-10 rounded-full bg-[#2f80ff]" />
      </div>
    </section>
  );
};

export default InstalledApps;
