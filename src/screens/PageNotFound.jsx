import { Link } from "react-router-dom";
import { AppRoutes } from "../utils/routes-config";

const PageNotFound = () => {
  return (
    <main className="min-h-[calc(100vh-56px)] flex items-center justify-center">
      <div className="container">
        <div className="text-center">
          <p className="text-base font-semibold">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-yellow sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to={AppRoutes.home}
              className="w-full bg-yellow text-secondary rounded-md py-2.5 text-sm font-medium"
            >
              Go back home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PageNotFound;
