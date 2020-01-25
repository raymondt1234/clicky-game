import React from 'react';
import './ImageCard.css'

const ImageCard = (props) => {
    return (
        <div onClick={() => props.imageClicked()}>
            <img src={props.image} />
        </div>
    );
};

export default ImageCard;