import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

import AccountList from './mts-components/AccountList';
import TxrForm from './mts-components/TxrForm';
import AccountTxnHistory from './mts-components/AccountTxnHistory';

import _ from 'lodash';

class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      accounts: [
        {
          num: "1",
          name: "Nag",
          balance: 1000.00,
          type: 'SAVING',
          status: 'ACTIVE',
          txns: [
            // { type: 'DEBIT', to :'Ria', amount: 500, closingBalance: 500, txnDate: Date.now() },
            // { type: 'DEBIT', to: 'Ria', amount: 500, closingBalance: 0.0, txnDate: Date.now() },
            // { type: 'CREDIT', from :'Ria', amount: 500, closingBalance: 0.0, txnDate: Date.now() }
          ]
        },
        {
          num: "2",
          name: "Ria",
          balance: 1000.00,
          type: 'SAVING',
          status: 'ACTIVE',
          txns: []
        },
        {
          num: "3",
          name: "Indu",
          balance: 1000.00,
          type: 'CURRENT',
          status: 'INACTIVE',
          txns: []
        }
      ],
      txrStatus:''
    };
  } 


  _doTxr(from, to, amount) {
    let updatedAccounts=this.state.accounts.map(account => { 
      if (account.num === from) {
        let updatedAccount = Object.assign({}, account, { balance: Number.parseFloat(account.balance) - Number.parseFloat(amount) });
        updatedAccount.txns=updatedAccount.txns.concat({ type: 'DEBIT', amount: amount, txnDate: Date.now(), closingBalance: updatedAccount.balance });
        return updatedAccount;
      }
      if (account.num === to) {
        let updatedAccount=Object.assign({}, account, { balance: Number.parseFloat(account.balance) + Number.parseFloat(amount) });
        updatedAccount.txns=updatedAccount.txns.concat({ type: 'CREDIT', amount: amount, txnDate: Date.now(), closingBalance: updatedAccount.balance });
        return updatedAccount;
      }
      return account;
    });
    this.setState({ accounts: updatedAccounts,txrStatus:'' }, function () { });
 } 

  render() {
    
    let { accounts,txrStatus} = this.state;
    
    return (
      <div className="">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <br/><br/>
        
        <div className="container">
        
          <Router>
            
            <div>
              <ul className="nav nav-pills">
                <li><Link to="/accounts">Accounts <span className="glyphicon glyphicon-user"></span></Link></li>
                <li><Link to="/txr-form">Txr-Form <span className="glyphicon glyphicon-transfer"></span></Link></li>
              </ul>
              <hr/>
              <Route path="/accounts" component={() => <AccountList accounts={accounts}/>}/>
              <Route path="/txr-form" component={() => { return <TxrForm txrStatus={txrStatus} onSubmit={(from, to, amount) => { this._doTxr(from, to, amount); }} /> }} />
              <Route path="/accounts/txn-list/:acc_num" component={({ match }) => { let account = _.find(accounts, function (account) { return account.num === match.params.acc_num; }); return <AccountTxnHistory txns={account.txns} /> }}/>
            </div>

          </Router>

        </div>

      </div>
    );
  }
}

export default App;
