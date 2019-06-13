import React , {Component } from 'react';
import './App.css';
import I1 from './img/bulbasaur.jpg';
import I2 from './img/charmander.jpg';
import I3 from './img/squirtle.jpg';
import I4 from './img/pichu.jpg';
import I5 from './img/ivysaur.jpg';
import I6 from './img/charmeleon.jpg';
import I7 from './img/wartortle.jpg';
import I8 from './img/pikachu.jpg';
import I9 from './img/venasaur.jpg';
import I10 from './img/charizard.jpg';
import I11 from './img/blastoise.jpg';
import I12 from './img/raichu.jpg';


class App extends Component {
  constructor(props) {
    super(props);
    this.results = [];
    this.state = {
      data: "Click on an image to begin!",
      score: 0,
      highscore: 0,
      nums:  [I1,I2,I3,I4,I5,I6,I7,I8,I9,I10,I11,I12]
    }
  }

  shuffle() {
    let arr = this.state.nums;
    for (let i=arr .length-1 ; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = arr[i];
      arr [i] = arr [j];
      arr [j] = temp;
    }
    this.setState({nums: arr});
  }
  
  handleClick(item) {
    this.shuffle();
    if(this.results.includes(item)){
      this.setState({
        data: "You guessed incorrectly!", 
        score: 0
      });
    }
    else{
      let newScore = this.state.score+1;
      this.results.push(item);
      this.setState({
        data: "You guessed correctly!",
        score: newScore
      });
      if(newScore >= this.state.highscore){
        this.setState( {highscore : newScore})
      }
    }
  }

  render () {

    const populateContainer = () => {
      let table = [];
      this.state.nums.map( (item )=> {
        table.push(
          <div class="click-item" 
          style={ { backgroundImage : "url(" + item + ")"} }
          onClick={() => this.handleClick(item)}>
          </div>);
      });
      return table;
    }

    return(
    <React.Fragment>
      <div class="header">
      <nav id="navbar-header" class="navbar navbar-expand-lg">
          <a class="navbar-brand" href="#">Clicky Game</a>
              <ul class="navbar-nav ml-auto mr-auto" >
                {this.state.data}
              </ul>
              <ul class="navbar-nav">
                  <li class="nav-item">
                      Score:  {this.state.score}   
                  </li>
                  <li class="nav-item">
                        |   HighScore: {this.state.highscore}
                  </li>
              </ul>
      </nav>
      <div class="title">
        <h1>Clicky Game!</h1>
        <h2>click on an image to earn points, but don't click on any more than once!</h2>
      </div>
    </div>
    <div class="container">
      {populateContainer()}
    </div>
    </React.Fragment>
    
    )
  }
}


export default App;
