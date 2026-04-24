import { Menu } from "../../components/Buttons/Menu";
import { ProfileComp } from "../../components/Profile/ProfileComp";


export default function Profile()
{
    return (
        <>
            <nav>
                <header>
                    <Menu/>
                </header>
                <main>
                    <section>
                        <ProfileComp />
                    </section>
                </main>
                <footer>

                </footer>
            </nav>
        </>
    )
}