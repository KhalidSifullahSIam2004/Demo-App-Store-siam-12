import React, { use } from "react";
import { FaArrowLeft, FaRegStar } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { MdReviews } from "react-icons/md";
import { useParams } from "react-router";
import useDataFetch from "../../../CustomHooks/useDataFetch";
import appErrorImage from "../../../assets/images/App-Error.png";
import { toast } from "react-toastify";
import { InstalledAppsContext } from "../../../Contexts/InstalledAppsContext";

const SingleAppDetails = () => {
  const { id } = useParams();

  const allAppData = useDataFetch();
  const [installedApps, setInstalledApps] = use(InstalledAppsContext);

  const exceptedAppData = allAppData.find((singleAppData) => singleAppData.id === Number(id));

  if (!exceptedAppData) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-white px-4 py-16">
        <div className="text-center">
          <img
            src={appErrorImage}
            alt="App not found"
            className="mx-auto w-full max-w-64"
          />

          <h2 className="mt-6 text-3xl font-extrabold text-[#0f2740] md:text-4xl">
            OPPS!! APP NOT FOUND
          </h2>

          <p className="mt-2 text-sm text-slate-500 md:text-base">
            The app you are requesting is not found on our system, please try
            another apps.
          </p>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="mt-6 inline-flex items-center gap-2 rounded-sm bg-[#7c4dff] px-6 py-2 text-sm font-semibold text-white transition hover:bg-[#6938ef]"
          >
            <FaArrowLeft />
            Go Back!
          </button>
        </div>
      </div>
    );
  }

  const { image, title, companyName, description, size, reviews, ratingAvg, downloads} = exceptedAppData;

  const ratingList = [...exceptedAppData.ratings].reverse();

  const isInstalled = installedApps.some(
    (installedApp) =>
      (typeof installedApp === "object" ? installedApp.id : installedApp) ===
      exceptedAppData.id
  );

  const handleInstalled = () => {
    if (isInstalled) {
      return;
    }

    setInstalledApps([...installedApps, exceptedAppData.id]);

    toast.success(`${title} is Installled Successfully!`);
  };

  const biggestRatingCount = ratingList.reduce(
    (highestCount, item) => Math.max(highestCount, item.count),
    0
  );

  return (
    <div className="container bg-slate-50 mx-auto px-4 py-10 md:py-14">
      <div className=" p-5 md:p-8">
        <div className="mt-6 grid gap-8 xl:grid-cols-[220px_minmax(0,1fr)]">
          <div className="flex items-center justify-center bg-white p-6">
            <img src={image} alt={title} />
          </div>

          <div>
            <div className="border-b-2 border-gray-100 pb-6">
              <h1 className="text-3xl font-black tracking-tight text-slate-900 md:text-[2.65rem]">
                {title}
              </h1>
              <p className="mt-2 text-base text-slate-500">
                Developed by{" "}
                <span className="font-semibold text-[#5d4df1]">
                  {companyName}
                </span>
              </p>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-[#f2fbf7] p-4">
                <div className="flex items-center gap-2 text-[#16a34a]">
                  <IoMdDownload className="text-xl" />
                  <p className="text-sm font-medium text-slate-500">
                    Downloads
                  </p>
                </div>
                <p className="mt-2 text-3xl font-black text-slate-900">
                  {downloads}
                </p>
              </div>

              <div className="rounded-2xl bg-[#fff8ef] p-4">
                <div className="flex items-center gap-2 text-[#ff8614]">
                  <FaRegStar className="text-lg" />
                  <p className="text-sm font-medium text-slate-500">
                    Average Ratings
                  </p>
                </div>
                <p className="mt-2 text-3xl font-black text-slate-900">
                  {ratingAvg}
                </p>
              </div>

              <div className="rounded-2xl bg-[#f4f2ff] p-4">
                <div className="flex items-center gap-2 text-[#6d55ff]">
                  <MdReviews className="text-xl" />
                  <p className="text-sm font-medium text-slate-500">
                    Total Reviews
                  </p>
                </div>
                <p className="mt-2 text-3xl font-black text-slate-900">
                  {reviews}
                </p>
              </div>
            </div>

            <button
              onClick={handleInstalled}
              type="button"
              className={`mt-6 inline-flex items-center justify-center rounded-sm bg-[#17c964] px-6 py-3 text-base font-semibold text-white shadow-[0_16px_28px_-20px_rgba(23,201,100,0.95)] transition hover:bg-[#11b458]  ${isInstalled ? "cursor-not-allowed" : "cursor-pointer"}`}
            >
              {isInstalled ? "Installed" : `Install Now (${size}) MB`}
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t-[3px] border-gray-100 pt-8">
        <h2 className="text-2xl font-bold text-slate-900">Ratings</h2>

        <div className="mt-8 space-y-5">
          {ratingList.map((ratingItem) => (
            <div
              key={ratingItem.name}
              className="grid gap-2 md:grid-cols-[74px_minmax(0,1fr)_110px] md:items-center md:gap-5"
            >
              <p className="text-sm font-medium text-slate-500">
                {ratingItem.name}
              </p>

              <div className="h-4 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-[#ff8614]"
                  style={{
                    width: `${(ratingItem.count / biggestRatingCount) * 100}%`,
                  }}
                />
              </div>

              <p className="text-sm text-slate-400 md:text-right">
                {ratingItem.count.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 border-t border-slate-200 pt-8">
        <h2 className="text-2xl font-bold text-slate-900">Description</h2>

        <p className="mt-5 text-[1.02rem] leading-8 text-slate-600">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SingleAppDetails;
