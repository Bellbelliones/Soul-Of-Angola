import { Menu } from "../../components/Buttons/Menu";
import { CreatePost } from "../../components/CreatePost";
import { PostWizard } from "../../components/PostWizard";


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
                        <PostWizard />
                    </div>
                </section>
            </main>
            <footer>

            </footer>
        </>
    )
}