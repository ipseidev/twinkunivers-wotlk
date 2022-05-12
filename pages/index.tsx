//@ts-nocheck

import React from "react";
import type {NextPage} from 'next'
import {useRouter} from 'next/router'

import client from "../appolo-client";
import Navbar from "../components/navbar";
import BuildSection from "../components/build/BuildSection";
import FactionSection from "../components/faction/FactionSection";
import TextContentSection from "../components/textContent/TextContentSection";
import StuffSection from "../components/stuff/StuffSection";
import Header from "../components/header/Header";
import {getClasses} from "../graphql/getClasses";
import {getFactions} from "../graphql/getFactions";
import {getGuides} from "../graphql/getGuides";
import Footer from "../components/footer";
import CarouselClasse from "../components/carousel/CarouselClasse";

const Home: NextPage = ({classes, factions, guides}: any) => {
    const router = useRouter();
    const [classeActive, setClasseActive] = React.useState(0);
    const [factionActive, setFactionActive] = React.useState(0);
    const [idBuildActif, setIdBuildActif] = React.useState(0);
    const [guide, setGuide] = React.useState<any>();
    const scrollRef = React.useRef();

    React.useEffect(() => {
        if (idBuildActif === 0) return;
        const build = guides.filter((guide: any) => guide.id === idBuildActif);
        if (build.length > 0) {
            setGuide(build[0].attributes)
        }
    }, [idBuildActif, guides])

    React.useEffect(() => {
        try {
            // @ts-ignore
            $WowheadPower.refreshLinks()
        } catch (e) {
            console.log("");
        }
    })

    React.useEffect(() => {
        if(idBuildActif === 0) {
            setGuide('')
        }
    }, [idBuildActif])

    React.useEffect(() => {
        console.log("router =>", router.query)
        if(router.query?.classe){
            setClasseActiveAndSetQuery(router.query?.classe)
        }
        if(router.query?.faction){
            setClasseFactionAndSetQuery(router.query?.faction)
        }
        if(router.query?.build){
            setIdBuildActif(router.query?.build)
        }
    }, [])

    React.useEffect(() => {
        scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    });


    const getClasseName = () => {
        const classe = classes.filter((classe: any) => classe.id === classeActive);
        if (classe.length > 0) {
            return classe[0].attributes.classe
        }
    }


    const setClasseActiveAndSetQuery = async (id: number) => {
        setIdBuildActif(0);
        setClasseActive(id);
        router.query.classe = `${id}`;
        await router.push(router, router, {shallow: true});
    }


    const setClasseFactionAndSetQuery = async (id: number) => {
        setIdBuildActif(0);
        setFactionActive(id);
        router.query.faction = `${id}`;
        await router.push(router, router, {shallow: true});
    }

    const setBuildActifAndSetQuery = async (id: number) => {
        setIdBuildActif(id);
        router.query.build = `${id}`;
        await router.push(router, router, {shallow: true});
    }

    return (
        <main>
            <Navbar/>
            <Header classes={classes} setClasseActiveAndSetQuery={setClasseActiveAndSetQuery}
                    classeActive={classeActive}/>
            <CarouselClasse classes={classes} selectClasse={setClasseActiveAndSetQuery}
                            classeActive={classeActive}/>
            <main className={"main_content_container"}>
                <div className={"content_container"}>
                <FactionSection classeActive={classeActive} factions={factions}
                                setClasseFactionAndSetQuery={setClasseFactionAndSetQuery} factionActive={factionActive}/>
                <BuildSection classeActive={classeActive} factionActive={factionActive} guides={guides}
                              setBuildActifAndSetQuery={setBuildActifAndSetQuery} idBuildActif={idBuildActif}/>
                <StuffSection guide={guide}/>
                <TextContentSection guide={guide} factionActive={factionActive}/>
                <div ref={scrollRef} />
                </div>
            </main>
            <Footer />
        </main>
    )
}

export default Home

export async function getServerSideProps() {
    const classes = await client.query({
        query: getClasses,
    });

    const factions = await client.query(
        {
            query:getFactions,
        });

    const guides = await client.query(
        {
            query: getGuides,
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
