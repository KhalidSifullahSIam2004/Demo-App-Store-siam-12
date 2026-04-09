import React from "react";
import { FaPlay } from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="border-t-[3px] border-[#0b9eff] bg-[#031f38] text-white">
      <div className="w-full px-8 py-7 md:px-14 lg:px-20 xl:px-24">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          

          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10">
              <FaPlay className="absolute left-0 top-1 text-[2rem] text-[#6f5bff] opacity-95 -rotate-[18deg]" />
              <FaPlay className="absolute left-1 top-[0.32rem] text-[1.65rem] text-[#33b7ff] opacity-95 -rotate-[18deg]" />
              <FaPlay className="absolute left-[0.6rem] top-[0.48rem] text-[1.2rem] text-white/75 -rotate-[18deg]" />
            </div>

            <p className="text-xl font-bold tracking-tight">HERO.IO</p>
          </div>

          
          <div className="text-left md:text-right">
            <h3 className="text-[1.35rem] font-semibold">Social Links</h3>

            <div className="mt-3 flex items-center gap-3 md:justify-end">
              <button
                type="button"
                aria-label="X"
                className="grid h-7 w-7 place-items-center rounded-full text-white transition duration-200 hover:text-[#0b9eff]"
              >
                <FaXTwitter className="text-[0.95rem]" />
              </button>

              <button
                type="button"
                aria-label="LinkedIn"
                className="grid h-7 w-7 place-items-center rounded-full text-white transition duration-200 hover:text-[#0b9eff]"
              >
                <FaLinkedinIn className="text-[0.95rem]" />
              </button>

              <button
                type="button"
                aria-label="Facebook"
                className="grid h-7 w-7 place-items-center rounded-full text-white transition duration-200 hover:text-[#0b9eff]"
              >
                <FaFacebookF className="text-[0.95rem]" />
              </button>
            </div>
          </div>
        </div>

       
        <div className="mt-7 border-t border-white/12 pt-7">
          <p className="text-center text-sm text-white/85 md:text-base">
            Copyright (c) 2026 - All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
