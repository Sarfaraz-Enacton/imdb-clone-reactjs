import React from "react";
import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";

export default function SignInWithGoogle({ customClass }) {
  const handleSignInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      // User signed in successfully
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };
  return (
    <button
      className={`w-full bg-yellow text-secondary rounded-md py-2.5 text-sm font-medium ${
        customClass ? customClass : ""
      }`}
      onClick={handleSignInWithGoogle}
    >
      Sign in with Google
    </button>
  );
}
