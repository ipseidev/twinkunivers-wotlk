import React from 'react';
import Image from "next/image";

const Footer = () => {
    return (
        <footer className={"footer"}>
            <a itemProp="url" href="" style={{height: 84}}>
                <Image  src={"https://twinkunivers.com/wp-content/uploads/2021/07/cropped-LOGO.png"} width="100" height="100" alt="logo"/>
            </a>
            <h1>Twinkunivers</h1>
        </footer>
    );
};

export default Footer;
