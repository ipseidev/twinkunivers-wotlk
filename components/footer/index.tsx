import React from 'react';
import Image from "next/image";
import Logo from "../../assets/images/logo2.png"
const Footer = () => {
    return (
        <footer className={"footer"}>
            <a itemProp="url" href="" style={{height: 120}}>
                <Image  src={Logo} width="150" height="120" alt="logo"/>
            </a>
        </footer>
    );
};

export default Footer;
