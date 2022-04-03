import React, { Component } from 'react';

// import {Redirect} from 'react-router-dom'

class TxrForm extends Component {

    // constructor(props) {
    //     super(props);
    // }
  
    handleSubmit(e) {
        e.preventDefault();
        let txrForm = {
            fromAccNum: this.refs.fromAccNum.value,
            toAccNum: this.refs.toAccNum.value,
            amount: this.refs.amount.value
        }
        let { onSubmit } = this.props;
        onSubmit(txrForm.fromAccNum, txrForm.toAccNum, Number.parseFloat(txrForm.amount));
    }

    render() {
        if (this.props.txrStatus) {
            return (<div className="alert alert-success">{this.props.txrStatus}</div>);
        } else {
            return (
                <div className="col-md-6">
                    <div className="page-header">Txr Form</div>

                    <div className="panel panel-default">
                        <div className="panel-heading">TxrForm</div>
                        <div className="panel-body">

                            <form className="form-vertical" onSubmit={(e) => { this.handleSubmit(e); }}>
                                <div className="form-group">
                                    <label>From Account Num</label>
                                    <input className="form-control" ref="fromAccNum" />
                                </div>
                                <div className="form-group">
                                    <label>To Account Num</label>
                                    <input className="form-control" ref="toAccNum" />
                                </div>
                                <div className="form-group">
                                    <label>Amount</label>
                                    <input className="form-control" ref="amount" />
                                </div>
                                <button className="btn btn-primary">Txr</button>
                            </form>

                        </div>
                    </div>

                </div>
            );
        }
    }
}
export default TxrForm;