import React, { Component, PropTypes } from 'react';

import { Link } from 'react-router-dom';

class Account extends Component {
    render() {
        let { account } = this.props;
        return (
            <tr>
                <td>{account.num}</td>
                <td>{account.name}</td>
                <td>&#8377;{account.balance}</td>
                <td>{account.type}</td>
                <td>{account.status}</td>
                <td><Link to={`/accounts/txn-list/${account.num}`}><span className="glyphicon glyphicon-list"></span></Link></td>
            </tr>
        );
    }
}

Account.propTypes = {
    account: PropTypes.object.isRequired
};


export default Account;