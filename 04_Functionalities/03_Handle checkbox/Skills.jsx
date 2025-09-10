import { useState } from "react";

function Skills() {
    const [skills, setSkills] = useState([]) 

    function handleSkills(event) {
        //console.log(event.target.value, event.target.checked);
        if(event.target.checked){
            setSkills([...skills,event.target.value])
        }
        else{
            setSkills([...skills.filter((item)=>item != event.target.value)])
        }
    }
  return (
    <div>
        <h3>Select Your Skills</h3>
        <input type="checkbox" id="php" value="Php" onChange={handleSkills}/> 
        <label htmlFor="php">PHP</label>
        <br /> <br />

        <input type="checkbox" id="java" value="Java" onChange={handleSkills}/> 
        <label htmlFor="java">JAVA</label>
        <br /> <br />

        <input type="checkbox" id="python" value="Python" onChange={handleSkills}/> 
        <label htmlFor="python">PYTHON</label>
        <br /> <br />

        <input type="checkbox" id="js" value="Javascript" onChange={handleSkills}/> 
        <label htmlFor="js">JAVASCRIPT</label>
        <br /> <br />

        <h1>{skills.toString()}</h1>
    </div>

    /*Basically we want to built a functionality : (UI 4 checkboxes)
    As we clicked on checkbox the value of checkbox should render on the webpage and as we unchecked 
    on that checkbox the rendered value present on webpage should be removed
    */
  );
}
export default Skills;
