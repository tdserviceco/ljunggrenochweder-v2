const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const createToken = (value) => {
  const payload = {
    data: value,
    exp: (Date.now() / 1000) + (60 * 60)
  }

  const token = jwt.sign(payload, process.env.SECRET);
  return token;
}

const hashGenerator = (passWord) => {
  const hash = bcrypt.hashSync(passWord, 10);
  return hash
}

const deCryptHash = (passWord, hash) => {
  const showTheTruth = bcrypt.compare(passWord, hash)
  return showTheTruth
}

const verifyToken = (token) => {
  return jwt.verify(token, process.env.SECRET, (err, payload) => {
    if (err) return console.error(err);
    return payload;
  })
}

module.exports = { createToken, deCryptHash, hashGenerator, verifyToken }