import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [state, setState] = useState(0);

  useEffect(() => {
    callOnce();
  }, [count]);

  function callOnce() {
    console.log("Function called");
  }

  return (
    <div>
      <h1>Remove side effect inside the component</h1>
      <button onClick={() => setCount(count + 1)}>Counter {count}</button>
      <button onClick={() => setState(state + 1)}>state {state}</button>
    </div>
  );
}

export default App;


//Handeling dependencies in useEffect
useEffect(()=>{
  //call every time
})

useEffect(()=>{
 //call only once
},[])

useEffect(()=>{
  //call on changing of state
},[state])

useEffect(()=>{
  //call on changing multiple state
},[state1, state2])

useEffect(()=>{
  //call on changing of single/multiple props
},[props1, props2])