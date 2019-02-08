//imports dependencies and files
import React, { Component } from "react";
import Navbar from "./components/navBar";
import Jumbotron from "./components/jumbotron";
import GameCard from "./components/gameCard";
import Footer from "./components/footer";
//import chocolate from "./chocolate.json";
import "./app.css";

//sets state to 0 or empty
class App extends Component {
  state = {
    chocolate: [],
    clickedChocolate: [],
    score: 0
  };

//when you click on a card ... the chocolate is taken out of the array
  imageClick = event => {
    const currentChocolate = event.target.alt;
    const ChocolateAlreadyClicked =
      this.state.clickedChocolate.indexOf(currentChocolate) > -1;

//if you click on a Chocolate that has already been selected, the game is reset and cards reordered
    if (ChocolateAlreadyClicked) {
      this.setState({
        chocolate: this.state.chocolate.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedChocolate: [],
        score: 0
      });
        alert("You lose. Play again?");

//if you click on an available chocolate, your score is increased and cards reordered
    } else {
      this.setState(
        {
          chocolate: this.state.chocolate.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedChocolate: this.state.clickedChocolate.concat(
            currentChocolate
          ),
          score: this.state.score + 1
        },
//if you get all 12 chocolate corrent you get a congrats message and the game resets        
        () => {
          if (this.state.score === 12) {
            alert("Woohoo! You Win!");
            this.setState({
              chocolate: this.state.chocolate.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedChocolate: [],
              score: 0
            });
          }
        }
      );
    }
  };

//the order of components to be rendered: navbar, jumbotron, Gamecard, footer 
  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.chocolate.map(chocolate => (
            <GameCard
              imageClick={this.imageClick}
              id={chocolate.id}
              key={chocolate.id}
              image={chocolate.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
