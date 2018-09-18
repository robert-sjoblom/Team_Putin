import React from 'react';

class TransactionForm extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            from: '',
            amount: '',
            status: 'Completed',
        };
    
        this.handleFrom = this.handleFrom.bind(this);
        this.handleStatus = this.handleStatus.bind(this);
        this.handleAmount = this.handleAmount.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // Handles value of order
    handleFrom(event){
        this.setState({...this.state, from: event.target.value});
    }
    // Handles Value
    handleAmount(event){
        this.setState({...this.state, amount: event.target.value});
    }
    // Handles status of order
    handleStatus(event){
        this.setState({...this.state, status: event.target.value});
    }

    // Handles the sumbit for Transaction and send post to backend
    handleSubmit(event){
        event.preventDefault();
        // Send state to request
        
    }

    render(){

        return (
            <div tabIndex="-1" className="modal fade" id="transactionModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">New Transaction</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    
                        <form className="form-control modal-body mb-5 h-100">
                            Amount:
                            <input className="form-control mb-3" onChange={this.handleAmount}/>
                            From:
                            <input className="form-control mb-3" onChange={this.handleFrom}/>
                            TransactionStatus
                            <select className="form-control mb-3" onChange={this.handleStatus}>
                                <option>Completed</option>
                                <option>Awaiting Payment</option>
                                <option>Payment Expired</option>
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

export default TransactionForm;