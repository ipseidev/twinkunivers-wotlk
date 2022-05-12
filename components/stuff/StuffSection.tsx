import React from 'react';
import StuffButton from "./StuffButton";

const StuffSection = ({guide}: any) => {
    return (
        <section>
            {
                guide && (
                    <div className={"stuff_container"}>
                        <div className={"stuff_left-container"}>
                            <StuffButton item={guide.tete?.item} enchant={guide.tete?.enchant}
                                         commentaire={guide.tete?.commentaire} side={"left"}/>
                            <StuffButton item={guide.cou?.item} enchant={guide.cou?.enchant}
                                         commentaire={guide.cou?.commentaire}
                                         side={"left"}/>
                            <StuffButton item={guide.epaule?.item} enchant={guide.epaule?.enchant}
                                         commentaire={guide.epaule?.commentaire} side={"left"}/>
                            <StuffButton item={guide.cape?.item} enchant={guide.cape?.enchant}
                                         commentaire={guide.cape?.commentaire} side={"left"}/>
                            <StuffButton item={guide.torse?.item} enchant={guide.torse?.enchant}
                                         commentaire={guide.torse?.commentaire} side={"left"}/>
                            <StuffButton item={guide.brassards?.item} enchant={guide.brassards?.enchant}
                                         commentaire={guide.brassards?.commentaire} side={"left"}/>
                        </div>
                        <div className={"stuff_bottom-container"}>
                            <StuffButton item={guide.main_droite?.item} enchant={guide.main_droite?.enchant}
                                         commentaire={guide.main_droite?.commentaire} side={"bottom"}/>
                            <StuffButton item={guide.main_gauche?.item} enchant={guide.main_gauche?.enchant}
                                         commentaire={guide.main_gauche?.commentaire} side={"bottom"}/>
                            <StuffButton item={guide.distance?.item} enchant={guide.distance?.enchant}
                                         commentaire={guide.distance?.commentaire} side={"bottom"}/>
                        </div>
                        <div className={"stuff_right-container"}>
                            <StuffButton item={guide.gants?.item} enchant={guide.gants?.enchant}
                                         commentaire={guide.gants?.commentaire} side={"right"}/>
                            <StuffButton item={guide.ceinture?.item} enchant={guide.ceinture?.enchant}
                                         commentaire={guide.ceinture?.commentaire}
                                         side={"bottom"}/>
                            <StuffButton item={guide.pantalon?.item} enchant={guide.pantalon?.enchant}
                                         commentaire={guide.pantalon?.commentaire} side={"right"}/>
                            <StuffButton item={guide.bottes?.item} enchant={guide.bottes?.enchant}
                                         commentaire={guide.bottes?.commentaire} side={"right"}/>
                            <StuffButton ring1={guide.bague1?.item}  ring2={guide.bague2?.item} side={"ring"}/>
                            <StuffButton bijou1={guide.bijou1?.item}  bijou2={guide.bijou2?.item} side={"bijou"}/>
                        </div>
                    </div>
                )
            }
        </section>
    );
};

export default StuffSection;
