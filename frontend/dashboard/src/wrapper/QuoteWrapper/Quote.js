import React from 'react';

const Quote = ({ quote }) => {
  return (
    <div className="widget-user-desc p-4 text-center bg-primary position-relative">
      <i className="fas fa-quote-left h3 text-white-50"></i>
      <p className="text-white mb-0">{quote}</p>
    </div>
  )
}

export default Quote;
