import React from "react";
import { useState } from "react";
import "./App.css";

function App() {

   
   const [flag , setflag] = useState(0);
   const [num , setnum] = useState(0);
   const [num1 , setnum1] = useState(0);
   const [str , setstr] = useState("");
   const [oper , setoper] = useState('');
   const [result , setresult] = useState(0);

   const func1 = (par1) => {
       
      if(par1 >= 0 && par1 <= 9 && flag === 0){
         let k1 = num*10 + par1 ;
         setnum(k1);
      }
      else if(par1 >= 0 && par1 <= 9 && flag === 1){
          setnum1(num);
          setnum(par1);
          setflag(0);
      }
      else{
         setoper(par1);
         setflag(1);
      }

      func2(par1);
   }

   const func2 = (par2) => {
      let p1 = par2 ;
      let tr2 = str + p1 ;
      setstr(tr2);
   }

   const func3 = () => {
      console.log("hello");

      if(oper === '*'){
         setresult(num1*num);
      }
      
      else if(oper === '/'){
         setresult(num1/num);
      }

      else if(oper === '+'){
         console.log(num1 , num);
         setresult(num1+num);
      }

      else if(oper === '-'){
         setresult(num1 - num);
      }

   }

   const func4 = () => {
      setflag(0);
      setnum(0);
      setnum1(0);
      setoper('');
      setresult(0);
      setstr("");
   }

   const func5 = () => {
      let w1 = str.charAt(str.length-1);
      let unnava = ['/' , '*' , '+' , '-'];

      if(!(w1 == '+' || w1 == '*' || w1 == '/' || w1 == '-')){
         if(str.includes('+') || str.includes('-') || str.includes('*') || str.includes('/')){
            let y1q = Math.floor(num/10);
            setnum(y1q);
         }
         else{
            let y2q = Math.floor(num/10);
            setnum(y2q);
         }
      }
      
      let pq1 = str.slice(0, -1);   
      setstr(pq1);
   }

  return(
      
     <div className="calculator-grid">
        <div className="output">
           <div className="previous-operand">
             <h4>{str}</h4>
           </div>
           <div className="current-operand">
               <h4>{num}</h4>
           </div>
           <div className="current-operand">
            <h4>{result}</h4>
           </div>
        </div>
        <button onClick={() =>func4()}className="span-two">AC</button>
        <button onClick={() => func5()}>DEL</button>
        <button onClick={() =>func1('/')}>÷</button>
        <button onClick={() =>func1(1)}>1</button>
        <button onClick={() =>func1(2)}>2</button>
        <button onClick={() =>func1(3)}>3</button>
        <button onClick={() =>func1(4)}>4</button>
        <button onClick={() =>func1(5)}>5</button>
        <button onClick={() =>func1(6)}>6</button>
        <button onClick={() =>func1(7)}>7</button>
        <button onClick={() =>func1(8)}>8</button>
        <button onClick={() =>func1(9)}>9</button>
        <button onClick={() =>func1('-')}>-</button>
        <button onClick={() =>func1('.')}>.</button>
        <button onClick={() =>func1('*')}>*</button>
        <button onClick={() =>func1('+')}>+</button>
        <button onClick={() =>func1(0)}>0</button>
        <button onClick={() =>func3()} className="span-two">=</button>
     </div>
     
  )

}
export default App;
