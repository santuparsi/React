import React from 'react'
import './MyStyle.css'
function StyleSheet(props) {
    const className=props.primary?'primary':''
    return (
        <div>
            <h1 className='primary font-lg'>StyleSheet</h1>
            <h1 className={`${className} font-lg`}>StyleSheet</h1>
        </div>
    )
}

export default StyleSheet
