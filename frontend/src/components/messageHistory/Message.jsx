import React from 'react';
import UserIcon from '../userIcon/UserIcon';

const Message = props => {
    return (
        <div>
            <UserIcon />
            <p>Hello Petro</p>
            <span>20:00</span>
        </div>
    )
}

export default Message;