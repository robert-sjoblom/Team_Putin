import React from 'react';

const Activity = ({ date, activity-text }) => {
  return (
    <li className="feed-item">
      <div className="feed-item-list">
        <span className="date">{date}</span>
        <span className="activity-text">{activity-text}</span>
      </div>
    </li>
  )
}

export default Activity;
