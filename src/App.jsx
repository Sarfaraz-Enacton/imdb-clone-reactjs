import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Preview from "./screens/Preview";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import { RecoilRoot, useRecoilState } from "recoil";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { userAtom } from "./utils/constant";
import { auth } from "../firebase";

function App() {
  const [user, setUser] = useRecoilState(userAtom);
  console.log(user);

  useEffect(() => {
    // This function is called to set up the listener
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Update the Recoil state with the current user
    });

    // Cleanup function to unsubscribe when the component unmounts
    return () => unsubscribe();
  }, []); // The dependency array should be empty to run the effect once on mount
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/preview/:id" element={<Preview />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      s{" "}
    </>
  );
}

export default App;
