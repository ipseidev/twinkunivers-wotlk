import React from "react";
import type {NextPage} from 'next'
import { useRouter } from 'next/router'

import {gql} from "@apollo/client";
import client from "../appolo-client";
import Navbar from "../components/navbar";
import CarouselClasse from "../components/carousel/CarouselClasse";
import Image from "next/image";
import clsx from "clsx";

const Home: NextPage = ({classes, factions, guides}: any) => {
    const router = useRouter();
    const [classeActive, setClasseActive] = React.useState(0);
    const [factionActive, setFactionActive] = React.useState(0);
    const [idBuildActif, setIdBuildActif] = React.useState(0);
    const [guide, setGuide] = React.useState();

    React.useEffect(() => {
        if (idBuildActif === 0) return;
        const build = guides.filter((guide: any) => guide.id === idBuildActif);
        if (build.length > 0) {
            setGuide(build[0].attributes)
        }

    }, [idBuildActif, guides])


    const getClasseName = () => {
        const classe = classes.filter((classe: any) => classe.id === classeActive);
        if (classe.length > 0) {
            return classe[0].attributes.classe
        }
    }


    const setClasseActiveAndSetQuery = async (id:number) => {
        setClasseActive(id);
        router.query.classe = `${id}`;
        await router.push(router, router, {shallow:true});
    }


    const setClasseFactionAndSetQuery = async (id:number) => {
        setFactionActive(id);
        router.query.faction = `${id}`;
        await router.push(router, router, {shallow:true});
    }

    const setBuildActifAndSetQuery = async (id:number) => {
        setIdBuildActif(id);
        router.query.build = `${id}`;
        await router.push(router, router, {shallow:true});
    }

    return (
        <main>
            <Navbar/>
            <header className={"homepage_header"}>
                <div className={"homepage_header_background"}>
                    <div>
                        <h1 style={{
                            color: "white",
                            fontSize: "5rem",
                            textShadow: "0px 3px 3px #144165"
                        }}>Twinkunivers</h1>
                        <h3 style={{color: "#144165", fontSize: "2rem", textShadow: "3px 3px 3px black"}}>WOTLK
                            edition</h3>
                    </div>
                    <CarouselClasse classes={classes} selectClasse={setClasseActiveAndSetQuery} classeActive={classeActive}/>

                </div>
            </header>
            <main className={"content_container"}>
                <h1>{getClasseName()}</h1>

                <section>
                    <h1>Faction</h1>
                    <div>
                        {
                            classeActive && factions.sort((factionA: any, factionB: any) => factionA.id - factionB.id).map((faction: any) => {
                                return (
                                    <div className={"swiper_image_container"} key={faction.id}
                                         onClick={() => setClasseFactionAndSetQuery(faction.id)}>
                                        <Image src={faction.attributes.icon.data.attributes.url} width={100}
                                               height={100} alt={faction.attributes.faction}
                                               className={clsx("swiper_image_classe")}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
                <section>
                    <h1>Build</h1>
                    {
                        guides.map((guide: any) => {
                            if (guide.attributes.classe.data.id === classeActive && guide.attributes.faction.data.id === factionActive) {
                                return (
                                    <div key={guide.id} onClick={() => setBuildActifAndSetQuery(guide.id)}>
                                        <h2>
                                            {guide.attributes.description}
                                        </h2>
                                    </div>
                                )
                            }
                        })
                    }
                </section>
                <section>
                    {
                        idBuildActif
                    }
                </section>
                <section>
                    texte
                </section>
            </main>
        </main>
    )
}

export default Home

export async function getServerSideProps() {
    const classes = await client.query({
        query: gql`
            query classes {
                classes{
                    data{
                        id
                        attributes{

                            classe
                            icon{
                                data{
                                    attributes{
                                        url
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `,
    });

    const factions = await client.query(
        {
            query: gql`
                query factions {
                    factions{
                        data{
                            id
                            attributes{
                                faction
                                icon{
                                    data{
                                        attributes{
                                            url
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            `
        }
    )

    const guides = await client.query(
        {
            query: gql`
                query guides {
                    guides{
                        data{
                            id
                            attributes{
                                description
                                classe{
                                    data{
                                        id,
                                        attributes{
                                            alliance,
                                            horde,
                                            alliance_horde,
                                            best_race_horde{
                                                data{
                                                    attributes{
                                                        race
                                                    }
                                                }
                                            },
                                            best_race_alliance{
                                                data{
                                                    attributes{
                                                        race
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                faction{
                                    data{
                                        id
                                    }
                                }
                                tete{item, enchant, commentaire}
                                cou{item, enchant, commentaire}
                                epaule{item, enchant, commentaire}
                                cape{item, enchant, commentaire}
                                torse{item, enchant, commentaire}
                                brassards{item, enchant, commentaire}
                                gants{item, enchant, commentaire}
                                ceinture{item, enchant, commentaire}
                                pantalon{item, enchant, commentaire}
                                bottes{item, enchant, commentaire}
                                bague1{item, enchant, commentaire}
                                bague2{item, enchant, commentaire}
                                bijou1{item, enchant, commentaire}
                                bijou2{item, enchant, commentaire}
                                main_droite{item, enchant, commentaire}
                                main_gauche{item, enchant, commentaire}
                                distance{item, enchant, commentaire}


                            }
                        }
                    }
                }
            `
        }
    )


    return {
        props: {
            classes: classes.data.classes.data,
            factions: factions.data.factions.data,
            guides: guides.data.guides.data
        },
    };
}
