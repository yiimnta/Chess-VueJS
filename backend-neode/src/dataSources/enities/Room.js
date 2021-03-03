const neode = require('../../database/NeodeConfiguration')

class Room {
    constructor(data){
      Object.assign(this, data);
    }

    static createRoom(node) {
        if (!node) return null
        return new Room( {...node.properties(), node })
    }

    static async first(props) {
        const node = await neode.first('Room', props)
        return Room.createRoom(node)
    }

    static async all() {
        const nodes = await neode.all('Room')
        return nodes.map(node => Room.createRoom(node))
    }

    async save() {
        if(!this.users || this.users < 2 || !this.users[0] || !this.users[1]) return new Error("Participants are missing!")
        const {users, ...room} = this
        delete this.users
        const node = await neode.create('Room', this)
        await node.relateTo(users[0].node, "users")
        await node.relateTo(users[1].node, "users")
        Object.assign(this, {...node.properties() , node })
        return this
    }
}

module.exports = Room