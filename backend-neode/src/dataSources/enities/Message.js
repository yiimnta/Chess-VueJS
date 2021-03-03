const neode = require('../../database/NeodeConfiguration')

const STATUS = { NORMAL: 0, EDITED: 1, HIDE_Message: 2, HIDE_FRIEND: 3 }

class Message {
    constructor(data){
      this.time = Date.now()
      Object.assign(this, data);
    }

    static createMessage(node) {
        if (!node) return null
        return new Message( {...node.properties(), node })
    }

    static async first(props) {
        const node = await neode.first('Message', props)
        return Message.createMessage(node)
    }

    static async exists(props) {
        return !!(await neode.first('Message', props))
    }

    static async all() {
        const nodes = await neode.all('Message')
        return nodes.map(node => Message.createMessage(node))
    }

    async save() {
        if(!this.content) throw new Error("Content is missing")
        if(!this.author || !this.room) throw new Error("Author or Room is missing")
        const {author, room, ...rest} = this
        const node = await neode.create('Message', rest)
        await room.node.relateTo(node, 'messages')
        await author.node.relateTo(node, 'messages')
        Object.assign(this, {...node.properties() , node })
        return this
    }
}

module.exports = Message