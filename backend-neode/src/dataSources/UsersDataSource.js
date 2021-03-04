const {DataSource} = require('apollo-datasource');
const { EUSER } = require('./enities/Enum');
const User = require('./Enities/User');
const { isAdminUser } = require('../utils')

class UsersDataSource extends DataSource {
  
  constructor() {
    super();
  }

  initialize({context}) {
    this.context = context;
  }

  async signup(name, email, password, avatar, role) {

    const data = { name, email, password}

     /* only admin is allowed to create user's role */
    if(role) {
      if(!this.context.user || !await isAdminUser(this.context.user)) throw new Error("Not Authorised!")
      Object.assign(data, {role})
    }
    //adding avatar to user
    if(avatar) Object.assign(data, {avatar})

    const user = new User(data)
    await user.save()
    return this.createJWT(user)
  }

  async login(email, password) {
    let user = await User.first({ email })
    if(user && user.comparePassword(password)) return this.createJWT(user)
    return null;
  }

  async delete(id) {
    if(!await isAdminUser(this.context.user)) throw new Error("Not Authorised!")
    return await User.deleteById(id);
  }

  async update(data) {

    const isAdmin = await isAdminUser(this.context.user)

    /* only admin is allowed to edit user's role and email
       and to change information of another user
    */
    if((data.role || data.email || this.context.user.id !== data.id) && !isAdmin ) throw new Error("Not Authorised!")
    let user = await User.first({ id: data.id })
    if(!user) throw new Error("User not found")
    return await user.update(data);
  }

  async addFriend(friendId) {
    const friend = await User.first({ id: friendId })
    const currentUser = await User.first(this.context.user)
    return await currentUser.addFriend(friend)
  }

  async allUsers() {
    return await User.all()
  }

  createJWT(user) {
    return this.context.jwtSign( { user : { id: user.id } });
  }
}

module.exports = { UsersDataSource }
