import React from 'react'

export default function Comment(props) {
    return (
        <div className='Comment'>
        <div className='UserInfo'>
        <img className='Avatar' src='props.author.url'
        alt='props.author.name'/>
        </div>
        <div className='UserInfo-name'>
            {props.author.name}
        </div>
        <div className='Comment-text'>
            {props.text}
        </div>
        <div className='Comment-date'>
            {FormatDate(props.date)}
        </div>
        </div>
    );
}
function FormatDate(date)
{
    return date.toLocaleDateString();
}
