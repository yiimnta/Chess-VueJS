const bcrypt = require('bcrypt');
const neode = require('../../database/NeodeConfiguration')
const { EUSER } = require('./Enum')
const Room = require('./Room')

class User {
    constructor(data){
      this.avatar = 'default-avatar.png'
      this.role = EUSER.ROLE.USER
      this.status = EUSER.STATUS.NORMAL
      data.hashedPassword = bcrypt.hashSync(data.password, 10);
      Object.assign(this, data);
    }

    static createUser(node) {
        if (!node) return null
        return new User( {...node.properties(), node })
    }

    static async first(props) {
        const node = await neode.first('User', props)
        return User.createUser(node)
    }

    static async exists(props) {
        return !!(await neode.first('User', props))
    }

    static async all() {
        const nodes = await neode.all('User')
        return nodes.map(node => User.createUser(node))
    }

    async save() {
        const node = await neode.create('User', this)
        Object.assign(this, {...node.properties() , node })
        return this
    }

    static async deleteById(id) {
        const user = await User.first({ id })
        return await User.delete(user)
    }

    static async delete(user) {
        if(!user) throw new Error("deleted user not null")
        if(!user.node) throw new Error("User node is missing")
        const query = ` MATCH (u:User { id: $id })--(ro:Room)
                        WHERE Size((ro)-[:JOINED_BY]->()) = 1
                        RETURN ro.id as id`
        const res = await neode.cypher(query, { id: user.id })

        if (res.records.length > 0) {
            const deletedRooms = res.records.map(record => (record.get('id')))
            let listRoom = JSON.stringify(deletedRooms).replace(/"/g,"'")
            const delete_query = ` MATCH (u:User)--(ro:Room)-[:CONTAIN]-(m:Message)
                                   WHERE ro.id in ${listRoom}
                                   DETACH DELETE u, ro, m`
            await neode.batch([{query:delete_query}])
        } else {
            await neode.delete(user.node)
        }
        return user
    }

    async update(props = null) {
        if(!this.node) throw new Error("User node is missing")
        if(props) { 
            Object.assign(this, props)
        }
        const {node, ...rest} = this
        await node.update(rest)
        Object.assign(this, {node})
        return this
    }

    async addFriend(friendUser) {
        if(!friendUser) throw new Error("Friend is missing!")
        const params = {
            userId: this.id,
            friendId: friendUser.id
        }

        await neode.batch([
            {query:`MATCH (u:User { id: $userId }), (f:User { id: $friendId })
                    CREATE (u)-[:MADE_FRIEND]->(f)
                    CREATE (f)-[:MADE_FRIEND]->(u)
                    return f`, params}
        ]).then( res => {
            if(!res || res[0].records.length == 0) throw new Error("Something wrong when add friend!")
        })

        return this
    }

    comparePassword(password) {
        return bcrypt.compareSync(password, this.hashedPassword)
    }
}

module.exports = User