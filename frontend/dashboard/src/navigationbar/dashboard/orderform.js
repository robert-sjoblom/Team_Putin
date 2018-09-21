import React from 'react';
import Requests from '../../Request';

class OrderForm extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            orderNr: '',
            orderValue: '',
            status: 'Delivered',
            type: 'Download'
        };
    
        this.handleNumber = this.handleNumber.bind(this);
        this.handleStatus = this.handleStatus.bind(this);
        this.handleValue = this.handleValue.bind(this);
        this.handleType = this.handleType.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // Handles value of order
    handleNumber(event){
        this.setState({...this.state, orderNr: event.target.value});
    }
    // Handles Value
    handleValue(event){
        this.setState({...this.state, orderValue: event.target.value});
    }
    // Handles status of order
    handleStatus(event){
        this.setState({...this.state, status: event.target.value});
    }
    // Handles state of type
    handleType(event){
        this.setState({...this.state, type: event.target.value});
        console.log(this.state)
    }

    // Handles the sumbit for Orders and send post to backend
    handleSubmit(event){
        event.preventDefault();
        Requests.post('orders', this.state)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    render(){

        return (
            <div tabIndex="-1" className="modal fade" id="orderModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">New Order</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form className="form-control modal-body h-100">
                            OrderNumber
                            <input className="form-control mb-3" onChange={this.handleNumber}/>
                            OrderValue
                            <input className="form-control mb-3" onChange={this.handleValue}/>
                            OrderStatus
                            <select className="form-control mb-3" onChange={this.handleStatus}>
                                <option>Delivered</option>
                                <option>Cancelled</option>
                                <option>Shipped</option>
                            </select>
                            OrderType
                            <select className="form-control mb-3" onChange={this.handleType}>
                                <option>Download</option>
                                <option>In-store</option>
                                <option>Mail-order</option>
                            </select>
                        </form> 
                        
                        
                        <div className="modal-footer mt-3">
                            <button value="Submit" type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button onClick={this.handleSubmit} type="submit" data-dismiss="modal" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderForm;