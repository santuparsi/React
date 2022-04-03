import React from 'react'

export default function Header() {
    return (
        <div className="jumbotron text-center">
            <h1 className="display-4">Welcome, Grocery App!</h1>
            <p className="lead">
                One stop for all your Grocery Needs
            </p>
         
            <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
            <a className ="btn btn-primary btn-lg" href="#" role="button">Start Shopping</a>
        </div>
    )
}
