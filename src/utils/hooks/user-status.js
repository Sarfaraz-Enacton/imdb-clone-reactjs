import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";

const useIsLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);
  console.log(isLoggedIn);

  return { isLoggedIn, loading };
};
export default useIsLoggedIn;
