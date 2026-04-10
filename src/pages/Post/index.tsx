import { Menu } from "../../components/Buttons/Menu";
import { CreatePost } from "../../components/CreatePost";


export default function Post ()
{
    return (
        <>
            <header>
                <section>
                    <Menu />
                </section>
            </header>
            <main>
                <section>
                    <div>
                        <CreatePost />
                    </div>
                </section>
            </main>
            <footer>

            </footer>
        </>
    )
}