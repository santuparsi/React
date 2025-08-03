function Demo1() {
    let counties = ['India', 'US', 'Japan', 'China']
    return (
        <div>
            <ul>
                {
                    counties.map((item) => (
                        <li>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}
export default Demo1;