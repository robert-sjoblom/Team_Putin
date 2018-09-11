import React from 'react';

const RecentActivities = () => {
  return (
    <div className="col-xl-4 col-lg-6">
      <div className="card m-b-20">
        <div className="card-body">
          <h4 className="mt-0 header-title mb-4">Recent Activity Feed</h4>

          <ol className="activity-feed mb-0">
            <li className="feed-item">
              <div className="feed-item-list">
                <span className="date">Jun 25</span>
                <span className="activity-text">Responded to need “Volunteer Activities”</span>
              </div>
            </li>
            <li className="feed-item">
              <div className="feed-item-list">
                <span className="date">Jun 24</span>
                <span className="activity-text">Added an interest “Volunteer Activities”</span>
              </div>
            </li>
            <li className="feed-item">
              <div className="feed-item-list">
                <span className="date">Jun 23</span>
                <span className="activity-text">Joined the group “Boardsmanship Forum”</span>
              </div>
            </li>
            <li className="feed-item">
              <div className="feed-item-list">
                <span className="date">Jun 21</span>
                <span className="activity-text">Responded to need “In-Kind Opportunity”</span>
              </div>
            </li>
          </ol>

          <div className="text-center">
            <a href="#" className="btn btn-sm btn-primary">Load More</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecentActivities;
