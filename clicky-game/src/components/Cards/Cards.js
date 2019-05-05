import React, { Fragment } from "react";
import "./Cards.css";

const Cards = props => (
  <div className="card" onClick={e => props.clickEvent(e.target.src)}>
    <img className="card-img-top card-height" src={props.name} alt="" />
  </div>
);

export default Cards;
