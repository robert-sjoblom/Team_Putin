import React from 'react';

class OrderItem extends React.Component {

    checkStatus(status){
        if(status == 'delivered'){
            return 'badge badge-pill badge-success'
        }
        if(status == 'cancelled'){
            return 'badge badge-pill badge-danger'
        }
        if(status == 'shipped'){
            return 'badge badge-pill badge-warning'
        }
    }


    render(){
        return (
            <tr>
                <td>#52140300</td>
                <td>
                    <img src={require("../../assets/images/users/user-1.jpg")} alt="user-image" className="thumb-sm mr-2 rounded-circle" />
                    {this.props.name}
                </td>
                <td><span className={this.checkStatus(this.props.status)}>{this.props.status}</span></td>
                <td>
                    {this.props.amount}
                </td>
                <td>
                    {this.props.date}
                </td>
                <td>
                    <button type="button" className="btn btn-secondary btn-sm waves-effect waves-light">Edit</button>
                </td>
            </tr>
        )
    }
    
}

export default OrderItem;