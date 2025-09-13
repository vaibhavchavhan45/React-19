import { useEffect } from "react";

//mount
function Component({props, data}) {
  useEffect(()=>{
    console.log(`Mounting phase`);
  },[])

  //update
  useEffect(()=>{
    console.log(`Update phase`);
  },[props])

  //Unmount
  useEffect(()=>{
    return () => {
        console.log(`Unmount Phase`); 
    }
  },[])

  return <div>
    <h3>Counter Value : {props}</h3>
    <h3>Data Value : {data}</h3>
  </div>;
}
export default Component;
