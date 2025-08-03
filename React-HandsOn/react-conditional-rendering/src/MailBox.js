import React from "react";

function MailBox(props) {
    const unreadMessages = props.unreadMessage;
    return (
        <div>
            <h1>Hello!</h1>
            {unreadMessages > 0 &&
                <h1>you have {unreadMessages}
                    unread messages</h1>}
            {unreadMessages == 0 &&
                <h1>MailBox Empty!!!</h1>}
        </div>
    );
}
export default MailBox