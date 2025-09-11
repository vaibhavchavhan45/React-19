function User({props}) {
  return (
    <div style={{
      border : "solid 2px black",
      borderRadius : "5px",
      margin: "10px",
      width : "250px",
      padding : "10px"
    }}>
        <h3>Name : <span style={{color : "violet"}}>{props.name}</span></h3>
        <h3>Email : <span>{props.email}</span></h3>
        <h3>Age : <span>{props.age}</span></h3> 
    </div>
  );
}
export default User;
