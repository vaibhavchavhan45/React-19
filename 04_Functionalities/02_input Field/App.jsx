import { useState } from "react";

function App() {
  const [name, setName] = useState('')
  const [password, setPassord] = useState('')
  const [email, setEmail] = useState('')
  return <>
    <input type="text" value={name} placeholder="Enter Name" onChange={(e)=>{setName(e.target.value)}}/>
     <br /><br />
    <input type="password" placeholder="Enter Password" value={password} onChange={(e)=>{setPassord(e.target.value)}}/>
    <br /><br />
    <input type="text" placeholder="Enter Email" onChange={(event) =>{setEmail(event.target.value)}} value={email}/>
    <br /><br />
    <button>Submit</button>
    <br /> <br />
    <button onClick={()=>{setName('');setPassord('');setEmail('')}}>Clear</button>


    <h3>{name}</h3>
    <h3>{password}</h3>
    <h3>{email}</h3>
  </>
 /*Same functionality like prev e.g. but here are 3 inputs field
 We are displaying the things and making them empty if user typed in an input field
These are called Controlled Component : basically form's input field value is controlled by react state
 */
  
}

export default App;
