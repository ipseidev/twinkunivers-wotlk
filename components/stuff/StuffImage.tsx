import React from 'react';

const StuffImage = ({item, size, enchant, linkSide}: any) => {

    const getLinkBySide = () => {
        switch (linkSide) {
            case "left":
                return (
                    <div className={`icon_links_container-${linkSide}`}>
                        <div className={"enchant_container"}>
                            <a href={item} className={"no-renamelinks align-right"}/>
                            <a href={enchant} className={"no-renamelinks enchant align-right"}/>
                        </div>
                        <div className={`icon_stuff icon_stuff-${size}`}>
                            <a href={item} className={"custom-wowtlkdb"}/>
                        </div>

                    </div>
                );
            case "right":
                return (
                    <div className={`icon_links_container-${linkSide}`}>
                        <div className={`icon_stuff icon_stuff-${size}`}>
                            <a href={item} className={"custom-wowtlkdb"}/>
                        </div>
                        <div className={"enchant_container"}>
                            <a href={item} className={"no-renamelinks align-left"}/>
                            <a href={enchant} className={"no-renamelinks enchant align-left"}/>
                        </div>
                    </div>
                );
        }

    }


    return (
        <>
            {getLinkBySide()}
        </>
    );
};

export default StuffImage;
