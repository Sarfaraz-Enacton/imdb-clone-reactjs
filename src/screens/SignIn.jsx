import React, { useState } from "react";
import Input from "../components/Input";
import { Link, Navigate, redirect, useNavigation } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import FromError from "../components/FromError";
import SignInWithGoogle from "../components/SignInWithGoogle";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { userAtom } from "../utils/constant";

export default function SignIn() {
  const [user, setUser] = useRecoilState(userAtom);
  console.log(user);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  // const navigate = useNavigation();
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
    onSubmit: async (values) => {
      try {
        const userCredentials = await signInWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        const { uid } = userCredentials.user;
        localStorage.setItem("user.uid", uid);
        const userId = localStorage.getItem("user.uid");
        console.log(userId);
        setUser(userId);
        console.log(user);
        // window.location.href = window.location.origin;
        // navigate("/");
        // toast("Sign in successfully");
        return redirect("/");
      } catch (error) {
        alert("invalid credentials");
        const errorMessage = error.message;
        const errorCode = error.code;
        setError(true);
        console.log(errorCode);

        switch (errorCode) {
          case "auth/invalid-email":
            setErrorMessage("Invalid email.");
            toast("Invalid email.");
            break;
          case "auth/user-disabled":
            setErrorMessage("Disabled email");
            break;
          case "auth/user-not-found":
            setErrorMessage("User not found");
            break;
          case "auth/wrong-password":
            setErrorMessage("Wrong password");
            break;
          default:
            setErrorMessage("something went wrong");
            break;
        }
      }
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
                  // autoComplete="username"
                  autoComplete="on"
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
                  // autoComplete="current-password"
                  autoComplete="on"
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
          {/* <SignInWithGoogle customClass="mt-5" /> */}
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
