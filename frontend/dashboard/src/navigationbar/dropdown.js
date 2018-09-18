import React from 'react';
import Notification from './notifications/notification';


class Dropdown extends React.Component {

    mockData = [
        {
            status: 'bg-warning',
            type: 'mdi-cart-outline',
            message: 'Note 1',
            messageDummy: 'Dummy text of the printing and typesetting industry.'
        },
        {
            status: 'bg-success',
            type: 'mdi-martini',
            message: 'Note 2',
            messageDummy: 'Dummy text of the printing and typesetting industry.'
        },
        {
            status: 'bg-primary',
            type: 'mdi-message',
            message: 'Note 3',
            messageDummy: 'Dummy text of the printing and typesetting industry.'
        }
    ]
    

    constructor(props){
        super(props);
        this.state = {
            count: Number,
            newNotes: Number,
            notifications: [
                {
                    status: '', //bg-warning, bg-success, bg-info, bg-primary
                    type: '', //mdi-cart-outline, mdi-message, mdi-martini
                    messageHead: '',
                    messageDummy: '',
                }
            ]
        }
    }

    componentDidMount(){
        //Fetch notifications to state
    }

    render(){
        return (
            <li className="dropdown notification-list">
            <a className="nav-link dropdown-toggle arrow-none waves-effect" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                <i className="ti-bell noti-icon"></i>
                <span className="badge badge-pill badge-danger noti-icon-badge">3</span>
            </a>
            <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg">
                
                <h6 className="dropdown-item-text">
                    Notifications (258)
                </h6>
                <div className="slimscroll notification-item-list">
                    
                    {/* <a href="javascript:void(0);" className="dropdown-item notify-item active">
                        <div className="notify-icon bg-success"><i className="mdi mdi-cart-outline"></i></div>
                        <p className="notify-details">Your order is placed<span className="text-muted">Dummy text of the printing and typesetting industry.</span></p>
                    </a> */}
                    {this.mockData.map((note, index) => {
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
                    {/* <Notification 
                        status={this.mockData.status}
                        type={this.mockData.type}
                        message={this.mockData.message}
                        messageDummy={this.mockData.messageDummy}
                        >
                    </Notification> */}
{/*                     
                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                        <div className="notify-icon bg-warning"><i className="mdi mdi-message"></i></div>
                        <p className="notify-details">New Message received<span className="text-muted">You have 87 unread messages</span></p>
                    </a>
                    
                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                        <div className="notify-icon bg-info"><i className="mdi mdi-martini"></i></div>
                        <p className="notify-details">Your item is shipped<span className="text-muted">It is a long established fact that a reader will</span></p>
                    </a>
                    
                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                        <div className="notify-icon bg-primary"><i className="mdi mdi-cart-outline"></i></div>
                        <p className="notify-details">Your order is placed<span className="text-muted">Dummy text of the printing and typesetting industry.</span></p>
                    </a>
                    
                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                        <div className="notify-icon bg-danger"><i className="mdi mdi-message"></i></div>
                        <p className="notify-details">New Message received<span className="text-muted">You have 87 unread messages</span></p>
                    </a> */}
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