import React from 'react';

const TextContentSection = ({guide, factionActive}: {guide:any, factionActive:number}) => {
    const [faction, setFaction] = React.useState('');

    React.useEffect(() => {

        if(factionActive === 1 ){
            setFaction("alliance")
        }
        if(factionActive === 2){
            setFaction("horde")
        }
        if(factionActive === 3){
            setFaction("alliance_horde")
        }
    }, [factionActive])


    return (
        <section>
            texte
            {
                guide &&
                <div dangerouslySetInnerHTML={{__html: guide.classe.data.attributes[faction]}}/>
            }
        </section>
    );
};

export default TextContentSection;
