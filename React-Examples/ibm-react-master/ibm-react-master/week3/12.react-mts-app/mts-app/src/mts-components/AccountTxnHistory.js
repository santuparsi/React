import React, { Component } from 'react';

class AccountTxnHistory extends Component {
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">Txn History</div>
                <div className="panel-body">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Type</th>
                                <th>Amount</th>
                                <th>Closing Balance</th>
                            </tr>
                        </thead>   
                     <thead>       
                    {this.props.txns.map((txn,idx) => { 
                        return (
                            <tr key={idx}>
                                <td>{new Date(txn.txnDate).toLocaleDateString()}</td>
                                <td>{txn.type}</td>
                                <td>{txn.amount}</td>
                                <td>{txn.closingBalance}</td>
                            </tr>    
                        );
                    }) }   
                    </thead >      
                </table>    
                </div>
            </div>
        );
    }
}

export default AccountTxnHistory;