import {Navigate, useNavigate} from "react-router-dom";
import { Maps } from "../../components/Maps";
import { Menu } from '../../components/Buttons/Menu/index';
import { VideoShowFront } from '../../components/VideoShowFront/index';
import "../../styles/global.css"
import { Parceiros } from "../../components/Parceiros";

export default function Home()
{
    const navigate = useNavigate();
    return (
        <>
            <header>
                <Menu />
            </header>
            <main>
                <section>
                    <VideoShowFront />
                </section>
                <section >
                    <div className="w-full bg-[#0F0F0F] text-white">
                        <Parceiros />
                        <div className="flex justify-center items-center flex-col">
                            <div className="flex justify-around items-center flex-row mb-10 mt-10">
                                <img src="/dancando.png" alt="" className="w-[45%] rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.2)]"/>
                                <p className="w-[45%] indent-8 text-left">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores illo cupiditate aut sunt hic veniam unde repellat quas ullam. Pariatur, sequi reprehenderit sit rerum beatae porro nihil error. Explicabo, pariatur?
                                </p>
                            </div>
                            <div className="flex justify-around items-center flex-row mb-10">
                                <p className="w-[45%] indent-8 text-left">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores illo cupiditate aut sunt hic veniam unde repellat quas ullam. Pariatur, sequi reprehenderit sit rerum beatae porro nihil error. Explicabo, pariatur?
                                </p>
                                <img src="/dancando.png" alt="" className="w-[45%] rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.2)]"/>
                            </div>
                        </div>
                    </div>
                    
                </section>
                    

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