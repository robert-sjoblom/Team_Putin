import React from 'react';

const SalesFigureAndQuote = ({ salesFigure, quote }) => {
  return (
    <div>
      <h4>{salesFigure}</h4>
      <p className="text-muted">{quote}</p>
      <a href="#" className="text-primary">Learn more <i className="mdi mdi-chevron-double-right"></i></a>
    </div>
  )
}
export default SalesFigureAndQuote;
