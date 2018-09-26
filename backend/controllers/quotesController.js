const request = require('request');

exports.getQuote = (req, res) => {
  const options = {
    url: 'https://quotes.rest/qod',
    headers: {
      'Accept': 'application/json' //eslint-disable-line
    }
  };

  const defaultQuote = {
    message: 'Only strippers shave above the knee.',
    name: 'Linda Belcher',
    position: 'Wife. Mother.'
  };

  request(options, (err, respone, body) => {
    if (err) {
      return res.status(500).json({ quote: defaultQuote });
    }
    return res.status(200).json({ quote: JSON.parse(body) });
  });
};
