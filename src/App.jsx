import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Preview from "./screens/Preview";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
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
      <ToastContainer
        closeOnClick
        pauseOnHover={false}
        transition={Slide}
        theme="dark"
      />
    </>
  );
}

export default App;
