import User from "./User"
function App() {
  const userdata = [
    {
      id: 1,
      name: "Vaibhav",
      email: "vc@gmail.com",
      age: 19,
    },
    {
      id: 2,
      name: "Akshay",
      email: "ac@gmail.com",
      age: 15,
    },
    {
      id: 3,
      name: "Vishal",
      email: "vjc@gmail.com",
      age: 18,
    },
    {
      id: 4,
      name: "VAC",
      email: "vac@gmail.com",
      age: 29,
    },
  ];
  return (
    <>
      <h1>Reuse Components</h1>
      {
        userdata.map((item) => (
          <div key={item.id}>
            <User props={item}></User>
          </div>
        ))
      }
    </>
  );
}

export default App;
