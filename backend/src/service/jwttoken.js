import jwt from 'jsonwebtoken'
import * as config from '../../config.js'

const User = (req) => {
    let token = req.headers.authorization || ''
    token = token.replace('Bearer ', '')
    const jwtSign = payload => jwt.sign( payload, config.JWT_SECRET, { algorithm: 'HS256' })
    try {
        const decodedJwt = jwt.verify(
            token,
            config.JWT_SECRET
        )

        return { user: {...decodedJwt.user}, jwtSign  }
    } catch (e) {
        return { jwtSign }
    }
}

const encode = (email, password) => {
    let payload = { email: email, password: password }
    return jwt.sign( payload, 'sercutiryjwt', { algorithm: 'HS256' });
}

const decode = (token) => {
    const decodedJwt = jwt.verify(
        token,
        config.JWT_SECRET
    )
    return { user: {...decodedJwt.user}}
}

export default {
    User,
    encode,
    decode
}
