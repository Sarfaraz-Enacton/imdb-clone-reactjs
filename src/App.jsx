import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Preview from "./screens/Preview";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageNotFound from "./screens/PageNotFound";
import { AppRoutes } from "./utils/routes-config";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={AppRoutes.home} element={<Home />} />
          <Route path="/preview/:id" element={<Preview />} />
          <Route path={AppRoutes.signIn} element={<SignIn />} />
          <Route path={AppRoutes.singUP} element={<SignUp />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path={AppRoutes.notFound} element={<PageNotFound />} />
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
