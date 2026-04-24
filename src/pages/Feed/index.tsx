import { useNavigate} from "react-router-dom";
import { Menu } from '../../components/Buttons/Menu/index';
import "../../styles/global.css"
import { CardContainerGrid } from "../../components/CardContainerGrid";

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
                    <h1 className="m-4 text-3xl font-bold text-center font-title">FEED NEWS</h1>
                </div>
                <div>
                    <CardContainerGrid />
                </div>
            </main>
            <footer>
                
            </footer>
            <div className="flex items-center justify-center h-screen ">
                <div>

                </div>
                <div className="flex flex-col items-center justify-center w-1/2">
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