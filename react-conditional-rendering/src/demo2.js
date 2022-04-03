import React from 'react'
function Mailbox(props)
{
    const unreadMessage=props.unreadMessage;
    return(
        <div>
            <h1>Hello!</h1>
            {unreadMessage>0 &&
            <h1>
                you have {unreadMessage} unread messages.
            </h1>}
        </div>
    );
}
export default Mailbox