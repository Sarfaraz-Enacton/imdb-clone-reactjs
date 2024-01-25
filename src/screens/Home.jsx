import React from "react";
import HeroSlider from "../components/sliders/HeroSlider";
import { config } from "../config";
import FetchApi from "../components/FetchApi";
import UpcomingCard from "../components/cards/UpcomingCard";
import MainCard from "../components/cards/MainCard";
import MainSlider from "../components/sliders/MainSlider";
import SkeletonLoader from "../components/SkeletonLoader";

export default function Home() {
  const fetchFromApi = (endpoint) => {
    const url = `${config.API_BASE_URL}${endpoint}`;
    console.log(url);
    return FetchApi(url);
  };
  const {
    data: data1,
    loading: loading1,
    error: error1,
  } = fetchFromApi(`trending/all/day${config.API_Query_PARAMS_HERO}`);
  const {
    data: data2,
    loading: loading2,
    error: error2,
  } = fetchFromApi(`movie/upcoming${config.API_Query_PARAMS_HERO}`);
  const urlTopShow = `${config.API_BASE_URL}/discover/tv?include_adult=false&language=en-US&page=1&sort_by=vote_average.desc&vote_count.gte=200`;
  const {
    data: data3,
    loading: loading3,
    error: error3,
  } = FetchApi(urlTopShow);
  const urlTopMovie = `${config.API_BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200`;
  const {
    data: data4,
    loading: loading4,
    error: error4,
  } = FetchApi(urlTopMovie);

  return (
    <main className="container">
      <section className="py-4">
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-3">
          <div className="max-w-[825px]ss w-full lg:w-4/6">
            {loading1 && (
              <SkeletonLoader
                variant="primary"
                primaryCustomClass="h-[350px] sm:h-[600px]"
              />
            )}
            <HeroSlider data={data1} />
          </div>
          <div className="w-full lg:w-2/6 space-y-6">
            <h3 className="text-xl text-yellow font-semibold">Up next</h3>
            <div className="p-4 space-y-4">
              {loading2 && (
                <SkeletonLoader
                  variant="secondary"
                  secondaryCustomClass={"w-full h-[450px] lg:h-[550px]"}
                />
              )}
              {loading2 && (
                <div className="w-full h-[450px] lg:h-[550px] flex items-center justify-center gap-2">
                  <div className="border-yellow h-12 w-12 animate-spin rounded-full border-4 border-t-transparent"></div>
                </div>
              )}
              {data2.slice(0, 3).map((item, index) => (
                <UpcomingCard key={index} data={item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* top tv shows */}
      <section className="py-6">
        <div>
          <h2 className="text-4xl font-bold text-yellow">What to watch</h2>
          <div className="flex items-center gap-1.5 pt-4 relative">
            <h2 className="text-2xl font-bold before:contents-[''] before:w-1 before:absolute before:left-0 before:bg-yellow before:h-[calc(100%-16px)] before:rounded before:ml-3s ml-3">
              Top picks
            </h2>
            <svg
              className="hover:text-yellow"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              role="presentation"
            >
              <path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z"></path>
            </svg>
          </div>
          <p className="text-primary/50 pt-2">TV shows just for you</p>
        </div>
        <div className="pt-6">
          {loading3 && (
            <SkeletonLoader variant="primary" primaryCustomClass="h-[450px]" />
          )}

          <MainSlider data={data3} type="tv" />
        </div>
      </section>

      {/* top movies */}
      <section className="py-6">
        <div>
          <div className="flex items-center gap-1.5 pt-4 relative">
            <h2 className="text-2xl font-bold before:contents-[''] before:w-1 before:absolute before:left-0 before:bg-yellow before:h-[calc(100%-16px)] before:rounded before:ml-3s ml-3">
              Fan Favourites
            </h2>
            <svg
              className="hover:text-yellow"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              role="presentation"
            >
              <path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z"></path>
            </svg>
          </div>
          <p className="text-primary/50 pt-2">Movies just for you</p>
        </div>
        <div className="pt-6">
          {loading4 && (
            <SkeletonLoader variant="primary" primaryCustomClass="h-[450px]" />
          )}
          <MainSlider data={data4} type="movie" />
        </div>
      </section>
    </main>
  );
}
