import React, { Component } from 'react';

class MessageComponent extends Component {

    constructor(props) {
        super(props);
        console.log('MessageComponent::constructor()');
        //The constructor is the right place to initialize state.
        // this.state = {
        //     message: ''
        // };
    }

    componentWillMount() {
        console.log('MessageComponent::componentWillMount()');
    }

    render() {
        console.log('MessageComponent::render()');
        return (
            <div>
                {this.props.message}
            </div>
        );
    }

    componentDidMount() {
        console.log('MessageComponent::componentDidMount()');
        // N/w call 
        //let message = " Hello Murgaih , how was biryani!";
        //this.setState({message});
    }    

    //-------------------------------------------------------------

    componentWillReceiveProps(nextProps) {
        console.log('MessageComponent::componentWillReceiveProps()');
        //console.dir(this.props);
        //console.dir(nextProps);
    }    

    shouldComponentUpdate(nextProps,nextState) {
        console.log('MessageComponent::shouldComponentUpdate()');
        return this.props.message !== nextProps.message;
    }


    componentWillUpdate(nextProps,nextState) {
        console.log('MessageComponent::componentWillUpdate()');
        // any prop or state changes on re-rendering with new props or states
    }

    componentDidUpdate() {
         console.log('MessageComponent::componentDidUpdate()');
    }

    componentWillUnmount() {
        console.log('MessageComponent::componentWillUnmount()');
        // clean up...
    }


}


MessageComponent.defaultProps = {
    message:'Murgaih dont sleep'
}

export default MessageComponent;