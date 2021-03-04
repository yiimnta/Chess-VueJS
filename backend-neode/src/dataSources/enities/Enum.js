//User
const EUSER = {
    STATUS: {
        NORMAL: 0,
        BLOCK: 1
    },
    ROLE: {
        USER: 0,
        ADMIN: 1
    }
}

//Message
const EMESSAGE = {
    STATUS: {
        NORMAL: 0,
        EDITED: 1,
        HIDE_Message: 2,
        HIDE_FRIEND: 3
    }
}

module.exports = { EUSER, EMESSAGE }