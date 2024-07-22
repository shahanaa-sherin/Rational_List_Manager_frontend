import { Route, Routes } from "react-router-dom";
import Login from "../Components/Authentication/Login";
import Signup1 from "../Components/Authentication/Signup1";
import User from "../Components/User";
import HomePage from "../Pages/HomePage";
import Tabs from "../Components/Tabs/Tabs";
import Context from "../Context/Context";

function CommonRouter() {
  return (
    <>
    <Context>
      <Routes>
        <Route path="/signup" element={<Signup1 />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<HomePage />}>
          <Route path="/" element={<User />}></Route>
          <Route path="/tabs" element={<Tabs />}></Route>
        </Route>
      </Routes>
      </Context>
    </>
  );
}

export default CommonRouter;
