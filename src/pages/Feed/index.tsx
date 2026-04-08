import {Navigate, useNavigate} from "react-router-dom";
import { Maps } from "../../components/Maps";
import { Menu } from '../../components/Buttons/Menu/index';
import { VideoShowFront } from '../../components/VideoShowFront/index';
import "../../styles/global.css"
import { Parceiros } from "../../components/Parceiros";

export default function Feed()
{
    const navigate = useNavigate();
    return (
        <>
            <header>
                <Menu />
            </header>
            <main>
                
                    
                    <h1>Feed</h1>

            </main>
            <footer>
                
            </footer>
            <div className="h-screen flex justify-center items-center ">
                <div>

                </div>
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