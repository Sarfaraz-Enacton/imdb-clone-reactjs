import React from "react";

export default function SkeletonLoader({
  variant,
  primaryCustomClass,
  secondaryCustomClass,
}) {
  return (
    <>
      {variant === "primary" ? (
        <div
          className={`w-full flex items-center justify-center gap-2 ${primaryCustomClass}`}
        >
          <div className="w-4 sm:w-6 h-4 sm:h-6 rounded-full animate-pulse bg-yellow"></div>
          <div className="w-4 sm:w-6 h-4 sm:h-6 rounded-full animate-pulse bg-yellow"></div>
          <div className="w-4 sm:w-6 h-4 sm:h-6 rounded-full animate-pulse bg-yellow"></div>
        </div>
      ) : (
        <div
          className={`w-full h-[450px] lg:h-[550px] flex items-center justify-center gap-2 ${secondaryCustomClass}`}
        >
          <div className="border-yellow h-12 w-12 animate-spin rounded-full border-4 border-t-transparent"></div>
        </div>
      )}
    </>
  );
}
