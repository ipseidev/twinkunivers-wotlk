import React from 'react';
import StuffImage from "./StuffImage";
import StuffCommentaire from "./StuffCommentaire";

const StuffButton = ({enchant, item, commentaire, side, ring1, ring2, bijou1, bijou2}: any) => {
    const getItemBySide = () => {
        switch (side) {
            case "left":
                return (
                    <div className={'stuff_item_container-left'}>
                        <div className={'stuff_item_details'}>
                            {commentaire && <StuffCommentaire commentaire={commentaire}/>}
                            {enchant && <StuffImage item={enchant} size={'medium'}/>}
                        </div>
                        {<StuffImage item={item} size={'large'}/>}
                    </div>
                );
            case "right":
                return (
                    <div className={'stuff_item_container-right'}>
                        {<StuffImage item={item} size={'large'}/>}
                        <div className={'stuff_item_details'}>
                            {commentaire && <StuffCommentaire commentaire={commentaire}/>}
                            {enchant && <StuffImage item={enchant} size={'medium'}/>}
                        </div>
                    </div>)
            case "bottom":
                return (
                    <div className={'stuff_item_container-bottom'}>
                        <div className={'stuff_item_details'}>
                            {<StuffImage item={item} size={'large'}/>}
                        </div>
                        {commentaire && <StuffCommentaire commentaire={commentaire}/>}
                        {enchant && <StuffImage item={enchant} size={'medium'}/>}

                    </div>)
            case "ring":
                return (
                    <div className={'stuff_item_container-right'}>
                        {<StuffImage item={ring1} size={'large'}/>}
                        {<StuffImage item={ring2} size={'large'}/>}
                    </div>)
            case "bijou":
                return (
                    <div className={'stuff_item_container-right'}>
                        {<StuffImage item={bijou1} size={'large'}/>}
                        {<StuffImage item={bijou2} size={'large'}/>}
                    </div>)
            default:
                return (
                    <div className={'stuffItem_containerLeft'}>
                        <div>
                            {enchant && <StuffImage item={enchant} size={'medium'}/>}
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
