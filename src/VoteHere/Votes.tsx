import "./Votes.css";
import { useState } from "react";


export function VotesComponent() {
    const [chocolateVotes, setChocolateVotes] = useState<number>(0);
    const [vanillaVotes, setVanillaVotes] = useState<number>(0);
    const [strawberryVotes, setStrawberryVotes] = useState<number>(0);


    let totalVotes = chocolateVotes + vanillaVotes + strawberryVotes;
    function getChoclateWidth() {
        return {width: `${chocolateVotes/totalVotes * 100}%`};
      }
      function getVanillaWidth() {
        return {width: `${vanillaVotes/totalVotes * 100}%`};
      }
      function getStrawberryWidth() {
        return {width: `${strawberryVotes/totalVotes * 100}%`};
      }

  return (
    <div className="votes-container">
      <h1>Vote Here</h1>
      <div className="buttons-container">
        <button onClick={() => setChocolateVotes(chocolateVotes + 1)}>Chocolate</button>
        <button onClick={() => setVanillaVotes(vanillaVotes + 1)}>Vanilla</button>
        <button onClick={() => setStrawberryVotes(strawberryVotes + 1)}>Strawberry</button>
      </div>
      <div className="graph-container">
        <p>Chocolate {chocolateVotes} ({(chocolateVotes/totalVotes * 100).toFixed(1)}%)</p>
        <div style={getChoclateWidth()} className="chocolate-bar"></div>
        <p>Vanilla {vanillaVotes} ({(vanillaVotes/totalVotes * 100).toFixed(1)}%)</p>
        <div style={getVanillaWidth()} className="vanilla-bar"></div>
        <p>Strawberry {strawberryVotes} ({(strawberryVotes/totalVotes * 100).toFixed(1)}%)</p>
        <div style={getStrawberryWidth()} className="strawberry-bar"></div>
      </div>
    </div>
  );
}
