import React, { Component } from "react";
import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";
import Cards from "./Cards";
import Footer from "./Footer";
import images from "../images.json";

class Game extends Component {
  state = {
    score: 0,
    highScore: 0,
    navMsg: "Click an Image to Begin",
    allCards: this.shuffleArray(),
    wasClicked: []
  };

  clickEvent = this.checkClicked.bind(this);

  shuffleArray() {
    let newArray = images.slice();

    let shuffleArray = [];

    while (newArr.length > 0) {
      shuffleArr.push(
        newArr.splice(Math.floor(Math.random() * newArr.length), 1)[0]
      );
    }

    return shuffleArr;
  }
}
