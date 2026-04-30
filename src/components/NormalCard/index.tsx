import type { ReactNode } from "react"

type NormalCardProps =
{
    icone: ReactNode;
    title: string;
    text: string;
    image: string;
};


export const NormalCard = ({ icone, title, text, image }: NormalCardProps) =>{
    return(
        <>
            <div 
            className={`flex flex-col items-center justify-center w-90 text-white p-6 border border-[#262626] shadow-xl
             ${image !== "" ? "relative overflow-hidden bg-cover bg-center bg-[#1A1A1A]" : "bg-[#1A1A1A]"}`}
            style={{backgroundImage: `url('${image}')`}}
            >
                {image != "" ? 
                
                <div className="absolute inset-0 bg-black/60"></div>
                :
                <span></span>
            }
                <div className='relative z-10 flex flex-col items-center justify-center'>
                    {icone}
                    <h3 className='mb-3 text-xl font-semibold font-title'>{title}</h3>
                    <span className='text-center'>{text}</span>
                </div>
                                
            </div>
        </>
    )
}