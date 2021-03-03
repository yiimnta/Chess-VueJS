module.exports = {
    id: {
        type: 'uuid',
        primary: true
    },
    users: {
        type: "relationship",
        target: "User",
        relationship: "JOINED_BY",
        direction: "out",
    },
    messages: {
        type: "relationship",
        target: "Message",
        relationship: "CONTAIN",
        direction: "out",
    },
};
