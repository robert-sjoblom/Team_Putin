// @ts-nocheck
import React from 'react';
import Requests from '../../Request';
import Quote from './Quote';
import QuotedUser from './QuotedUser';
import YearlySalesBox from './YearlySalesBox';

class QuoteWrapper extends React.Component {
  state = {
    message: '',
    name: '',
    position: '',
  }

  componentDidMount() {

    Requests.get('quotes')
      .then(({ quotes }) => {
        this.setState({
          ...quotes[Math.floor(Math.random()*quotes.length)]
        })
      })
  }

  render() {
    return (
      <div className="col-xl-4">
        <div className="card widget-user m-b-20">
          <Quote quote={this.state.message} />
          <QuotedUser name={this.state.name} position={this.state.position} />
        </div>
        <YearlySalesBox customQuote={this.state.message.split(' ').slice(0, 4).join(' ')}/>
      </div>
    )
  }
}

export default QuoteWrapper;
