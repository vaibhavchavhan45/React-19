import { useState } from "react";

function App() {
  const [display, setDisplay] = useState(true)
  
  return (
    <div>
     <h1>Toggle in React</h1>
     <button onClick={() => {setDisplay(!display)}}>Click</button>
      {
        display ? <h1>Vaibhav Chavhan</h1> : null
      }
    </div>

    /*We want when we click on the button then name should disappear
    You need ternary operator if display is true then show the content(basically h1 tag here) on webpage
    if dispaly false then hide the content
    So, I did whenever the button is clicked, if the display is true show the content otherwise not
    setDisplay has this task of rendering we just define !display means if initially display is true
    we will make it false if false we will make it true
    And the result reflets on webpage accordingly
    */ 
  );
}

export default App;
