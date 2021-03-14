const {EUSER} = require('./dataSources/enities/Enum')
const User = require('./dataSources/enities/User')

const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const isGoodPassword = (password) => !password.includes(' ')

const isAdminUser = async (props) => {
    const currentUser = await User.first(props)
    return currentUser && currentUser.role == EUSER.ROLE.ADMIN
}

module.exports = { validateEmail, isGoodPassword, isAdminUser }