import React from 'react';
import Requests from '../../../Request';

class OrderValue extends React.Component {
    state = { average: 0 }
    componentDidMount() {
        Requests.get('orders/getOrderValue')
        .then(res => {
          this.setState({ ...this.state, average: res.average })
        })
        .catch(err => console.log(err));
    }

    render(){
        return (
        <div className="col-xl-3 col-md-6">
            <div className="card mini-stat bg-primary">
                <div className="card-body mini-stat-img">
                    <div className="mini-stat-icon">
                        <i className="mdi mdi-tag-text-outline float-right"></i>
                    </div>
                    <div className="text-white">
                        <h6 className="text-uppercase mb-3">Average Price</h6>
                        <h4 className="mb-4">${this.state.average}</h4>
                        <span className="badge badge-warning"> 0% </span> <span className="ml-2">From previous period</span>
                    </div>
                </div>
            </div>
        </div>
    )
    }
}

export default OrderValue;
