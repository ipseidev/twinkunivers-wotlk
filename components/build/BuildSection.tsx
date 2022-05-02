import React from 'react';

const BuildSection = ({guides, classeActive, factionActive, setBuildActifAndSetQuery}:any) => {
    return (
        <section>
            <h1>Build</h1>
            {guides.map((guide: any) => {
                if (guide.attributes.classe.data.id === classeActive && guide.attributes.faction.data.id === factionActive) {
                    return (
                        <div key={guide.id} onClick={() => setBuildActifAndSetQuery(guide.id)}>
                            <h2>
                                {guide.attributes.description}
                            </h2>
                        </div>
                    )
                }
            })
            }
        </section>

    );
};

export default BuildSection;
