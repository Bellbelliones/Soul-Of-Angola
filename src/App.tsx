import { Routes, Route } from "react-router-dom"

// CSS
import "./styles/global.css"

// Pages
import Home from "./pages/Home"
import Login from "./pages/auth/Login"
import SignUp from "./pages/auth/SignUP"
import GetEmail from "./pages/auth/ForgotPassword/GetEmail"
import GetCode from "./pages/auth/ForgotPassword/GetCode"
import ChangePassword from "./pages/auth/ForgotPassword/ChangePassword"
import Services from "./pages/Services"
import Feed from "./pages/Feed"
import Contacts from "./pages/Contacts"
import Post from "./pages/Post"
import Profile from "./pages/Profile"
import EditProfilePage from "./pages/EditProfilePage"

export default function App() {
  return (
      <Routes>
        {/* NORMAL ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/services" element={<Services />} />
        <Route path="/post" element={<Post />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/analysis" element={<Post />} />
        <Route path="/settings" element={<Contacts />} />
        <Route path="/editprofile" element={<EditProfilePage />} />

        {/* AUTH */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/getemail" element={<GetEmail />} />
        <Route path="/getcode" element={<GetCode />} />
        <Route path="/changepassword" element={<ChangePassword />} />
      </Routes>
  )
}