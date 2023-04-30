import React from "react"
import {useContext} from "react"
import QuizContext from "../Helpers/Contexts"
import "../App.css"

const Mainmenu =() => {

   const {gameState , setgameState} = useContext(QuizContext);
   return (
        <div className="Menu">
            <button onClick = {() => {setgameState("quiz")}}>
                Start Quiz
            </button>
        </div>
   )   
}

export default Mainmenu;