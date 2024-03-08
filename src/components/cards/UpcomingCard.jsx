import React from "react";
import { config } from "../../config";
import { Link } from "react-router-dom";

export default function UpcomingCard({ data }) {
  // console.log(data);
  return (
    <Link to={`/preview/${data.id}?type=movie`} className="block w-full">
      <div className="upcoming-card flex gap-3">
        <div className="max-w-[88px] flex-shrink-0 relative w-full">
          <img
            className="h-full w-full object-cover"
            src={config.IMG_BASE_URL + data.poster_path}
            alt={data.title}
            loading="lazy"
          />
        </div>
        <div className="cursor-pointer group pt-3">
          <div className="flex gap-2 items-center">
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 group-hover:text-yellow mb-2 transition ease-in-out duration-200"
              viewBox="0 0 24 24"
              fill="currentColor"
              role="presentation"
            >
              <path d="M10.803 15.932l4.688-3.513a.498.498 0 0 0 0-.803l-4.688-3.514a.502.502 0 0 0-.803.402v7.026c0 .412.472.653.803.402z"></path>
              <path d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm0-1c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11z"></path>
            </svg>
            <h5 className="font-medium">{data.title}</h5>
          </div>
          <p className="text-white/70 text-sm line-clamp-2">{data.overview}</p>
        </div>
      </div>
    </Link>
  );
}
