import { LogOut, LogIn } from "lucide-react"
import { useNavigate } from 'react-router-dom';
import { useUser } from "../../../hooks/useUser";
import { LogoOut } from "../../../hooks/LogOut";

interface BtnInOutProps
{
    type: number,
}
export const BtnInOut = ({ type}:BtnInOutProps) =>{
    const navigate = useNavigate();
    const {user} = useUser();

    return (
        <>
        
            {
                type == 1 ? (
                    !user ? (
                    <button className="w-full py-2 bg-[#F7C600] rounded-md flex justify-center gap-2" onClick={() => navigate("/login")}>
                        <LogIn /> Login
                    </button>
                    ) : (
                    <button className="w-full py-2 bg-[#CC092F] rounded-md flex justify-center gap-2" onClick={LogoOut}>
                            <LogOut /> Logout
                    </button>
                    )
                ) 
                :type == 2 ? (
                    !user ? (
                    <button className="w-full py-2 bg-[#F7C600] rounded-md flex justify-center gap-2" onClick={() => navigate("/login")}>
                        <LogIn /> Login
                    </button>
                    ) : (
                    <button className="w-full py-2 bg-[#CC092F] rounded-md flex justify-center gap-2" onClick={LogoOut}>
                        <LogOut /> Logout
                    </button>
                    )
                )
                :type == 3 ?
                    (
                        !user ? (
                        <button className="mt-auto bg-[#F7C600] py-2 rounded-md flex justify-center gap-2" onClick={() => navigate("/login")}>
                            <LogIn /> Login
                        </button>
                        ) : (
                        <button className="mt-auto bg-[#CC092F] py-2 rounded-md flex justify-center gap-2" onClick={LogoOut}>
                            <LogOut /> Logout
                        </button>
                        )  
                    )
                    :
                    (
                        <button className="mt-auto bg-[#CC092F] py-2 rounded-md flex justify-center gap-2" onClick={LogoOut}>
                            <LogOut /> Logout
                        </button>
                    )
                
            }
        </>
    )
}