import College from "./College";

function App() {
  let colleges = ['IIT', 'NIT', 'MIT', 'AIIMS', 'SGBAU', 'IIM', 'LAST-TIER']
  return (
    <div>
        <h1>Passing Array as a Props</h1>
       <College name={colleges} /> 
    </div>
  );
}

export default App;
