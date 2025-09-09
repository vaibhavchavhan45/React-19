import User from "./User";

function App() {
  let username = "vaibhav";
  let age = 18;
  let address = "Xyz";

  let devUsername = "Akshay"
  let devAge = 20
  let email = "dev@gmail.com"

  return (
    <div>
      <h1 style={{color : "red"}}>Naive way of sending the Props in React </h1>
      <User name={username} age={age} address={address} />
      <hr />
      <User name={devUsername} devAge={age} devEmail={email} />
    </div>
  );
}

export default App;
