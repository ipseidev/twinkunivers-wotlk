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

const Home: NextPage = ({classes, factions, guides}: any) => {
    const router = useRouter();
    const [classeActive, setClasseActive] = React.useState(0);
    const [factionActive, setFactionActive] = React.useState(0);
    const [idBuildActif, setIdBuildActif] = React.useState(0);
    const [guide, setGuide] = React.useState<any>();

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
      console.log(guides.length)
    }, [])

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
            <main className={"content_container"}>
                <section className={"classe_content_container"}>
                    <h1 className={"text-center"}>{getClasseName()}</h1>
                </section>
                <FactionSection classeActive={classeActive} factions={factions}
                                setClasseFactionAndSetQuery={setClasseFactionAndSetQuery}/>
                <BuildSection classeActive={classeActive} factionActive={factionActive} guides={guides}
                              setBuildActifAndSetQuery={setBuildActifAndSetQuery}/>
                <StuffSection guide={guide}/>
                <TextContentSection guide={guide}/>
            </main>
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
