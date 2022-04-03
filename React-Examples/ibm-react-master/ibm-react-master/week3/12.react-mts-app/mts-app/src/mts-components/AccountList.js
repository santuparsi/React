import React, { Component, PropTypes } from 'react';
import Account from './Account';
// import _ from 'lodash';

// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom'


// import AccountTxnHistory from './AccountTxnHistory';

class AccountList extends Component {

    
    _renderTableHeader() {
        return (
            <tr>
                <th>Num</th>
                <th>Name</th>
                <th>Balance</th>
                <th>Type</th>
                <th>Status</th>
                <th>Statement</th>
            </tr>
        );
    }
    _renderAccounts() {
        let { accounts } = this.props;
        return accounts.map((account,idx) => <Account account={account} key={idx}/>);
    }    

    render() {
        let { accounts } = this.props;
        return (
            <div>
                <div className="page-header">Account List</div>

                <table className="table table-bordered">
                    <thead>
                        {this._renderTableHeader()}
                    </thead>
                    <tbody>
                        {this._renderAccounts()}
                    </tbody>    
                </table>    
            
            </div>
        );
    }
}


AccountList.propTypes = {
    accounts: PropTypes.array.isRequired
}



export default AccountList;