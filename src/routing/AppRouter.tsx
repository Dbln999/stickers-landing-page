import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage.tsx";
import PaymentPage from "../pages/PaymentPage/PaymentPage.tsx";
import AboutPage from "../pages/AboutPage/AboutPage.tsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path={"/payment"} element={<PaymentPage />}></Route>
      <Route path={"/about"} element={<AboutPage />}></Route>
    </Routes>
  );
};

export default AppRouter;
