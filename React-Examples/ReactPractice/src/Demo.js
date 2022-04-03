import React, { Component } from 'react';
export class Test extends Component
{
    constructor(props)
    {
        super(props)
        this.user={
            fname:'Santhosh',
            lname:'Parsi'
        };
    }
    formatname(user)
    {
        return this.user.fname+' '+this.user.lname;
    }
    render()
    {
        let Element=(
            <div>
                <h1>
                    Hello Users
                </h1>
            <h1>
                GoodMorning...,{this.formatname(this.user)}
            </h1>
            </div>
            
        );
        return(
            Element
        );
    }
}