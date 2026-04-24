import { Menu } from "../../components/Buttons/Menu";
import { EditProfileForm } from "../../components/Profile/EditProfileForm";

export default function EditProfilePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">

      {/* 🔝 MENU */}
      <header className="]">
        <Menu />
      </header>

      {/* 🧩 CONTEÚDO */}
      <main className="flex items-center justify-center flex-1 p-4">
        <EditProfileForm />
      </main>

      {/* 🔻 RODAPÉ */}
      <footer className="p-3 text-sm text-center text-gray-500 bg-white">
        
      </footer>

    </div>
  )
}