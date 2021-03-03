const jwt = require('jsonwebtoken')
const driver = require('./driver')

const context = ({ req }) => {
  let token = req.headers.authorization || ''
  token = token.replace('Bearer ', '')
  const jwtSign = payload => jwt.sign( payload, process.env.JWT_SECRET, { algorithm: 'HS256' })
  try {
    const decodedJwt = jwt.verify(
      token,
      process.env.JWT_SECRET
    )
    
    return { user: {...decodedJwt.user}, jwtSign, driver  }
  } catch (e) {
    return { jwtSign, driver }
  }
}

module.exports = { context }
