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
        type: 'int',
        required: true
    },
    author: {
        type: 'relationship',
        target: 'User',
        relationship: 'WROTE',
        direction: 'in'
    },
    room: {
        type: 'relationship',
        target: 'Room',
        relationship: 'CONTAIN',
        direction: 'in'
    }
};
