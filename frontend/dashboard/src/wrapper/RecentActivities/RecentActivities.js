import React from 'react';
import Requests from '../../Request';
import Activity from './Activity';
import Header from './Header';
import LoadMore from './LoadMore';

class RecentActivities extends React.Component {
  state = {
    activities: []
  };

  componentDidMount() {
    Requests.get('activities')
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="col-xl-4 col-lg-6" >
        <div className="card m-b-20">
          <div className="card-body">
            <Header text="Recent Activity Feed" />
            <ol className="activity-feed mb-0">
              <Activity date="Jun 63" activity="Responded to need “Freudian Activities”" />
            </ol>
            <LoadMore/>
          </div>
        </div>
      </div>
    )
  }
}

export default RecentActivities;
