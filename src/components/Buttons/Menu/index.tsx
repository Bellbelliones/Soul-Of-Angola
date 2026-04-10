import { useState } from "react";
import {
  Home,
  LayoutGrid,
  Briefcase,
  Settings,
  Heart,
  Download,
  Globe,
  MapPin,
  Monitor,
  Trash,
  Clock,
  LogOut,
  User,
  PlusSquare,
  BarChart3,
  Wrench,
  Phone,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BtnInOut } from "../BtnInOut";

export const Menu = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState("");
  const [open, setOpen] = useState(false);
  const [advanced, setAdvanced] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const isLogged = true;
  return (
    <nav className="relative z-50 px-4 py-3 bg-[#0F0F0F] text-white border-b border-white/10">

      {/* HEADER */}
      <div className="flex items-center justify-between">

        {/* ESQUERDA */}
        <div className="flex items-center gap-3">
          <button
            className="text-2xl md:hidden"
            onClick={() => setOpen(true)}
          >
            ☰
          </button>

          <img src="/logo2.png" className="w-10 h-10" />

          <span className="text-xl font-bold text-[#F7C600]">
            SoulOfAngola
          </span>
        </div>

        {/* DESKTOP */}
        <div className="items-center hidden gap-6 md:flex">

          <ul className="flex gap-6 ">
            <li onClick={() => navigate("/")} className="flex flex-row items-center justify-center cursor-pointer hover:text-[#CC092F] transition-all duration-300 ease-in-out"><Home className="w-7"/>Home</li>
            <li onClick={() => navigate("/feed")} className="flex flex-row items-center justify-center cursor-pointer hover:text-[#CC092F] transition-all duration-300 ease-in-out"><LayoutGrid className="w-7"/>Feed</li>
            <li onClick={() => navigate("/services")} className="flex flex-row items-center justify-center cursor-pointer hover:text-[#CC092F] transition-all duration-300 ease-in-out"><Briefcase className="w-7"/>Services</li>
            <li onClick={() => navigate("/contacts")} className="flex flex-row items-center justify-center cursor-pointer hover:text-[#CC092F] transition-all duration-300 ease-in-out"><Phone className="w-7"/>Contacts</li>
          </ul>

          <button
            onClick={() =>
              isLogged ? setProfileOpen(true) : navigate("/login")
            }
            className="bg-[#CC092F] px-4 py-1.5 rounded-md font-bold"
          >
            {isLogged ? "Perfil" : "Login"}
          </button>
        </div>
      </div>

      {/* OVERLAY */}
      {(open || profileOpen) && (
        <div
          className="fixed inset-0 bg-black/50"
          onClick={() => {
            setOpen(false);
            setProfileOpen(false);
            setAdvanced(false);
          }}
        />
      )}

      {/* 📱 MOBILE DRAWER */}
      <div
        className={`fixed top-0 left-0 h-full w-[75%] bg-[#0F0F0F] transform transition duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >

        <div className="flex flex-col h-full">

          {/* FECHAR */}
          <div className="flex justify-end p-4">
            <button onClick={() => setOpen(false)}>✕</button>
          </div>

          {/* PERFIL */}
          <div className="flex items-center gap-3 px-4 pb-4 border-b border-white/10">
            <img src="/logo2.png" className="rounded-full w-14 h-14" />
            <div>
              <p className="text-sm font-bold">@Rodolfo Guzman</p>
              <p className="text-xs text-gray-400">rodolfoguzman0326@email.com</p>
            </div>
          </div>

          {/* 🔥 ÁREA DAS TELAS */}
          <div className="relative flex-1 overflow-hidden">

            {/* 🟢 MENU PRINCIPAL */}
            <div
              className={`absolute inset-0 flex flex-col justify-between transition duration-300 ${
                advanced ? "-translate-x-full" : "translate-x-0"
              }`}
            >
              <ul className="flex flex-col gap-5 p-6">

                <li onClick={() => navigate("/")} className="flex gap-2">
                  <Home /> Home
                </li>

                <li onClick={() => navigate("/feed")} className="flex gap-2">
                  <LayoutGrid /> Feed
                </li>
                <li onClick={() => navigate("/services")} className="flex gap-2">
                  <Briefcase /> Services
                </li>
                <li onClick={() => navigate("/contacts")} className="flex gap-2">
                  <Phone /> Contact
                </li>

                <li
                  onClick={() => setAdvanced(true)}
                  className="flex gap-2 text-[#F7C600] font-bold"
                >
                  <Settings /> Avançando
                </li>

              </ul>

              <div className="p-6 border-t border-white/10">
                <BtnInOut status={status} type={1} />
              </div>
            </div>

            {/* 🔴 MENU AVANÇADO */}
            <div
              className={`absolute inset-0 flex flex-col justify-between transition duration-300 ${
                advanced ? "translate-x-0" : "translate-x-full"
              }`}
            >

              {/* HEADER */}
              <div className="flex items-center gap-3 p-4 border-b border-white/10">
                <button onClick={() => setAdvanced(false)}>←</button>
                <span className="text-[#F7C600] font-bold">
                  Avançado
                </span>
              </div>

              {/* OPÇÕES */}
              <ul className="flex flex-col gap-4 p-6 text-sm">
                <li className="flex gap-2" onClick={() => navigate("/profile")}><User /> Profile</li>
                <li className="flex gap-2" onClick={() => navigate("/post")}><PlusSquare /> Post</li>
                <li className="flex gap-2" onClick={() => navigate("/analysis")}><BarChart3 /> Access Analysis</li>
                <li className="flex gap-2" onClick={() => navigate("/settings")}><Settings /> Settings</li>

              </ul>

              {/* LOGOUT */}
              <div className="p-6 border-t border-white/10">
                <BtnInOut status={status} type={2} />
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* 🖥️ DRAWER PERFIL */}
      <div
        className={`fixed top-0 right-0 h-full w-[320px] bg-[#0F0F0F] transform transition duration-300 ${
          profileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">

          <div className="flex justify-between mb-6">
            <h2 className="text-[#F7C600] font-bold">Perfil</h2>
            <button onClick={() => setProfileOpen(false)}>✕</button>
          </div>

          <ul className="flex flex-col gap-4 text-sm">
                <li className="flex gap-2 cursor-pointer hover:text-[#CC092F] transition-all duration-300 ease-in-out" onClick={() => navigate("/profile")}><User /> Profile</li>
                <li className="flex gap-2 cursor-pointer hover:text-[#CC092F] transition-all duration-300 ease-in-out" onClick={() => navigate("/post")}><PlusSquare /> Post</li>
                <li className="flex gap-2 cursor-pointer hover:text-[#CC092F] transition-all duration-300 ease-in-out" onClick={() => navigate("/analysis")}><BarChart3 /> Access Analysis</li>
                <li className="flex gap-2 cursor-pointer hover:text-[#CC092F] transition-all duration-300 ease-in-out" onClick={() => navigate("/settings")}><Settings /> Settings</li>
          </ul>

          <BtnInOut status={status} type={3} />
        </div>
      </div>

    </nav>
  );
};