import React from "react";
import firebase from "../../firebase";

export default function SignInWithGoogle({ customClass }) {
  const handleSignInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      await firebase.auth().signInWithPopup(provider);
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
