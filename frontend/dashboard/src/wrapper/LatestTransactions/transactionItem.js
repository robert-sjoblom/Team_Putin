import React from 'react';

class TransactionItem extends React.Component {

  checkStatus(status){
    if(status == 'completed'){
      return 'mdi mdi-checkbox-blank-circle text-success'
    }
    if(status == 'awaiting payment'){
      return 'mdi mdi-checkbox-blank-circle text-warning'
    }
    if(status == 'payment expired'){
      return 'mdi mdi-checkbox-blank-circle text-danger'
    }
  }
  render(){
    return (
      <tr>
      <td>
        <img src={require("../../assets/images/users/user-1.jpg")} alt="user-image" className="thumb-sm rounded-circle mr-2" />
        {this.props.name}
      </td>
      <td><i className={this.checkStatus(this.props.status)}></i>{this.props.status}</td>
      <td>
        {this.props.amount}
        <p className="m-0 text-muted font-14">amount</p>
      </td>
      <td>
        {this.props.date}
        <p className="m-0 text-muted font-14">date</p>
      </td>
      <td>
        <button type="button" className="btn btn-secondary btn-sm waves-effect waves-light">Edit</button>
      </td>
    </tr>
  )
}
}

export default TransactionItem;