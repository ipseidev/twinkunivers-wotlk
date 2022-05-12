import React from 'react';
import Image from "next/image";
import clsx from "clsx";

const FactionSection = ({classeActive, factions, setClasseFactionAndSetQuery, factionActive}: any) => {
    if(!classeActive) return;
    return (
        <section className={"faction_content_container"}>
            <div className={"faction_content"}>
                {
                    classeActive ? factions.sort((factionA: any, factionB: any) => factionA.id - factionB.id).map((faction: any) => {
                        if(faction) {


                            return (
                                <div className={"faction_flag"} key={faction.id}
                                     onClick={() => setClasseFactionAndSetQuery(faction.id)}>
                                    <Image src={faction.attributes.icon.data.attributes.url} width={100}
                                           height={100} alt={faction.attributes.faction}
                                           className={clsx("image_faction", (factionActive !== 0 && factionActive !== faction.id) && "image_faction-disable")}/>
                                </div>
                            )
                        }
                    }) : <></>
                }
            </div>
        </section>
    );
};

export default FactionSection;
