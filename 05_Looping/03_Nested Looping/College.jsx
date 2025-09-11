import Student from "./Students"
function College({ props }) {
  return (
    <div
      style={{
        backgroundColor: "#ccc",
        margin: "20px",
        borderBottom: "2px solid #000",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h1>College Name : {props.collegeName}</h1>
      <ul>
        <li>
          <h3>{props.city}</h3>
        </li>
        <li>
          <h3>{props.website}</h3>
        </li>
        <Student student={props.Students}></Student>
      </ul>
    </div>
  );
}
export default College;
