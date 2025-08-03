function Demo2() {
    let employees = ['Karan', 'John', 'David', 'Mic', 'Jessy'];
    return (
        <div className="container" style={{ width: '400px', height: '300px' }}>
            <table className="table table-bordered">
                <thead className="table-primary">
                    <tr><th>Name</th></tr>
                </thead>
                <tbody>
                    {
                        employees.map((employee) => (
                            <tr>
                                <td>{employee}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Demo2;