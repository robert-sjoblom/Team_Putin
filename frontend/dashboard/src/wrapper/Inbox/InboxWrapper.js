import React from 'react';
import Requests from '../../Request';
import InboxItem from './InboxItem';

class InboxWrapper extends React.Component {
  state = {
    messages: []
  }
  // we fetch inbox here
  componentDidMount() {
    Requests.get('messages')
      .then(response => {
        console.log(response);
        this.setState({ ...this.state, messages: response.messages })
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="col-xl-4 col-lg-6">
        <div className="card m-b-20">
          <div className="card-body">
            <h4 className="mt-0 header-title mb-3">Inbox</h4>
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
          </div>
        </div>

      </div>
    )
  }
}

export default InboxWrapper;


