import React from "react";

const Rating = () => {
  return (
    <section className="relative isolate mt-16 overflow-hidden bg-[linear-gradient(90deg,#632ee3_0%,#9f62f2_100%)]">
      <div className="absolute inset-x-0 top-0 h-14 bg-[repeating-linear-gradient(-45deg,rgba(255,255,255,0.08)_0,rgba(255,255,255,0.08)_5px,transparent_5px,transparent_12px)] opacity-60" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_62%)]" />

      <div className="relative mx-auto max-w-6xl px-6 py-14 text-center text-white md:px-10 md:py-16 lg:px-16">
        <h2 className="text-3xl font-extrabold tracking-[-0.03em] md:text-5xl">
          Trusted By Millions, Built For You
        </h2>

        <div className="mt-10 grid gap-10 md:mt-12 md:grid-cols-3 md:gap-8">
          <div className="space-y-3">
            <p className="text-sm font-medium text-white/70 md:text-base">
              Total Downloads
            </p>
            <p className="text-5xl font-black leading-none tracking-[-0.04em] md:text-6xl">
              29.6M
            </p>
            <p className="text-sm text-white/75 md:text-base">
              21% More Than Last Month
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-medium text-white/70 md:text-base">
              Total Reviews
            </p>
            <p className="text-5xl font-black leading-none tracking-[-0.04em] md:text-6xl">
              906K
            </p>
            <p className="text-sm text-white/75 md:text-base">
              46% More Than Last Month
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-medium text-white/70 md:text-base">
              Active Apps
            </p>
            <p className="text-5xl font-black leading-none tracking-[-0.04em] md:text-6xl">
              132+
            </p>
            <p className="text-sm text-white/75 md:text-base">
              31 More Will Launch
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rating;
