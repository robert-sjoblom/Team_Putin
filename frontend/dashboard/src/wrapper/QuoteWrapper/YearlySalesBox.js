import React from 'react';
import SalesFigureAndQuote from './SalesFigureAndQuote';
import YearlySalesDiagram from './YearlySalesDiagram';

const YearlySalesBox = ({ customQuote }) => {
  const value = Math.random()*12000;
  return (
    <div className="card m-b-20">
      <div className="card-body">
        <h4 className="mt-0 header-title">Yearly Sales</h4>
        <div className="row">
          <div className="col-md-4">
            <SalesFigureAndQuote salesFigure={value.toFixed(0)} quote={customQuote} />
          </div>
          <div className="col-md-8 text-right">
            <YearlySalesDiagram />
          </div>
        </div>
      </div>
    </div>
  )
}

export default YearlySalesBox;
