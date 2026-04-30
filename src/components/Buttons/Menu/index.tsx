import { useState } from "react";
import {
  Home,
  LayoutGrid,
  Briefcase,
  Settings,
  User,
  PlusSquare,
  BarChart3,
  Phone,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BtnInOut } from "../BtnInOut";
import { useUser } from "../../../hooks/useUser";

export const Menu = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [advanced, setAdvanced] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // Hover desktop
  const [servicesHover, setServicesHover] = useState(false);

  const { user } = useUser();

  return (
    <nav className="relative z-50 px-4 py-3 bg-[#0F0F0F] text-white border-b border-white/10"
        onMouseLeave={() => setServicesHover(false)}>

      {/* HEADER */}
      <div className="flex items-center justify-between ">

        {/* ESQUERDA */}
        <div className="flex items-center gap-3">
          <button className="text-2xl md:hidden" onClick={() => setOpen(true)}>
            ☰
          </button>

          <img src="/logo2.png" className="w-10 h-10" />

          <span className="text-xl font-bold text-[#F7C600]">
            SoulOfAngola
          </span>
        </div>

        {/* DESKTOP */}
        <div className="items-center hidden gap-6 md:flex">

          <ul className="flex gap-6" 
          >

            <li
              onClick={() => navigate("/")}
              className="flex items-center gap-1 cursor-pointer hover:text-[#CC092F] transition"
              onMouseEnter={() => setServicesHover(false)}
            >
              <Home className="w-7" /> Home
            </li>

            <li
              onClick={() => navigate("/feed")}
              className="flex items-center gap-1 cursor-pointer hover:text-[#CC092F] transition"
              onMouseEnter={() => setServicesHover(false)}
            >
              <LayoutGrid className="w-7" /> Feed
            </li>

            {/* SERVICES */}
            <li 
              onMouseEnter={() => setServicesHover(true)}
              className="flex items-center gap-1 cursor-pointer hover:text-[#CC092F] transition"
            >
              <Briefcase className="w-7" />
              Services
            </li>

            <li
              onClick={() => navigate("/contacts")}
              className="flex items-center gap-1 cursor-pointer hover:text-[#CC092F] transition"
              onMouseEnter={() => setServicesHover(false)}
            >
              <Phone className="w-7" /> Contacts
            </li>

          </ul>

          <button
            onClick={() => (/*user ?*/ setProfileOpen(true) /*: navigate("/login")*/)}
            className="bg-[#CC092F] px-4 py-1.5 rounded-md font-bold"
            onMouseEnter={() => setServicesHover(false)}
          >
            {user ? user.name : "Login"}
          </button>
        </div>
      </div>

      {/* 🔥 MEGA MENU ANIMADO */}
      <div
        onMouseEnter={() => setServicesHover(true)}
        onMouseLeave={() => setServicesHover(false)}
        className={`fixed left-0 top-[60px] w-screen bg-[#111] border-t border-white/10 shadow-lg z-40 transform transition-all duration-300 ease-out
        ${servicesHover
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
      >
        <div className="max-w-[1200px] mx-auto p-6">

          <div className="grid grid-cols-3 gap-10">

            {/* COLUNA 1 */}
            <div className="flex flex-col gap-2 text-sm">
              <span className="text-[#F7C600] font-bold">TRANSPORT</span>
              <span className="hover:text-[#CC092F] cursor-pointer">Opção 1</span>
              <span className="hover:text-[#CC092F] cursor-pointer">Opção 2</span>
              <span className="hover:text-[#CC092F] cursor-pointer">Opção 3</span>
            </div>

            {/* COLUNA 2 */}
            <div className="flex flex-col gap-2 text-sm">
              <span className="text-[#F7C600] font-bold">Accommodation</span>
              <span className="hover:text-[#CC092F] cursor-pointer">Opção 4</span>
              <span className="hover:text-[#CC092F] cursor-pointer">Opção 5</span>
              <span className="hover:text-[#CC092F] cursor-pointer">Opção 6</span>
            </div>

            {/* COLUNA 3 */}
            <div className="flex justify-center">
              <img
                src="/dancando.png"
                className="rounded-md object-cover h-[180px] w-full"
              />
            </div>

          </div>

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

          <div className="flex justify-end p-4">
            <button onClick={() => setOpen(false)}>✕</button>
          </div>

          <div className="flex items-center gap-3 px-4 pb-4 border-b border-white/10">
            <img
              src={user?.avatar_url || "/logo2.png"}
              className="rounded-full w-14 h-14"
            />
            <div>
              <p className="text-sm font-bold">{user ? user.name : "seunome"}</p>
              <p className="text-xs text-gray-400">
                {user ? user.email : "seuemail@gmail.com"}
              </p>
            </div>
          </div>

          <div className="relative flex-1 overflow-hidden">

            <div className="absolute inset-0 flex flex-col justify-between">
              <ul className="flex flex-col gap-5 p-6">

                <li onClick={() => navigate("/")} className="flex gap-2">
                  <Home /> Home
                </li>

                <li onClick={() => navigate("/feed")} className="flex gap-2">
                  <LayoutGrid /> Feed
                </li>

                {/* SERVICES MOBILE COM ANIMAÇÃO */}
                <li className="flex flex-col gap-2">
                  <div
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex gap-2 cursor-pointer"
                  >
                    <Briefcase /> Services
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      servicesOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="flex flex-col gap-2 pt-2 ml-6 text-sm text-gray-300">
                      <span>Opção 1</span>
                      <span>Opção 2</span>
                      <span>Opção 3</span>
                      <span>Opção 4</span>
                    </div>
                  </div>
                </li>

                <li onClick={() => navigate("/contacts")} className="flex gap-2">
                  <Phone /> Contact
                </li>

                <li
                  onClick={() => setAdvanced(true)}
                  className="flex gap-2 text-[#F7C600] font-bold cursor-pointer"
                >
                  <Settings /> Avançando
                </li>

              </ul>

              <div className="p-6 border-t border-white/10">
                <BtnInOut type={1} />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* PERFIL */}
      <div
        className={`fixed top-0 right-0 h-full w-[320px] bg-[#0F0F0F] transform transition ${
          profileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">

          <div className="flex justify-between mb-6">
            <h2 className="text-[#F7C600] font-bold">
              {user ? user.name : "Perfil"}
            </h2>
            <button onClick={() => setProfileOpen(false)}>✕</button>
          </div>

          <ul className="flex flex-col gap-4 text-sm">
            <li onClick={() => navigate("/profile")} className="flex gap-2 hover:text-[#CC092F] cursor-pointer"><User /> Profile</li>
            <li onClick={() => navigate("/post")} className="flex gap-2 hover:text-[#CC092F] cursor-pointer"><PlusSquare /> Post</li>
            <li onClick={() => navigate("/analysis")} className="flex gap-2 hover:text-[#CC092F] cursor-pointer"><BarChart3 /> Access Analysis</li>
            <li onClick={() => navigate("/settings")} className="flex gap-2 hover:text-[#CC092F] cursor-pointer"><Settings /> Settings</li>
          </ul>

          <BtnInOut type={3} />
        </div>
      </div>

    </nav>
  );
};