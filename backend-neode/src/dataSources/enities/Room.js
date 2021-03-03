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

    //UF : user and his friend
    static async getRoomUF(userId, friendId) {
        const rs = await neode.cypher('MATCH (s:User {id:$userId})<--(r:Room)-->(e:User {id: $friendId} ) return r', { userId, friendId })
        if(!rs.records || rs.records.length < 1) return null //not found
        return Room.createRoom(await neode.first('Room', {id: rs.records[0].get('r').properties.id}))
    }

    static async all() {
        const nodes = await neode.all('Room')
        return nodes.map(node => Room.createRoom(node))
    }

    async save() {
        if(!this.users || this.users < 2 || !this.users[0] || !this.users[1]) throw new Error("Participants are missing!")
        const { users, ...rest } = this
        const node = await neode.create('Room', rest)
        await node.relateTo(users[0].node, "users")
        await node.relateTo(users[1].node, "users")
        Object.assign(this, {...node.properties() , node })
        return this
    }
}

module.exports = Room