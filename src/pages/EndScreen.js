import React from "react";
import Options from "./Quiz"
import {useContext} from "react"
import QuizContext from "../Helpers/Contexts"

const EndScreen = () => {

    const {temp1 , setgameState , settemp1} = useContext(QuizContext);

    const func1 = () => {
        settemp1(0);
        setgameState("quiz");
    }
    
    return(
        <div>
           <h1>This is End Page</h1>
           <h2>Your score is {temp1}</h2>
           <button onClick={func1}>
                Restart Quiz
            </button>
        </div>
    ) 
}

export default EndScreen;

