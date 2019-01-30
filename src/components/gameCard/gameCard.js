
//sets up the reusable GameCard component
import React from "react";
import "./gameCard.css";

//pass the image into eaDch card so all 12 are rendered
const GameCard = props => (
  <div className="card" onClick={props.imageClick}>
    <div className="img-container">
      <img alt={props.image.replace(".jpg", "")} src={require("../../images/" + props.image)} />
    </div>
  </div>
);

export default GameCard;