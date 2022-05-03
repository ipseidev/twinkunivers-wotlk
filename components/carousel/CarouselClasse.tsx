import React from 'react';
import Image from "next/image"
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Navigation, Pagination} from "swiper";


import clsx from "clsx";
SwiperCore.use([Navigation, Pagination]);

const CarouselClasse = ({classes, selectClasse, classeActive}: any) => {
    return (
        <section className={"carousel_classe_container"}>
            <div className={"carousel_classe"}>
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    slidesPerView={6}
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
