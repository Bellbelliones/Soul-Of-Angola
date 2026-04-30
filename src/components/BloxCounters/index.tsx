import type { ReactNode } from "react"

type BloxCountersProps = {
    icone: ReactNode,
    number: number,
    text: string
    locate: boolean
}

export const BloxCounters = ({icone, number, text, locate} :BloxCountersProps) => {
    return (
        <>
           <div className={`flex flex-col items-center justify-center text-center p-1 rounded-2xl ${locate ? "bg-black/10" : "bg-black/15"}`}>
                {icone}
                <span className='text-2xl font-semibold font-body font-title'>{number}</span>
                <p>{text}</p>
            </div> 
        </>
    )
}