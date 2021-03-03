module.exports = {
    id: {
        primary: true,
        type: 'uuid',
        primary: true
    },
    name: {
        type: 'string',
        required: true
    },
    avatar: {
        type: 'string',
        required: true
    },
    email: {
        type: 'string',
        unique: true,
        required: true
    },
    password: {
        type: 'string',
        required: true
    },
    hashedPassword: {
        type: 'string',
        required: true
    },
    role: {
        type: 'int',
        required: true
    },
    friends: {
        type: "relationship",
        target: "User",
        relationship: "MADE_FRIEND",
        direction: "out"
    },
    messages: {
        type: "relationship",
        target: "Message",
        relationship: "WORTE",
        direction: "out"
    }
};
