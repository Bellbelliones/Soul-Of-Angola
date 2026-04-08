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
    <div className="min-h-screen bg-black text-white p-4">

      <div className="grid md:grid-cols-2 gap-6">

        {/* 📝 EDITOR */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg flex flex-col gap-4">

          <h2 className="font-title text-2xl">Create Post</h2>

          {/* Título */}
          <input
            type="text"
            placeholder="Título..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-gray-800 p-3 rounded-md outline-none"
          />

          {/* Descrição */}
          <textarea
            placeholder="Descrição..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="bg-gray-800 p-3 rounded-md h-32 resize-none outline-none"
          />

          {/* Upload imagem */}
          <input type="file" accept="image/*" onChange={handleImage} />

          {/* Botão */}
          <button className="bg-[#F7C600] text-black py-3 rounded-md font-bold mt-4">
            Publicar
          </button>

        </div>

        {/* 👁️ PREVIEW */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg">

          <h2 className="font-title text-2xl mb-4">Preview</h2>

          <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden shadow-lg">

            {/* IMAGEM */}
            {image && (
              <img
                src={image}
                className="absolute w-full h-full object-cover"
              />
            )}

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            {/* TEXTO */}
            <div className="absolute bottom-0 p-4">

              <h3 className="font-title text-lg">
                {title || "Título do conteúdo"}
              </h3>

              <p className="text-sm text-gray-300">
                {description || "Descrição aparecerá aqui..."}
              </p>

              {/* Autor fake */}
              <div className="flex items-center gap-2 mt-3">
                <div className="w-6 h-6 bg-gray-500 rounded-full"></div>
                <span className="text-xs text-gray-400">@usuario</span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};