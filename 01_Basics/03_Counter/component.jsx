import { useState } from "react"

function Counters(){
    const [count, setCount] = useState(0)
    return (
        <>
            <h1>Counter : {count}</h1>
            <button onClick={() => setCount(count+1)}>Click</button>
        </>
    )
}
export default Counters