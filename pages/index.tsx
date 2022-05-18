//@ts-nocheck

import React from "react";
import type {NextPage} from 'next'
import {useRouter} from 'next/router'

import client from "../appolo-client";
import BuildSection from "../components/build/BuildSection";
import FactionSection from "../components/faction/FactionSection";
import TextContentSection from "../components/textContent/TextContentSection";
import StuffSection from "../components/stuff/StuffSection";
import Header from "../components/header/Header";
import {getClasses} from "../graphql/getClasses";
import {getFactions} from "../graphql/getFactions";
import {getGuides} from "../graphql/getGuides";
import Footer from "../components/footer";
import Script from "next/script";

const Home: NextPage = ({classes, factions, guides}: any) => {
    const router = useRouter();
    const [classeActive, setClasseActive] = React.useState(0);
    const [factionActive, setFactionActive] = React.useState(0);
    const [idBuildActif, setIdBuildActif] = React.useState(0);
    const [lang, setLang] = React.useState("fr")
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
        if (idBuildActif === 0) {
            setGuide('')
        }
    }, [idBuildActif])

    React.useEffect(() => {
        if (router.query?.classe) {
            setClasseActiveAndSetQuery(router.query?.classe)
        }
        if (router.query?.faction) {
            setClasseFactionAndSetQuery(router.query?.faction)
        }
        if (router.query?.build) {
            setIdBuildActif(router.query?.build)
        }
        if (router.query?.lang) {
            setLang(router.query?.lang)
        }
    }, [])

    React.useEffect(() => {
        if (!classeActive) return;
        scrollRef.current.scrollIntoView({behavior: 'smooth'});
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
        setFactionActive(0)
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
        <>
            <Script
                src={`https://www.erosmosis.fr/test2.js?lang=${router.query?.lang}`}
            />
            <main>
                <Header classes={classes} setClasseActiveAndSetQuery={setClasseActiveAndSetQuery}
                        classeActive={classeActive} lang={lang} setLang={setLang}/>
                <main className={"main_content_container"}>
                    <div className={"content_container"}>

                        <FactionSection classeActive={classeActive} factions={factions}
                                        setClasseFactionAndSetQuery={setClasseFactionAndSetQuery}
                                        factionActive={factionActive}/>
                        <div ref={scrollRef}/>
                        <BuildSection classeActive={classeActive} factionActive={factionActive} guides={guides}
                                      setBuildActifAndSetQuery={setBuildActifAndSetQuery} idBuildActif={idBuildActif}/>

                        <StuffSection guide={guide}/>
                        <TextContentSection guide={guide} factionActive={factionActive}/>

                    </div>
                </main>
                <Footer/>
            </main>
        </>
    )
}

export default Home

export async function getServerSideProps(context) {

    const lang = context.query.lang || 'fr';
    const classes = await client.query({
            query: getClasses,
            variables: {locale: lang}
        }
    )

    const factions = await client.query(
        {
            query: getFactions,
            variables: {locale: lang}
        }
    )
    const guides = await client.query(
        {
            query: getGuides,
            variables: {locale: lang}
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
