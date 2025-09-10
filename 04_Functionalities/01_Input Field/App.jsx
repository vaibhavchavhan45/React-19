import { useState } from "react";

function App() {
  const [state, setState] = useState()
  return <>
    <input type="text" value={state} placeholder="Enter anything" onChange={(event) => setState(event.target.value)}/>
    <h1>{state}</h1>
    <button onClick={() => setState("")}>Clear</button>
  </>

  /*
    we want to build a functionality (UI : input field, h1 tag, button)
    User will type something in the input box and we have display that value which user typed in a 
    h1 tag below the input field.
    First of all hold the value which user typed, this can done by using state
    state is initially empty as user types we tell setState() to hold the value of input field
    If setState has hold the value means it is obv. for state
    Then that state value we put in h1 tag below input field
    And we also want when we press clear button then all the value from input field and h1 tag should
    be cleared, simple, do setState("") means state automatically gets cleared 
    As state gets cleared h1 tag also gets cleared meand nothing inside h1 tag
    But, the input field value which user typed doesn't get vanished this is because we didnt define
    or put restriction on input field ki when state becomes empty u should make ur input field empty
    We did input filed empty by this condition value={state} means whichever the input field value i.e.
    empty now u should put in the input field
    This all thing happens on a clear button click
  */
}

export default App;
