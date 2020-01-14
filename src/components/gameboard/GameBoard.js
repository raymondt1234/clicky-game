import React, { Component } from 'react';
import images from '../../images.json'
import ImageCard from '../imagecard/ImageCard'

class GameBoard extends Component {
    state = {
        images
    };

    render () {
        return (
            <h1>Game Board</h1>
            {
                this.state.images.map(image => (
                    <ImageCard 
                    id={images.id}
                    key={images.id}
                    image={images.image}/>
                ))
            }
        );
    };
};

export default GameBoard;