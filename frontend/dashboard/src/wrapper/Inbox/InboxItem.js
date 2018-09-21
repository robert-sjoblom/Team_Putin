import React from 'react';

const InboxItem = ({ key, author, message, time}) => {
  return (
    <a href={key} className="text-dark">
      <div className="inbox-item">
        <div className="inbox-item-img float-left mr-3"><img src={require('../../assets/images/users/user-1.jpg')} className="thumb-md rounded-circle"
          alt="" /></div>
        <h6 className="inbox-item-author mt-0 mb-1">{author}</h6>
        <p className="inbox-item-text text-muted mb-0">{message}</p>
        <p className="inbox-item-date text-muted">{time}</p>
      </div>
    </a>
  )
}

export default InboxItem;
