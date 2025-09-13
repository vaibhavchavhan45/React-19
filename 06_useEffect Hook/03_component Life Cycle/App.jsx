import { useState } from "react";
import Component from "./com";
function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(0)
  const [display, setDisplay] = useState(true)

 
  
  return (
    <div>
      <h1>Remove side effect happening because of props</h1>

      {
        display ? <Component props={count} data={data}/> : null
      }
      <button onClick={()=>setCount(count+1)}>Click Counter</button>
      <button onClick={()=>setData(data+1)}>Click Data</button>
      <button onClick={()=>setDisplay(!display)}>Toggle</button>
      
    </div>
  );
}

export default App;


