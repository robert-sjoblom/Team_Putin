
export default class Requests {
  static api = 'http://localhost:3001/api/';
  static token = sessionStorage.getItem('token');

  static formatPayload(data, method) {
    // attach any headers around the requests, including tokens
    // we'll deal with this later.
    // console.log(this.token);
    const headers = {
      'Accept': 'application/json, text/plain */*',
      'Content-Type': 'application/json',
      'Authorization': this.token
    };

    return data ? { method, headers, body: JSON.stringify(data) } : { method, headers };

    // return {
    //   method,
    //   headers,
    //   body: JSON.stringify(data)
    // };
  }

  static fetch(url, method, payload = null) {
    return fetch(`${this.api}${url}`, Requests.formatPayload(payload, method))
      .then(response => response.json())
      .catch(err => console.log(err))
    // .then(response => Requests.formatResponse(response));
  }

  static get(url) {
    return Requests.fetch(url, 'GET')
  }

  static post(url, data) {
    return Requests.fetch(url, 'POST', data);
  }

  static put(url, data) {
    return Requests.fetch(url, 'PUT', data);
  }

  static delete(url, data) {
    return Requests.fetch(url, 'DELETE', data);
  }
}


// usage:
// import Requests from 'Requests';
// const fooData = Requests.get('api/foo');