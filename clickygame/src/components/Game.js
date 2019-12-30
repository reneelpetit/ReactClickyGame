import React, {Component} from 'react';
import Navbar from './Navbar';
import Images from './Images';
import Jumbotron from './Jumbotron';
import data from '../data.json';

class Game extends Component {
    state = {
        score: 0,
        topScore: 0,
        data: []
    }
    componentDidMount = () => {
        this.setState({data: data})
    }
    clickedImage = id => {
        let data = this.state.data;
        let score = this.state.score;
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === id) {
                if (data[i].click === false) {
                    data[i].click = true;
                    score += 1;
                }
                else {
                    score = 0;
                }
            }
        }
        console.log(data);
        this.setState({
            data, score
        })
    }
    render() {
        return(
            <div>
                <Navbar score= {this.state.score} topScore = {this.state.topScore} />
                {this.state.data.map(
                    image => (<Images 
                    key = {image.id}
                    id = {image.id}
                    src = {image.src}
                    clickedImage = {this.clickedImage}
                    />)
                )}
            </div>
        )
    }
}

export default Game;