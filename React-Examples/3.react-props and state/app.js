


// Es6 - class

//---------------------------------------------------------------------------------

class MessageComponent extends React.Component{

    constructor(props) {
        super(props);
        //console.dir(this.props);
    }

    render() {
        console.log('MessageComponent::render()');
        //let message = this.props.message;
        let { message } = this.props;
        let ele = (
            <div className="list-group-item"> 
                {message}
            </div>
        );
        return ele;
    }

}

//---------------------------------------------------------------------------------


class MessageContainer extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        console.log('MessageContainer::render()');
        let { messages } = this.props;
        let comps = messages.map(function (message,idx) { 
            return <MessageComponent key={idx} message={message}/>
        });       

        let ele = (
            <div className="list-group"> 
                {comps}
            </div>
        );
        return ele;
    }

}


class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            messages:[]
        };
    }

    personalBtnHandler() {
         let messagesFromServer = [
            "Hello",
            "Hi",
            "How r u",
            "im ok",
            "wats plan tomo",
            "flying to chn"
         ];
         this.setState({messages:messagesFromServer});
    }

      professionalBtnHandler() {
         let messagesFromServer = [
             "what is .js",
             "what is react" 
         ];
         this.setState({messages:messagesFromServer});
    }

    render() {
        console.log('App::render()');
        
        let ele = (
            <div className="jumbotron"> 
                <button className="btn btn-primary" onClick={this.personalBtnHandler.bind(this)}>personal</button>
                <button className="btn btn-primary" onClick={this.professionalBtnHandler.bind(this)}>professional</button>
                <hr/>
               <MessageContainer messages={this.state.messages}/>
            </div>
        );
        return ele;
    }
}

//---------------------------------------------------------------------------------

ReactDOM.render(<App/>,document.getElementById('root'));

//---------------------------------------------------------------------------------