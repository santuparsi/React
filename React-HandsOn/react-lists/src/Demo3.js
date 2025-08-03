function Demo3() {
    let employees = [
        { Id: 34098, Name: 'Karan', Salary: 50000 },
        { Id: 87890, Name: 'Jivan', Salary: 30000 },
        { Id: 12341, Name: 'Mic', Salary: 20000 },
        { Id: 90987, Name: 'David', Salary: 90000 },
        { Id: 43214, Name: 'Peter', Salary: 10000 },
    ]
    return (
        <div className="container">
            <table className="table table-stripped">
                <thead className="table-info">
                    <tr>
                        <th>Id</th><th>Name</th><th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map((emp) => (
                            <tr key={emp.Id}>
                                <td>{emp.Id}</td>
                                <td>{emp.Name}</td>
                                <td>{emp.Salary}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Demo3;