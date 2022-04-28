import Link from 'next/link';
import Image from 'next/image'
import React from 'react';
import {BsDiscord, BsYoutube} from "react-icons/bs"

const Navbar = () => {
    return (
        <section className={'navbar_container'}>
            <div className={'navbar_sub_container'}>
                <div className={"navbar_transform_skew"}/>
                <div className={'navbar_top_container'}>
                    <nav className={'navbar_top'}>
                        <ul>
                            <li>
                                <p>Suivez-nous sur : </p>
                            </li>
                            <li>
                                <BsDiscord/>
                            </li>
                            <li>
                                <BsYoutube/>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={'navbar_bottom_container'}>
                    <nav className={'navbar_bottom'}>
                        <ul>
                            <li>
                                <Link href={"/"}>
                                    Accueil
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"}>
                                    Guides de classes
                                </Link>
                            </li>
                        </ul>
                    </nav>

                </div>
            </div>
            <div className={'navbar_middle_container'}>
                <div className={'navbar_middle_background_container'}>
                    <div className={'navbar_middle_logo_container'}>
                        <a itemProp="url" href="https://playerx.qodeinteractive.com/" style={{height: 84}}>
                            <Image  src={"https://twinkunivers.com/wp-content/uploads/2021/07/cropped-LOGO.png"} width="100" height="100" alt="logo"/>

                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Navbar;
