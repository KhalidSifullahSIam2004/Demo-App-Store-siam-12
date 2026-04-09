import React from "react";
import PlayStoreImage from "../../../assets/images/Playstore.png";
import AppStoreImage from "../../../assets/images/Appstore.png";
import HeroImage from "../../../assets/images/hero.png";

const Banner = () => {
  return (
    <div className="pt-20">
      <h2 className="font-[900] text-7xl text-center mb-4">
        We Build <br />{" "}
        <span className="bg-linear-to-b from-[#632ee3] to-[#9f62f2] text-transparent bg-clip-text">
          Productive
        </span>{" "}
        Apps
      </h2>

      <p className="mx-auto text-center p-6 text-xl text-[#627382FF] mb-10 lg:max-w-[55%]">
        At HERO.IO , we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>

      <div className="flex justify-center gap-4 mb-10">
        <button className="btn text-xl font-semibold p-6">
          <img src={PlayStoreImage} />
          Google Play
        </button>
        <button className="btn text-xl font-semibold p-6">
          <img src={AppStoreImage} />
          App Store
        </button>
      </div>

      <img src={HeroImage} className="mx-auto" />
    </div>
  );
};

export default Banner;
