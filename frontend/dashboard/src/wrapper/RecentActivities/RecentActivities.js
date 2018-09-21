import React from 'react';
import Header from '../../components/Header';
import ReadMore from '../../components/ReadMore';
import Requests from '../../Request';
import Activity from './Activity';

class RecentActivities extends React.Component {
  state = {
    activities: [],
    moreActivities: []
  };

  componentDidMount() {
    Requests.get('activities')
      .then(response => {
        // If we have more than 5 activities, save the rest in moreActivities
        const newState = response.activities.reduce((prev, cur, index) => {
          if (index < 5) {
            prev["activities"].push(cur)
          } else {
            prev["moreActivities"].push(cur)
          }
          return prev;
        }, this.state)
        this.setState(newState);
      })
      .catch(err => console.log(err));
  }

  readMore = (e) => {
    e.preventDefault();
    const newState = {
      activities: [...this.state.activities, ...this.state.moreActivities.slice(0, 2)],
      moreActivities: [...this.state.moreActivities.slice(2, this.state.moreActivities.length)]
    }
    this.setState(newState);
  }

  render() {
    return (
      <div className="col-xl-4 col-lg-6">
        <div className="card m-b-20">
          <div className="card-body">
            <Header classes={["mt-0", "header-title", "mb-4"]} title="Recent Activity Feed" />
            <ol className="activity-feed mb-0">
              {this.state.activities.map(act => <Activity
                date={act.date}
                activity={act.description}
                key={act._id} />)}
            </ol>
            <ReadMore more={this.readMore}/>
          </div>
        </div>
      </div>
    )
  }
}

export default RecentActivities;
