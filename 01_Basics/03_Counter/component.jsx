import { useState } from "react"

function Counters(){
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>Counter : {count}</h1>
            <button onClick={() => setCount(count+1)}>Click</button>
        </div>
    )
}
export default Counters