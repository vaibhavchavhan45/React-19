import User from "./User"

function App() {
  // let name = "vaibhav"
  // let age = 18
  // let address = "Xyz"
  return (
    <div>
      <h1>Props in React</h1>
      <User  name="VC" age={18} email="vc@gmail.com" />

      
    </div>
  );
}

export default App;
