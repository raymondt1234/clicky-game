import React from 'react';
import './ImageCard.css'

const ImageCard = (props) => {
    return (
        <div onClick={() => props.imageClicked(props.id)}>
            <img src={props.image} />
        </div>
    );
};

export default ImageCard;