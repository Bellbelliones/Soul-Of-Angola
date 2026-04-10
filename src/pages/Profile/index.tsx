import { Menu } from "../../components/Buttons/Menu";
import { ProfileCard } from "../../components/ProfileCard";


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
                        <ProfileCard />
                    </section>
                </main>
                <footer>

                </footer>
            </nav>
        </>
    )
}