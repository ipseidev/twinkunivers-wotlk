import React from 'react';
import CarouselClasse from "../carousel/CarouselClasse";

const Header = ({classes, setClasseActiveAndSetQuery, classeActive}: any) => {
    return (
        <header className={"homepage_header"}>
            <div className={"homepage_header_background"}>
                <div  style={{display:"flex", alignItems:"flex-end", justifyContent:"center", flexDirection:"column",position:"relative"}}>
                    <h1 style={{
                        color: "white",
                        fontSize: "5rem",
                        textShadow: "0px 3px 3px #144165",
                        fontWeight:"bold",
                        padding:0
                    }}
                    className={"animate__animated animate__fadeInLeft"}
                    >Twinkunivers</h1>
                    <h3
                        className={"animate__animated animate__fadeInRight"}
                        style={{color: "#00CAE2", fontSize: "2rem", textShadow: "3px 3px 3px black", position:"absolute", top:80}}>WOTLK
                        edition</h3>
                </div>


            </div>
        </header>
    );
};

export default Header;
