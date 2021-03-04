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
        cascade: 'detach'
    },
    messages: {
        type: "relationship",
        target: "Message",
        relationship: "CONTAIN",
        direction: "out",
        cascade: 'detach'
    },
};
