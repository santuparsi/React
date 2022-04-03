import React from 'react'
export class Square extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={value:null}
    }
    setValue=()=>{
        this.setState({value:'X'})
    }
    render()
    {
        return(
            <button>
                {this.state.value}
            </button>
        )
    }
}