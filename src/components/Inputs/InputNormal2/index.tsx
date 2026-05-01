import {  type ReactNode } from "react"

type InputNormalProps = {
    icone: ReactNode,
    placeholder: string,
    value: string,
    type: string,
    onChange: (value: string) => void
}

export const InputNormal2 = (props: InputNormalProps) =>
{
    return (
        <>
            <div className="rounded-lg bg-[#1A1A1A] p-2 flex justify-center items-center flex-row m-2 shadow shadow-[#F7C600]">
                {props.icone}
                <input 
                    type={props.type} 
                    placeholder={props.placeholder} 
                    value={props.value}
                    onChange={(e) => props.onChange(e.target.value)}
                    className="w-full p-2 border-none outline-none"
                />
            </div>
        </>
    )
}