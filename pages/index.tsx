import type {NextPage} from 'next'
import Navbar from "../components/navbar";
import CarouselClasse from "../components/carousel/CarouselClasse";

const Home: NextPage = () => {
    return (
        <main>
            <Navbar/>
            <header className={"homepage_header"}>
                <div className={"homepage_header_background"}>
                    <h1 style={{color: "white"}}>Twinkunivers</h1>
                    <CarouselClasse/>
                </div>
            </header>
        </main>
    )
}

export default Home
