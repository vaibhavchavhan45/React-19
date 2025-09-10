import User from "./Student";

function App() {
  return <>
    <h1>default Props</h1>
    <User name="Vaibhav" />
    <User />
    <User name="Akshay" />
    <User />
  </>
}
//if we didn't pass props then default props value will be rendered on the Screen
//default props value is defined in component <Student>
export default App;
