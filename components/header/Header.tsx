import React from 'react';
import CarouselClasse from "../carousel/CarouselClasse";

const Header = ({classes, setClasseActiveAndSetQuery, classeActive}: any) => {
    return (
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
                <CarouselClasse classes={classes} selectClasse={setClasseActiveAndSetQuery}
                                classeActive={classeActive}/>

            </div>
        </header>
    );
};

export default Header;
