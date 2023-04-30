import React, { useState } from "react";
import Questions from "../Helpers/QuestionBank";
import {useContext} from "react"
import QuizContext from "../Helpers/Contexts"
import "../App.css";

const Quiz = () => {

    const [currQuestion, setCurrQuestion] = useState(0);
    let {gameState , setgameState , temp1 , settemp1} = useContext(QuizContext);

    const nextQuestion = (choosen_option) => {
        setCurrQuestion(currQuestion+1);
        if(currQuestion === Questions.length-1){
            setgameState("endScreen");
        }

        if(choosen_option === Questions[currQuestion].answer){
            settemp1(temp1+1);
        }
    }

    return (
        <div className="Quiz">
           <h1>{Questions[currQuestion].prompt}</h1>
           <button onClick={() => {nextQuestion("A")}}>{Questions[currQuestion].optionA}</button>
           <br />
           <button onClick={() => {nextQuestion("B")}}>{Questions[currQuestion].optionB}</button>
           <br />
           <button onClick={() => {nextQuestion("C")}}>{Questions[currQuestion].optionC}</button>
           <br />
           <button onClick={() => {nextQuestion("D")}}>{Questions[currQuestion].optionD}</button>
        </div>
    )
}

export default Quiz;