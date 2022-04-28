import React from 'react';
import Image from "next/image"
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import MageIcon from "../../assets/images/mage.png"
import DemoIcon from "../../assets/images/warlock.png"
import PriestIcon from "../../assets/images/priest.png"
import WarIcon from "../../assets/images/warrior.png"
import PaladinIcon from "../../assets/images/paladin.png"
import RogueIcon from "../../assets/images/rogue.png"
import ShamanIcon from "../../assets/images/shaman.png"
import HunterIcon from "../../assets/images/hunter.png"
import DruidIcon from "../../assets/images/druid.png"
import {Autoplay} from "swiper";

const CarouselClasse = () => {
    return (
        <section className={"carousel_classe_container"}>
            <div className={"carousel_classe"}>
                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    autoplay={{
                        delay: 1500
                    }}

                    spaceBetween={50}
                    slidesPerView={6}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    style={{height: "100%"}}
                >
                    <SwiperSlide className={"swiper_item"}>
                        <Image src={MageIcon} width={100} height={100} alt={'mage'}/>
                    </SwiperSlide>
                    <SwiperSlide className={"swiper_item"}>
                        <Image src={DemoIcon} width={100} height={100} alt={'mage'}/>
                    </SwiperSlide>
                    <SwiperSlide className={"swiper_item"}>
                        <Image src={PriestIcon} width={100} height={100} alt={'mage'}/>
                    </SwiperSlide>
                    <SwiperSlide className={"swiper_item"}>
                        <Image src={WarIcon} width={100} height={100} alt={'mage'}/>
                    </SwiperSlide>
                    <SwiperSlide className={"swiper_item"}>
                        <Image src={PaladinIcon} width={100} height={100} alt={'mage'}/>
                    </SwiperSlide>
                    <SwiperSlide className={"swiper_item"}>
                        <Image src={RogueIcon} width={100} height={100} alt={'mage'}/>
                    </SwiperSlide>
                    <SwiperSlide className={"swiper_item"}>
                        <Image src={HunterIcon} width={100} height={100} alt={'mage'}/>
                    </SwiperSlide>
                    <SwiperSlide className={"swiper_item"}>
                        <Image src={DruidIcon} width={100} height={100} alt={'mage'}/>
                    </SwiperSlide>
                    <SwiperSlide className={"swiper_item"}>
                        <Image src={ShamanIcon} width={100} height={100} alt={'mage'}/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default CarouselClasse;
