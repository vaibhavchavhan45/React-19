import User from "./User";

function App() {
  let username = {
    name : "Vaibhav",
    age : "20",
    email : "vc@gmail.com"
  }

  let username2 = {
    name : "Akshay",
    age : "16",
    email : "ac@gmail.com"
  }

  let username3 = {
    name : "Vishal",
    age : "19",
    email : "ac@gmail.com"
  }

  return (
    <div>
      <h1>Sending props through objects</h1>
      <User user={username} />  <hr />
      <User user={username2} />  <hr />
      <User user={username3} />  <hr />
    </div>
  );
}

export default App;
