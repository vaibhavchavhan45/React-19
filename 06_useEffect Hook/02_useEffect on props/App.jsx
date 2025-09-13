import { useState } from "react";
import Component from "./com";
function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(0)

 
  
  return (
    <div>
      <h1>Remove side effect happening because of props</h1>

      <Component props={count} data={data}/>
      <button onClick={()=>setCount(count+1)}>Click Counter</button>
      <button onClick={()=>setData(data+1)}>Click Data</button>
      
    </div>
  );
}

export default App;


