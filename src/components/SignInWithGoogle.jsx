import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { toast } from "react-toastify";
import { AppRoutes } from "../utils/routes-config";

export default function SignInWithGoogle() {
  const handleSignInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      toast.success("Sign in successfully");
      setTimeout(() => {
        window.location.href = AppRoutes.home;
      }, 1000);
    } catch (error) {
      console.error("Google sign-in error:", error);
      toast.error(error.message);
    }
  };
  return (
    <button
      className={`w-full bg-yellow text-secondary rounded-md py-2.5 text-sm font-medium mt-5`}
      onClick={handleSignInWithGoogle}
    >
      Sign in with Google
    </button>
  );
}
