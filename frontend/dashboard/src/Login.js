// @ts-nocheck
import React from 'react';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    status: '',
    newUser: false
  };

  setToken = this.props.setToken;

  onChange = e => {
    if (e.target.id === 'newUser') {
      this.setState({
        newUser: !this.state.newUser
      });
    } else {
      this.setState({
        [e.target.id]: e.target.value
      });
    }
  }

  submit = e => {
    e.preventDefault();

    const data = { email: this.state.email, password: this.state.password };
    const options = {
      method: 'POST',
      mode: 'cors',
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(data)
    }
    const api = 'http://localhost:3001/api/users/';
    const url = this.state.newUser ? 'signup' : 'login'
    fetch(`${api}${url}`, options)
      .then((response) => response.json())
      .then(text => {
        if (text.token) {
          this.setToken(text.token)
        } else {
          this.setState({ status: text.message || 'Something went wrong. Try again later!' })
        }
      })
      .catch(() => {
        this.setState({ status: 'Something went wrong, please try again later! ' });
      });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <h5>{this.state.status}</h5>
          </div>
          <div className="row justify-content-center">
            <form onSubmit={this.submit}>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  required
                  onChange={this.onChange}
                />
                <small
                  id="emailHelp"
                  className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="text"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  onChange={this.onChange}
                />
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="newUser" onChange={this.onChange} />
                <label className="form-check-label" htmlFor="newUser">New User</label>
              </div>
              <button type="submit" className="btn btn-primary float-right">{this.state.newUser ? 'Sign up' : 'Sign in'}</button>
            </form>
          </div>
        </div>
      </div >
    );
  }
}

export default Login;