// @ts-nocheck
import React from 'react';

const QuotedUser = ({ name, position }) => {
  return (
    <div className="p-4">
      <div className="float-left mt-2 mr-3">
        <img src="assets/images/users/user-2.jpg" alt="" className="rounded-circle thumb-md" />
      </div>
      <h6 className="mb-1">{name}</h6>
      <p className="text-muted mb-0">{position}</p>
    </div>
  )
}

export default QuotedUser;
