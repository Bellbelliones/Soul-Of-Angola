import { useNavigate} from "react-router-dom";
import { Menu } from '../../components/Buttons/Menu/index';
import "../../styles/global.css"
import { CardContainerGrid } from "../../components/CardContainerGrid";
import { CreatePost } from "../../components/CreatePost";

export default function Feed()
{
    const navigate = useNavigate();
    return (
        <>
            <header>
                <Menu />
            </header>
            <main>
                <div>
                    <h1 className=" m-4 text-center font-title text-3xl font-bold">FEED NEWS</h1>
                </div>
                <div>
                    <CardContainerGrid />
                </div>
                <div>
                    <CreatePost />
                </div>
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