import React from "react";
import { config } from "../../config";
import { Link } from "react-router-dom";

export default function SearchCard({ data }) {
  console.log(data);
  return (
    <Link to={`/preview/${data.id}?type=${data.media_type}`}>
      <div className="p-2 flex gap-4 hover:bg-secondary-100 transition ease-in-out duration-200 hover:cursor-pointer">
        <div className="max-w-[48px] relative">
          <img
            className="w-full h-full object-cover"
            src={
              data.poster_path
                ? config.IMG_BASE_URL + data.poster_path
                : "/noImagePlaceholder.svg"
            }
            alt={data.name}
          />
        </div>
        <div className="space-y-1">
          <h3 className="text-base font-medium line-clamp-1">
            {data.name || data.title}
          </h3>
          <p className="text-white/70 text-sm">
            {data.first_air_date || data.release_date}
          </p>
          <div className="flex items-center gap-1">
            <svg
              className="w-3 h-3 text-yellow flex-shrink-0 pb-0.5"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              role="presentation"
            >
              <path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path>
            </svg>
            <span className="text-white/70 text-sm">
              {data.vote_average?.toFixed(1) || "-"}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
