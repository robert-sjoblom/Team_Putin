import React from 'react';

const ReadMore = ({ more }) => (
  <div className="text-center">
    <a onClick={more} className="btn btn-sm btn-primary">Load More</a>
  </div>
);

export default ReadMore;
