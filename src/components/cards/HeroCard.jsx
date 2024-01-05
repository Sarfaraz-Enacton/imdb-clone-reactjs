import React from "react";
import { config } from "../../config";

export default function HeroCard({ data }) {
  //   console.log(data);
  return (
    <div>
      <div className="shadow-class"></div>
      <div className="relative w-full h-full object-cover pb-16">
        <img
          className="w-full h-full object-cover cursor-pointer transition ease-in-out duration-300 hover:opacity-90 hero-bg-wrapper"
          src={config.IMG_BASE_URL + data.backdrop_path}
          alt={data.title}
          height={450}
          width={830}
        />
        <div className="inset-shadow mb-16"></div>
        <div className="swiper-lazy-preloader"></div>
      </div>
      <div className="absolute bottom-0 left-4 flex gap-4 items-end">
        <div className="max-w-[90px] md:max-w-[130px] xl:max-w-[165px] relative">
          <img
            className="w-full h-full object-cover transition ease-in-out duration-300 hover:opacity-90"
            src={config.IMG_BASE_URL + data.poster_path}
            alt={data.title}
          />
          <div className="swiper-lazy-preloader"></div>
        </div>
        <div className="pb-3 md:pb-8 md:space-y-1 cursor-pointer">
          <h3 className="text-lg md:text-2xl font-medium line-clamp-1">
            {data?.title || data?.name}
          </h3>
          <div className="flex">
            <svg
              className="w-4 h-4 text-yellow flex-shrink-0 pt-1"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              role="presentation"
            >
              <path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path>
            </svg>
            <span className="ml-2 text-sm md:text-base">
              {data.vote_average.toFixed(1)}
            </span>
          </div>
          <p className="text-sm md:text-base">
            {data.release_date || data.first_air_date}
          </p>
          <p className="text-white/70 text-sm md:text-base line-clamp-1 sm:line-clamp-2 xl:line-clamp-3">
            {data.overview}
          </p>
        </div>
      </div>
    </div>
  );
}
