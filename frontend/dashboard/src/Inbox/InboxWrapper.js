import React from 'react';

const InboxWrapper = () => {
  return (
    <div className="col-xl-4 col-lg-6">
      <div className="card m-b-20">
        <div className="card-body">
          <h4 className="mt-0 header-title mb-3">Inbox</h4>
          <div className="inbox-wid">
            <a href="#" className="text-dark">
              <div className="inbox-item">
                <div className="inbox-item-img float-left mr-3"><img src="assets/images/users/user-1.jpg" className="thumb-md rounded-circle"
                  alt="" /></div>
                <h6 className="inbox-item-author mt-0 mb-1">Misty</h6>
                <p className="inbox-item-text text-muted mb-0">Hey! there I'm available...</p>
                <p className="inbox-item-date text-muted">13:40 PM</p>
              </div>
            </a>
            <a href="#" className="text-dark">
              <div className="inbox-item">
                <div className="inbox-item-img float-left mr-3"><img src="assets/images/users/user-2.jpg" className="thumb-md rounded-circle"
                  alt="" /></div>
                <h6 className="inbox-item-author mt-0 mb-1">Melissa</h6>
                <p className="inbox-item-text text-muted mb-0">I've finished it! See you so...</p>
                <p className="inbox-item-date text-muted">13:34 PM</p>
              </div>
            </a>
            <a href="#" className="text-dark">
              <div className="inbox-item">
                <div className="inbox-item-img float-left mr-3"><img src="assets/images/users/user-3.jpg" className="thumb-md rounded-circle"
                  alt="" /></div>
                <h6 className="inbox-item-author mt-0 mb-1">Dwayne</h6>
                <p className="inbox-item-text text-muted mb-0">This theme is awesome!</p>
                <p className="inbox-item-date text-muted">13:17 PM</p>
              </div>
            </a>
            <a href="#" className="text-dark">
              <div className="inbox-item">
                <div className="inbox-item-img float-left mr-3"><img src="assets/images/users/user-4.jpg" className="thumb-md rounded-circle"
                  alt="" /></div>
                <h6 className="inbox-item-author mt-0 mb-1">Martin</h6>
                <p className="inbox-item-text text-muted mb-0">Nice to meet you</p>
                <p className="inbox-item-date text-muted">12:20 PM</p>
              </div>
            </a>
            <a href="#" className="text-dark">
              <div className="inbox-item">
                <div className="inbox-item-img float-left mr-3"><img src="assets/images/users/user-5.jpg" className="thumb-md rounded-circle"
                  alt="" /></div>
                <h6 className="inbox-item-author mt-0 mb-1">Vincent</h6>
                <p className="inbox-item-text text-muted mb-0">Hey! there I'm available...</p>
                <p className="inbox-item-date text-muted">11:47 AM</p>
              </div>
            </a>

            <a href="#" className="text-dark">
              <div className="inbox-item">
                <div className="inbox-item-img float-left mr-3"><img src="assets/images/users/user-6.jpg" className="thumb-md rounded-circle"
                  alt="" /></div>
                <h6 className="inbox-item-author mt-0 mb-1">Robert Chappa</h6>
                <p className="inbox-item-text text-muted mb-0">Hey! there I'm available...</p>
                <p className="inbox-item-date text-muted">10:12 AM</p>
              </div>
            </a>

          </div>
        </div>
      </div>

    </div>
  )
}

export default InboxWrapper;

