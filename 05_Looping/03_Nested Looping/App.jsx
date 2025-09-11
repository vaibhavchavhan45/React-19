import College from "./College";

function App() {
  const data = [
    {
      collegeName : "IIT",
      city : "Bombay",
      website : "www.iitbombay.com",
      Students : [
        {
          studentName : "VC",
          age : 21,
          email : "vc@gmail.com"
        },
        {
          studentName : "AC",
          age : 20,
          email : "ac@gmail.com"
        },
        {
          studentName : "VAC",
          age : 11,
          email : "vac@gmail.com"
        },
        {
          studentName : "VVC",
          age : 29,
          email : "vvc@gmail.com"
        },
      ]
    },
    {
      collegeName : "NIT",
      city : "Bhopal",
      website : "www.nitbhopal.com",
      Students : [
        {
          studentName : "VC",
          age : 21,
          email : "vc@gmail.com"
        },
        {
          studentName : "AC",
          age : 20,
          email : "ac@gmail.com"
        },
        {
          studentName : "VAC",
          age : 11,
          email : "vac@gmail.com"
        },
        {
          studentName : "VVC",
          age : 29,
          email : "vvc@gmail.com"
        },
      ]
    },
    {
      collegeName : "IIM",
      city : "Ahmedabad",
      website : "www.iimahmedabad.com",
      Students : [
        {
          studentName : "VC",
          age : 21,
          email : "vc@gmail.com"
        },
        {
          studentName : "AC",
          age : 20,
          email : "ac@gmail.com"
        },
        {
          studentName : "VAC",
          age : 11,
          email : "vac@gmail.com"
        },
        {
          studentName : "VVC",
          age : 29,
          email : "vvc@gmail.com"
        },
      ]
    }
  ]
  return (
    <>
      {data.map((item,index)=>(
        <div key={index}>
          <College props={item}/>
        </div>
      ))}
    </>
  );
}

export default App;
