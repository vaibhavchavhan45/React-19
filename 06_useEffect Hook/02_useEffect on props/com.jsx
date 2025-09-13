import { useEffect } from "react";

function Component({props, data}) {
  function dummy() {
    console.log(`Function dummy called`);
  }

  function dummyData(){
    console.log(`Function dummyData called`);
  }

  useEffect(()=>{
    dummy();
  },[])

  useEffect(()=>{
    dummyData();
  },[data])
  
  return <div>
    <h3>Counter Value : {props}</h3>
    <h3>Data Value : {data}</h3>
  </div>;
}
export default Component;
