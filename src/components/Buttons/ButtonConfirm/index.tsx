
interface ButtonConfirmProps
{ 
    name: string,
    disable: boolean,
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}
export const ButtonConfirm = ({name, disable, onClick}:ButtonConfirmProps) =>{
    return (
        <>
            <div>
                <button className=" mt-4 mb-2 w-full bg-[#CC092F] text-white p-3 rounded-lg font-semibold hover:bg-[#A50727] transition" onClick={onClick} disabled={disable} type="button">{name}</button>
            </div>
        </>
    )
}