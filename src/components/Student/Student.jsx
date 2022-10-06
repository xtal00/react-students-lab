import './Student.css';
import Score from "../Score/Score"


function Student({student}){
   
    return(
        <div>
            <div className="Student">
                <div className="name">
                    {student.name}
                </div>
                <div className="bio">
                    {student.bio}
                </div>
               Results:
                <table>
                    <thead>
                        <tr>
                        <th>Date</th>
                        <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {student.scores.map((stu,idx) => (
                             <Score key={idx} student={stu}/>
                        ))}
                    </tbody>
                </table>
               

               
            </div>
        </div>
    )
}

export default Student;