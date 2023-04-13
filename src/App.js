import React from "react";
import { useState } from "react";

// this is a increment decrement app to know what state is and how it is used 

function App() {

  const [temp , settemp] = useState(0);
  
  const func1 = () => {
     settemp(temp+1);
  }

  const func2 = () => {
    if(temp > 0){
      settemp(temp-1);
    }
  }

  return (
    <div className="App">
       <h1>{temp}</h1>
       <br></br>
       <button onClick={func1}>Increment</button>
       <br></br>
       <button onClick={func2}>Decrement</button>
    </div>
  );
}

export default App;
