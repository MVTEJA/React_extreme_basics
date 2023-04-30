import React, { useEffect } from "react";
import { useState } from "react";
import Question from "./pages/EndScreen"
import QuizContext from "./Helpers/Contexts";
import Mainmenu from "./pages/Mainmenu";
import EndScreen from "./pages/EndScreen";
import Quiz from "./pages/Quiz";
import "./App.css"

function App(){
  const [gameState , setgameState] = useState("menu");
  const [temp1 , settemp1] = useState(0);

  return(
    <div className="App">
      <h1> Quiz App </h1>
      <QuizContext.Provider value={{gameState , setgameState , temp1 , settemp1}}>
        {gameState === "menu" && <Mainmenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endScreen" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  )
}

export default App;


