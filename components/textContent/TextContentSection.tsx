import React from 'react';

const TextContentSection = ({guide, factionActive}: any) => {
    const [faction, setFaction] = React.useState('');

    React.useEffect(() => {

        if(parseInt(factionActive) === 1 ){
            setFaction("alliance")
        }
        if(parseInt(factionActive) === 2){
            setFaction("horde")
        }
        if(parseInt(factionActive) === 3){
            setFaction("alliance_horde")
        }
    }, [factionActive])


    return (
        <section>
            {
                guide &&
                <div dangerouslySetInnerHTML={{__html: guide.classe.data.attributes[faction]}} className={"article_content"}/>
            }
        </section>
    );
};

export default TextContentSection;
