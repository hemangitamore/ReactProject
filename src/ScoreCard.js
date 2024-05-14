import { useState } from "react";
export function ScoreCard(){
  const [score,setScore]=  useState(0);
  const [player,setPlayer]=useState("Hemangi");

  const increamentScore=()=>{
   setScore(score+4);
  
  }

  const decreamentScore=()=>{
    setScore(score-1);

  }

  const changePlayer=()=>{
    setPlayer("Aditi");
  }
    return(
        <div>
            <h1>
              {player} has scored {score}

            </h1>

            <button onClick={increamentScore}>+</button>
            <button onClick={decreamentScore}>-</button>
            <button onClick={changePlayer}>change</button>
        </div>

    );
}