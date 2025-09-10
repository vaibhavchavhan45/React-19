import { useState } from "react";
import Student from "./Student";

function App() {
  const [state, setState] = useState()
  return (
    <div>
        <h1>Props in React</h1>
       {state && <Student name={state}></Student> }
       <button onClick={() => setState("Student")}>Update Student Name</button>
    </div>
  );
  /*
  Define a state whose value is initially empty i.e. null
  and there is a h1 tag whose content is Student Name : 
  I want ki whenever state holds a value then Student Name : {name} should br render on screen
  but when state is empty then the Student Name : {name} whole thing shouldn't be render on screen
  And now when I clicked a button same process should be done
  So, onClick defined we click the button if state holds a value then got rendered otherwise Not
  */
}

export default App;
