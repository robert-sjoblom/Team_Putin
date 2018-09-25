exports.getArray = (req, res) => { //eslint-disable-line
  let i;
  let array = []; //eslint-disable-line
  for (i = 0; i < 14; i++) { //eslint-disable-line
    array.push(Math.floor(Math.random() * 16));
  }
  return res.status(200).json({ numbers: array });
};
