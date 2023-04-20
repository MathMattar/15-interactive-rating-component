import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import "./styles/globalStyles.scss";
import Finish from "pages/Finish";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/finish" element={<Finish/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
