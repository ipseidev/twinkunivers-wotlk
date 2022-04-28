import type {NextPage} from 'next'
import Navbar from "../components/navbar";
import CarouselClasse from "../components/carousel/CarouselClasse";

const Home: NextPage = () => {
    return (
        <main>
            <Navbar/>
            <header className={"homepage_header"}>
                <div className={"homepage_header_background"}>
                    <div>
                    <h1 style={{color: "white", fontSize:"5rem", textShadow:"0px 3px 3px #144165"}}>Twinkunivers</h1>
                        <h3 style={{color: "#144165", fontSize:"2rem", textShadow:"3px 3px 3px black"}}>WOTLK edition</h3>
                    </div>
                    <CarouselClasse/>

                </div>
            </header>
            <section>

            </section>
        </main>
    )
}

export default Home
