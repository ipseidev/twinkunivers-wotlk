import React from 'react';
import Image from "next/image"
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import MageIcon from "../../assets/images/mage.png"
import {Autoplay} from "swiper";
import clsx from "clsx";

const CarouselClasse = ({classes, selectClasse, classeActive}: any) => {
    return (
        <section className={"carousel_classe_container"}>
            <div className={"carousel_classe"}>
                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    autoplay={{
                        delay: 1500
                    }}

                    slidesPerView={6}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    style={{height: "100%"}}
                >
                    {
                        classes.map((classe: any) => {
                            return (
                                <SwiperSlide className={"swiper_item"} key={classe.id} onClick={() => selectClasse(classe.id)}>
                                    <div className={"swiper_image_container"}>
                                        <Image src={classe.attributes.icon.data.attributes.url} width={100} height={100} alt={classe.attributes.classe}
                                               className={clsx("swiper_image_classe", classeActive === classe.id && "swiper_image_classe-active")}/>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }


                </Swiper>
            </div>
        </section>
    );
};

export default CarouselClasse;
