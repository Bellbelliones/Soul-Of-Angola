import type { ReactNode } from "react";

type NormalCardProps = {
  icone: ReactNode;
  title: string;
  text: string;
  image?: string;
};

export const NormalCard = ({ icone, title, text, image }: NormalCardProps) => {
  const hasImage = Boolean(image);

  return (
    <div
      className={`
        group relative flex flex-col items-center justify-center 
        w-full max-w-sm min-h-[260px]
        p-6 rounded-2xl
        border border-[#262626]
        bg-[#1A1A1A]
        text-white
        overflow-hidden
        transition-all duration-300
        hover:border-[#F7C600]
        hover:shadow-[0_0_25px_rgba(247,198,0,0.25)]
        hover:-translate-y-1
      `}
      style={
        hasImage
          ? {
              backgroundImage: `url('${image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {}
      }
    >
      {/* Overlay */}
      {hasImage && (
        <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-all duration-300" />
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        
        {/* Icon */}
        <div className="mb-3 text-[#F7C600] text-2xl">
          {icone}
        </div>

        {/* Title */}
        <h3 className="mb-2 text-lg font-semibold font-title">
          {title}
        </h3>

        {/* Text */}
        <p className="text-sm text-gray-300 leading-relaxed">
          {text}
        </p>

      </div>
    </div>
  );
};