const logout = (req, res) => {
  //Kill the cookie with a clearCookie
  res.clearCookie('jwt')
  res.json({
    message: 'Logout success'
  })
  res.end()
}

module.exports = logout;