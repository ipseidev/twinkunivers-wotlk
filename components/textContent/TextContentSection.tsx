import React from 'react';

const TextContentSection = ({guide}: any) => {
    return (
        <section>
            texte
            {
                guide &&
                <div dangerouslySetInnerHTML={{__html: guide.classe.data.attributes.horde}}/>
            }
        </section>
    );
};

export default TextContentSection;
