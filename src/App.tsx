import { Routes, Route } from "react-router-dom"
import Home from './pages/Home/index';
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUP";

//CSS
import "./styles/global.css"
import GetEmail from "./pages/auth/ForgotPassword/GetEmail";
import GetCode from "./pages/auth/ForgotPassword/GetCode";
import ChangePassword from "./pages/auth/ForgotPassword/ChangePassword";
import Services from "./pages/Services";
import Feed from "./pages/Feed";
import Contacts from "./pages/Contacts";

export default function App() {
  return (
    <Routes >
      {/*------NORMAL ROOTES------*/}
      <Route path="/" element={<Home />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contacts" element={<Contacts />} />
      {/*------------*/}


      {/*------Auths------*/}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/getemail" element={<GetEmail />} />
      <Route path="/getcode" element={<GetCode />} />
      <Route path="/changepassword" element={<ChangePassword />} />
      {/*----------------*/}
    </Routes>
  )
}