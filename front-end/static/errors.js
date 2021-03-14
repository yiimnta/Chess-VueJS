export const UNKNOWN_ERROR = 'Oops! something went wrong'

// when user not exist
export const AUTH_ERROR = 'Sorry, your credentials are wrong!'

// sign up
const EMAIL_INVALID = 'Email is invalid'
const EMAIL_EXIST = 'Email exist already'
const PASSWORD_SHORT = 'Accept only passwords with a length of at least 8 characters'
const PASSWORD_INVALID = 'Password is invalid'
export const SIGNUP_ERRORS = [PASSWORD_SHORT, EMAIL_EXIST, EMAIL_INVALID, PASSWORD_INVALID]

// login
const LOGIN_AUTH = 'Sorry, your credentials are wrong!'
const LOGIN_FAILED = 'Wrong email/password combination'
export const LOGIN_ERRORS = [LOGIN_AUTH, LOGIN_FAILED]
