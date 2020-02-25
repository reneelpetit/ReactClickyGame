import React, { Component } from 'react';
import Navbar from './Navbar';
import Images from './Images';
import data from '../data.json';

class Game extends Component {
    state = {
        score: 0,
        topScore: 0,
        data: []
    }
    componentDidMount = () => {
        this.setState({ data: data })
    }
    clickedImage = id => {
        let data = this.state.data;
        let score = this.state.score;
        let topScore = this.state.topScore;
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === id) {
                if (data[i].click === false) {
                    data[i].click = true;
                    score += 1;
                }
                else {
                    if (score > topScore) {
                        topScore = score
                    }
                    score = 0;
                    for (let i = 0; i < data.length; i++) {
                        data[i].click = false;
                    }
                }
            }
        }
        data = this.shuffleData(data);
        console.log(data);
        this.setState({
            data, score, topScore
        })
    }
    shuffleData = data => {
        let i = data.length - 1;
        while (i > 0) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = data[i];
            data[i] = data[j];
            data[j] = temp;
            i--;
        }
        return data;
    };
    render() {
        return (
            <div>
                <Navbar score={this.state.score} />
                <Navbar topScore={this.state.topScore} />
                <div className="container-sm-12 pl-5">
                    <div className="row">
                            {this.state.data.map(
                                image => (<Images
                                    key={image.id}
                                    id={image.id}
                                    src={image.src}
                                    clickedImage={this.clickedImage}
                                />)
                            )}
                    </div>
                </div>
            </div>
        )
    }
}

export default Game;