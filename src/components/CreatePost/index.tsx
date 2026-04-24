import { useState } from "react";

export const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<string | null>(null);

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white p-4 md:p-8">

      <div className="grid gap-6 mx-auto md:grid-cols-2 max-w-7xl">

        {/* 📝 EDITOR */}
        <div className="flex flex-col gap-5 p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.5)]">

          <h2 className="text-2xl font-title text-[#F7C600]">
            Create Post
          </h2>
          {/* Upload imagem */}
          <label className="flex items-center justify-center gap-2 p-4 border-2 border-dashed border-white/20 rounded-lg cursor-pointer hover:border-[#CC092F] transition">
            <span className="text-sm text-gray-300">
              Clique para adicionar imagem
            </span>
            <input
              type="file"
              accept="image/*"
              onChange={handleImage}
              className="hidden"
            />
          </label>
          {/* Título */}
          <input
            type="text"
            placeholder="Título do conteúdo..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-3 rounded-lg bg-[#0F0F0F] border border-white/10 focus:border-[#F7C600] outline-none transition"
          />

          {/* Descrição */}
          <textarea
            placeholder="Escreva uma descrição envolvente..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="h-32 p-3 rounded-lg bg-[#0F0F0F] border border-white/10 focus:border-[#F7C600] outline-none resize-none transition"
          />

          

          {/* Botão */}
          <button className="bg-[#F7C600] text-black py-3 rounded-lg font-bold mt-2 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(247,198,0,0.6)] transition">
            Publicar
          </button>

        </div>

        {/* 👁️ PREVIEW */}
        <div className="flex flex-col gap-4 p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.5)]">

          <h2 className="text-2xl font-title text-[#CC092F]">
            Preview
          </h2>

          <div className="relative w-full overflow-hidden shadow-xl aspect-9/16 rounded-xl">

            {/* IMAGEM */}
            {image && (
              <img
                src={image}
                className="absolute object-cover w-full h-full"
              />
            )}

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent"></div>

            {/* TEXTO */}
            <div className="absolute bottom-0 w-full p-4">

              <h3 className="text-lg leading-tight text-white font-title">
                {title || "Título do conteúdo"}
              </h3>

              <p className="mt-1 text-sm text-gray-300 line-clamp-2">
                {description || "Descrição aparecerá aqui..."}
              </p>

              {/* Autor */}
              <div className="flex items-center gap-2 mt-4">
                <div className="w-7 h-7 bg-[#CC092F] rounded-full flex items-center justify-center text-xs font-bold">
                  U
                </div>
                <span className="text-xs text-gray-400">
                  @usuario
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};