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
      <table border="1">
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>Age</td>
          </tr>
        </thead>

        <tbody>
          {userdata.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

//Looping on the data using map
//Intervies question : Why the error occurs (err : Each child in a list should have a unique "key" prop.)
//Because we have put a key in child elements for their unique identification
//here we put key={item.id} in <th> because it is child of <tbody>
//Also, we can put key={item.name} or key={item.email}etc. But we generally put unique values like id
export default App;
