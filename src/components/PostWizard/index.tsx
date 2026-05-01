import { useState, useCallback } from "react";
import Cropper from "react-easy-crop";

function getCroppedImg(imageSrc: string, crop: any): Promise<string> {
  const createImage = (url: string) =>
    new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image();
      img.addEventListener("load", () => resolve(img));
      img.addEventListener("error", (e) => reject(e));
      img.src = url;
    });

  return new Promise(async (resolve) => {
    const image = await createImage(imageSrc);

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;

    canvas.width = crop.width;
    canvas.height = crop.height;

    ctx?.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    resolve(canvas.toDataURL("image/jpeg"));
  });
}

export const PostWizard = () => {
  const [step, setStep] = useState(1);

  const [image, setImage] = useState<string | null>(null);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);

  const [audio, setAudio] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);

  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => s - 1);

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  const onCropComplete = useCallback((_: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const confirmCrop = async () => {
    if (!image || !croppedAreaPixels) return;

    const cropped = await getCroppedImg(image, croppedAreaPixels);
    setCroppedImage(cropped);
    next();
  };

  return (
    <div className="fixed inset-0 bg-[#0F0F0F] flex items-center justify-center p-4 text-white">
      <div className="w-full max-w-xl p-6 border bg-white/5 border-white/10 rounded-2xl backdrop-blur-md">

        {/* 🖼 STEP 1 */}
        {step === 1 && (
          <div className="flex flex-col gap-4">
            <h2 className="text-[#F7C600] font-bold text-xl">Imagem</h2>

            <input type="file" accept="image/*" onChange={handleImage} />

            <button
              disabled={!image}
              onClick={next}
              className="bg-[#F7C600] text-black py-3 rounded-lg font-bold disabled:opacity-40"
            >
              Next
            </button>
          </div>
        )}

        {/* ✂️ STEP 2 - CROP REAL */}
        {step === 2 && image && (
          <div className="flex flex-col gap-4 h-[500px]">

            <h2 className="text-[#F7C600] font-bold text-xl">
              Ajustar imagem
            </h2>

            <div className="relative w-full h-[350px] bg-black rounded-lg overflow-hidden">

              <Cropper
                image={image}
                crop={crop}
                zoom={zoom}
                aspect={1}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
              />

            </div>

            {/* Zoom */}
            <input
              type="range"
              min={1}
              max={3}
              step={0.1}
              value={zoom}
              onChange={(e) => setZoom(Number(e.target.value))}
            />

            <div className="flex justify-between">
              <button onClick={back} className="px-4 py-2 border rounded-lg">
                Back
              </button>

              <button
                onClick={confirmCrop}
                className="bg-[#F7C600] text-black px-4 py-2 rounded-lg font-bold"
              >
                Confirmar crop
              </button>
            </div>

          </div>
        )}

        {/* 🎵 STEP 3 */}
        {step === 3 && (
          <div className="flex flex-col gap-4">
            <h2 className="text-[#CC092F] font-bold text-xl">Áudio</h2>

            <input
              type="file"
              accept="audio/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) setAudio(URL.createObjectURL(file));
              }}
            />

            <button onClick={next} className="bg-[#F7C600] text-black py-2 rounded-lg font-bold">
              Next
            </button>
          </div>
        )}

        {/* ✍️ STEP 4 */}
        {step === 4 && (
          <div className="flex flex-col gap-4">

            <h2 className="text-[#F7C600] font-bold text-xl">
              Finalizar
            </h2>

            <input
              placeholder="Título"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="p-3 bg-[#0F0F0F] border rounded-lg"
            />

            <textarea
              placeholder="Descrição"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="p-3 bg-[#0F0F0F] border rounded-lg h-28"
            />

            <button
              onClick={() => {
                console.log({
                  image: croppedImage,
                  audio,
                  title,
                  description,
                });
              }}
              className="bg-[#CC092F] text-white py-2 rounded-lg font-bold"
            >
              Publicar
            </button>

          </div>
        )}

      </div>
    </div>
  );
}; 