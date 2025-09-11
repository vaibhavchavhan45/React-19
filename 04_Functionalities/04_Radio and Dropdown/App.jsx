import { useState } from "react";

function App() {
  const [state, setState] = useState("Male");
  const [cityState, setCityState] = useState('Delhi')

  return (
    <>
      <h1>Handled Radio button and Dropdown</h1>
      <h4>Select Gender</h4>
      <input
        type="radio"
        id="male"
        onChange={(e) => setState(e.target.value)}
        value="Male"
        name="gender"
        checked={state == "Male"}
      />
      <label htmlFor="male">Male</label>

      <input
        type="radio"
        id="female"
        onChange={(e) => setState(e.target.value)}
        value="Female"
        name="gender"
        checked={state == "Female"}
      />
      <label htmlFor="female">Female</label>

      <h2>Selected Gender : {state}</h2>

      <br /> <br />
      <br /> <br />

      <h4>Select city</h4>
      <select defaultChecked="Mumbai" onChange={(e)=>{setCityState(e.target.value)}}>
        <option value="Delhi">DELHI</option>
        <option value="Nagpur">NAGPUR</option>
        <option value="Pune">PUNE</option>
        <option value="Mumbai">MUMBAI</option>
      </select>
      <h2>Selected City : {cityState}</h2>
    </>
  );
}
//Getting values from Radio and Drowpdown
export default App;
