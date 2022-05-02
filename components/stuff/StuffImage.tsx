import React from 'react';

const StuffImage = ({item, size}:any) => {
    return (
        <div className={`icon_stuff icon_stuff-${size}`}>
            <a href={item} className={"custom-wowtlkdb"}>
                {/*<img src={images} alt="item" style={{borderRadius: 5}}/>*/}
            </a>
        </div>
    );
};

export default StuffImage;
