// @ts-nocheck
import React from 'react';
import Quote from './Quote';
import QuotedUser from './QuotedUser';
import YearlySalesBox from './YearlySalesBox';

const QuoteWrapper = () => {

  // fetch quote
  // fetch Yearly Sales

  return (
    <div className="col-xl-4">
      <div className="card widget-user m-b-20">
        <Quote quote="The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe the same vocabulary. The languages only in their grammar."/>
        <QuotedUser name="Marie DefaultName" position="Marketing Manager" />
      </div>
      <YearlySalesBox />
    </div>

  )
}

export default QuoteWrapper;
