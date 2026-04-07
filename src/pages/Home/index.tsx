import {Navigate, useNavigate} from "react-router-dom";
import { Maps } from "../../components/Maps";
import { Menu } from '../../components/Buttons/Menu/index';

export default function Home()
{
    const navigate = useNavigate();
    return (
        <>
            <header>
                <Menu />
            </header>
            <main>

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