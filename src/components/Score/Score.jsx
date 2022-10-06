import './Score.css'
function Score({student}){
    return(
        <tr>
            <td>{student.date}</td>
            <td>{student.score}</td>
        </tr>
    )
}

export default Score;