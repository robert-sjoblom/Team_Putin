import React from 'react';
import Header from '../../components/Header';
import ReadMore from '../../components/ReadMore';
import Requests from '../../Request';
import InboxItem from './InboxItem';

class InboxWrapper extends React.Component {
  state = {
    messages: [],
    moreMessages: []

  }
  // we fetch inbox here
  componentDidMount() {
    Requests.get('messages')
      .then(response => {
        const newState = response.messages.reduce((prev, cur, index) => {
          if (index <= 6) {
            prev["messages"].push(cur)
          } else {
            prev["moreMessages"].push(cur)
          }
          return prev;
        }, this.state)
        this.setState(newState);
      })
      .catch(err => console.log(err));
  }

  readMore = (e) => {
    e.preventDefault();
    console.log('TCL: readMore -> readMore was clicked!');
    const newState = {
      messages: [...this.state.messages, ...this.state.moreMessages.slice(0, 2)],
      moreMessages: [...this.state.moreMessages.slice(2, this.state.moreMessages.length)]
    }
    this.setState(newState);
  }

  render() {
    return (
      <div className="col-xl-4 col-lg-6">
        <div className="card m-b-20">
          <div className="card-body">
            <Header classes={["mt-0", "header-title", "mb-3"]} title="Inbox" />
            <div className="inbox-wid">
              {
                this.state.messages.map(msg => <InboxItem
                  author={msg.sender}
                  message={msg.message}
                  time={msg.receivedAtTime}
                  key={msg._id}
                />)
              }
            </div>
              {/* THIS IS ADDITIONAL FUNCTIONALITY, WE MIGHT NOT NEED IT. */}
            <div className="m-b-20"></div>
            <ReadMore more={this.readMore} />
              {/* ADDITIONAL FUNCTIONALITY REMOVED */}
          </div>
        </div>
      </div>
    )
  }
}

export default InboxWrapper;


