import { useState, useRef } from "react"
import { useUser } from "../../../hooks/useUser"
import { supabase } from "../../../lib/supabase"

export const EditProfileForm = () => {
  const { user, setUser } = useUser()

  const fileRef = useRef<HTMLInputElement | null>(null)

  const [name, setName] = useState(user?.name || "")
  const [phone, setPhone] = useState(user?.phone || "")
  const [avatar, setAvatar] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)

  function handleAvatarChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    setAvatar(file)
  }

  async function uploadAvatar(file: File) {
    const fileName = `${user?.id}-${Date.now()}`

    const { error } = await supabase.storage
      .from("avatars")
      .upload(fileName, file)

    if (error) throw error

    const { data } = supabase.storage
      .from("avatars")
      .getPublicUrl(fileName)

    return data.publicUrl
  }

  async function handleUpdate() {
    if (!user) return

    setLoading(true)

    try {
      let avatar_url = user.avatar_url

      // 🔥 se mudou foto
      if (avatar) {
        avatar_url = await uploadAvatar(avatar)
      }

      const { data, error } = await supabase
        .from("userprofile")
        .update({
          name,
          phone,
          avatar_url
        })
        .eq("id", user.id)
        .select()
        .single()

      if (error) throw error

      localStorage.setItem("user", JSON.stringify(data))
      setUser(data)

      alert("Perfil atualizado com sucesso!")
    } catch (err) {
      console.log(err)
      alert("Erro ao atualizar perfil")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-2xl p-4 mx-auto bg-white shadow rounded-xl">

      <h2 className="mb-4 text-lg font-semibold">Editar Perfil</h2>

      <div className="space-y-4">

        {/* FOTO */}
        <div>
          <label className="block mb-1 text-sm text-gray-600">
            Foto de perfil
          </label>

          <img
            src={
              avatar
                ? URL.createObjectURL(avatar)
                : user?.avatar_url || "/logo2.png"
            }
            className="w-20 h-20 rounded-full"
          />

          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            className="mt-2 text-sm text-blue-600"
          >
            Alterar foto
          </button>

          <input
            type="file"
            ref={fileRef}
            onChange={handleAvatarChange}
            className="hidden"
          />
        </div>

        {/* NOME */}
        <div>
          <label className="block mb-1 text-sm text-gray-600">Nome</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded-lg"
          />
        </div>

        {/* TELEFONE */}
        <div>
          <label className="block mb-1 text-sm text-gray-600">Telefone</label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-2 border rounded-lg"
          />
        </div>

        {/* EMAIL (apenas leitura opcional) */}
        <div>
          <label className="block mb-1 text-sm text-gray-600">Email</label>
          <input
            value={user?.email || ""}
            disabled
            className="w-full p-2 bg-gray-100 border rounded-lg"
          />
        </div>

     

        {/* BOTÃO */}
        <button
          onClick={handleUpdate}
          disabled={loading}
          className="w-full py-2 text-white bg-[#CC092F] rounded-lg"
        >
          {loading ? "Salvando..." : "Salvar alterações"}
        </button>
      </div>
    </div>
  )
}