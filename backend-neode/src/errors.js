const ER_USER_TYPE = {
    ALREADY_FRIEND:0,
    ALREADY_SENT_FRIEND_REQUEST:1,
    NOT_FRIEND:2,
}

const ER_USER = {
    0: () => "This user is already your friend!",
    1: () => "User have already sent an Invitation!",
    2: () => "This user is not your friend!",
}

const ER_PUB_TYPE = {
    MISSING:0,
    NOT_NULL:1,
    ERROR:2
}

const ER_PUBLIC = {
    0: (objname) => `${objname} is missing!`,
    1: (objname) => `${objname} is not null!`,
    2: () => `Oops! something went wrong`
}

//when user not exist


//sign up
const EMAIL_INVALID = 'Email is invalid'
const EMAIL_EXIST = 'Email exist already'
const PASSWORD_SHORT = 'Accept only passwords with a length of at least 8 characters'
const PASSWORD_INVALID = 'Password is invalid'
const SIGNUP_ERRORS = { PASSWORD_SHORT, EMAIL_EXIST, EMAIL_INVALID, PASSWORD_INVALID}

//login
const LOGIN_AUTH = 'Sorry, your credentials are wrong!'
const LOGIN_FAILED = 'Wrong email/password combination'
const LOGIN_ERRORS = { LOGIN_AUTH, LOGIN_FAILED }

module.exports = {ER_PUB_TYPE, ER_PUBLIC,ER_USER_TYPE, ER_USER, SIGNUP_ERRORS, LOGIN_ERRORS }