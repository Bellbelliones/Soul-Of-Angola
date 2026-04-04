import { useState } from "react";

interface InputFloatingProps
{
    label: string,
    type: string,
}
export const InputFloating = (props: InputFloatingProps) =>{
    const [value, setValue] = useState("");

    return(
        <>
            <div className="relative w-full">
                <input 
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    type={props.type}
                    className="
                        peer 
                        w-full 
                        border-b-2 
                        border-gray-300 
                        bg-transparent 
                        py-2 
                        outline-none 
                        focus:border-black
                        mb-4"

                />
                <label 
                    htmlFor="" 
                    className={`
                        absolute 
                        left-0 
                        transition-all
                        ${value ? "-top-3 text-xs text-black" : "top-2 text-sm text-gray-500"}
                        peer-focus:-top-3
                        peer-focus:text-xs
                        peer-focus:text-black
                        `}
                    >
                    {props.label}
                </label>
            </div>
        </>
    )
}