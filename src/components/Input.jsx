import { ErrorMessage } from "formik";
import React from "react";

export default function Input({
  type,
  placeholder,
  id,
  customClass,
  onChange,
  errorMessage,
  ...rest
}) {
  return (
    <div className="space-y-2.5">
      <input
        className={`bg-transparent py-2.5 px-3 sm:px-4 w-full border-2 border-yellow/20 shadow-100 rounded placeholder:text-gray-blue-80 placeholder:text-sm text-sm font-medium transition ease-in-out duration-300 focus:ring-0 focus:outline-none focus:border-yellow/70 ${customClass}`}
        type={type}
        placeholder={placeholder}
        name={id}
        id={id}
        onChange={onChange}
        {...rest}
      />
      {errorMessage && (
        <ErrorMessage
          name={id}
          component="p"
          className="text-red text-sm font-medium pt-1"
        />
      )}
    </div>
  );
}
