


class App extends React.Component{
    constructor() {
        super();
        this.state = {
            hitCount:10
        };
    }
    incrementCount(incCount) {
        this.setState({hitCount:this.state.hitCount+incCount});
    }
    render() {
        let { name } = this.props; // destructuring
        let ele = (
            <div className="jumbotron">
                <h3><small>{name}</small></h3>
                <hr />
                <DisplayComponent count={this.state.hitCount} />
                <hr />
                <ButtonComponent incBy={1} clickHandler={this.incrementCount.bind(this)}/>
                <ButtonComponent incBy={10} clickHandler={this.incrementCount.bind(this)}/>
                <ButtonComponent incBy={100} clickHandler={this.incrementCount.bind(this)}/>
            </div>
        );
        return ele;
    }
}




class DisplayComponent extends React.Component{
    render() {
        let { count } = this.props; // destructuring
        let ele = (
            <div>
                <span className="badge">{count}</span>    
            </div>
        );
        return ele;
    }
}

class ButtonComponent extends React.Component{
    onClickHandler() {
        let { clickHandler,incBy } = this.props;
        clickHandler(incBy);
    }
    render() {
        let { incBy } = this.props; // destructuring
        let ele = (
            <div className="clearfix">
                <button className="btn btn-primary"
                    onClick={this.onClickHandler.bind(this)}>
                    {incBy}
                </button>
            </div>
        );
        return ele;
    }
}





ReactDOM.render(<App name="Counter Demo"/>,document.getElementById('root'));