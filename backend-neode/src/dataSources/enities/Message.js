const neode = require('../../database/NeodeConfiguration')
const {v4: uuidv4} = require('uuid')

const STATUS = { NORMAL: 0, EDITED: 1, HIDE_Message: 2, HIDE_FRIEND: 3 }

class Message {
    constructor(data){
      this.time = Date.now().toString()
      this.status = STATUS.NORMAL
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
        const messageId = uuidv4();
        const params =  {
            messageId,
            userId: author.id,
            roomId: room.id,
            ...rest
        }
        await neode.batch([
            {query:` MATCH (u:User { id : $userId }), (ro:Room { id: $roomId }) 
                     CREATE (m: Message {id : $messageId, content: $content, time: $time, status: $status }) 
                     CREATE (u)-[:WORTE]->(m)
                     CREATE (ro)-[:CONTAIN]->(m) return m`, params }
        ]).then( res => {
            if(!res || res[0].records.length == 0) throw new Error("Something wrong when create a new message!")
        })
        const node = await neode.first('Message', { id: messageId })
        Object.assign(this, { ...node.properties(), node})
        return this
    }
}

module.exports = Message