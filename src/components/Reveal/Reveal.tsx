import { useInView } from "../../hooks/useInView";

export const Reveal = ({ children }: { children: React.ReactNode }) => {
  const { ref, visible } = useInView();

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      {children}
    </div>
  );
};