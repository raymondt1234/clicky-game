import React, { Component } from 'react';
import images from '../../images.json'
import ImageCard from '../imagecard/ImageCard'
import Title from '../title/Title'

class GameBoard extends Component {
    state = {
        images
    };

    componentDidMount() {
        this.shuffleImages();
    }

    shuffleImages() {
        let tempArray = [];
        let images = this.state.images;
        while (images.length > 0) {
            let randomIndex = Math.floor(Math.random() * images.length);
            tempArray.push(images[randomIndex]);
            images.splice(randomIndex, 1);
        }
        this.setState({images: tempArray});
    }
    imageClicked() {
        this.shuffleImages();
    }

    render() {
        return (
            <div>
                <Title>Clicky Game</Title>
                {
                    this.state.images.map(image => (
                        <ImageCard
                            id={image.id}
                            key={image.id}
                            image={image.image} 
                            imageClicked={this.imageClicked}/>
                    ))
                }
            </div>
        );
    };
};

export default GameBoard;