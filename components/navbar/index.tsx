//@ts-nocheck

import Image from 'next/image'
import React from 'react';
import {BsDiscord, BsYoutube} from "react-icons/bs"
import Logo from "../../assets/images/logo2.png"
import {traduction} from "../../lang/traduction";


const Navbar = (lang :any) => {
    return (
        <section className={'navbar_container'}>
            <div className={'navbar_sub_container'}>
                <div className={'navbar_top_container'}>
                    <nav className={'navbar_top'}>
                        <ul>
                            <li>
                                <p>{traduction[`${lang.lang}`].follow}</p>
                            </li>
                            <li>
                                <a href={"https://discord.gg/vXDAHJDm3h"} target={"_blank"} rel="noreferrer">
                                    <BsDiscord/>
                                </a>
                            </li>
                            <li>
                                <a href={"https://www.youtube.com/channel/UCxuDALY9cayfeG9o3DQgs7A"} target={"_blank"}
                                   rel="noreferrer">
                                    <BsYoutube/>
                                </a>
                            </li>

                        </ul>
                        <select style={{background: "transparent"}} onChange={(value) => {
                            location.href = `https://twinkunivers-wotlk.vercel.app/?lang=${value.target.value}`;
                        }} value={lang.lang}>
                            <option value={"fr"} style={{color: lang === "fr" ? "white" : "black"}}>FR</option>
                            <option value={"en"} style={{color: lang === "en" ? "white" : "black"}}>EN</option>
                            <option value={"de"} style={{color: lang === "de" ? "white" : "black"}}>DE</option>
                            <option value={"es"} style={{color: lang === "es" ? "white" : "black"}}>ES</option>
                        </select>
                    </nav>
                </div>
                <div className={'navbar_bottom_container'}>
                    <nav className={'navbar_bottom'}>
                        <ul>
                            <li>
                                <a href={"#classes"}>
                                    {traduction[`${lang.lang}`].guide}
                                </a>
                            </li>
                        </ul>

                    </nav>

                </div>
            </div>

            <div className={'navbar_middle_container'}>
                <div className={'navbar_middle_background_container'}>
                    <div className={'navbar_middle_logo_container'}>
                        <a itemProp="url" href="" style={{height: 120}}>
                            <Image src={Logo} width="150" height="120" alt="logo"/>
                        </a>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Navbar;
