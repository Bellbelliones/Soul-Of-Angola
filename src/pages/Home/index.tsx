import {Navigate, useNavigate} from "react-router-dom";

export default function Home()
{
    const navigate = useNavigate();
    return (
        <>
            <div className="h-screen flex justify-center items-center ">
                <div className="flex justify-center items-center flex-col w-1/2">
                    <h1>Clica no Botão</h1>
                    <button 
                        onClick = {() => navigate("/login")}
                        className=" bg-[#CC092F] p-2 rounded-[10px] text-white mt-2"
                        >Login</button>
                </div>
                </div>
        </>
    );
}