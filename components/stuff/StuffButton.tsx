import React from 'react';
import StuffImage from "./StuffImage";
import StuffCommentaire from "./StuffCommentaire";

const StuffButton = ({enchant, item, commentaire, side, linkSide}: any) => {
    const getItemBySide = () => {
        switch (side) {
            case "left":
                return (
                    <div className={'stuff_item_container-left'}>
                        <div className={'stuff_item_details'}>
                            {commentaire && <StuffCommentaire commentaire={commentaire}/>}
                        </div>
                        {<StuffImage item={item} size={'large'} enchant={enchant} linkSide={linkSide}/>}
                    </div>
                );
            case "right":
                return (
                    <div className={'stuff_item_container-right'}>
                        {<StuffImage item={item} size={'large'} enchant={enchant} linkSide={linkSide}/>}
                        <div className={'stuff_item_details'}>
                            {commentaire && <StuffCommentaire commentaire={commentaire}/>}
                        </div>
                    </div>)
            case "bottom":
                return (
                    <div className={`stuff_item_container-bottom-${linkSide}`}>
                        {<StuffImage item={item} size={'large'} enchant={enchant} linkSide={linkSide}/>}

                        {commentaire && (
                            <div className={'stuff_item_details'}>
                                <StuffCommentaire commentaire={commentaire}/>
                            </div>
                        )
                        }

                    </div>)

            default:
                return (
                    <div className={'stuffItem_containerLeft'}>
                        <div>
                            {enchant && <StuffImage item={enchant} size={'medium'} linkSide={linkSide}/>}
                            {commentaire && <StuffCommentaire commentaire={commentaire}/>}
                        </div>
                        {<StuffImage item={item} size={'large'}/>}
                    </div>
                );
        }
    }

    return getItemBySide();
};

export default StuffButton;
