import React from 'react';
import clsx from "clsx";

const BuildSection = ({guides, classeActive, factionActive, setBuildActifAndSetQuery, idBuildActif}:any) => {
    return (
        <section className={"build_container"}>
            <h1>Builds</h1>
            <div className={"build_container_items-container"}>
            {guides.map((guide: any) => {
                if (guide.attributes.classe.data.id === classeActive && guide.attributes.faction.data.id === factionActive) {
                    return (
                        <div key={guide.id} onClick={() => setBuildActifAndSetQuery(guide.id)} className={clsx("build_container-item", idBuildActif === guide.id && "build_container-item-active")}>
                            <h2>
                                {guide.attributes.description}
                            </h2>
                        </div>
                    )
                }
            })
            }</div>
        </section>

    );
};

export default BuildSection;
