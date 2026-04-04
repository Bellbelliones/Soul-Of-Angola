import { Routes, Route } from "react-router-dom"
import Home from './pages/Home/index';
import Login from "./pages/Login";
import SignUp from "./pages/SignUP";

//CSS
import "./styles/global.css"
import GetEmail from "./pages/ForgotPassword/GetEmail";
import GetCode from "./pages/ForgotPassword/GetCode";
import ChangePassword from "./pages/ForgotPassword/ChangePassword";

export default function App() {
  return (
    <Routes >
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/getemail" element={<GetEmail />} />
      <Route path="/getcode" element={<GetCode />} />
      <Route path="/changepassword" element={<ChangePassword />} />
    </Routes>
  )
}