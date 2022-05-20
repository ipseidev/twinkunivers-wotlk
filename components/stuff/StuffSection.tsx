import React from 'react';
import StuffButton from "./StuffButton";

const StuffSection = ({guide}: any) => {
    if (!guide) return;
    return (
        <section>
            {
                guide && (
                    <div className={"stuff_container"}>
                        <div className={"stuff_left-container animate__animated animate__fadeInLeft"}>
                            <StuffButton item={guide.tete?.item} enchant={guide.tete?.enchant}
                                         commentaire={guide.tete?.commentaire} side={"left"}
                                         linkSide={"right"}
                            />
                            <StuffButton item={guide.cou?.item} enchant={guide.cou?.enchant}
                                         commentaire={guide.cou?.commentaire}
                                         side={"left"}
                                         linkSide={"right"}
                            />
                            <StuffButton item={guide.epaule?.item} enchant={guide.epaule?.enchant}
                                         commentaire={guide.epaule?.commentaire} side={"left"}
                                         linkSide={"right"}
                            />
                            <StuffButton item={guide.cape?.item} enchant={guide.cape?.enchant}
                                         commentaire={guide.cape?.commentaire} side={"left"}
                                         linkSide={"right"}
                            />
                            <StuffButton item={guide.torse?.item} enchant={guide.torse?.enchant}
                                         commentaire={guide.torse?.commentaire} side={"left"}
                                         linkSide={"right"}
                            />
                            <StuffButton item={guide.torse?.itemi}
                                         side={"left"}
                                         linkSide={"right"}
                            />
                            <StuffButton item={guide.torse?.itemi}
                                         side={"left"}
                                         linkSide={"right"}
                            />
                            <StuffButton item={guide.brassards?.item} enchant={guide.brassards?.enchant}
                                         commentaire={guide.brassards?.commentaire} side={"left"}
                                         linkSide={"right"}
                            />
                        </div>
                        <div className={"stuff_bottom-container animate__animated animate__fadeInUp"}>
                            <StuffButton item={guide.main_droite?.item} enchant={guide.main_droite?.enchant}
                                         commentaire={guide.main_droite?.commentaire} side={"bottom"}
                                         linkSide={"left"}
                            />
                            <div>
                                <StuffButton item={guide.main_gauche?.item} enchant={guide.main_gauche?.enchant}
                                             commentaire={guide.main_gauche?.commentaire} side={"bottom"}
                                             linkSide={"right"}
                                />
                                <StuffButton item={guide.distance?.item} enchant={guide.distance?.enchant}
                                             commentaire={guide.distance?.commentaire} side={"bottom"}
                                             linkSide={"right"}
                                />
                            </div>
                        </div>
                        <div className={"stuff_right-container animate__animated animate__fadeInRight"}>
                            <StuffButton item={guide.gants?.item} enchant={guide.gants?.enchant}
                                         commentaire={guide.gants?.commentaire} side={"right"}
                                         linkSide={"left"}
                            />
                            <StuffButton item={guide.ceinture?.item} enchant={guide.ceinture?.enchant}
                                         commentaire={guide.ceinture?.commentaire}
                                         side={"right"}
                                         linkSide={"left"}
                            />
                            <StuffButton item={guide.pantalon?.item} enchant={guide.pantalon?.enchant}
                                         commentaire={guide.pantalon?.commentaire} side={"right"}
                                         linkSide={"left"}
                            />
                            <StuffButton item={guide.bottes?.item} enchant={guide.bottes?.enchant}
                                         commentaire={guide.bottes?.commentaire} side={"right"}
                                         linkSide={"left"}
                            />
                            <StuffButton item={guide.bague1?.item} side={"right"}
                                         linkSide={"left"}
                            />
                            <StuffButton item={guide.bague2?.item} side={"right"}
                                         linkSide={"left"}
                            />
                            <StuffButton item={guide.bijou1?.item} side={"right"}
                                         linkSide={"left"}
                            />
                            <StuffButton item={guide.bijou2?.item} side={"right"}
                                         linkSide={"left"}
                            />
                        </div>
                    </div>
                )
            }
        </section>
    );
};

export default StuffSection;
