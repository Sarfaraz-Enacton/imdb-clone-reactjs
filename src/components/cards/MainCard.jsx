import React from "react";
import { config } from "../../config";
import { Link } from "react-router-dom";

export default function MainCard({ data }) {
  console.log(data);
  return (
    <Link to={`/preview/${data.id}`} className="d-block w-full">
      <div className="rounded overflow-hidden">
        <div className="w-full min-h-[250px] relative">
          <img
            className="w-full h-full object-cover cursor-pointer transition ease-in-out duration-300 hover:opacity-90"
            src={config.IMG_BASE_URL + data.poster_path}
            alt={data.title || data.name}
            loading="lazy"
          />
          <div className="swiper-lazy-preloader"></div>
        </div>
        <div className="flex flex-col gap-y-2 h-full px-2 py-3 bg-secondary-200">
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
            <span className="ml-2">{data.vote_average.toFixed(1)}</span>
          </div>
          <h3 className="line-clamp-1 lg:line-clamp-2 lg:h-12 hover:underline cursor-pointer">
            {data.title || data.name}
          </h3>
          <button className="text-blue text-sm font-medium flex items-center justify-center h-9 bg-primary/10 rounded-md mt-auto hover:bg-secondary-blue">
            Watch options
          </button>
          <div className="flex justify-between items-center gap-1 pt-2 px-1">
            <button className="flex justify-between items-center gap-1 py-1 px-3 pl-1 rounded hover:bg-primary/20">
              <svg
                className="w-6 h-6 flex-shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                role="presentation"
              >
                <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82z"></path>
              </svg>
              <span className="text-sm">Trailer</span>
            </button>
            <button className="rounded-full p-2 hover:bg-primary/20">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                role="presentation"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
