import React from 'react';
import Requests from '../../../Request';

class ProductSold extends React.Component {
    state = { length: 0 }
    componentDidMount() {
        Requests.post('orders/getSpecificOrders', {
            status: ['delivered']
        })
       .then(req => this.setState({ ...this.state, length: req.length }))
       .catch(err => console.log(err));
    }

    render(){
        return (
        <div className="col-xl-3 col-md-6">
            <div className="card mini-stat bg-primary">
                <div className="card-body mini-stat-img">
                    <div className="mini-stat-icon">
                        <i className="mdi mdi-briefcase-check float-right"></i>
                    </div>
                    <div className="text-white">
                        <h6 className="text-uppercase mb-3">Product Sold</h6>
                        <h4 className="mb-4">{this.state.length}</h4>
                        <span className="badge badge-info"> +89% </span> <span className="ml-2">From previous period</span>
                    </div>
                </div>
            </div>
        </div>
    )
    }
}

export default ProductSold;