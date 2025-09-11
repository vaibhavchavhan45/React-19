function Student({student}){
    return (
        <div>
            <li>
            <h3>Students</h3>
            {
                student.map((student, idx)=>(
                    <div key={idx}>
                    <ul>
                        <li>
                            <h4>Name : {student.studentName}</h4>
                            <h5>Email : {student.email}</h5>
                            <h5>Age : {student.age}</h5>
                        </li>
                    </ul>
                    </div>
                ))
            }
        </li>
        </div>
    )
}
export default Student