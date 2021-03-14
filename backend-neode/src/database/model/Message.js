module.exports = {
    id: {
        type: 'uuid',
        primary: true
    },
    content: {
        type: 'string',
        required: true
    },
    time: {
        type: 'string',
        required: true
    },
    status: {
        type: 'int',
        required: true
    },
    author: {
        type: 'relationship',
        target: 'User',
        relationship: 'WROTE',
        direction: 'in',
        cascade: 'detach'
    },
    room: {
        type: 'relationship',
        target: 'Room',
        relationship: 'CONTAIN',
        direction: 'in',
        cascade: 'detach'
    }
};
