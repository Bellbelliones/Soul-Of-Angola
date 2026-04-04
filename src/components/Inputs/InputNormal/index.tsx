
interface InputProps {
    label: string;
    type: string;
}

export const InputNormal = (props: InputProps) =>{
    return(
        <>
            <div>
                <label htmlFor="">{props.label}</label>
                <input type={props.type} className="mb-4 w-full p-3 border border-gray rounded-lg outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
        </>
    )
}