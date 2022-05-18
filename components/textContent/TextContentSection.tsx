import React from 'react';

const TextContentSection = ({guide, factionActive}: any) => {
    const [faction, setFaction] = React.useState('');

    React.useEffect(() => {

        if(parseInt(factionActive) === 1 || parseInt(factionActive) === 4 || parseInt(factionActive) === 6 || parseInt(factionActive) === 5){
            setFaction("alliance")
        }
        if(parseInt(factionActive) === 2 || parseInt(factionActive) === 12 || parseInt(factionActive) === 11 || parseInt(factionActive) === 10){
            setFaction("horde")
        }
        if(parseInt(factionActive) === 3 || parseInt(factionActive) === 7 || parseInt(factionActive) === 9 || parseInt(factionActive) === 8){
            setFaction("alliance_horde")
        }
    }, [factionActive])


    return (
        <section style={{marginBottom:100}}>
            {
                guide &&
                <div dangerouslySetInnerHTML={{__html: guide.classe.data.attributes[faction]}} className={"article_content"}/>
            }
        </section>
    );
};

export default TextContentSection;
