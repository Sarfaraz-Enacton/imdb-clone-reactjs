import React from "react";
import Input from "../components/Input";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import FromError from "../components/FromError";
import SignInWithGoogle from "../components/SignInWithGoogle";

export default function SignIn() {
  const SignInSchema = Yup.object().shape({
    email: Yup.string().required("enter your email"),
    password: Yup.string()
      .required("enter your password")
      .min(8, "Password is too short"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: SignInSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <main className="min-h-[calc(100vh-56px-274px)] flex items-center justify-center">
      <div className="container">
        <div className="text-center py-5">
          <h1 className="text-2xl md:text-4xl xl:text-5xl">Sign In</h1>
        </div>
        <div className="max-w-md mx-auto border-primary/50 rounded-lg px-4 py-5">
          <form onSubmit={formik.handleSubmit}>
            <div className="space-y-5">
              <div className="space-y-1">
                <Input
                  type="email"
                  id="email"
                  placeholder="Email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  autoComplete="username"
                />
                {formik.touched.email && formik.errors.email ? (
                  <FromError message={formik.errors.email} />
                ) : null}
              </div>
              <div className="space-y-1">
                <Input
                  type="password"
                  id="password"
                  placeholder="Password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  autoComplete="current-password"
                />
                {formik.touched.password && formik.errors.password ? (
                  <FromError message={formik.errors.password} />
                ) : null}
              </div>

              <button
                type="submit"
                className="w-full bg-yellow text-secondary rounded-md py-2.5 text-sm font-medium"
              >
                Sign In
              </button>
            </div>
          </form>
          <SignInWithGoogle customClass="mt-5" />
          <div className="text-center py-4">
            <p className="text-sm font-medium">
              Don't have an account?{" "}
              <Link to="/sign-up" className="text-yellow">
                Click here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
