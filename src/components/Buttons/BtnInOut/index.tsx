import { LogOut } from "lucide-react"

interface BtnInOutProps
{
    status: string,
    type: number,
}
export const BtnInOut = ({status, type}:BtnInOutProps) =>{
    
    return (
        <>
        
            {
                type == 1 ? (
                    status == "" ? (
                    <button className="w-full py-2 bg-[#F7C600] rounded-md flex justify-center gap-2">
                        <LogOut /> Login
                    </button>
                    ) : (
                    <button className="w-full py-2 bg-[#CC092F] rounded-md flex justify-center gap-2">
                            <LogOut /> Logout
                    </button>
                    )
                ) 
                :type == 2 ? (
                    status == "" ? (
                    <button className="w-full py-2 bg-[#F7C600] rounded-md flex justify-center gap-2">
                        <LogOut /> Login
                    </button>
                    ) : (
                    <button className="w-full py-2 bg-[#CC092F] rounded-md flex justify-center gap-2">
                        <LogOut /> Logout
                    </button>
                    )
                )
                :type == 3 ?
                    (
                        status == "" ? (
                        <button className="mt-auto bg-[#F7C600] py-2 rounded-md flex justify-center gap-2">
                            <LogOut /> Login
                        </button>
                        ) : (
                        <button className="mt-auto bg-[#CC092F] py-2 rounded-md flex justify-center gap-2">
                            <LogOut /> Logout
                        </button>
                        )  
                    )
                    :
                    (
                        <button className="mt-auto bg-[#CC092F] py-2 rounded-md flex justify-center gap-2">
                            <LogOut /> Logout
                        </button>
                    )
                
            }
        </>
    )
}