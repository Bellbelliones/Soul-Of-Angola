import { useState } from "react";

export const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-4 py-3 relative">
      
      <div className="flex items-center justify-between">
        
        {/* Lado esquerdo */}
        <div className="flex items-center gap-3">
          
          {/* Botão hamburguer */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(true)}
          >
            ☰
          </button>

          {/* Imagem logo */}
          <img
            src="/logo.png"
            alt="logo"
            className="w-8 h-8 object-contain"
          />

          {/* Texto logo */}
          <div className="text-xl font-bold">MinhaApp</div>
        </div>

        {/* Botão Login (lado direito) */}
        <button className="bg-white text-gray-900 px-4 py-1.5 rounded-md font-medium hover:bg-gray-200 transition">
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

      {/* Drawer (esquerda → direita) */}
      <div
        className={`fixed top-0 left-0 h-full w-[60%] bg-gray-800 shadow-lg transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-end">
          <button onClick={() => setOpen(false)}>✕</button>
        </div>

        <ul className="flex flex-col gap-6 p-6 text-lg">
          <li>Home</li>
          <li>Sobre</li>
          <li>Serviços</li>
          <li>Contato</li>
        </ul>
      </div>

    </nav>
  );
};