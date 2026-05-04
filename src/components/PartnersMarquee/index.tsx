import React, { useEffect, useRef, useState } from "react";

type Partner = {
  id: string;
  logo: string;
  name?: string;
};

type Props = {
  partners: Partner[];
  speed?: number;
};

export const PartnersMarquee: React.FC<Props> = ({
  partners,
  speed = 0.6,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [paused, setPaused] = useState(false);
  const [dragging, setDragging] = useState(false);

  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // loop infinito
  const items = [...partners, ...partners];

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let frame: number;

    const animate = () => {
      if (!paused && !dragging) {
        el.scrollLeft += speed;

        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [paused, dragging, speed]);

  // DRAG START
  const onMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    startX.current = e.pageX;
    scrollLeft.current = containerRef.current?.scrollLeft || 0;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging || !containerRef.current) return;

    const x = e.pageX;
    const walk = (x - startX.current) * 1.3;

    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const stopDrag = () => setDragging(false);

  return (
    <div
      className="relative w-full overflow-hidden bg-[#000] py-6 "
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* FADE ESQUERDA */}
      <div className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none bg-gradient-to-r from-[#0F0F0F] to-transparent" />

      {/* FADE DIREITA */}
      <div className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none bg-gradient-to-l from-[#0F0F0F] to-transparent" />

      {/* LINHA DECORATIVA */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-[#CC092F]/40" />

      <div
        ref={containerRef}
        className="flex gap-14 items-center whitespace-nowrap overflow-x-scroll no-scrollbar px-10 cursor-grab active:cursor-grabbing"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        onTouchStart={(e) => {
          setDragging(true);
          startX.current = e.touches[0].pageX;
          scrollLeft.current = containerRef.current?.scrollLeft || 0;
        }}
        onTouchMove={(e) => {
          if (!dragging || !containerRef.current) return;

          const x = e.touches[0].pageX;
          const walk = (x - startX.current) * 1.3;

          containerRef.current.scrollLeft = scrollLeft.current - walk;
        }}
        onTouchEnd={stopDrag}
      >
        {items.map((p, i) => (
          <div
            key={`${p.id}-${i}`}
            className="
              flex-shrink-0 w-[150px] h-[90px]
              flex items-center justify-center
              rounded-xl
              border border-[#F7C600]/10
              bg-[#111111]
              hover:border-[#CC092F]
              transition-all duration-300
              hover:scale-105
            "
          >
            <img
              src={p.logo}
              alt={p.name || "partner"}
              className="max-h-12 object-contain grayscale hover:grayscale-0 transition duration-300"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};