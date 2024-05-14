// Game.js

import React, { useRef, useState } from "react";
import blueCard from "../images/blue-card.svg";
import redCard from "../images/redCard.svg";
import "./Game.css";
import Modal from "./Modal";
import arrowTop from "../images/arrpw-top.svg";
import arrowBottom from "../images/arrow-bottom.svg";
import nextButton from "../images/next-button.svg";
import match from "../images/match.svg";
import Loader from "./Loader";

const redCardData = [
  { fruit: "apple", icon: "🍎" },
  { fruit: "orange", icon: "🍊" },
  { fruit: "grape", icon: "🍇" },
  { fruit: "banana", icon: "🍌" },
  { fruit: "mango", icon: "🥭" },
  { fruit: "pineapple", icon: "🍍" },
];

const blueCardData = [
  { fruit: "orange", icon: "🍊", letter: "O" },
  { fruit: "apple", icon: "🍎", letter: "A" },
  { fruit: "mango", icon: "🥭", letter: "M" },
  { fruit: "grape", icon: "🍇", letter: "G" },
  { fruit: "banana", icon: "🍌", letter: "B" },
  { fruit: "pineapple", icon: "🍍", letter: "P" },
];

const Game = ({ setScreen }) => {
  // Add the component logic here
};

export default Game;
