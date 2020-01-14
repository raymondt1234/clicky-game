import React, { Component } from 'react';
import images from '../../images.json'
import ImageCard from '../imagecard/ImageCard'
import Title from '../title/Title'

class GameBoard extends Component {
    state = {
        images
    };

    render() {
        return (
            <div>
                <Title>Clicky Game</Title>
                {
                    this.state.images.map(image => (
                        <ImageCard
                            id={image.id}
                            key={image.id}
                            image={image.image} />
                    ))
                }
            </div>
        );
    };
};

export default GameBoard;