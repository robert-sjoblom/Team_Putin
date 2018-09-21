import React from 'react';
import Notification from './notifications/notification';
// import Requests from '../Request';


class Dropdown extends React.Component {

    render(){
        return (
            <li className="dropdown notification-list">
            <a className="nav-link dropdown-toggle arrow-none waves-effect" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                <i className="ti-bell noti-icon"></i>
                <span className="badge badge-pill badge-danger noti-icon-badge">{this.props.notes.length}</span>
            </a>
            <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg">
                
                <h6 className="dropdown-item-text">
                    Notifications ({this.props.notes.length})
                </h6>
                <div className="slimscroll notification-item-list">
                    {this.props.notes.map((note, index) => {
                        return (
                        <Notification
                            key={index}
                            status={note.status}
                            type={note.type}
                            message={note.message}
                            messageDummy={note.messageDummy}
                        >
                        </Notification>
                        )
                    })}
                </div>
                
                <a href="javascript:void(0);" className="dropdown-item text-center text-primary">
                    View all <i className="fi-arrow-right"></i>
                </a>
            </div>        
        </li>
        )
    }
}

export default Dropdown;