import { useRef } from "react"
import { useUser } from "../../../hooks/useUser"
import { useNavigate } from "react-router-dom"

export const ProfileComp = () => {
  const { user } = useUser()
  const fileRef = useRef<HTMLInputElement | null>(null)

  const navigate = useNavigate()

  function handleChangePhoto() {
    fileRef.current?.click()
  }

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return

    console.log("Nova foto:", file)
  }

  return (
    <div className="w-full min-h-screen bg-gray-100">

      {/* 🔵 CAPA */}
      <div className="relative w-full h-40 sm:h-52 md:h-64 bg-linear-to-r from-[#CC092F] to-[#F7C600]">
        <button className="absolute px-3 py-1 text-xs text-white transition rounded-lg bottom-2 right-2 sm:bottom-4 sm:right-4 bg-black/50 hover:bg-black/70">
          Editar capa
        </button>
      </div>

      {/* 👤 CONTAINER */}
      <div className="w-full max-w-5xl px-3 mx-auto sm:px-4">

        {/* FOTO + NOME */}
        <div className="relative flex flex-col items-center gap-3 -mt-16 text-center sm:items-start sm:text-left sm:flex-row sm:items-end sm:gap-4 sm:-mt-20">

          {/* FOTO */}
          <div className="relative group">
            <img
              src={user?.avatar_url || "/logo2.png"}
              className="object-cover border-4 border-white rounded-full shadow-lg w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40"
            />

            <div
              onClick={handleChangePhoto}
              className="absolute inset-0 flex items-center justify-center text-xs text-white transition rounded-full opacity-0 cursor-pointer bg-black/50 group-hover:opacity-100"
            >
              Alterar
            </div>

            <input
              type="file"
              ref={fileRef}
              onChange={handleFile}
              className="hidden"
            />
          </div>

          {/* INFO */}
          <div className="flex-1">

            <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">
              {user?.name || "Seu Nome"}
            </h1>

            <p className="text-sm text-gray-900 sm:text-base">
              {user?.email || "seuemail@gmail.com"}
            </p>

            {/* BOTÕES */}
            <div className="flex flex-col w-full gap-2 mt-3 sm:flex-row sm:w-auto">
              <button className="w-full px-4 py-2 text-white bg-[#CC092F] rounded-lg hover:bg-[#a30724]" onClick={() => navigate("/editprofile")}>
                Editar perfil
              </button>

              <button className="w-full px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
                Configurações
              </button>
            </div>

          </div>
        </div>

        {/* 📄 SEÇÃO DE INFO */}
        <div className="grid gap-4 mt-6 sm:mt-8 md:grid-cols-2">

          {/* SOBRE */}
          <div className="p-4 bg-white shadow rounded-xl sm:p-5">
            <h2 className="mb-2 text-base font-semibold text-gray-800 sm:mb-3 sm:text-lg">
              Informações
            </h2>

            <div className="space-y-1 text-xs text-gray-600 sm:text-sm sm:space-y-2">
              <p><strong>Telefone:</strong> {user?.phone || "Não definido"}</p>
              <p><strong>Email:</strong> {user?.email}</p>
            </div>
          </div>

          {/* EXTRA */}
          <div className="p-4 bg-white shadow rounded-xl sm:p-5">
            <h2 className="mb-2 text-base font-semibold text-gray-800 sm:mb-3 sm:text-lg">
              Atividade
            </h2>

            <p className="text-xs text-gray-500 sm:text-sm">
              Atividades...
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}