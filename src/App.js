import React from "react";
import { useState } from "react";

// this is a todo app 

function App() {
 
  const [name, setName] = useState("");
  const [Items , setItems] = useState([]);

  const itemEvent = (event) => {
     setName(event.target.value);
  };

  const listOfitems = () => {
      // setItems((oldItems) => {
      //      return [...oldItems, name];
      // });

      setItems([...Items , name])
  };

  const deleteItems = (index) => {
       const u1 = [...Items];
       u1.splice(index , 1);
       setItems(u1);
       console.log("deleted");
  }

  return (
      <div>

        <h1>TO DO LIST</h1>
        <br></br>
        <input type="text" placeholder="Add a Items" onChange={itemEvent}/>
        <button onClick={listOfitems}>Submit</button>
        
        <ol>
         {Items.map((itemval , index) => {
              return( 
                <li key={index}>
                  {itemval}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  {/* for spaces btw text and button, don't bother */}
                  <button onClick={() => deleteItems(index)}> Delete </button>
                </li>
              )
          })}
        </ol>
        
      </div>   
  );
}

export default App;
