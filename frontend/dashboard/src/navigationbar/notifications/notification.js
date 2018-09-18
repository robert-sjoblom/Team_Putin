import React from 'react';


const Notification = (props) => {

    return (
        <a href="javascript:void(0);" className="dropdown-item notify-item">
            <div className={"notify-icon" + ' ' + props.status}><i className={"mdi" + ' ' + props.type}></i></div>
            <p className="notify-details">{props.message}<span className="text-muted">{props.messageDummy}</span></p>
        </a>
    )
}
export default Notification;