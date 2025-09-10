import Component from "./Wrapper";

function App() {
  return <>
    <h1>Styling with Wrapper</h1>
    
    <Component>
      <h1>Hello Everyone</h1>
    </Component>

    <Component>
      <h1>Hello User</h1>
      <h2 style={{color : "yellow"}}>Please Login</h2>
    </Component>
  </>

  /*
  Here we made a Component in another file who is ready to receive prop but we are saying that we will
  pass anything as props from app.jsx
  So, how the things in Component gets render on the webpage
  So, basically thing is that we can use in-built props defined in react i.e. children
  we use this children word as a prop in Wrapper.jsx and it will display all the components of 
  <Component> </Component>
  */
}

export default App;
