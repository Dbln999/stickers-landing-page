import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage.tsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
    </Routes>
  );
};

export default AppRouter;
