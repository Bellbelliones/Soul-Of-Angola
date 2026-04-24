import { useRef, useState } from "react";


interface CardPostProps 
  {
    cardImage: string
    cardVideo: string
    title: string,
    descrition: string,
    userImage: string,
    userName: string,
  }

export const CardPost = ({cardImage, cardVideo, title, descrition, userImage, userName}: CardPostProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);

  const handleEnter = () => {
    setHovered(true);
    videoRef.current?.play();
  };

  const handleLeave = () => {
    setHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  

  return (
    <div
      className="relative w-full overflow-hidden transition duration-300 shadow-md cursor-pointer aspect-9/16 rounded-xl hover:shadow-xl"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onTouchStart={handleEnter}
      onTouchEnd={handleLeave}
    >

      {/* IMAGEM */}
      <img
        src={cardImage}
        className={`absolute w-full h-full object-cover transition duration-300 ${
          hovered ? "opacity-0 scale-105" : "opacity-100"
        }`}
      />

      {/* VÍDEO */}
      <video
        ref={videoRef}
        muted
        loop
        className={`absolute w-full h-full object-cover transition duration-300 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src={cardVideo} />
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>

      {/* TEXTO */}
      <div className="absolute bottom-0 left-0 w-full p-2 text-white">

        <h3 className="text-sm font-semibold leading-tight truncate">
          {title}
        </h3>

        <p className="text-xs text-gray-300 line-clamp-1">
          {descrition}
        </p>

        {/* Autor */}
        <div className="flex items-center gap-2 mt-2">
          <img
            src={userImage}
            className="object-cover w-6 h-6 rounded-full"
          />
          <span className="text-xs text-gray-300 truncate">
            @{userName}
          </span>
        </div>

      </div>

    </div>
  );
};