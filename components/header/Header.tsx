import React from 'react';
import CarouselClasse from "../carousel/CarouselClasse";
import Navbar from "../navbar";

const Header = ({classes, setClasseActiveAndSetQuery, classeActive, lang, setLang}: any) => {
    return (
        <header className={"homepage_header"}>

            <Navbar lang={lang} setLang={setLang}/>
            <div className={"homepage_header_background"}>
                <div style={{
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    flexDirection: "column",
                    position: "relative"
                }}>
                    <h1
                        className={"animate__animated animate__fadeInLeft mainTitle"}
                    >Twinkunivers</h1>
                    <h3
                        className={"animate__animated animate__fadeInRight"}
                        style={{
                            color: "#00CAE2",
                            fontSize: "2rem",
                            textShadow: "3px 3px 3px black",
                            position: "absolute",
                            top: 90
                        }}>WOTLK
                        edition</h3>
                </div>


            </div>
            <CarouselClasse classes={classes} selectClasse={setClasseActiveAndSetQuery}
                            classeActive={classeActive}/>
            <div className={"video-backgrund"}>


                {/*<iframe width={"100%"}*/}
                {/*        height={"100%"}*/}
                {/*        src="https://www.youtube.com/embed/sGDDqpcjPvQ?playlist=sGDDqpcjPvQ&controls=0&autoplay=1&mute=1&loop=1"*/}
                {/*        title="YouTube video player" frameBorder="0"*/}
                {/*        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; loop;"*/}
                {/*        allowFullScreen*/}
                {/*/>*/}
                <video loop autoPlay muted width="100%" height={"100%"}>
                    <source src="/assets/videos/twinkunivers.mp4"
                            type="video/mp4"/>
                </video>

            </div>
        </header>
    );
};

export default Header;
