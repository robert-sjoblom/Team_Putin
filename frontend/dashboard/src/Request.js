
export default class Requests {
  static api = 'http://recipes.hostileux.com/';

  static formatPayload(data, method) {
    // attach any headers around the requests, including tokens
    // we'll deal with this later.
    return null;
  }

  static fetch(url, method, payload) {
    return fetch(`${this.api}${url}`, Requests.formatPayload(payload, method))
      .then(response => response.json())
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