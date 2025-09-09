import { useState } from "react";

function App() {
  const [count, setCount] = useState(0)
  const [revCount, setrevCount] = useState(100)
  return (
    <>
     <button onClick={() => {setCount(count + 1)}}>Forward Counter : {count}</button>
      <br /><br />
     <button onClick={() => {setrevCount(revCount - 1)}}>Reverse Counter : {revCount}</button>
    </>
  );
}

export default App;
