import React from "react";
import Input from "../components/Input";
import * as Yup from "yup";
import { useFormik } from "formik";
import FromError from "../components/FromError";

export default function SignUp() {
  const SignUp = Yup.object().shape({
    firstName: Yup.string()
      .required("Enter your first name")
      .min(3, "Too short"),
    lastName: Yup.string().required("Enter your last name").min(3, "Too short"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Enter your email"),
    password: Yup.string()
      .required("Enter your password")
      .min(8, "Password is too short")
      .matches(/[0-9]/, "Password must contain a number")
      .matches(/[A-Z]/, "Password requires an uppercase letter"),
    confirmPassword: Yup.string()
      .required("Confirm your password")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: SignUp,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <main className="min-h-[calc(100vh-56px-274px)] flex items-center justify-center">
      <div className="container">
        <div className="text-center py-5">
          <h1 className="text-2xl md:text-4xl xl:text-5xl">Sign Up</h1>
        </div>
        <div className="max-w-md mx-auto border-primary/50 rounded-lg px-4 py-5">
          <form onSubmit={formik.handleSubmit}>
            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-5">
                <div className="space-y-1">
                  <Input
                    type="text"
                    id="firstName"
                    placeholder="First Name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                  />
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <FromError message={formik.errors.firstName} />
                  ) : null}
                </div>
                <div className="space-y-1">
                  <Input
                    type="text"
                    id="lastName"
                    placeholder="Last Name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                  />
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <FromError message={formik.errors.lastName} />
                  ) : null}
                </div>
              </div>
              <div className="space-y-1">
                <Input
                  type="email"
                  id="email"
                  placeholder="Email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
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
                />
                {formik.touched.password && formik.errors.password ? (
                  <FromError message={formik.errors.password} />
                ) : null}
              </div>
              <div className="space-y-1">
                <Input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                />
                {formik.touched.confirmPassword &&
                formik.errors.confirmPassword ? (
                  <FromError message={formik.errors.confirmPassword} />
                ) : null}
              </div>

              <button
                type="submit"
                className="w-full bg-yellow text-secondary rounded-md py-2.5 text-sm font-medium"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
