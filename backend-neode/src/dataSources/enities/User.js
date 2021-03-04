const bcrypt = require('bcrypt');
const neode = require('../../database/NeodeConfiguration')

const ROLE = { ADMIN: 1, USER: 0 }

class User {
    constructor(data){
      this.avatar = 'default-avatar.png'
      this.role = ROLE.USER
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

    async deleteById(id) {
        const user = await User.first({ id })
        return await User.delete(user)
    }

    static async delete(user) {
        if(!user) throw new Error("User not found")
        await neode.delete(user.node)
        return user
    }

    async addFriend(friendUser) {
        if(!friendUser) throw new Error("Friend is missing!")
        // await this.node.relateTo(friendUser.node, 'friends')
        // await friendUser.node.relateTo(this.node, 'friends')
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
        }).catch(e => {
            console.log(e)
        })

        return this
    }

    comparePassword(password) {
        return bcrypt.compareSync(password, this.hashedPassword)
    }
}

module.exports = User