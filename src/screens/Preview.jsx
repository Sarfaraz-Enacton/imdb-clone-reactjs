import { useLocation, useParams } from "react-router-dom";
import FetchApi from "../components/FetchApi";
import { config } from "../config";
import noImagePlaceholder from "/noImagePlaceholder.svg";
import SkeletonLoader from "../components/SkeletonLoader";

export default function Preview() {
  const { id } = useParams();
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const media_type = queryParams.get("type");
  console.log(id);
  console.log(media_type);
  const { data, loading, error } = FetchApi(
    `${config.API_BASE_URL}${media_type}/${id}`
  );
  // console.log(`${config.API_BASE_URL}${media_type}/${id}`);
  // console.log(previewData);
  // console.log({ data });
  // console.log(data.genres);
  // if (data) {
  // const RenderGenres = data.genres.map((genre) => (
  //   <button
  //     key={index}
  //     className="border border-primary/70 rounded-full py-1 px-2 sm:px-3 text-xs sm:text-base"
  //   >
  //     {genre.name}
  //   </button>
  // ));
  // }

  return (
    <main>
      <section>
        <div className="container">
          {loading ? (
            <div>
              <SkeletonLoader variant="primary" primaryCustomClass="h-screen" />
            </div>
          ) : media_type === "person" ? (
            <div className="">test</div>
          ) : (
            <div className="space-y-4">
              <h1 className="text-2xl md:text-4xl xl:text-5xl">
                {data.title || data.name}
              </h1>
              <div className="flex gap-4 w-full ">
                <div className="hidden sm:block sm:w-1/4">
                  <img
                    className="w-full h-full object-cover"
                    src={
                      data.poster_path
                        ? config.IMG_BASE_URL + data.poster_path
                        : noImagePlaceholder
                    }
                    alt={data.title || data.name}
                  />
                </div>
                <div className="w-full sm:w-3/4">
                  <img
                    className="w-full h-full object-cover"
                    src={
                      data.poster_path
                        ? config.IMG_BASE_URL + data.backdrop_path
                        : noImagePlaceholder
                    }
                    alt={data.title || data.name}
                  />
                </div>
              </div>
              <div className="flex gap-4 sm:gap-4 pt-3 items-center sm:items-start">
                <div className="max-w-[120px] max-h-[180px] sm:hidden flex-shrink-0">
                  <img
                    className="w-full h-full object-cover"
                    src={
                      data.poster_path
                        ? config.IMG_BASE_URL + data.poster_path
                        : noImagePlaceholder
                    }
                    alt={data.title || data.name}
                  />
                </div>

                <div className="space-y-1 sm:space-y-2 md:w-1/4">
                  <div className="flex flex-wrap gap-2 sm:gap-4">
                    {data.genres?.map((genre, index) => (
                      <button
                        key={index}
                        className="border border-primary/70 rounded-full py-1 px-2 sm:px-3 text-xs sm:text-base"
                      >
                        {genre.name}
                      </button>
                    ))}
                  </div>
                  <div className="flex items-center gap-1">
                    <p className="text-sm sm:text-base">Ratings : </p>
                    <svg
                      className="w-4 h-4 text-yellow flex-shrink-0"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      role="presentation"
                    >
                      <path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path>
                    </svg>
                    <p className="text-sm sm:text-base pt-1">
                      {data.vote_average?.toFixed(1)}
                      <span className="text-white/70">/10</span>
                    </p>
                  </div>
                  <p className="text-sm sm:text-base">
                    Release Date : {data.release_date || data.first_air_date}
                  </p>
                  <p className="text-sm sm:text-base">Status : {data.status}</p>
                  <p className="text-sm sm:text-base">
                    Country : {data.production_countries[0]?.name}
                  </p>
                  <p className="text-sm sm:text-base">
                    Language : {data.spoken_languages[0]?.english_name}
                  </p>
                </div>
                <div className="pl-5 md:pl-0 space-y-2 hidden sm:block md:w-3/4">
                  <p className="text-2xl md:text-4xl">
                    Original Title : {data.original_name || data.original_title}
                  </p>
                  <p className="text-sm sm:text-base">
                    Summary :{" "}
                    <span className="text-white/70">{data.overview}</span>
                  </p>
                </div>
              </div>
              <div className="space-y-2 sm:hidden">
                <p className="text-base">
                  Original Title : {data.original_name || data.original_title}
                </p>
                <p className="text-sm sm:text-base">
                  Summary :{" "}
                  <span className="text-white/70">{data.overview}</span>
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
