function Student({ student }) {
    return (
        <>
            <h2>Student Details</h2>
            <pre>
                ID:{student.Id} <br />
                Name:{student.Name} <br />
                Age:{student.Age} <br />
                Std:{student.Std} <br />
            </pre>
            <hr />
        </>
    )
}
function ClassRoom() {
    let obj = { Id: 3421, Name: 'Mina', Age: 11, Std: 'V' }
    return (
        <div>
            <Student student={{ Id: 3234, Name: 'Rina', Age: 10, Std: 'IV' }} />
            <Student student={obj} />
        </div>
    )
}
export default ClassRoom;