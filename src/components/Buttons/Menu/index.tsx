import { useState } from "react";
import { Home, LogOut, User, LayoutGrid, Compass, Briefcase} from "lucide-react";
import {Navigate, useNavigate } from "react-router-dom";

export const Menu = () => {

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white text-black border-b z-50 px-4 py-3 relative">
      
      <div className="flex items-center justify-between">

        {/* Lado esquerdo */}
        <div className="flex items-center gap-3">
          
          {/* Botão hamburguer (só mobile) */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(true)}
          >
            ☰
          </button>

          {/* Logo imagem */}
          <img
            src="/logo2.png"
            alt="logo"
            className="w-10 h-10 object-contain"
          />

          {/* Texto logo */}
          <div className="text-xl font-bold">SoulOfAngola</div>
        </div>

        {/* Menu + Login (desktop) */}
        <div className="hidden md:flex items-center gap-6">
          
          {/* Menu desktop */}
          <ul className="flex gap-6">
            <li className="hover:text-[#F7C600] cursor-pointer" onClick={() => navigate("/")}>Home</li>
            <li className="hover:text-[#F7C600] cursor-pointer" onClick={() => navigate("/feed")}>Feed</li>
            <li className="hover:text-[#F7C600] cursor-pointer" onClick={() => navigate("/services")}>Services</li>
            <li className="hover:text-[#F7C600] cursor-pointer" onClick={() => navigate("/contacts")}>Contacts</li>
          </ul>

          {/* Botão Login */}
          <button className="bg-[#CC092F] text-white px-4 py-1.5 rounded-md font-medium hover:bg-gray-200 transition">
            Login
          </button>
        </div>

        {/* Botão Login (mobile opcional) */}
        <button className="md:hidden bg-[#CC092F] p-3  text-white px-3 py-1 rounded-md text-sm">
          Login
        </button>

      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Drawer mobile */}
      <div
      className={`fixed top-0 left-0 h-full w-[60%] bg-gray-800 text-white shadow-lg transform transition-transform duration-300 ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex flex-col h-full">

        {/* Header (botão fechar) */}
        <div className="p-4 flex justify-end">
          <button onClick={() => setOpen(false)}>✕</button>
        </div>

        {/* Conteúdo principal */}
        <div className="flex flex-col justify-between flex-1">

          {/* Menu */}
          <ul className="flex flex-col gap-6 p-6 text-lg">
            <li className="flex" onClick={() => navigate("/")}>
              <span className="mr-2">
                <Home />
              </span>
              Home</li>
            <li className="flex" onClick={() => navigate("/feed")}>
              <span className="mr-2">
                <LayoutGrid />
              </span>
              Feed</li>
            <li className="flex" onClick={() => navigate("/services")}>
              <span className="mr-2">
                <Briefcase />
              </span>
              Services</li>
            <li className="flex" onClick={() => navigate("/contacts")}>
              <span className="mr-2">
                <User />
              </span>
              Contacts</li>
          </ul>

          {/* Logout */}
          <div className="p-6 border-t border-gray-600">
            <button className="w-full bg-red-500 text-white py-2 rounded-md">
              LogOut
            </button>
          </div>

        </div>

      </div>
    </div>

    </nav>
  );
};